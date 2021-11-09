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
    } else {
        setBalance("0");
    }
};

export const connectWallet = async () => {
    if (window.ethereum) {
        try {
            const addressArray = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            const obj = {
                status: "Click the above box to mint your NFT!",
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
                    status: "Click the above box to mint your NFT!",
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

export const getCurrentChain = async () => {
    if (window.ethereum) {
        try {
            const chainId = await window.ethereum.request({
                method: "eth_chainId",
            });

            if (parseInt(chainId, 16) === 1) {
                return {
                  chainStatus: "Click the above box to mint your NFT!"
                };
            } else {
                return {
                    chainStatus: "🦊 Connect to the main Ethereum network",
                };
            }
        } catch (err) {
            return {
                status: "😥 " + err.message,
            };
        }
    }
};
