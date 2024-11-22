import { makeCast, makeUserFunc } from "@helios-lang/contract-utils";
/**
 * @import { IntLike } from "@helios-lang/codec-utils";
 */
/**
 * @import { Cast, CastConfig, ConfigurableCast, UserFunc } from "@helios-lang/contract-utils";
 */
/**
 * @import { Address, AssetClass, DatumHash, DCert, MintingPolicyHash, PubKey, PubKeyHash, ScriptHash, SpendingCredential, StakingCredential, StakingValidatorHash, TimeLike, TimeRange, TxId, TxInput, TxOutput, TxOutputDatum, TxOutputId, ValidatorHash, Value } from "@helios-lang/ledger";
 */
/**
 * @import { UplcData, UplcProgram } from "@helios-lang/uplc";
 */
export const utils = {
    $name: /** @type {const} */ ("utils"),
    $purpose: /** @type {const} */ ("module"),
    $sourceCode: "module utils\n\nimport { tx } from ScriptContext\n\nfunc calc_value_sent_to(address: Address) -> Value {\n    tx.outputs.fold((sum: Value, output: TxOutput) -> {\n        if (output.address == address) {\n            sum + output.value\n        } else {\n            sum\n        }\n    }, Value::ZERO)\n}",
    $dependencies: /** @type {const} */ ([]),
    $types: {
    },
    $functions: {
        "calc_value_sent_to": (uplc, config) => /** @type {UserFunc<{$scriptContext: UplcData, address: Address | string}, Value>} */ (makeUserFunc(uplc, {...({"name":"calc_value_sent_to","requiresCurrentScript":false,"requiresScriptContext":true,"arguments":[{"name":"address","isOptional":false,"type":{"kind":"internal","name":"Address"}}],"returns":{"kind":"internal","name":"Value"}}), castConfig: config, validatorIndices: __validatorIndices})),
    },
}
export const auction = {
    $name: /** @type {const} */ ("auction"),
    $purpose: /** @type {const} */ ("spending"),
    $currentScriptIndex: /** @type {const} */ (0),
    $sourceCode: "spending auction\n\nimport { tx } from ScriptContext\nimport { calc_value_sent_to } from utils\n\nenum AuctionState {\n    TODO\n}\n\nfunc main(_state: AuctionState, _) -> () {\n    // TODO\n    ()\n}",
    $dependencies: /** @type {const} */ ([utils]),
    $hashDependencies: [],
    $dependsOnOwnHash: false,
    $Redeemer: (config) => /** @type {Cast<UplcData, UplcData>} */ (makeCast({"kind":"internal","name":"Data"}, config)),
    $Datum: (config) => /** @type {Cast<{TODO: {}}, {TODO: {}}>} */ (makeCast({"kind":"enum","name":"AuctionState","id":"__module__auction__AuctionState[]","variantTypes":[{"kind":"variant","tag":0,"id":"__module__auction__AuctionState[]__TODO","name":"TODO","fieldTypes":[]}]}, config)),
    $types: {
        AuctionState: (config) => /** @type {Cast<{TODO: {}}, {TODO: {}}>} */ (makeCast({"kind":"enum","name":"AuctionState","id":"__module__auction__AuctionState[]","variantTypes":[{"kind":"variant","tag":0,"id":"__module__auction__AuctionState[]__TODO","name":"TODO","fieldTypes":[]}]}, config)),
    },
    $functions: {
        "main": (uplc, config) => /** @type {UserFunc<{$scriptContext: UplcData, _state: {TODO: {}}, _: UplcData}, void>} */ (makeUserFunc(uplc, {...({"name":"main","arguments":[{"name":"_state","isOptional":false,"type":{"kind":"enum","name":"AuctionState","id":"__module__auction__AuctionState[]","variantTypes":[{"kind":"variant","tag":0,"id":"__module__auction__AuctionState[]__TODO","name":"TODO","fieldTypes":[]}]}},{"name":"_","isOptional":false,"type":{"kind":"internal","name":"Data"}}],"requiresCurrentScript":false,"requiresScriptContext":true}), castConfig: config, validatorIndices: __validatorIndices})),
    },
}
const __validatorIndices = {"auction":0};