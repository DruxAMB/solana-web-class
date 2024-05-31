import { Connection, Transaction, SystemProgram, sendAndConfirmTransaction, PublicKey } from "@solana/web3.js";

import dotenv from "dotenv";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

dotenv.config()

const suppliedToPubkey = process.argv[2] || null;

if(!suppliedToPubkey) {
    console.log(`Please provide a public key to send to`);
    process.exit(1);
}


const senderKeypair = "DjY4hnV2bnFkbmkYFv5obmKwxquejdHC64MWL1273XVB";

console.log(senderKeypair);


console.log(`suppliedToPubkey: ${suppliedToPubkey}`);

const toPubkey = new PublicKey(suppliedToPubkey);

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

console.log(`✅Loaded our own keypair, the destination of the public key, and connected to Solana`);



// const transaction = new Transaction();

// const LAMPORTS_TO_SEND  = 5000;

// const sendSolInstruction = SystemProgram.transfer({
//     senderKeyPair
// })

// fromPubkey. 
// .PublicKey, toPubkey, lamports: LAMPORTS_TO_SEND
