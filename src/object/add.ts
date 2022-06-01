/**
 * ```ts
 * $.add({ name: "Adam" }, "age", 20) // { name: "Adam", age: 20 }
 *  
 * $.add({ name: "Adam", age: 20 }, "age", 22) // { name: "Adam", age: 22 } 
 * ```
 * @param obj must be a object
 * @param key string | number
 * @param value any
 * @returns object
 * 
 */

export function add(obj: object | any = {}, key: string | number, value: any) {
    if(typeof obj !== "object") return false;   
    obj[key] = value;
    return obj;
}