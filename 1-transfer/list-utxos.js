import { wallet } from "./wallet.js"

async function listUtxos() {
    const utxos = await wallet.utxos

    utxos.forEach((utxo, i) => {
        console.log(`${i}:`, utxo.dump())
    })
}

listUtxos()