import {Node, LinkedList} from "./linked-list.js"


const list = new LinkedList()
list.append(new Node("André"))
list.append(new Node("Bruno"))
list.append(new Node("Carla"))
list.append(new Node("Fiona"))

list.print()
console.log(list.size())

list.insert(3, new Node("Diego"))

list.print()
console.log(list.size())

console.log("A posição do valor 'Diego' é: ")
console.log(list.indexOf("Diego"))
