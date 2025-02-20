import {LinkedList} from "./linked-list.js"


const list = new LinkedList()
list.append("André")
list.append("Bruno")
list.append("Carla")
list.append("Fiona")
console.log(list.size())

list.insert(3, "Diego")

console.log(list.toString())
console.log(list.size())

console.log("A posição do valor 'Diego' é: ")
console.log(list.indexOf("Diego"))
