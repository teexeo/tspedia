import { JsTypes, TsTypes } from "../general";
interface toArrayInterface {
    /**
     * Depth for array
     */
    depth?: number;
    type?: JsTypes;
    falsey?: boolean;
}
type toArrayType = <T extends any, U extends TsTypes>(...arr: [
    ...T[],
    U extends Array<any> ? TsTypes[] : U extends object ? toArrayInterface : U
]) => any;
/**
 *
 * @param arr any
 * @param options
 * @returns array
 *
 * @since v0.0.43
 */
export declare const toArray: toArrayType;
export {};
//# sourceMappingURL=to_array.d.ts.map