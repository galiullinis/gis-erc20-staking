import { task } from 'hardhat/config'
import { abi } from '../artifacts/contracts/GisStaking.sol/GisStaking.json'


task("claim", "Claim the staking reward.")
    .addParam("contract", "Contract address")
    .setAction(async (taskArgs, { ethers }) => {
        const [signer] = await ethers.getSigners()
        const contract = taskArgs.contract

        const gisStaking = new ethers.Contract(
            contract,
            abi,
            signer
        )

        const tx = await gisStaking.claim()
        console.log(tx)
    })