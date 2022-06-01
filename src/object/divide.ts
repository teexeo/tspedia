export function divide (obj: object) {
    if (typeof obj !== "object" || Array.isArray(obj)) return false;
    return {
        keys: Object.keys(obj),
        values: Object.values(obj)
    }
}