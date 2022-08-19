type TState = {
  name: string;
  capital: string;
}

interface IState {
  name: string;
  capital: string;
}

const wyoming: TState = {
  name: 'Wyoming',
  capital: 'Cheyenne',
  population: 500_000
};

const wyoming2: IState = {
  name: 'Wyoming',
  capital: 'Cheyenne',
  population: 500_000
};

type TDict = { [key: string]: string };
interface IDict { [key: string]: string }

type TFn = (x: number) => string;
interface IFn {
  (x: number): string;
}

const toStrT: TFn = x => '' + x;  // OK
const toStrI: IFn = x => '' + x;  // OK

interface IStateWithPop extends TState {
  population: number;
}
type TStateWithPop = IState & { population: number; };

class StateT implements TState {
  name: string = '';
  capital: string = '';
}
class StateI implements IState {
  population: number;
  name: string = '';
  capital: string = '';
}

type AorB = 'a' | 'b';



type Input = { /* ... */ };
type Output = { /* ... */ };
interface VariableMap {
  [name: string]: Input | Output;
}


type Pair = [number, number];
type StringList = string[];
type NamedNums = [string, ...number[]];

interface Tuple {
  0: number;
  1: number;
  length: 2;
}
const t: Tuple = [10, 20];  // OK

interface IState {
  name: string;
  capital: string;
}
interface IState {
  population: number;
}
const wyoming3: IState = {
  name: 'Wyoming',
  capital: 'Cheyenne',
  population: 500_000
};  // OK

type IState3 {
  name: string;
  capital: string;
}
type IState3 {
  population: number;
}