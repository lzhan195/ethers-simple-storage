// const ethers = require("ethers")
// const fs = require("fs-extra")
// require("dotenv").config()
import {ethers} from "ethers"
import * as fs from "fs-extra"
import "dotenv/config"

async function main() {
    //compile them in our code
    //compile them separately
    // http://127.0.0.1:8545
    const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL!)
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider)
    // const encryptedJson = fs.readFileSync("./.encryptedKey.json", {
    //     encoding: "utf8",
    // })
    // let wallet = new ethers.Wallet.fromEncryptedJsonSync(
    //     encryptedJson,
    //     process.env.PRIVATE_KEY_PASSWORD
    // )
    // wallet = await wallet.connect(provider)

    const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", {
        encoding: "utf8",
    })
    const binary = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.bin", {
        encoding: "utf8",
    })
    const contractFactory = new ethers.ContractFactory(abi, binary, wallet)
    console.log("Deploying, please wait...")
    const contract = await contractFactory.deploy({})
    await contract.deployTransaction.wait(1)
    console.log(`contract address is ${contract.address}`)
    //   console.log("Let's deploy with only transaction data!");
    //   const nonce = await wallet.getTransactionCount();
    //   const tx = {
    //     nonce: nonce,
    //     gasPrice: 20000000000,
    //     gasLimit: 1000000,
    //     to: null,
    //     value: 0,
    //     data: "",
    //     chainId: 1337,
    //   };
    //   const sentTxResponse = await wallet.sendTransaction(tx);
    //   await sentTxResponse.wait(1);
    //   console.log(sentTxResponse);
    const currentFavoriteNumber = await contract.retrieve()
    console.log(
        `Current Favorite Number is: ${currentFavoriteNumber.toString()}`
    )
    const transactionResponse = await contract.store("7")
    const transactionReceipt = await transactionResponse.wait(1)
    const updatedFavoriteNumber = await contract.retrieve()
    console.log(
        `Updated Favorite Number is: ${updatedFavoriteNumber.toString()}`
    )
}
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error)
        process.exit(1)
    })
