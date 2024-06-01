
// Connect to the Network
// import { Connection, clusterApiUrl } from "@solana/web3.js";
// const connection = new Connection(clusterApiUrl("devnet"));
// console.log(` Connected!`)






// Read from the Network
// import { Connection, PublicKey, clusterApiUrl, LAMPORTS_PER_SOL } from "@solana/web3.js";
// const connection = new Connection(clusterApiUrl("devnet"));
// const address = new PublicKey('CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN');
// const balance = await connection.getBalance(address);
// const balanceInSol = balance / LAMPORTS_PER_SOL;
// console.log(`The balance of the account at ${address} is ${balanceInSol} SOL and ${balance} LAMPORT`); 
// console.log(`✅Finished!`)





// Instruction For System Program Transfer 
// import { LAMPORTS_PER_SOL, SystemProgram, Transaction } from "@solana/web3.js"
// const transaction = new Transaction()
// const sendSolInstruction = SystemProgram.transfer({
//  fromPubkey: sender,
//  toPubkey: recipient,
//  lamports: LAMPORTS_PER_SOL * amount
// })
// transaction.add(sendSolInstruction)