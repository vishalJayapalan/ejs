// looping a triangle
let N = 8
for (let i = '#'; i.length < N; i += '#') {
  console.log(i)
}

// fizzBuzz

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz')
  else if (i % 3 === 0) console.log('Fizz')
  else if (i % 5 === 0) console.log('buzz')
  else console.log(i)
}

// chessBoard

let res = ''
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if ((i + j) % 2 === 0) res += ' '
    else res += '#'
  }
  res += '\n'
}
console.log(res)
