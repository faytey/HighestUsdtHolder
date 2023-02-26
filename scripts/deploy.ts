import { ethers } from "hardhat";

async function main() {

const usdtContract = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
const numOfTopAccounts = 1;
// This api returns the list of all holders of usdt in the ethereum network starting from the highest holder
const url = `https://api.ethplorer.io/getTopTokenHolders/${usdtContract}?apiKey=freekey&limit=${numOfTopAccounts}`;

  fetch(url).then(data => {
    return data.json()
  }).then(account => {
    console.log(account);
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
