# SwiperJS 사용하기
> [Swiper](https://swiperjs.com/)를 사용해봤다. 버전이 현재 8까지 나온 라이브러리이고, 최근까지도 활발히 업데이트 되고 있다. 리액트도 공식적으로 지원하지만, 여기서는 js를 사용했다. 

> 6 버전을 사용한 이유는 해당 버전에서는 라이브러리를 cjs, ems 두 방법으로 제공하고 있기 떄문이다. 사용하는 프로젝트의 성격에 따라, 그리고 라이브러리를 import/require 등으로 가져다 쓰는 방식에 따라 서로 다른 방법으로 사용해야한다.

js에서 라이브러리를 사용하다 보면, 어떤것은 require로 가져오고 또 어떤것은 import 로 가져오는 것을 본 적 있다.

이는 모듈을 import 하는 방식이 달라서 오는 차이이다.

## CJS(Common JS)
위에서 언급한 cjs는 `require()`와 `module.exports`을 사용하고
cjs는 동기식으로 작동한다.
처음에 js를 브라우저뿐만 아니라 여러 곳에서, 특히 서버에서 사용하도록 범용성을 높이는 게 목적이었기 때문이다.

```js
// swiper.cjs.js

exports.Swiper = Swiper;
exports.default = Swiper;
```


## ESM(ECMAScript modules)
ESM은 `import`와 `export`를 사용한다.
반대로 esm은 비동기식으 작동한다.
동기식으로 모듈을 가져오면, 정작 브라우저에서 로드가 늦어지는 문제때문에 cjs를 따르지 않고 새로 정립되었다.

```js
// swiper.cjs.js

export { default as Swiper, default } from './esm/components/core/core-class';
export { default as Virtual } from './esm/components/virtual/virtual';
export { default as Keyboard } from './esm/components/keyboard/keyboard';
```

cjs가 먼저 나온 방법으로 이전의 라이브러리들은 cjs 방식을 사용했지만,
node12부터 ESM도 공식 지원하기 시작했다. 그 이전 버전에서 ems를 사용하려면 추가적인 설정이 필요하다.

## Swiper
6 버전 후반쯤부터 esm으로 아예 변경된다. 노드 버전이 낮은 경우 6.1.0 정도가 마지노선

____

## Reference
- [How to use event-driven programming in Node.js](https://blog.logrocket.com/how-to-use-event-driven-programming-in-node-js/)
- [[JavaScript] CJS, AMD, UMD, ESM](https://beomy.github.io/tech/javascript/cjs-amd-umd-esm/)
- [Node.js ESM을 지원하려면 무엇이 필요합니까?](https://www.the-guild.dev/blog/support-nodejs-esm)
- [CommonJS와 ES Modules은 왜 함께 할 수 없는가?](https://yceffort.kr/2020/08/commonjs-esmodules)

___
더 자세한 내용은 좀 더 제대로 공부해서 블로그나 여기에 추가할 예정입니다.