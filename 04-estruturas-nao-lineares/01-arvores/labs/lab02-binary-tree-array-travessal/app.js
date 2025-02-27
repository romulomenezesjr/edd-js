import {create, root, insertLeft, insertRight, printTree} from "./bt-array.js"
import { height, invertBinaryTree}  from "./utils.js"
import {travessalInOrder} from "./bt-array-traversal.js"


let t = create(15)
root("F",t);
insertLeft("B", 0, t);
insertRight("G", 0, t);
insertLeft("A", 1, t);
insertRight("D", 1, t);
insertRight("I", 2, t);
insertLeft("C", 4, t);
insertRight("E", 4, t);
insertLeft("H", 6, t);

//console.log(height(t))
//travessalBFS(t)
printTree(t)
//travessalInOrder(t)
//invertBinaryTree(t)
printTree(t)
