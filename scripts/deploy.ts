import hre from 'hardhat';
import "dotenv/config";

const ethers = hre.ethers
const stakingTokenAddress = process.env.STAKING_TOKEN_ADDRESS
const rewardTokenAddress = process.env.REWARD_TOKEN_ADDRESS

async function main() {
    const [signer] = await ethers.getSigners()
    const GisStaking = await ethers.getContractFactory('GisStaking', signer)
    const gisStaking = await GisStaking.deploy(stakingTokenAddress, rewardTokenAddress)
    await gisStaking.deployed()
    console.log(gisStaking.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });