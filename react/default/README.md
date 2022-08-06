# Web basic
프로젝트를 진행하기 위한 초기세팅을 완료한 repo입니다.

## 주요 라이브러리
> node version 16.31.1

- react
- eslint
- prettier
- react-router
- storybook

자세한 dependency는 package.json 참고.

## 환경 설정 상세

<details>
<summary>react</summary>

```bash
npx create-react-app my-app --tempalte typescript
```
- `reate-react-app` 으로 설치 후, 사용하지 않는 라이브러리 제거
</details>



<details>
<summary>ESLint</summary>

```bash
npm install eslint --save-dev
```

- 대화형으로 옵션을 선택할 수 있다.  이후에 ts를 위한 추가 설정이 필요하다. 다음 블로그를 참고하여 작성했다.
- 설정된 옵션은 `.eslintrc.json` 애서 확인할 수 있으며 원하는 옵션을 추가/제거 할 수 있다.
- 타입스크립트를 사용하여 추가된 설정들이 많다.

참고링크
- https://velog.io/@he0_077/React-Typescript-eslint-prettier-%EC%84%A4%EC%A0%95
- https://dev-yakuza.posstree.com/ko/react/eslint/

</details>


<details>
<summary>prettier</summary>

```bash
npm install --save-dev --save-exact prettier
```

- ESLint와 충돌이 있을 수 있다.
- 설정된 옵션은 `.prettier.json` 애서 확인할 수 있으며 원하는 옵션을 추가/제거 할 수 있다.
- 검사를 원하지 않는 파일은 `.prettierignore`에 추가하면 된다.
- vscode setting을 추가적으로 해야될 수도 있다.
</details>



<details>
<summary>react-router</summary>

```bash
npm install react-router-dom@6
```

- [공식문서](https://reactrouter.com/docs/en/v6/getting-started/installation)
- 모든 라우터는 routes.tsx에 연결되어 있다. 
- 모든 컴포넌트는 App으로 감싼다.
</details>


<details>
<summary>Storybook</summary>

```
npx sb init
```
- [공식문서](https://storybook.js.org/docs/react/get-started/install)
- stories 라는 폴더에 스토리파일을 모두 모아도 되지만, 파일 구조를 component와 똑같이 맞추려면 결국 복잡해져서 컴포넌트 폴더에 같이 두었다.
- 빌드 옵션으로 스토리파일을 제거하면, 빌드에 영향을 주지 않는다.
</details>

## Rule

- TS + react Component는 이 [가이드](https://fettblog.eu/typescript-react-component-patterns/)를 따른다.
- HTML semantic tag를 의미에 맞게 적절히 사용한다.
- Library를 install할때는 정확히 버전을 지정하고, `^` 을 사용하지 않는다.
- 정적으로 사용하는 파일은 constants 라는 폴더에 둔다.
- 전역에서 사용하는 공통 스타일은 app.tsx에 emotion으로 지정한다.
- 재사용하지 않는 컴포넌트는 atomic design pattern을 따르지 않아도 되고, 다른 컴포넌트의 폴더 안에 두어도 된다.
- 반복문등으로 랜더하는 컴포넌트는 반드시 key를 지정하고, [인덱스보다는](https://ko.reactjs.org/docs/reconciliation.html#recursing-on-children) 리스트 아이템이 추가되어도 바뀌지 않을 고유한 값을 갖도록 한다.
- React component는 default 가 아니라 컴포넌트의 이름으로 export 한다.
- react component 는 컴포넌트의 이름으로 된 폴더를 만들고, 그 안에 컴포넌트이름의 tsx파일, 그리고 index.ts 파일을 반드시 포함한다.
  - index.ts 파일에는 로직은 없어야 하고, import/export만 둔다.
- 자주사용하는 state는 `custom hook`으로 만들어 중복을 최소화한다.