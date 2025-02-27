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

// Initialize and allocate memory for tree nodes
let firstNode = new Node(2);
let secondNode = new Node(3);
let thirdNode = new Node(4);
let fourthNode = new Node(5);

// Connect binary tree nodes
firstNode.left = secondNode;
firstNode.right = thirdNode;
secondNode.left = fourthNode;