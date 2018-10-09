import { parseFolder } from './applet-builder';
import * as fs from 'fs';

const app1 = parseFolder('../applet1/build', 'applet1');
const app2 = parseFolder('../applet2/build', 'applet2');
fs.writeFileSync('./src/app/applet-builder/applets.json', JSON.stringify([app1, app2], null, 2));
