//Retry

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply (a, b) {
  if (Math.random() < 0.2) {
    return a * b
  } else {
    throw new MultiplicatorUnitFailure('Klunk')
  }
}

function reliableMultiply (a, b) {
  while (true) {
    try {
      return primitiveMultiply(a, b)
    } catch (e) {
      if (!(e instanceof MultiplicatorUnitFailure)) throw e
    }
  }
}

console.log(reliableMultiply(95, 95))
// The Locked Box

const box = {
  locked: false,
  unlock () {
    this.locked = false
  },
  lock () {
    this.locked = true
  },
  _content: [],
  get content () {
    try {
      if (this.locked) throw new Error('Locked!')
    } catch (e) {
      console.log(`${e}`)
    }
    return this._content
  },
  set content (input) {
    try {
      if (this.locked) throw new Error('Locked!')
    } catch (e) {
      console.log(`${e}`)
    }
    this._content.push(input)
  }
}

function withBoxUnlocked (body) {
  let locked = box.locked
  if (!locked) {
    return body()
  }
  box.unlock()
  try {
    return body()
  } finally {
    box.lock()
  }
}

withBoxUnlocked(function () {
  box.content = 'Gold Biscuits'
})
try {
  withBoxUnlocked(function () {
    throw new Error('Pirates on the horizon! Abort! Abort')
  })
} catch (e) {
  console.log(`${e}`)
}
box.unlock()
box.lock()
console.log(box.content)
console.log(box.locked)
