// 얕은 복사 1 : 할당하기
const obj1 = {a: 1,  b: 2}
const obj2 = obj1 
obj2.a = 100

console.log(JSON.stringify(obj2)) // {"a":100,"b":2}
console.log(JSON.stringify(obj1)) // {"a":100,"b":2}


// 얕은 복사 2 : assign
const obj3 = {a: 1, b: {c: 2, d: 3}}
const obj4 = Object.assign({}, obj3) 

obj4.a = 100
obj4.b.c = 100
console.log(JSON.stringify(obj3)) // {"a":1,"b":{"c":100,"d":3}} 
console.log(JSON.stringify(obj4)) // {"a":100,"b":{"c":100,"d":3}}

/// 그리고
const obj5 = {a: 1, b: 1}
const obj6 = {b: 200, c: 300}
const newObj = Object.assign(obj5, obj6) 

console.log(JSON.stringify(obj5)) // {"a":1,"b":200,"c":300}
console.log(JSON.stringify(obj6)) // {"b":200,"c":300}
console.log(JSON.stringify(newObj)) // {"a":1,"b":200,"c":300}


// 얕은 복사 3 : ... 스프레드
const obj7 = {a: 1, b: {c: 2, d: 3}}
const obj8 = {...obj7}

obj8.a = 100
obj8.b.c = 100
console.log(JSON.stringify(obj7)) // {"a":1,"b":{"c":100,"d":3}}
console.log(JSON.stringify(obj8)) // {"a":100,"b":{"c":100,"d":3}}