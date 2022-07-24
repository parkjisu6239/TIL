/**
@author kate
@subject Item4. 구조적 타이핑에 익숙해지기
**/


// ---------------------------------- 💙 JS는 덕타이핑 기반이다. TS는 구조적 타이핑이다. 💙 ----------------------------------- //
/*
덕타이핑 : 객체의 변수, 메소드의 집합이 객체의 타입을 결정하는 것, 런타임에 타입을 체크(동적), 다형성 관점
구조적 타이핑 : 실제 구조와 정의에 의해 결정되는 타입 시스템의 한 종류, 컴파일 타임에 타입을 체크(정적), 타입 체킹 관점, 집합의 포함 관계 개념을 지향
둘의 단점 : 의도하지 않았지만 동일한 타입을 가지는 경우 의도치않게 동일한 유형으로 간주될 수 있다.
*/ 
interface Vector2D {
  x: number;
  y: number;
}

function calculateLength(v: Vector2D) {
  return Math.sqrt(v.x + v.x + v.y * v.y)
}

// 🟢 구조적 타이핑으로 NamedVector가 Vector2D를 포함하기 때문에 가능
interface NamedVector {
  name: string;
  x: number;
  y: number;
}

const v: NamedVector = {x: 3, y: 4, name: "Z"}
calculateLength(v) // v는 Vector2D 가 아니지만, NamedVector가 Vector2D와 호환되기때문에 OK

// ❌ 타입 확장으로 사용은 가능하지만, z는 무시되어 원하는 결과가 나오지는 않음
interface Vector3D {
  x: number;
  y: number;
  z: number;
}

const v1: Vector3D = {x: 3, y: 4, z: 5}

function normalize(v: Vector3D) {
  const length = calculateLength(v1); // 구조적 타입 관점에서 Vector3D는 Vector2D와와 호환된다 -> 타입은 Open 되어 있다.
  return {
    x: v.x / length,
    y: v.y / length,
    z: v.z / length,
  };
}

// ❌ 타입은 오픈되어 있기때문에 무엇이 올지 알 수 없다.
function calculateLengthL1(v: Vector3D) {
  let length = 0;
  for (const axis of Object.keys(v)) {
    const coord = v[axis];
    length += Math.abs(coord);
  }
  return length;
}

const vec3D = {x: 3, y: 4, z: 1, address: '123 Broadway'}; // address는 문자열이지만 x,y,z 가 있어서 Vector3D와 호환된다.
calculateLengthL1(vec3D);  // OK, returns NaN


// 🟢 따라서 반복문 보다는 모든 속성을 각각 더하는 구현이 더 낫다.
function calculateLengthL2(v: Vector3D) {
  return Math.abs(v.x) + Math.abs(v.y) + Math.abs(v.z);
}

// ❗️ 구조적 타이핑은 클래스 관련 할당에서도 당황스러운 결과를 보여준다.
class C {
  foo: string;
  constructor(foo: string) {
    this.foo = foo;
  }
}

const c = new C('instance of C');
const d: C = { foo: 'object literal' };  // OK! foo 속성이 있으니 C 타입이 맞다고 판단.
// 하지만, C 에 다른 메서드가 있었다면, 문제가 발생한다.


// ---------------------------------- 💙 테스트를 작성할 때는 구조적 타이핑이 유리하다. 💙 ----------------------------------- //

interface PostgresDB {
  id: string;
  key: string;
  runQuery: (sql: string) => any[];
}

interface Author {
  first: string;
  last: string;
}

interface DB { // PostgresDB를 모킹하기 위한 타입
  runQuery: (sql: string) => any[];
}

function getAuthors(database: DB): Author[] { // PostgresDB가 runQuery을 가지고 있기 때문에 DB로 정의해도 런타임에서 사용가능
  const authorRows = database.runQuery(`SELECT FIRST, LAST FROM AUTHORS`); // runQuery 메서드가 있는 어떤 객체라도 사용 가능하게 된다.
  return authorRows.map(row => ({first: row[0], last: row[1]}));
}

// test도 간단한 객체를 사용하여 테스트 가능
test('getAuthors', () => {
  const authors = getAuthors({
    runQuery(sql: string) {
      return [['Toni', 'Morrison'], ['Maya', 'Angelou']];
    }
  });

  expect(authors).toEqual([
    {first: 'Toni', last: 'Morrison'},
    {first: 'Maya', last: 'Angelou'}
  ]);
});