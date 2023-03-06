import { JsTypes, TsTypes } from "../general";
import { option_checker } from "../general/optionChecker";
import { withDefaults } from "../general/withDefaults";

interface toArrayInterface {
  /**
   * Depth for array
   */
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
  ]);

  let flatted = arr
    .slice(0, arr.length - 1)
    .flat(withDefaults(option?.depth, 1));

  if (!withDefaults(option?.falsey, true)) {
    return flatted.filter((a) => !!a);
  }

  return flatted;
};
