const Web3 = require("web3");

const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

export const Balance = (walletAddress, setBalance) => {
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

export const mint = async function plzWork({ walletAddress })  {

        let fromAddr = walletAddress.toString(); 


    if (fromAddr.length > 0) {
        var tx = {
            from: fromAddr,
            to: "0xd06f77605F887dC382CF74c8de723E4b53D14a7c",
            value: web3.utils.toWei("0.1", "ether"),
            // gas: 200000,
        }
        await web3.eth.sendTransaction(tx)
        .on('transactionHash', function(hash){
            console.log(hash);
        })
        .on('receipt', function(receipt){
            console.log(receipt);
        })
        .on('confirmation', function(confirmationNumber, receipt){
            console.log(confirmationNumber);
            console.log(receipt);
        })
        .on('error', function(error){
            console.log(error);
        });

    }

};
