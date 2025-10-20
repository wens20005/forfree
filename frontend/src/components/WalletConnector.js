import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'

// Coinbase Wallet integration
const coinbaseWallet = {
  enable() {
    return window.ethereum?.request({ method: 'eth_requestAccounts' });
  }
};

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

// Coinbase Wallet connector
export const coinbase = coinbaseWallet