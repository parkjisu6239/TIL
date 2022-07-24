/**
@author kate
@subject Item3. 코드 생성과 타입이 관계 없음을 이해하기
**/


// ---------------------------------- 💙 타입오류가 있어도 컴파일 가능 💙 ----------------------------------- //
let hello = "hello"
hello = 10 // 오류지만 JS로 컴파일된다.


// ---------------------------------- 💙 런타임에는 타입 체크가 불가능하다 💙 ----------------------------------- //
/*
TS의 역할, 두 역할은 완전히 독립적이다.
- TS, JS를 구버전의 JS로 트랜스파일한다.
- 코드의 타입 오류를 체크한다.
*/ 
interface Square {
  width: number;
}

interface Rectangle extends Square {
  height: number;
}

type Shape = Square | Rectangle;

// ❌ 타입은 런타임에서 제거된다.
function calculateArea(shape: Shape) {
  if (shape instanceof Rectangle) { // instanceof는 런타임에 일어나지만 Rectangle은 런타임에 없음
    return shape.width * shape.height
  } else {
    return shape.width * shape.width
  }
}

// 🟢 런타임에도 제거되지 않는 속성을 사용
function calculateArea1(shape: Shape) {
  if ("height" in shape) {
    return shape.width * shape.height
  } else {
    return shape.width * shape.width
  }
}

// 🟢 태그기법 : kind(값)를 추가하여 런타임에 접근 가능한 타입 정보를 저장한다. 
interface Square1 {
  kind: "square" // kind 추가
  width: number;
}

interface Rectangle1 {
  kind: "rectangle" // kind 추가
  width: number;
  height: number;
}

type Shape1 = Square1 | Rectangle1;

function calculateArea2(shape: Shape1) {
  if (shape.kind === "rectangle") {
    return shape.width * shape.height
  } else {
    return shape.width * shape.width
  }
}

// 🟢 Class로 만들기 : 타입, 값을 둘다 사용가능하게 한다.
interface Square3 {
  width: number;
}

interface Rectangle3 extends Square3 {
  height: number;
}

class Square3 {
  constructor(public width: number) {}
}

class Rectangle3 extends Square3 {
  constructor(public width: number, public height: number) {
    super(width)
  }
}

type Shape3 = Square3 | Rectangle3; // 여기서는 타입으로 사용됨

function calculateArea3(shape: Shape3) {
  if (shape instanceof Rectangle3) { // 여기서는 class로 사용됨
    return shape.width * shape.height
  } else {
    return shape.width * shape.width
  }
}


// ---------------------------------- 💙 타입연산은 런타임에 영향을 주지 않는다. 💙 ----------------------------------- //
// ❌ 타입 연산은 런타임에서 제거된다.
function asNumber(val: number | string): number {
  return val as number // js로 변환하면 사라진다. string을 넣으면 string이 나온다.
}

// 🟢 런타임의 타입을 체크하고 JS 연산으로 변환해야한다.
function asNumber2(val: number | string): number {
  return typeof val === "string" ? Number(val) : val
}


// ---------------------------------- 💙 런타임 타입은 선언된 타입과 다를 수 있다. 💙 ----------------------------------- //
/*
일반적으로 API 명세에 따라 타입을 선언하겠지만, API 명세가 변경되어
런타임에 다른 값이 들어올 가능성이 충분히 있다.
*/ 
function setLightSwitch(value: boolean) { // boolean만 허용되기때문에 default가 실행되지 않을 것 같다.
  switch (value) {
    case true:
      // on
      break
    case false:
      // off
      break
    default:
      console.log("실행될까요?")
  }
}

interface Result {
  value: boolean
}

async function setLight() {
  const res = await fetch("/light")
  const result: Result = await res.json()
  setLightSwitch(result.value) // 근데 만약 API의 res가 런타임에서 다른 값으로 들어온다면? default에 걸릴 수 있다.
}


// ---------------------------------- 💙 타입스크립트 타입으로는 함수를 오버로드할 수 없다. 💙 ----------------------------------- //
/*
C ++ 이나 다른 언어에서는 매개변수만 다른 같은 이름의 함수를 허용하는 "함수 오버로딩"이 가능하다.
하지만 TS는 함수의 파라미터에 대한 타입 오버로딩만 지원하고 함수의 구현체는 유일하다.
*/ 
// ❌ 함수 오버로딩 불가
function add2(a: number, b: number) { return a + b }
function add2(a: string, b: string) { return a + b }

// 🟢 구현체는 하나만
function add3(a: number, b: number): number
function add3(a: string, b: string): string
function add3(a: any, b: any): any { return a + b }
