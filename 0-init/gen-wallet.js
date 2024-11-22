import { randomBytes } from "node:crypto"
import { makeRootPrivateKey } from "@helios-lang/tx-utils"

const key = makeRootPrivateKey(Array.from(randomBytes(32)))

console.log(key.toPhrase())