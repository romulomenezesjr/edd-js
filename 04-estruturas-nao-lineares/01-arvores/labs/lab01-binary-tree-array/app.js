import {create, root, insertLeft, insertRight, printTree} from "./binary-tree-array.js"
let t = create(7)
root("A",t);
insertLeft("B", 0, t);
insertRight("C", 0, t);
insertLeft("D", 1, t);
insertRight("E", 1, t);
insertRight("F", 2, t);
printTree(t);