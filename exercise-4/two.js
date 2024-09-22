const obj1 = {
    a:1,
    b:2,
    c:3
}

const obj2 = {
    a:10,
    b:20,
    c:30,
    d:40
}

const obj3 = {
    a:12,
    c:38,
    d:89,
}

const compareTwoObjects = (obj1,obj2) => {
    return Object.keys(obj1).every(el => obj2[el])
}

console.log(obj2["d"]);

console.log(compareTwoObjects(obj1,obj2));
console.log(compareTwoObjects(obj1,obj3));
console.log(compareTwoObjects(obj3,obj2));