const test1 = [2, '+', 5, '×', 4, '/', 2];
const test2 = [9, '×', 3, '+', 1, '-', 3, '%', 3];

const obj = {
  '+': 1,
  '-': 1,
  '×': 2,
  '/': 2,
  '%': 2
}

function postfix(test) {
  const numStack = [];
  const operatorStack = [];

  test.forEach(v => {
    if (/\d/.test(v)) {
      numStack.push(v)
      console.log(numStack)
    } else if (!operatorStack.length){
      operatorStack.push(v)
      console.log(numStack)
    } else if (obj[v] > obj[operatorStack[operatorStack.length-1]]) {
      operatorStack.push(v)
      console.log(numStack)
    } else {
      numStack.push(operatorStack.pop())
      operatorStack.push(v)
      console.log(numStack)
    }
  });
  numStack.push(...operatorStack.reverse())
  console.log(numStack)
  console.log(operatorStack)
}

postfix(test1)
postfix(test2)