import { InjectedConnector } from '@web3-react/injected-connector'

export const injected = new InjectedConnector({
  supportedChainIds: [
    1, // Mainnet
    3, // Ropsten
    4, // Rinkeby
    5, // Goerli
    42, // Kovan
    137, // Polygon
    80001, // Mumbai
    56, // BSC
    97 // BSC Testnet
  ]
})