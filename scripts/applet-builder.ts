import { AppletModel } from '../src/app/shared/applet-loader/applet.model';

export function parseIndex(html: string, rootUrl: string): AppletModel {
  const result = new AppletModel();
  result.body = html.replace(/^[\s\S]+<body[^>]?>([\s\S]*?)<\/body>[\s\S]*$/, '$1')
    .replace(/<script[\s\S]*?<\/script>/g, '');
  const scriptUrlsPattern = /<script +src="([\s\S]+?)"[\s\S]*?<\/script>/gi;
  result.scripts = html.match(scriptUrlsPattern)
    .map(it => it.replace(scriptUrlsPattern, '$1'))
    .map(it => `${rootUrl}${it}`);
  return result;
}
