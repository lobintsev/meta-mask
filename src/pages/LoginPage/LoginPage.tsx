import {useNavigate} from "react-router-dom";
import {useMetaMask} from "metamask-react";
import {STATUS} from "../../enums/meta-mask-status";
import {useEffect} from "react";
import {MetaMaskConnectBtn} from "../../components/MetaMaskConnectBtn/MetaMaskConnectBtn";
import './LoginPage.css'

export const LoginPage = () => {
    const { status, connect } = useMetaMask()
    const navigate = useNavigate()

    useEffect(() => {
        if (status === STATUS.CONNECTED) {
            navigate('/main')
        }
    }, [status, navigate])

    return (
        <div className={'Container'}>
            <div className={'Border'}>
                <div className={'TextContainer'}>
                    <h1 className={'Text'}>Hello!</h1>
                    <p className={'Text'}>Please Login via Meta Mask</p>
                </div>
                <MetaMaskConnectBtn connect={connect}/>
            </div>
        </div>
    )
}