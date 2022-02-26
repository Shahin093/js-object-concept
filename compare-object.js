
// if (first === second) {
//     // console.log('object are equal ');
// } else {
//     // console.log('objects are different');
// }
const first = { a: 1, b: 2 };
const second = { b: 2, a: 1 };
function compareObject(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (const prop in obj1) {
        if (obj1[prop] !== obj2[prop]) {
            return false;
        }
    }
    return true;
}
const compare = compareObject(first, second);
console.log(compare);