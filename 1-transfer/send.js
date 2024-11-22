import { makeAddress, makeAssetClass, makeValue } from "@helios-lang/ledger"
import { makeTxBuilder, selectSingle } from "@helios-lang/tx-utils"
import { client } from "./client.js"
import { signAndSubmit, wallet } from "./wallet.js"

/**
 * @import { ShelleyAddress, Value } from "@helios-lang/ledger"
 */

/**
 * @param {Value} value 
 * @param {ShelleyAddress} dst 
 */
async function send(value, dst) {
    if (dst.spendingCredential.kind != "PubKeyHash") {
        throw new Error("can't send to smart contract")
    }

    const available = await wallet.utxos
    
    const [inputs, spare] = selectSingle(available, value)

    const tx = await makeTxBuilder({isMainnet: false})
        .spendWithoutRedeemer(...inputs)
        .payUnsafe(dst, value)
        .build({
            changeAddress: wallet.address,
            spareUtxos: spare
        })
    
    await signAndSubmit(tx)
}

const value = makeValue(1_000_000n)
const dst = makeAddress("addr_test1vp84swft65hjdkg9v76yjq3j9sl7qav0tcmvlka5cm239cstxvs87")

send(value, dst)
