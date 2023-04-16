const div = document.querySelector('div')
const cal = document.querySelector('#cal')
const ac = document.querySelector('#ac')
const btn = document.querySelectorAll('li button')

let inp = ''
btn.forEach(v => v.addEventListener('click', () => inp += v.textContent))

let result = 0
ac.addEventListener('click', () => div.textContent = '0')
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