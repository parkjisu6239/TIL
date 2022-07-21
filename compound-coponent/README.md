# Compound Component

## 컴포넌트 합성 & 헤드리스로 구성한 Card Compoenent

### 장점
- props 는 최소화한다.
- Provider 를 두어, 자식 컴포넌트들에 state 를 공유한다.
- React.CloneElement 로 속성을 주입한 사본 컴포넌트를 쉽게 구성 할 수 있다.
- 유연하게 사용가능하다.

### 단점
- 사용할 때 코드 라인이 많아지는 편이다.
- 초기에 context 등 세팅할 것이 많다.
- 유연함을 필요로 하지 않을 때는 사용성이 좋다고 하기 어렵다.

## 출처
- [Compound Component, Medium](https://betterprogramming.pub/compound-component-design-pattern-in-react-34b50e32dea0)
- [Source Code, Code Sandbox](https://codesandbox.io/s/compound-component-card-example-forked-lnzkhh)