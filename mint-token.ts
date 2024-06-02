import { getExplorerLink, getKeypairFromEnvironment } from "@solana-developers/helpers";
import { mintTo } from "@solana/spl-token";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import dotenv from "dotenv";

dotenv.config();

const connection = new Connection(clusterApiUrl("devnet"));

const MINOR_UNITS_PER_MAJOR_UNITS = Math.pow(10, 2);

const user = getKeypairFromEnvironment("SECRET_KEY");

const tokenMintAccount = new PublicKey("5vS9WmsywxrTFm8nQeESNBdNsLodNEvoyeDPcHHzjm2u");

const recipientAssocciatedTokenAccount = new PublicKey("95FbMGEhzcZWnVcFV7VFBCmMe9yXseq1Fg3L6qauLs2y");

const transactionSignature = await mintTo(
    connection,
    user,
    tokenMintAccount,
    recipientAssocciatedTokenAccount,
    user,
    10 * MINOR_UNITS_PER_MAJOR_UNITS
);

const link = getExplorerLink("transaction", transactionSignature, "devnet");

console.log(`✅ Success~ Mint Token Transaction: ${link}`);
