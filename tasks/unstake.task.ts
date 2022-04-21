import { task } from 'hardhat/config'
import { abi } from '../artifacts/contracts/GisStaking.sol/GisStaking.json'


task("unstake", "Unstake tokens")
    .addParam("contract", "Contract address")
    .setAction(async (taskArgs, { ethers }) => {
        const [signer] = await ethers.getSigners()
        const contract = taskArgs.contract

        const gisStaking = new ethers.Contract(
            contract,
            abi,
            signer
        )

        const tx = await gisStaking.unstake()
        console.log(tx)
    })