
// Load a Keypair
// import { Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";

// const publicKey = new PublicKey("DjY4hnV2bnFkbmkYFv5obmKwxquejdHC64MWL1273XVB");

// const connection = new Connection("https://api.devnet.solana.com", "confirmed");

// const balanceInLamports = await connection.getBalance(publicKey);

// const balanceInSol = balanceInLamports / LAMPORTS_PER_SOL;

// console.log(`✅ Finished! The balance for the wallet at address ${publicKey} is ${balanceInSol} SOL!`);


// check other student's balances
import { Connection, LAMPORTS_PER_SOL, PublicKey, clusterApiUrl } from "@solana/web3.js";

const suppliedPublicKey = process.argv[2];
if(!suppliedPublicKey) {
    throw new Error("Provide a public key to the balance of!");
}

// const connection = new Connection("https://api.devnet.solana.com", "confirmed");

const connection = new Connection(clusterApiUrl("mainnet-beta"), "confirmed")

const publicKey = new PublicKey(suppliedPublicKey);

const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSol = balanceInLamports / LAMPORTS_PER_SOL;

console.log(`Finsihed! The balance for the wallet at address ${publicKey} is ${balanceInSol} SOL!`);
