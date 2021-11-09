const Web3 = require("web3");

const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

export const Balance = (walletAddress, setBalance) => {
    console.log(walletAddress);

    if (walletAddress.length > 0) {
        web3.eth.getBalance(walletAddress, (err, wei) => {
            if (err) {
                console.log(err);
            } else {
                setBalance(web3.utils.fromWei(wei, "ether").substring(0, 6));
            }
        });
    }
};

export const connectWallet = async () => {
    if (window.ethereum) {
        try {
            const addressArray = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            const obj = {
                status: "Use the button above to mint your NFT!",
                address: addressArray[0],
            };
            return obj;
        } catch (err) {
            return {
                address: "",
                status: "😥 " + err.message,
            };
        }
    } else {
        return {
            address: "",
            status: (
                <span>
                    <p>
                        {" "}
                        🦊{" "}
                        <a
                            target="_blank"
                            href={`https://metamask.io/download.html`}
                            rel="noreferrer"
                        >
                            You must install Metamask, a virtual Ethereum
                            wallet, in your browser.
                        </a>
                    </p>
                </span>
            ),
        };
    }
};

export const getCurrentWalletConnected = async () => {
    if (window.ethereum) {
        try {
            const addressArray = await window.ethereum.request({
                method: "eth_accounts",
            });
            if (addressArray.length > 0) {
                return {
                    address: addressArray[0],
                    status: "Use the button above to mint your NFT!",
                };
            } else {
                return {
                    address: "",
                    status: "🦊 Connect to Metamask using the button below.",
                };
            }
        } catch (err) {
            return {
                address: "",
                status: "😥 " + err.message,
            };
        }
    } else {
        return {
            address: "",
            status: (
                <span>
                    <p>
                        {" "}
                        🦊{" "}
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={`https://metamask.io/download.html`}
                        >
                            You must install Metamask, a virtual Ethereum
                            wallet, in your browser.
                        </a>
                    </p>
                </span>
            ),
        };
    }
};
