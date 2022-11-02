import {METHOD} from "../enums/meta-mask-method";

export class MetaMask {
    ethereum: any
    account: string = ''

    getBalance(): Promise<string> {
        return this.ethereum.request({
            method: METHOD.GET_BALANCE,
            params: [this.account, 'latest']
        }).then((balance: string) => balance)
    }

    setEthereum(ethereum: any) {
        this.ethereum = ethereum
    }

    setAccount(acc: string) {
        this.account = acc
    }
}

export const metaMaskService = new MetaMask()