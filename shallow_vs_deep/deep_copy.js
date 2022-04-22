
// 깊은 복사 1 : 재귀 함수
const deepCopy = (obj) => {
    const result = {}
    Object.keys(obj).forEach((key) => {
        if (typeof obj[key] === 'object') {
            result[key] = deepCopy(obj[key])
        } else {
            result[key] = obj[key]
        }
    })
    return result
}

const obj1 = {a: 1, b: {c: 2, d: 4}}
const obj2 = deepCopy(obj1)
obj2.a = 100
obj2.b.c = 100
console.log(JSON.stringify(obj1)) // {"a":1,"b":{"c":2,"d":4}}
console.log(JSON.stringify(obj2)) // {"a":100,"b":{"c":100,"d":4}}


// 깊은 복사 2 : JSON.stringify()
const obj3 = JSON.parse(JSON.stringify(obj1))
obj3.a = 100
obj3.b.c = 100
console.log(JSON.stringify(obj1)) // {"a":1,"b":{"c":2,"d":4}}
console.log(JSON.stringify(obj3)) // {"a":100,"b":{"c":100,"d":4}}


// 깊은 복사 3 : lodah(설치해야 함)
const obj4 = _.cloneDeep(obj1);
obj4.a = 100
obj4.b.c = 100
console.log(JSON.stringify(obj1)) // {"a":1,"b":{"c":2,"d":4}}
console.log(JSON.stringify(obj4)) // {"a":100,"b":{"c":100,"d":4}}