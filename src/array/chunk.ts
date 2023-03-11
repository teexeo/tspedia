import { isInt } from "../number/isInt";
import { IsArray } from "./isArray";
/**
 * @description 'dividing an array into parts'
 *
 * @example
 * ```ts
 * const arr = [1,2,3,4,5]
 *
 * chunk(arr, 2) // [[1,2],[3,4],[5]]
 *
 * ```
 * @since v0.0.20
 */

export function chunk<T>(arr: T[], num: number): T[][] | null {
  if (!IsArray(arr)) return null;

  let chunkLength = arr.length / num;

  if (!isInt(chunkLength)) chunkLength++;
  /**
   * @description i variable for chunk length. Chunk length mining response
   *  array must be include that number;
   */ let i: number = 0;
  let outChunk: any[] = [];
  let countIndex: number = 0;
  for (i = 0; i < Math.floor(chunkLength); i++) {
    let inChunk = [];
    /**
     * @description g variable for counting number (num) how many chunks need for array (arr)
     */ let g: number;

    for (g = 0; g < +num; g++) {
      if (arr.length - countIndex > 0) {
        inChunk.push(arr[countIndex]);
      }
      countIndex++;
    }
    outChunk.push(inChunk);
  }
  return outChunk;
}
