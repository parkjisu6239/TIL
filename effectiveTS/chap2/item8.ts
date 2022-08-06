interface Cylinder {
  radius: number;
  height: number;
}

const Cylinder = (radius: number, height: number) => ({radius, height});

function calculateVolume(shape: unknown) {
  if (shape instanceof Cylinder) {
    shape.radius
  }
}

type T1 = 'string literal';
type T2 = 123;
const v1 = 'string literal';
const v2 = 123;

class Cylinder1 {
  radius=1;
  height=1;
}

function calculateVolume1(shape: unknown) {
  if (shape instanceof Cylinder1) {
    shape  
    shape.radius 
  }
}

interface Person {
  first: string;
  last: string;
}

const p: Person = { first: 'Jane', last: 'Jacobs' };
function email(p: Person, subject: string, body: string): Response {
  return new Response();
}

type T3 = typeof p;  // Type is Person
type T4 = typeof email;
    // Type is (p: Person, subject: string, body: string) => Response

const v3 = typeof p;  // Value is "object"
const v4 = typeof email;  // Value is "function"

const v = typeof Cylinder1;  // Value is "function"
type T = typeof Cylinder1;  // Type is typeof Cylinder
declare let fn: T;
const c = new fn();  // Type is Cylinder

type C = InstanceType<typeof Cylinder1>;  // Type is Cylinder

const c1: C = new fn()


const first: Person['first'] = p['first'];  // Or p.first
type PersonEl = Person['first' | 'last'];  // Type is string
type Tuple = [string, number, Date];
type TupleEl = Tuple[number];  // Type is string | number | Date


class Car {
  speed;
  color;
  constructor() {
    this.speed = 10
    this.color = "red"
    type t = typeof this
  }

}
export {}