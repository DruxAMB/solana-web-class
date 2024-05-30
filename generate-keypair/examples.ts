// Loading a Random KeyPair
// import { Keypair } from "@solana/web3.js";
// const KeyPair = Keypair.generate();
// console.log(`The public key is:`, KeyPair.publicKey.toBase58());
// console.log(`The secret key is:`, KeyPair.secretKey);





// Loading an existing KeyPair
// import dotenv from 'dotenv';
// import { getKeypairFromEnvironment } from "@solana-developers/helpers";

// dotenv.config({ path: 'config/.env'});

// console.log(process.env);

import dotenv from 'dotenv';
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

// Load environment variables from a specific .env file
dotenv.config({ path: 'config/.env' });

// Use the environment variable
const keyPair = process.env["KEY-PAIR"];
if (!keyPair) {
  throw new Error("Environment variable KEY-PAIR is not set");
}

console.log(getKeypairFromEnvironment(keyPair));






// Loading an existing KeyPair
// import { Keypair } from '@solana/web3.js';
// const keyPair = Keypair.generate();
// console.log(`The public key is:` keyPair.publicKey.toBase58());
// console.log(`The secret key is:` keyPair.secretKey);
// console.log("Done");

