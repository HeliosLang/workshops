import { encodeUtf8 } from "@helios-lang/codec-utils"
import { hashNativeScript, makeAllScript, makeAssetClass, makeBeforeScript, makeMintingPolicyHash, makeNetworkParamsHelper, makeSigScript, makeValidatorHash, makeValue } from "@helios-lang/ledger"
import { makeTxBuilder, MINUTE } from "@helios-lang/tx-utils"
import { client } from "../1-transfer/client.js"
import { signAndSubmit, wallet }  from "../1-transfer/wallet.js"

/**
 * @param {number} n 
 */
async function mint(n) {
    const networkParams = makeNetworkParamsHelper(await client.parameters)

    const endSlot = networkParams.timeToSlot(Date.now() + 10*MINUTE)
    const nativeScript = makeAllScript([
        makeSigScript(wallet.spendingPubKeyHash),
        makeBeforeScript(endSlot)
    ])

    const policy = makeMintingPolicyHash(hashNativeScript(nativeScript))
    const assetClass = makeAssetClass(policy, encodeUtf8("hola"))

    const tx = await makeTxBuilder({isMainnet: false})
        .attachNativeScript(nativeScript)
        .validToSlot(endSlot)
        .mintAssetClassUnsafe(assetClass, n)
        .addSigners(wallet.spendingPubKeyHash)
        .payUnsafe(wallet.address, makeValue(0, [[assetClass, n]]))
        .build({
            spareUtxos: wallet.utxos,
            changeAddress: wallet.address
        })

    await signAndSubmit(tx)
}

mint(1)