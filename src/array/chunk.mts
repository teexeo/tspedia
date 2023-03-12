import { isInt } from "../number/isInt.mjs";
import { IsArray } from "./isArray.mjs";
/**
 * @description dividing an array into parts
 * @since v0.0.20
 * @example
 * ```ts
 * const arr = [1,2,3,4,5]
 * chunk(arr, 2) // [[1,2],[3,4],[5]]
 * ```
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

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
  describe("Chunk", () => {
    it("should return empty array", () => {
      expect(chunk([], 0)).toEqual([]);
    });

    it("should return null", () => {
      expect(chunk(2 as any, 0)).toEqual(null);
    });

    it("should chunk array", () => {
      let input = [0, 0, 0, 0, 0];
      let output = [[0, 0], [0, 0], [0]];
      expect(chunk(input, 2)).toEqual(output);
    });
  });
}
