# Declare keyword



cdn등 외부 스크립트를 사용한 후, 해당 스크립트의 변수에 접근하려는 경우 `undefined` 에러가 발생한다. 현재 스크립트의 스코프 내에 그러한 변수가 없어서 발생하는 문제이다.

글로벌 또는 다른 스크립트 스코프에 있는 변수에 접근하려면 `declare` 키워드를 사용하여, 사용하고자 하는 변수가 글로벌 혹은 다른 스코프 어딘가에 있다는 것을 알린다.



특히 ts에서 위같은 문제가 종종 있는데, `declare` 를 선언하면 해당 변수를 참조할 수 있고, js로 컴파일 되지 않는다. 이미 다른 곳에서 js로 작성되어 있는 것이기 때문이다.



## Referrence

- https://jjnooys.medium.com/typescript-declare-cd163acb9f