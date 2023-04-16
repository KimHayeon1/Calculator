// 버전3 : 3개 이상의 숫자로 사칙연산할 수 있다.
// 추가 기능 : 숫자를 누를 때, 해당 숫자가 출력된다.
const div = document.querySelector('div')
const cal = document.querySelector('#cal')
const ac = document.querySelector('#ac')
const numBtnList = document.querySelectorAll('#number button')
const signBtnList = document.querySelectorAll('#sign button:not(#cal)')

let result = 0

// AC 버튼 : 초기화
ac.addEventListener('click', () => {
  result = 0
  div.textContent = result
  text = ''
})

let inp = ''
let text = ''

numBtnList.forEach(v => v.addEventListener('click', () => {
  inp += v.textContent
  text += v.textContent
  div.textContent = text
}))
signBtnList.forEach(v => v.addEventListener('click', () => {
  inp += v.textContent
  text = ''
}))

cal.addEventListener('click', calHandle)

function calHandle() {
  const numArr = inp.match(/\d+/g).map(v => parseInt(v))
  const signArr = inp.match(/[^\d]/g)
  signArr.forEach((v, i) => {
    if (i === 0 && /^\d/.test(inp)) {
      calculator(numArr.shift(), numArr.shift(), v)
    } else {
      calculator(result, numArr.shift(), v)
    }
  })
  div.textContent = result
  inp = ''
  text = ''
}

function calculator(num1, num2, sign) {
  console.log(num1, num2, sign)
  switch (sign) {
    case '+':
      result = num1 + num2
      break
    case '-':
      result = num1 - num2
      break
    case '/':
      result = num1 / num2
      break
    default:
      result = num1 * num2
  }
}