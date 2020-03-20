#!/usr/bin/env node
const ethers = require('ethers')
const ospath = require('ospath')
const path = require('path')
const repl = require('repl')

const configPath = path.join(ospath.home(), '.ethers-console.env')
require('dotenv').config({ path: configPath })
const infuraProjectId = process.env.INFURA_PROJECT_ID

const { InfuraProvider, JsonRpcProvider } = ethers.providers

const ethersMainnet = new InfuraProvider('mainnet', infuraProjectId)
const ethersRinkeby = new InfuraProvider('rinkeby', infuraProjectId)
const ethersKovan = new InfuraProvider('kovan', infuraProjectId)
const ethersRopsten = new InfuraProvider('ropsten', infuraProjectId)

const ethersLocal = new JsonRpcProvider(`http://localhost:8545`)
const ethersGanache = new JsonRpcProvider(`http://localhost:7545`)

const { context } = repl.start('eth> ')

Object.assign(context, {
  // ethers
  e: ethers,
  ethers: ethers,
  u: ethers.utils,
  utils: ethers.utils,
  
  // mainnet
  m: ethersMainnet,
  main: ethersMainnet,
  mainnet: ethersMainnet,

  // testnets
  k: ethersKovan,
  kovan: ethersKovan,

  r: ethersRinkeby,
  rinkeby: ethersRinkeby,

  ro: ethersRopsten,
  ropsten: ethersRopsten,

  // local
  l: ethersLocal,
  local: ethersLocal,

  // development
  g: ethersGanache,
  ganache: ethersGanache,
})
