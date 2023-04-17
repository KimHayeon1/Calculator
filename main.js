const div = document.querySelector('div')
const cal = document.querySelector('#cal')
const ac = document.querySelector('#ac')
const numBtnList = document.querySelectorAll('#number button')
const signBtnList = document.querySelectorAll('#sign button:not(#cal)')

let result = 0

// AC 버튼 - 초기화
ac.addEventListener('click', () => {
  div.textContent = '0'
  text = ''
  inp.splice(0)
})

const inp = []
let text = ''

numBtnList.forEach(v => v.addEventListener('click', () => {
  if (text === '0' && v.textContent === '0') {

  } else {
    text += v.textContent
    div.textContent = text
  }
}))
signBtnList.forEach(v => v.addEventListener('click', () => {
  if (text) {
    if (inp.length === 1 && /\d/.test(inp[0])) {
      inp.shift()
    }
    inp.push(parseInt(text))
    text += v.textContent
    div.textContent = text
  }
  if (/[^\d]/.test(inp[inp.length-1])) {
    inp.pop()
  }
  inp.push(v.textContent)
}))

cal.addEventListener('click', calHandle)

function calHandle() {
  inp.push(parseInt(text))
  console.log(inp)

  const signArr = inp.filter(v => /[^\d]/.test(v))
  signArr.forEach((v, i) => {
    if (v === '/' || v === '×') {
      const index = inp.indexOf(v)
      calculator(inp[index-1], inp[index+1], v)
      inp.splice(index-1, 3, result)
      signArr.splice(i, 1)
    }
  })
  signArr.forEach(v => {
    const index = inp.indexOf(v)
    calculator(inp[index-1], inp[index+1], v)
    inp.splice(index-1, 3, result)
  })
  div.textContent = result
  text = ''
}

function calculator(num1, num2, sign) {
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