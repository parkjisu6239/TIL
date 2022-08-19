function rollDice1(sides: number): number { /* COMPRESS */ return 0; /* END */ }  // Statement
const rollDice2 = function(sides: number): number { /* COMPRESS */ return 0; /* END */ };  // Expression
const rollDice3 = (sides: number): number => { /* COMPRESS */ return 0; /* END */ };  // Also expression

type BinaryFn = (a: number, b: number) => number;
const add: BinaryFn = (a, b) => a + b;
const sub: BinaryFn = (a, b) => a - b;
const mul: BinaryFn = (a, b) => a * b;
const div: BinaryFn = (a, b) => a / b;

const responseP = fetch('/quote?by=Mark+Twain');

const checkedFetch: typeof fetch = async (input, init) => {
  const response = await fetch(input, init);
  if (!response.ok) {
    throw new Error('Request failed: ' + response.status);
  }
  return response;
}

const checkedFetch2: typeof fetch = async (input, init) => {
  //  ~~~~~~~~~~~~   Type 'Promise<Response | HTTPError>'
  //                     is not assignable to type 'Promise<Response>'
  //                   Type 'Response | HTTPError' is not assignable
  //                       to type 'Response'
  const response = await fetch(input, init);
  if (!response.ok) {
    return new Error('Request failed: ' + response.status);
  }
  return response;
}
