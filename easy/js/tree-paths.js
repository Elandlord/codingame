const numberNodes = parseInt(readline());
const targetNodeValue = parseInt(readline());
const numberNodesWithChildren = parseInt(readline());

const LEFT_TEXT = "Left";
const RIGHT_TEXT = "Right";
const ROOT_TEXT = "Root";

// Node class to contain the node value, left and right children
class Node {
    constructor(value) {
        this.value = value;
        this.left = [];
        this.right = [];
    }
}

// Build the tree based on the number of nodes with children
const tree = [...Array(numberNodesWithChildren)].map( _ => {
    const [nodeIndex, leftChild, rightChild] = readline().split(' ').map( (value) => parseInt(value));

    let newNode = new Node(nodeIndex);

    newNode.left = new Node(leftChild);
    newNode.right = new Node(rightChild);

    return newNode;
});

// Find the target node
let foundTargetNode = tree.findIndex( (node) => {
    return node.left.value === targetNodeValue || node.right.value === targetNodeValue;
});

// If target node not found, the targetNode must be the root
if (foundTargetNode === -1) {
    console.log(ROOT_TEXT);
    return;
}

// Init directions, store root for easy access
let directions = [];
let root = tree[0];


// Traverse function, that takes the tree, the currentNode and the value to find
let traverse = function(tree, currentNode, findValue) {

    // If the current node is equal to the root, return the left / right value
    if(currentNode.value === root.value) {
        if (currentNode.left.value === findValue) directions.push(LEFT_TEXT);
        if (currentNode.right.value === findValue) directions.push(RIGHT_TEXT);
        return;
    }

    // Try to find the parent of the currentNode
    let parentIndex = tree.findIndex( (node) => {
        return node.left.value === currentNode.value || node.right.value === currentNode.value;
    });

    // Save the parent in a variable
    let parent = tree[parentIndex];

    // If the currentNode left/right value equal to the value to find, push that direction
    if (currentNode.left.value === findValue) directions.push(LEFT_TEXT);
    if (currentNode.right.value === findValue) directions.push(RIGHT_TEXT);

    traverse(tree, parent, currentNode.value);
}

// Traverse the tree, given the tree, the foundTargetNode and the targetNode (value to find)
traverse(tree, tree[foundTargetNode], targetNodeValue);

// Log the directions, after reversing (should read top - bottom), join with a whitespace
console.log(directions.reverse().join(" "));


