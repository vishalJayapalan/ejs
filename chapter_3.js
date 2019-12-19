// Minimum
const min = (a, b) => (a < b ? a : b)
console.log(min(0, -10))

// Recursion

function isEven (N) {
  if (N < 0) return isEven(-N)
  else if (N === 0) return true
  else if (N === 1) return false
  else return isEven(N - 2)
}
console.log(isEven(501))

// Bean Counting
let count = 0
function countChar (char, c) {
  for (let i of char) {
    if (i === c) {
      count++
    }
  }
  return count
}
function countBs (char) {
  return countChar(char, 'B')
}
console.log(countBs('BBC'))
console.log(countChar('kakkerlak', 'k'))
