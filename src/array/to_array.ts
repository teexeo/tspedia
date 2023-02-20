import { last } from "./last";
import { JsTypes } from "../../@types/general/types";
import { TsTypes } from "../general";

interface toArrayInterface {
  /**
   * Depth for array
   */
  depth?: number;
  type?: JsTypes;
  falsey?: boolean;
}

type toArrayType = <T extends TsTypes, U extends T | unknown>(
  ...arr: [...T[], U extends T ? T : U extends object ? toArrayInterface : U]
) => any[];

/**
 *
 * @param arr any
 * @param options
 * @returns array
 *
 * @since v0.0.43
 */

export const toArray: toArrayType = (...arr) => {
  return arr.flat(1);
  // let options = {
  //   is_exists: false,
  // };
  // if (IsArray(arr)) {
  //   return;
  // }
  // return [];
};
