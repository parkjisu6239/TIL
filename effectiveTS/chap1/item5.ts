/**
@author kate
@subject Item5. any 타입 지양하기
**/


// ---------------------------------- 💙 any 타입에는 타입 안정성이 없다. 💙 ----------------------------------- //
let age: number;
age = '12';
age = '12' as any;  // OK
age += 1; // 런타임에는 정상이지만 "121" 이 된다.


// ---------------------------------- 💙 any는 함수 시그니처를 무시해버린다. 💙 ----------------------------------- //
function calculateAge(birthDate: Date): number {
  // ...
  return 0;
}

let birthDate: any = '1990-01-19'; // string은 Date 가 아닌데, 할당 가능해진다.
calculateAge(birthDate);  // OK


// ---------------------------------- 💙 any는 언어 서비스가 적용되지 않는다. 💙 ----------------------------------- //
/*
자동완성 불가, 마우스 호버시 타입 힌트가 any로만 나온다.
심볼 이름 변경도 IDE 등에서 제공해주는데, any로 하면 사용할 수 없다.
*/ 
interface Person {
  first: string;
  last: string;
}

const formatName = (p: Person) => `${p.first} ${p.last}`;
const formatNameAny = (p: any) => `${p.first} ${p.last}`;


// ---------------------------------- 💙 any 타입은 코드 리팩터링 때 버그를 감춘다. 💙 ----------------------------------- //
// ❌ 런타임에서 오류가 발생할 수 있다.
interface ComponentProps {
  onSelectItem: (item: any) => void;
}
function renderSelector(props: ComponentProps) { /* ... */ }

let selectedId: number = 0;

function handleSelectItem(item: any) {
  selectedId = item.id; // id가 있는지 알 수 없다. 런타임에서 id가 없으면 undefined가 들어간다.
}

renderSelector({onSelectItem: handleSelectItem});


// 🟢 id 만 필요한 것이라면 타입을 명확히 한다.
interface ComponentProps2 {
  onSelectItem: (id: number) => void;
}