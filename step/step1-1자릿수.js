// 버전1 : 2개의 1자릿수 숫자로 사칙연산할 수 있다.

const div = document.querySelector('div')
const cal = document.querySelector('#cal')

const numBtnList = document.querySelectorAll('#number button')
const signBtnList = document.querySelectorAll('#sign button:not(#cal)')

const inpNum = []
let inpSign
numBtnList.forEach(v => v.addEventListener('click', () => inpNum.push(parseInt(v.textContent))))
signBtnList.forEach(v => v.addEventListener('click', () => inpSign = v.textContent))

let result = 0

cal.addEventListener('click', calculator)

function calculator() {
  switch (inpSign) {
    case '+':
      result = inpNum[0] + inpNum[1]
      break
    case '-':
      result = inpNum[0] - inpNum[1]
      break
    case '/':
      result = inpNum[0] / inpNum[1]
      break
    default:
      result = inpNum[0] * inpNum[1]
  }
  div.textContent = result
  inpNum.splice(0, inpNum.length)
}