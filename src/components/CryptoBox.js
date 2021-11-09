import { useState, useEffect } from "react";
import {
    connectWallet,
    getCurrentWalletConnected,
    getCurrentChain,
    Balance,
} from "../utils/connect";

const CryptoBox = () => {
    const [walletAddress, setWallet] = useState("");
    const [status, setStatus] = useState("");
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        async function fetchData() {
            const { address, status } = await getCurrentWalletConnected();
            setWallet(address);
            setStatus(status);

            addWalletListener();

            const { chainStatus } = await getCurrentChain();
            setStatus(chainStatus);

            addChainListener();
        }
        fetchData();
    }, [walletAddress]);

    useEffect(() => {
        Balance(walletAddress, setBalance);
    }, [walletAddress, status]);

    const connectWalletPressed = async () => {
        const walletResponse = await connectWallet();
        setStatus(walletResponse.status);
        setWallet(walletResponse.address);
    };

    function addWalletListener() {
        if (window.ethereum) {
            window.ethereum.on("accountsChanged", (accounts) => {
                if (accounts.length > 0) {
                    setWallet(accounts[0]);
                    setStatus("Click the above box to mint your NFT!");
                } else {
                    setWallet("");
                    setStatus("🦊 Connect to Metamask using button below.");
                }
            });
        } else {
            setStatus(
                <p>
                    {" "}
                    🦊{" "}
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href={`https://metamask.io/download.html`}
                    >
                        You must install Metamask, a virtual Ethereum wallet, in
                        your browser.
                    </a>
                </p>
            );
        }
    }

    function addChainListener() {
        if (window.ethereum) {
            window.ethereum.on("chainChanged", (chainId) => {
                if (parseInt(chainId, 16) !== 1) {
                    setStatus("🦊 Connect to the main Ethereum network.");
                } else {
                    setStatus("Click the above box to mint your NFT!");
                }
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
