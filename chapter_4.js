// the sum of a range

function sum (input) {
  return input.reduce((a, b) => a + b)
}
function range (start, end, step = start > end ? -1 : 1) {
  let arr = []
  if (start > end) {
    for (let i = start; i >= end; i += step) {
      arr.push(i)
    }
  } else {
    for (let i = start; i <= end; i += step) {
      arr.push(i)
    }
  }
  return arr
}
console.log(range(1, 10))
console.log(range(5, 2, -1))
console.log(sum(range(1, 10)))

// Reversing An Array

function reverseArray (arr) {
  let ar = []
  for (let i = 0; i < arr.length; i++) {
    ar[i] = arr[arr.length - i - 1]
  }
  return ar
}
function reverseArrayInPlace (arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let temp = arr[i]
    arr[i] = arr[arr.length - 1 - i]
    arr[arr.length - 1 - i] = temp
  }
  return arr
}
console.log(reverseArray(['A', 'B', 'C']))
let arrayValue = [1, 2, 3, 4, 5]
reverseArrayInPlace(arrayValue)
console.log(arrayValue)

// List

function arrayToLIst (arr) {
  list = null
  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list }
  }
  return list
}

function listToArray (list) {
  let arr = []
  for (let i = list; list; i = list.rest) {
    arr.push(i.value)
  }
  return arr
}

function prepend () {}

function nth () {}

console.log(arrayToList([10, 20]))
console.log(listToArray(arrayToList([10, 20, 30])))
console.log(prepeng(10, prepend(20, null)))
console.log(nth(arrayToList([10, 20, 30]), 1))
