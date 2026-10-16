import {Stack } from './stack-class.js'

const s = new Stack()
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
