// import { clusterApiUrl, Connection, Keypair } from "@solana/web3.js";


// // Subscribing to events

// (async () => {
//     const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

//     const wallet = Keypair.generate();

//     connection.onAccountChange(
//         wallet.publicKey,
//         (updatedAccountInfo, context) => console.log("Update account info: ", updatedAccountInfo), "confirmed"        
//     );
// }) ();

import { clusterApiUrl, Connection, Keypair, LAMPORTS_PER_SOL } from "@solana/web3.js";

(async () => {
  const keypair = Keypair.generate();

  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

  const signature = await connection.requestAirdrop(
    keypair.publicKey.toBase58(),
    LAMPORTS_PER_SOL
  );
  const { blockhash, lastValidBlockHeight } = await connection.getLatestBlockhash();
  await connection.confirmTransaction({
      blockhash,
      lastValidBlockHeight,
      signature
    });

    console.log("KeyPair", keypair);
    console.log("Signature", signature);    
})();

// console.log();

