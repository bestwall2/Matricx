const assert = require('assert');
const path = require('path');
const fs = require('fs');

const packageJsonPath = path.join(__dirname, '..', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

assert.ok(packageJson.dependencies, 'dependencies should exist');
assert.strictEqual(
  packageJson.scripts.start,
  'expo start --tunnel',
  'start script should use --tunnel'
);
assert.ok(packageJson.dependencies.expo, 'expo dependency should exist');

console.log('basic.test.js passed');
