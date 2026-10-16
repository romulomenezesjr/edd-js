import LinkedStack from './linkedstack.js'

const s = new LinkedStack()
console.log(s.isEmpty())
s.push(4)
s.push('dog')
console.log(s.peek())
s.push(true)
console.log(s.size())
console.log(s.isEmpty())
s.push(8.4)
console.log(s.pop())
console.log(s.pop())
console.log(s.size())
