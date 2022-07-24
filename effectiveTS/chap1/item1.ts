/**
@author kate
@subject Item1. 타입스크립트와 자바스크립트의 관계 이해하기
**/


// ---------------------------------- 💙 JS 이면 TS 이다 (참), 역은 성립하지 않는다. 💙 ----------------------------------- //
/*
아래 코드를 JS로 입력하면 type을 인식하지 못하고 오류로 판단한다.
*/
function greet(who: string) {
  console.log("hello", who)
}


// ---------------------------------- 💙  타입체커는 타입 추론으로 문제점을 찾아낸다. 💙 ----------------------------------- //
/*
런타임에 오류를 발생시킬 부분을 미리 찾아준다 = "TS는 정적 타입 시스템"
*/
let city = "new york city"
console.log(city.toUppercase())


// ---------------------------------- 💙  타입체커는 추가적인 타입 구문이 없어도 오류를 찾아낸다. 💙 ----------------------------------- //
/*
하지만 오타를 찾아주는 것이 아니라, 객체에 그러한 key 가 있는지만 찾아준다.
JS 라면 오류 없이 런타임에서 "undefined" 를 출력할 것이다.
*/
const states = [
  {name: "Alabama", capital: "Montgomery"},
  {name: "Alaska", capital: "Juneau"},
  {name: "Arizona", capital: "Phoenix"},
]

states.map(state => console.log(state.capitol))


// ---------------------------------- 💙  명시적으로 타입을 선언하여 의도를 분명히 하면 더 적절한 해결책을 얻을 수 있다. 💙 ----------------------------------- //
interface State {
  name: string;
  capital: string;
}
const states1: State[] = [
  {name: "Alabama", capital: "Montgomery"},
  {name: "Alaska", capital: "Juneau"},
  {name: "Arizona", capital: "Phoenix"},
]

states1.map(state => console.log(state.capitol))

const states2 = [
  {name: "Alabama", capital: "Montgomery"},
  {name: "Alaska", capitol: "Juneau"}, // 👈 No problem
  {name: "Arizona", capital: "Phoenix"},
]

const states3: State[] = [
  {name: "Alabama", capital: "Montgomery"},
  {name: "Alaska", capitol: "Juneau"},
  {name: "Arizona", capital: "Phoenix"},
]


// ---------------------------------- 💙  타입스크립트 타입 시스템은 자바스크립트의 런타임 동작을 "모델링"한다. 💙 ----------------------------------- //
const x = 2 + "3" // string
const y = "2" + 3 // string

// JS에서는 자동 형변환 되어 0으로 계산 됐을 것.
const a = null + 7
const b = [] + 12


// ---------------------------------- 💙 TS는 정확성을 보장하지 않는다. 💙 ----------------------------------- //
/*
names는 string[] 이기 때문에 names의 원소는 toUpperCase 메서드를 가진다.
TS는 names의 out of range 는 알 수 없다.
*/
const names = ["Alice", "Bob"]
console.log(names[2].toUpperCase()) // 런타임에서 오류 발생