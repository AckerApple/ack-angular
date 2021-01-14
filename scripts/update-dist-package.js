const fs = require('fs')

const rootPack = require('../package.json')
const packPath = require.resolve('../dist/package.json')
const pack = require(packPath)

pack.version = rootPack.version
pack.dependencies = rootPack.dependencies
//pack.jsDependencies = rootPack.jsDependencies

fs.writeFileSync(packPath, JSON.stringify(pack, null, 2))
const path = require('path')

const fromReadMe = path.join(packPath,'../../','README.md')
const toReadMe = path.join(packPath,'../','README.md')
fs.writeFileSync(toReadMe, fs.readFileSync(fromReadMe))

console.log('\x1b[33m[ack-angular]:\x1b[0m', 'updated dist package version to ', pack.version)

function manageExample(){
  const exPackPath = require.resolve('../example/package.json')
  const exPack = require(exPackPath)
  exPack.devDependencies = rootPack.devDependencies
  fs.writeFileSync(exPackPath, JSON.stringify(exPack, null, 2))
}

//manageExample()

function modDistPackage() {
  const packRequirePath = '../dist/package.json'
  const packPath = require.resolve(packRequirePath)
  const pack = require(packPath)
  delete pack.private

  fs.writeFileSync(packPath, JSON.stringify(pack, null, 2))
}

modDistPackage()