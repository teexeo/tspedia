export const Types = [
  "number",
  "string",
  "boolean",
  "object",
  "function",
] as const;

export type JsTypes = typeof Types[number];

export type TsTypes =
  | string
  | number
  | boolean
  | object
  | any[]
  | Function;
