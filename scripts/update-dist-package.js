const rootPack = require('../package.json')

const packPath = require.resolve('../ack-angular/package.json')
const pack = require(packPath)

pack.version = rootPack.version
pack.jsDependencies = rootPack.jsDependencies

const fs = require('fs')

fs.writeFileSync(packPath, JSON.stringify(pack, null, 2))
const path = require('path')

const fromReadMe = path.join(packPath,'../../','README.md')
const toReadMe = path.join(packPath,'../','README.md')
fs.writeFileSync(toReadMe, fs.readFileSync(fromReadMe))

console.log('\x1b[33m[ack-angular]:\x1b[0m', 'updated dist package version to ', pack.version)