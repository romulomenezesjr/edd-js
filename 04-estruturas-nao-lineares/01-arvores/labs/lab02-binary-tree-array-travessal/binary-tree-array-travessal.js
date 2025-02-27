import { nodes_on_level, height } from "./utils.js";

function travessalBFS(tree) {
    const h = height(tree)
    for (let index = 0; index < h; index++) {
        const values = nodes_on_level(index, tree).toString();
        console.log(values)
    }
}

function travessalPreOrder(tree, n = 0) {
    if (n >= 0 && n < tree.length) {
        console.log(tree[n])
        travessalPreOrder(tree, 2*n+1)
        travessalPreOrder(tree, 2*n+2)
    }
}

function travessalInOrder(tree, n = 0) {
    if (n >= 0 && n < tree.length) {
        travessalInOrder(tree, 2*n+1)
        console.log(tree[n])
        travessalInOrder(tree, 2*n+2)
    }
}

function travessalPosOrder(tree, n = 0) {
    if (n >= 0 && n < tree.length) {
        travessalPosOrder(tree, 2*n+1)
        travessalPosOrder(tree, 2*n+2)
        console.log(tree[n])

    }
}

export { height, travessalBFS, travessalPreOrder, travessalInOrder, travessalPosOrder} 