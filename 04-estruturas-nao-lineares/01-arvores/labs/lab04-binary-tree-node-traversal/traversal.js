class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// In-order DFS: Left, Root, Right
function inOrderDFS(node) {
    if (node === null) return;
    inOrderDFS(node.left);
    process.stdout.write(node.data + " ");
    inOrderDFS(node.right);
}

// Pre-order DFS: Root, Left, Right
function preOrderDFS(node) {
    if (node === null) return;
    process.stdout.write(node.data + " ");
    preOrderDFS(node.left);
    preOrderDFS(node.right);
}

// Post-order DFS: Left, Right, Root
function postOrderDFS(node) {
    if (node === null) return;
    postOrderDFS(node.left);
    postOrderDFS(node.right);
    process.stdout.write(node.data + " ");
}

// BFS: Level order traversal
function bfs(root) {
    if (root === null) return;
    let queue = [root];
    while (queue.length > 0) {
        let node = queue.shift();
        process.stdout.write(node.data + " ");
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
}

function invert(root){
    if (root){

        invert(root.left)
        invert(root.right)

        let temp = root.left
        root.left = root.right
        root.right = temp
    }
}

// Creating the tree
let root = new Node(2);
root.left = new Node(3);
root.right = new Node(4);
root.left.left = new Node(5);

console.log("In-order DFS: ");
inOrderDFS(root);
console.log("\nPre-order DFS: ");
preOrderDFS(root);
console.log("\nPost-order DFS: ");
postOrderDFS(root);
console.log("\nLevel order: ");
bfs(root);

console.log("\nInverter")
invert(root)
console.log("\nLevel order: ");
bfs(root)