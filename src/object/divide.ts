/**
 * ```ts
 *console.log(
    $.divide({
        name: "Suleyman",
        age: 20,
        jobs: ["Programming", "Student"],
    })
  );
  // {
  //    keys: [ 'name', 'age', 'jobs' ],
  //    values: [ 'Suleyman', 20, [ 'Programming', 'Student' ] ]
  // }
  ```

 *  
 * @param obj object
 * @returns 
 */

export function divide (obj: object) {
    if (typeof obj !== "object" || Array.isArray(obj)) return false;
    return {
        keys: Object.keys(obj),
        values: Object.values(obj)
    }
}