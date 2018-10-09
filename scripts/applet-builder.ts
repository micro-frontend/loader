import { AppletModel } from '../src/app/shared/applet-loader/applet.model';
import * as fs from 'fs';
import * as sh from 'shelljs';
import * as path from 'path';
import * as crypto from 'crypto';

export function parseFolder(folder: string, appId: string): AppletModel {
  const appletsFolder = `src/applets/${appId}`;
  sh.rm('-fr', appletsFolder);
  sh.cp('-r', folder, appletsFolder);
  const html = fs.readFileSync(path.join(appletsFolder, 'index.html'), 'utf-8');
  return parseIndex(html, appletsFolder.replace(/^src\//, ''));
}

export function parseIndex(html: string, rootDir: string): AppletModel {
  const result = new AppletModel();
  // TODO: Use advanced DOM parser such as parse5
  result.body = html.replace(/^[\s\S]+<body[^>]?>([\s\S]*?)<\/body>[\s\S]*$/, '$1')
    .replace(/<script[\s\S]*?<\/script>/g, '');
  const scriptsPattern = /<script[^>]*>([\s\S]*?)<\/script>/gi;
  const inlineScripts = (html.match(scriptsPattern) || [])
    .map(match => match.replace(scriptsPattern, '$1'))
    .filter(content => !!content.trim())
    .map(content => {
      const filename = path.join(rootDir, `embedded-${sha1(content)}.js`);
      fs.writeFileSync(path.join('src', filename), content, 'utf-8');
      return filename;
    });
  const scriptUrlsPattern = /<script +src="([\s\S]+?)"[\s\S]*?<\/script>/gi;
  const externalScripts = (html.match(scriptUrlsPattern) || [])
    .map(match => match.replace(scriptUrlsPattern, '$1'))
    .map(url => path.join(rootDir, url));

  result.scripts = [...inlineScripts, ...externalScripts];

  const stylesPattern = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  const inlineStyles = (html.match(stylesPattern) || [])
    .map(match => match.replace(stylesPattern, '$1'))
    .filter(content => !!content.trim())
    .map(content => {
      const filename = path.join(rootDir, `embedded-${sha1(content)}.css`);
      fs.writeFileSync(path.join('src', filename), content, 'utf-8');
      return filename;
    });
  const styleUrlsPattern = /<link\b.*?href="([\s\S]+?)"[\s\S]*?>/gi;
  const externalStyles = (html.match(styleUrlsPattern) || [])
    .filter(match => match.indexOf('rel="stylesheet"') !== -1)
    .map(match => match.replace(styleUrlsPattern, '$1'))
    .map(url => path.join(rootDir, url));

  result.styles = [...inlineStyles, ...externalStyles];

  return result;
}

function sha1(content: string): string {
  const shasum = crypto.createHash('sha1');
  shasum.update(content);
  return shasum.digest('hex');
}
