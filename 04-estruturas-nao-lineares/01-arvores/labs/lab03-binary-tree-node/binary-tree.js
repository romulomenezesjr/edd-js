class Node {
    constructor(value, left = null, right = null){
        this.value = value
        this.left = left
        this.right = right
    }
    toString(){
        return this.value
    }
}

class BinaryTree{
    constructor(root) {
        this.root = root
    }
}