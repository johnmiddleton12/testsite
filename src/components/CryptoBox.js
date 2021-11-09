import { useState, useEffect } from "react";
import {
    connectWallet,
    getCurrentWalletConnected,
    Balance,
} from "../utils/connect";

const ConnectBtn = () => {
    const [walletAddress, setWallet] = useState("");
    const [status, setStatus] = useState("");
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        async function fetchData() {
            const { address, status } = await getCurrentWalletConnected();
            setWallet(address);
            setStatus(status);

            addWalletListener();
        }
        fetchData();
    }, []);

    useEffect(() => {

        Balance(walletAddress, setBalance);

    }, [walletAddress]);

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
                    setStatus("Use the above button to mint your NFT!");
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

    return (
        <div className="crypto-box">
            <p id="status">{status}</p>

                <p
                    className="balance"
                >
                    <strong>Balance: </strong>
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

export default ConnectBtn;
