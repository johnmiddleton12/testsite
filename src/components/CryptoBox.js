import { useState, useEffect } from "react";
import {
    connectWallet,
    getCurrentWalletConnected,
} from "../utils/connect";
import {
    Balance,
} from "./Mint";

const CryptoBox = ({ walletAddress, setWallet }) => {

    const [chainId, setChainId] = useState(0);
    const [status, setStatus] = useState("");
    const [balance, setBalance] = useState(0);

    const fetchData = async () => {
        const { address, chain } = await getCurrentWalletConnected();
        setWallet(address);
        setChainId(chain);

        addWalletListener();
        addChainListener();
    };
    fetchData();

    useEffect(() => {
        Balance(walletAddress, setBalance);
    }, [walletAddress, status]);

    useEffect(() => {
        if (window.ethereum) {
            if (walletAddress.length > 0) {
                if (parseInt(chainId, 16) === 1) {
                    setStatus("Click the box above to mint 👆");
                } else {
                    setStatus("Switch to Ethereum Mainnet 🙏");
                }
            } else {
                setStatus("Click below to connect to Metamask 🦊");
            }
        } else {
            setStatus("Install the Metamask extension.");
        }
    }, [walletAddress, chainId]);

    const connectWalletPressed = async () => {
        const walletResponse = await connectWallet();
        setWallet(walletResponse.address);
    };

    function addWalletListener() {
        if (window.ethereum) {
            window.ethereum.on("accountsChanged", (accounts) => {
                if (accounts.length > 0) {
                    setWallet(accounts[0]);
                } else {
                    setWallet("");
                }
            });
        } 
    }

    function addChainListener() {
        if (window.ethereum) {
            window.ethereum.on("chainChanged", (ChainID) => {
                setChainId(ChainID);
            });
        }
    }

    return (
        <div className="crypto-box">
            <p id="status">{status}</p>

            <p className="balance">
                <strong>Balance: Ξ</strong>
                {balance}
            </p>

            <button onClick={connectWalletPressed} className="btn btn-connect">
                {walletAddress.length > 0 ? (
                    "Connected: " +
                    String(walletAddress).substring(0, 6) +
                    "..." +
                    String(walletAddress).substring(38)
                ) : (
                    <span>Connect Wallet</span>
                )}
            </button>
        </div>
    );
};

export default CryptoBox;
