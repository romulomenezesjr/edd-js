

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
 
function printTree(tree) {
    for (let i = 0; i < 10; i++) {
        if (tree[i] != null) {
            console.log(tree[i]);
        } else {
            console.log("-");
        }
    }
}



export {create, root, insertLeft, insertRight, printTree}