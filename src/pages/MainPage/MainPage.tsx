import {useMetaMask} from "metamask-react";
import {STATUS} from "../../enums/meta-mask-status";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import WalletIcon from '../../assets/wallet.svg';

import './MainPage.css'
import {env} from "../../env";
import {MetaMaskInfo} from "../../components/MetaMaskInfo/MetaMaskInfo";
import {MetaMaskNotFounded} from "../../components/MetaMaskNotFounded/MetaMaskNotFounded";
import {metaMaskService} from "../../service/meta-mask";

export const MainPage = () => {
    const { status, ethereum, account = '' } = useMetaMask()
    const navigate = useNavigate()
    const isKeysSame = env.metaMaskKey.toLowerCase() === account

    if (!metaMaskService.account || !metaMaskService.ethereum) {
        metaMaskService.setAccount(account || '')
        metaMaskService.setEthereum(ethereum)
    }

    useEffect(() => {
        if (status === STATUS.NOT_CONNECTED || account === null) {
            navigate('/login')
        }
    }, [status, navigate, account])

    if (!ethereum) return null

    return (
        <div className={'PanelContainer'}>
            <div className={'TopPanel'}>
                <span className={'MetaMaskKey'}>{getShortKey(account)}</span>
                <img src={WalletIcon} alt={'wallet icon'} className={'WalletIcon'}/>
            </div>
            <div className={'ContentPanel'}>
                {isKeysSame
                    ? <MetaMaskInfo/>
                    : <MetaMaskNotFounded/>}
            </div>
        </div>
    )
}

const getShortKey = (key: string | null) => {
    if (key === null) return ''

    return `${key.slice(0, 5)}...${key.slice(key.length - 4)}`
}