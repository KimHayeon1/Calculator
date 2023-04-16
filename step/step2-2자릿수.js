// 버전2 : 2개의 2자릿수 이상의 숫자로 사칙연산할 수 있다.
// 추가 기능 : AC를 누르면 초기화된다.

const div = document.querySelector('div')
const cal = document.querySelector('#cal')
const ac = document.querySelector('#ac')
const btn = document.querySelectorAll('li button')

// AC 버튼 : 초기화
ac.addEventListener('click', () => div.textContent = '0')

let inp = ''
btn.forEach(v => v.addEventListener('click', () => inp += v.textContent))

let result = 0

cal.addEventListener('click', calculator)

function calculator() {
  const numArr = inp.match(/\d+/g).map(v => parseInt(v))
  const signArr = inp.match(/[^\d]/g)
  
  switch (signArr[0]) {
    case '+':
      result = numArr[0] + numArr[1]
      break
    case '-':
      result = numArr[0] - numArr[1]
      break
    case '/':
      result = numArr[0] / numArr[1]
      break
    default:
      result = numArr[0] * numArr[1]
  }
  div.textContent = result
  inp = ''
}