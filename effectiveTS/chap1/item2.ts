/**
@author kate
@subject Item2. 타입스크립트 설정 이해하기
**/


// ---------------------------------- 💙 TS는 설정에 따라 전혀 다른 언어가 될 수 있다. 💙 ----------------------------------- //
// noImplicitAny
function add(a, b) { // "noImplicitAny": false 면 오류 없음
  return a + b
}
add(10, null)

function add1(a: number, b: number) { // 분명한 타입을 명시하기
  return a + b
}


// strict
const num1: number = null // strict 해제하면 오류 없음
const num2: number = undefined
const num3: number | null = null // OK


// null check or assertion(단언, !)
const el = document.querySelector("#status")
el.textContent = "Ready"

if (el) { // null 제거
  el.textContent = "Ready"
}

el!.textContent = "Ready" // null이 아님을 단언