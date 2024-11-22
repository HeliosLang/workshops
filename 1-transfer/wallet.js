import { makeUnstakedSimpleWallet, restoreRootPrivateKey } from "@helios-lang/tx-utils"
import { client } from "./client.js"

/**
 * @import { Tx } from "@helios-lang/ledger"
 */

const phrase = []

const key = restoreRootPrivateKey(phrase)

export const wallet = makeUnstakedSimpleWallet(key, client)

/**
 * 
 * @param {Tx} tx 
 */
export async function signAndSubmit(tx) {
    tx.addSignatures(await wallet.signTx(tx))
    
    const id = await client.submitTx(tx)

    console.log("Submitted", id.toString())
}