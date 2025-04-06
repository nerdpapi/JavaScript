let obj = { "person": { "name": "John", "age": 30, "address": { "city": "NY", "Country": "USA" } } }
let propertyPath = "person.name"
function findNestedValue(obj, propertyPath) {
    pathArray = propertyPath.split(".")
    let result = obj;
    for (let property of pathArray) {
        if (result && typeof (result) === "object" && property in result) {
            result = result[property];
        } else {
            return null;

        }
    }
    return result;
}
console.log(findNestedValue(obj, propertyPath));  
