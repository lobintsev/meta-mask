import React from "react";
import MetaMaskLogo from '../../assets/metamask-fox.svg'
import './MetaMaskConnectBtn.css'

interface MetaMaskConnectBtnProps {
    connect: () => Promise<string[] | null>
}

export const MetaMaskConnectBtn = ({ connect }: MetaMaskConnectBtnProps) => {
    return (
        <div onClick={connect} className={'MetaMaskBtn'}>
            <img src={MetaMaskLogo} alt={'logo'} className={'Logo'}/> Login
        </div>
    )
}