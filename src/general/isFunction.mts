export function IsFunction(func: any): boolean {
  return typeof func === "function";
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
}