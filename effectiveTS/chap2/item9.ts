interface Person { name: string };
const people = ['alice', 'bob', 'jan'].map(name => {
  const person: Person = {name};
  return person
}); // Type is Person[]

document.querySelector('#myButton')!.addEventListener('click', e => {
  e.currentTarget // Type is EventTarget
  const button = e.currentTarget as HTMLButtonElement;
  button // Type is HTMLButtonElement
});

const buttonEl = document.querySelector('#myButton')

if (buttonEl === null) {
  console.log('there is no button!')
} else {
  buttonEl.addEventListener('click', e => {
    const button = e.currentTargetas as HTMLButtonElement;
    button // Type is HTMLButtonElement
  });
}

interface Person { name: string; }
const body = document.body;
const el = body as Person;

export {}