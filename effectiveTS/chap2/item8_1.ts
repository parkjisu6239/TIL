class Cylinder {
  radius=1;
  height=1;
}

const v = typeof Cylinder;  // js의 typeof 는 function
type T = typeof Cylinder;  // 클래스의 타입은 typeof Cylinder

const c = new Cylinder();  // 인스턴스의 타입은 Cylinder
type C = InstanceType<typeof Cylinder>;  // typeof Cylinder의 인스턴스 타입은 Cylinder (위와 동일)
const c1: C = new Cylinder()


interface Person {
  first: string;
  last: string;
}

function email(options: {person: Person, subject: string, body: string}) {
  // ...
}

function email({person: Person, subject: string, body: string}) {
  // ...
}

function email(
  {person, subject, body}: {person: Person, subject: string, body: string}
) {
  // ...
}

export {}