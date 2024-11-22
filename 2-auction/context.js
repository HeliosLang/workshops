import { makeContractContextBuilder } from "@helios-lang/contract-utils"
import { makeShelleyAddress, makeValue } from "@helios-lang/ledger"
import { MINUTE } from "@helios-lang/tx-utils"
import { makeIntData } from "@helios-lang/uplc"
import { auction } from "./index.js"

export const context = makeContractContextBuilder()
    .with(auction)
    .build({
        isMainnet: false,
        parameters: {}
    })

export const auctionAddress = makeShelleyAddress(false, context.auction.$hash)