
import * as yaml from 'js-yaml';
import * as fs from 'fs';

const env = yaml.safeLoad(fs.readFileSync(__dirname + '/env.yml', 'utf8'));

module.exports = env;