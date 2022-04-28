# DOM vs Virtual DOM

- 기존에는 정적 페이지가 많아, DOM을 자주 변경할 필요가 없었음. DOM은 이때 나온 모델
- 지금처럼 화면의 요소들이 자주 바뀌는데 DOM 전체를 다시 랜더하는 것은 오버헤드가 크다.
- 브라우저에서는 html을 파싱 → DOM 트리 구성 → css랑, js랑 합쳐서 render tree(Layout 다시 그림)→ repainting 함
- 글자 하나 바뀐것도 전체 DOM 트리 그리는거부터 다시하는건 오버헤드가 넘 크다
- 이걸 개선하기 위해 VDOM 이라는 개념이 나왔고, 대중화한 것이 react
- react는 실제 DOM과 똑같은 모양의 복사본을 만든다. 이것이 가상돔이다. 단, 실제 랜더하진 않는다.
- 변경이 감지된 경우 리액트는 직전의 가상돔을 찍어두고, 가상돔을 변경한다. 이때 가상돔 역시 전체 다 변경된다.
- 그리고 diff 알고리즘을 통해 변경 전,후를 비교하여 실제 변경된 부분만 찾아낸다.
  - 일반적으로 임의의 두 트리 사이의 최소 수정 횟수를 찾아내는 것은 O(n^3)의 복잡도를 가지는 문제이다.
  - 리액트는 이것을 휴리스틱을 사용하여 O(n)에 처리한다. 레벨 바이 레벨로 비교한다.
    - 일반적으로 웹 상에서 노드가 완전히 다른 곳으로 가버린다거나 하는 경우는 극히 드물다.
    - 리스트가 추가 되거나, 토글됨에 따라 보였다 안보였다 하거나, state가 변경되어 내용물이 조금 변하는 것이 대부분이다.
  - 두 트리를 루트부터 비교하고, 엘레멘트가 다르면 완전히 다른 트리로 취급한다.
  - 엘레멘트가 같은 경우 클래스네임, 스타일 등등을 확인하여 변경된 부분만 업데이트한다.
  - 부모 → 자식순으로 비교를 진행한다.
- 위에서 찾아낸 변경된 노드만을 실제 DOM에 반영한다.
- 쉽게 말하면 그냥 돔만 쓰면 tree = new tree 이런식으로 재할당 하는 느낌이고, 가상돔 쓰면 tree[pre_node] = new tree node 이런식으로 변경된 부부만 갈아끼워서 전체를 다시 그리는 일을 하지 않는듯.



## React diff 알고리즘

- 리액트는 diff 알고리즘을 통해 변경 전,후를 비교하여 실제 변경된 부분만 찾아낸다.
- 일반적으로 임의의 두 트리 사이의 최소 수정 횟수를 찾아내는 것은 O(n^3)의 복잡도를 가지는 문제이다.
- 리액트는 이것을 휴리스틱을 사용하여 O(n)에 처리한다. 레벨 바이 레벨로 비교한다.
  - 일반적으로 웹 상에서 노드가 완전히 다른 곳으로 가버린다거나 하는 경우는 극히 드물다.
  - 리스트가 추가 되거나, 토글됨에 따라 보였다 안보였다 하거나, state가 변경되어 내용물이 조금 변하는 것이 대부분이다.
- 두 트리를 루트부터 비교하고, 엘레멘트가 다르면 완전히 다른 트리로 취급한다.
- 엘레멘트가 같은 경우 클래스네임, 스타일 등등을 확인하여 변경된 부분만 업데이트한다.
- 부모 → 자식순으로 비교를 진행한다.



### List

- react에서 반복문을 사용하는 경우 key를 입력하라고 하는데, 이게 diff 알고리즘 수행과 연관이 많다.
- diff 알고리즘에서 이전돔과 변경된 돔을 비교하는데, 이때 element의 tag를 먼저 본다.
- 이렇게 태그, 클래스, 스타일, 안에 들어간 내용 등등을 보고 이전값과 뭐가 다르고 어디에 들어갈지 보는건 오래걸린다.
- 특히 리스트에서 리스트 아이템이 맨 마지막이 아니라 어딘가 중간에 끼어 들어간 경우, 뭐가 달라졌는지 처음부터 끝까지 다 비교해야 하고, 만약 첫번째에 새로운 아이템이 들어간 경우라면 뒤에 모든 리스트의 위치가 결국 바뀌는 것이다.



### Component

컴포넌트가 달라지면, 아예 랜더를 다시 한다. 컴포넌트가 바뀌는 경우는 아주 높은 확률로 그냥 썡으로 달라진 것이기 때문에 비교를 안하는 편이 낫다.



### Event Delegation

- 모든 노드에 각각 이벤트 리스너를 붙이는 것은 느리고, 메모리도 많이 잡아 먹는다.
- 리액트에서는 이를 해결하기 위해, 이벤트 리스너는 최상위 document에만 붙이고, 각 노드의 고유한 id를 해시값으로 저장한다.
- 그리고 이벤트가 발생했을때 브라우저가 이벤트가 발생한 DOM node를 넘겨주고, 이 노드의 아이디를 찾아 해싱해둔 이벤트 처리 함수등을 사용한다.



## 의문인 점, 더 알아볼 것

- [리액트의 diff 알고리즘 보기](https://ko.reactjs.org/docs/reconciliation.html)

- 돔트리의 일부만 변경하더라도, 레이아웃이랑 리페인팅은 일어나지 않나?

- 결국 가상돔을 쓰면 가상돔 전체를 바꾸는 일이 있기때문에 이에 따른 시간이 있지 않나?

  → 실제 트리를 랜더하지 않고 논리적 단위로서 트리를 리스트등에 배치하는 일 자체는 그리 오래 걸리지 않는다.

- 스벨트랑 솔리드가 가상돔을 안쓰는데 더 빠른 이유는?





## Reference

- https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model/Introduction
- https://jstutorial.medium.com/react-animated-tutorial-7a46fa3c2b96
- https://www.w3schools.com/js/js_htmldom_document.asp
- https://hashnode.com/post/the-one-thing-that-no-one-properly-explains-about-react-why-virtual-dom-cisczhfj41bmssp53mvfwmgrq
- https://medium.com/@deathmood/how-to-write-your-own-virtual-dom-ee74acc13060
- https://meetup.toast.com/posts/110
- https://reactkungfu.com/2015/10/the-difference-between-virtual-dom-and-dom/
- https://www.codecademy.com/article/react-virtual-dom
- https://ko.reactjs.org/docs/rendering-elements.html
- https://calendar.perfplanet.com/2013/diff/