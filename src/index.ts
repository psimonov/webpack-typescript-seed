import '@babel/polyfill';

import _ from 'lodash';

const test = [10, 5, 6, 9];

const res = _.map(test, (it) => {
  return it + 1;
});

document.write(res.join(' : '));


(async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

  const data = await response.json();

  console.log(data);
})();


const testObj = {
  test: 1,
  block: true,
  acme: 'test',
};

console.log({ ...testObj, 'john': 'doe' });
