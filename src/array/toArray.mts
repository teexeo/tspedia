import { JsTypes, TsTypes } from "../general/types.mjs";
import { option_checker } from "../general/optionChecker.mjs";
import { withDefaults } from "../general/withDefaults.mjs";

interface toArrayInterface {
  depth?: number;
  type?: JsTypes;
  falsey?: boolean;
}

type toArrayType = <T extends any, U extends TsTypes>(
  ...arr: [
    ...T[],
    U extends Array<any> ? TsTypes[] : U extends object ? toArrayInterface : U
  ]
) => any;

/**
 * @description turning values to optional array
 *
 * @example
 * ```ts
 * toArray([2], "test", [[30]], {type: "number",depth: 2})
 * // [2, 30]
 * ```
 *
 * @param arr any
 * @param options
 * @returns array
 *
 * @since v0.0.43
 */

export const toArray: toArrayType = (...arr) => {
  let option: toArrayInterface = option_checker(arr.flat(), [
    "depth",
    "falsey",
    "types",
  ]);

  let flatted = arr
    .slice(0, arr.length - 1)
    .flat(withDefaults(option?.depth, 1))
    .filter((g) => {
      if (!option?.type) return true;
      return typeof g === option.type;
    });

  if (!withDefaults(option?.falsey, true)) {
    return flatted.filter((a) => !!a);
  }
  return flatted;
};
