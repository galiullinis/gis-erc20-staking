import { task } from 'hardhat/config'
import { abi } from '../artifacts/contracts/GisStaking.sol/GisStaking.json'


task("stake", "Stake amount of tokens. You must make sure you approve contract to transfer your staking tokens.")
    .addParam("contract", "Contract address")
    .addParam("amount", "Amount of tokens")
    .setAction(async (taskArgs, { ethers }) => {
        const [signer] = await ethers.getSigners()
        const contract = taskArgs.contract
        const amount = taskArgs.amount

        const gisStaking = new ethers.Contract(
            contract,
            abi,
            signer
        )

        const tx = await gisStaking.stake(BigInt(amount))
        console.log(tx)
    })