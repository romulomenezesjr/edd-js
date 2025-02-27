
function nodes_on_level(level, tree) {
    const first_index = 2 ** (level ) - 1
    const last_index = 2 ** (level + 1) - 1
    const nodes = []
    for (let i = first_index; i < last_index; i++) {
        const element = tree[i];
        if (element !== null) {
            nodes.push(element)
        }
    }
    return nodes
}

 function height(tree) {
    return Math.ceil(Math.log2(tree.length + 1))
}

function swap(tree, index = 0){
    const temp = tree[index*2+1]
    tree[index*2+1] = tree[index*2+2]
    tree[index*2+2] = temp

}

function invertBinaryTree(tree, index = 0){ 
    if (tree[index] === null)
        return
    if (index*2+2 < tree.length) {
        swap(tree, index)
        invertBinaryTree(tree, index*2+1)
        invertBinaryTree(tree, index*2+2)
    }
}

export {nodes_on_level, height, invertBinaryTree}
