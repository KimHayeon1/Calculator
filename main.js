const div = document.querySelector('div')
const cal = document.querySelector('#cal')

const numBtnList = document.querySelectorAll('#number button')
const signBtnList = document.querySelectorAll('#sign button:not(#cal)')

let inpNum = []
let inpSign
numBtnList.forEach(v => v.addEventListener('click', () => inpNum.push(parseInt(v.textContent))))
signBtnList.forEach(v => v.addEventListener('click', () => inpSign = v.textContent))

let result = 0

cal.addEventListener('click', handle)

function handle() {
  switch (inpSign) {
    case '+':
      result = inpNum[0] + inpNum[1]
      break
    case '-':
      result = inpNum[0] - inpNum[1]
      break
    case '×':
      result = inpNum[0] * inpNum[1]
      break
    case '/':
      result = inpNum[0] / inpNum[1]
      break
  }
  div.textContent = result
  inpNum=[]
}