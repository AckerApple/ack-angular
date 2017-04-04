const version = require('../package.json').version

const packPath = require.resolve('../ack-angular/package.json')
const pack = require(packPath)

pack.version = version

require('fs').writeFileSync(packPath, JSON.stringify(pack, null, 2))

console.log('\x1b[33m[ack-angular]:\x1b[0m', 'updated dist package version to ', pack.version)