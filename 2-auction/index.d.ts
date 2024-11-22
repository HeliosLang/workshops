import { makeCast, makeUserFunc } from "@helios-lang/contract-utils";
import type { IntLike } from "@helios-lang/codec-utils";
import type { Cast, CastConfig, ConfigurableCast, UserFunc } from "@helios-lang/contract-utils";
import type { Address, AssetClass, DatumHash, DCert, MintingPolicyHash, PubKey, PubKeyHash, ScriptHash, SpendingCredential, StakingCredential, StakingValidatorHash, TimeLike, TimeRange, TxId, TxInput, TxOutput, TxOutputDatum, TxOutputId, ValidatorHash, Value } from "@helios-lang/ledger";
import type { UplcData, UplcProgram } from "@helios-lang/uplc";
export const utils: {
    $name: "utils"
    $purpose: "module"
    $sourceCode: string
    $dependencies: [],
    $types: {
    },
    $functions: {
        "calc_value_sent_to": (uplc: UplcProgram, config: CastConfig) => UserFunc<{$scriptContext: UplcData, address: Address | string}, Value>,
    },
}
export const auction: {
    $name: "auction"
    $purpose: "spending"
    $currentScriptIndex: 0
    $sourceCode: string
    $dependencies: [typeof utils]
    $hashDependencies: []
    $dependsOnOwnHash: boolean
    $Redeemer: ConfigurableCast<UplcData, UplcData>
    $Datum: ConfigurableCast<{TODO: {}}, {TODO: {}}>,
    $types: {
        AuctionState: ConfigurableCast<{TODO: {}}, {TODO: {}}>,
    },
    $functions: {
        "main": (uplc: UplcProgram, config: CastConfig) => UserFunc<{$scriptContext: UplcData, _state: {TODO: {}}, _: UplcData}, void>,
    },
}
