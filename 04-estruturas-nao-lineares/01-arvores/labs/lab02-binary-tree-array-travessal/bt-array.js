import { height, nodes_on_level } from "./utils.js";

function create(size){
    return new Array(size).fill(null)
}

function root(key, tree) {
    if (tree[0] != null) {
        console.log("Tree already had root");
    } else {
        tree[0] = key;
    }
}

function insertLeft(key, parent, tree) {
    if (tree[parent] == null) {
        console.log(`Nó pai inválido na posição ${(parent * 2) + 1}`);
    } else {
        tree[(parent * 2) + 1] = key;
    }
}

function insertRight(key, parent, tree) {
    if (tree[parent] == null) {
        console.log(`Nó pai inválido na posição ${(parent * 2) + 2}`);
    } else {
        tree[(parent * 2) + 2] = key;
    }
}
 
// function printTree(tree) {
//     const h = height(tree)
//     for (let index = 0; index < h; index++) {
//         const values = nodes_on_level(index, tree)
//         const total_values = values.length
//         let line = " "
//         for (let v of values){
//             line += " ".repeat(tree.length * 2/(total_values+1))+ v
//         }
//         console.log(line)
//     }
// }
function printTree(array) {
    const height = Math.ceil(Math.log2(array.length + 1)) - 1;
    let level = 0;
    let nodesInLevel = 1;

    while (level <= height) {
        const start = Math.pow(2, level) - 1;
        const end = Math.min(Math.pow(2, level + 1) - 1, array.length);

        let levelStr = '';
        const spacing = ' '.repeat(Math.pow(2, height - level + 1) - 1);

        for (let i = start; i < end; i++) {
            if (i !== start) levelStr += spacing;
            levelStr += array[i] !== null ? array[i] : '-';
        }

        // Centralizar a linha atual
        const padding = ' '.repeat(Math.pow(2, height - level) - 1);
        console.log(padding + levelStr);

        level++;
        nodesInLevel *= 2;
    }
}


export {create, root, insertLeft, insertRight, printTree}