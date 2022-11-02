import React, {useEffect, useState} from "react";
import {useMetaMask} from "metamask-react";
import './MetaMaskInfo.css'
import {metaMaskService} from "../../service/meta-mask";

export const MetaMaskInfo = () => {
    const [loading, setLoading] = useState(true)
    const [balance, setBalance] = useState('')
    const { chainId } = useMetaMask()

    useEffect(() => {
        metaMaskService.getBalance()
            .then((balance) => { setBalance(balance) })
            .finally(() => { setLoading(false) })
    }, [])

    return (
        <div className={'MetaMaskInfoContainer'}>
            <h1>Hello!</h1>
            {loading
                ? <>Loading...</>
                : <>
                    <p><span>Currency: </span>{chainId}</p>
                    <p><span>Money: </span>{parseInt(balance, 16)}</p>
                </>
            }
        </div>
    )
}