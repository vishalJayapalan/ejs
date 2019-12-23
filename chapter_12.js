// Arrays

topScope.array = (...values) => values

topScope.length = array => array.length

topScope.element = (array, i) => array[i]

run(`
do(define(sum, fun(array,
     do(define(i, 0),
        define(sum, 0),
        while(<(i, length(array)),
          do(define(sum, +(sum, element(array, i))),
             define(i, +(i, 1)))),
        sum))),
   print(sum(array(1, 2, 3))))
`)
// → {type: "word", name: "x"}
// comments

function skipSpace (string) {
  let skippable = string.match(/^(\s|#.*)*/)
  return string.slice(skippable[0].length)
}

console.log(parse('# hello\nx'))
console.log(parse('a # one\n   # two\n()'))

// Ficing Scope

specialForms.set = (args, env) => {
  if (args.length != 2 || args[0].type != 'word') {
    throw new SyntaxError('Bad use of set')
  }
  let varName = args[0].name
  let value = evaluate(args[1], env)

  for (let scope = env; scope; scope = Object.getPrototypeOf(scope)) {
    if (Object.prototype.hasOwnProperty.call(scope, varName)) {
      scope[varName] = value
      return value
    }
  }
  throw new ReferenceError(`Setting undefined variable ${varName}`)
}

run(`
  do(define(x, 4),
     define(setx, fun(val, set(x, val))),
     setx(50),
     print(x))
  `)
run(`set(quux, true)`)
