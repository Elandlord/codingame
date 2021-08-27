const[width, height, n, bombsCount, goalsCount] = readline().split(' ').map(v => parseInt(v));

let grid = [...Array(height)].map(_ => [...Array(width)].map(_ => '-'));

let bombs = [...Array(bombsCount)].map(() => {
    let inputs = readline().split(' ');
    return {
        x: parseInt(inputs[0]),
        y: parseInt(inputs[1])
    };
});

bombs.forEach(bomb => grid[bomb.y][bomb.x] = 'b');

let goals = [...Array(goalsCount)].map(() => {
    let inputs = readline().split(' ');
    return {
        x: parseInt(inputs[0]),
        y: parseInt(inputs[1])
    };
});

class Node{
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.x = null;
        this.y = null;
    };
};

class BinarySearchTree{

    constructor(){
        this.root = null;
    }

    insert(data){
        var newNode = new Node(data);
        if(this.root === null){
            this.root = newNode;
        }else{
            this.insertNode(this.root, newNode);
        };
    };

    insertNode(node, newNode){
        if(newNode.data < node.data){
            if (node.left === null){
                node.left = newNode;
            } else{
                this.insertNode(node.left, newNode);
            };
        } else {
            if (node.right === null){
                node.right = newNode;
            } else{
                this.insertNode(node.right,newNode);
            };
        };
    };

};

function hasPath(root, arr, x)
{
    if (root == null)
        return false;

    arr.push(root.data);

    if (root.data == x)
        return true;

    if ((hasPath(root.left, arr, x) ||
        hasPath(root.right, arr, x)) && bombs.filter(bomb => root.x === bomb.x && root.y).length === 0)
        return true;

    arr.pop();
    return false;
}

function getPath(root, x)
{
    let arr = [];

    if (hasPath(root, arr, x)) {
        for(let i = 0; i < arr.length - 1; i++) {
            console.log(arr[i]);
        }
        console.log(arr[arr.length - 1]);
    }
}


function setCoordinates(node) {
    if(node.left != null) {
        node.left.x = node.x-1;
        node.left.y = node.y+1;
        setCoordinates(node.left);
    }

    if(node.right != null) {
        node.right.x = node.x+1;
        node.right.y = node.y+1;
        setCoordinates(node.right);
    }
}

function permute(permutation) {
    var length = permutation.length,
        result = [permutation.slice()],
        c = new Array(length).fill(0),
        i = 1, k, p;

    while (i < length) {
        if (c[i] < i) {
            k = i % 2 && c[i];
            p = permutation[i];
            permutation[i] = permutation[k];
            permutation[k] = p;
            ++c[i];
            i = 1;
            result.push(permutation.slice());
        } else {
            c[i] = 0;
            ++i;
        }
    }
    return result;
}

let numbers = [];

for(i = 1; i <= n; i++) {
    numbers.push(i);
}

let permutations = permute(numbers);

goals.forEach((goal) => {
    console.error(goal);
    permutations.forEach((permutation) => {
        let tree = new BinarySearchTree();

        permutation.forEach(number => tree.insert(number));

        tree.root.x = (width-1)/2
        tree.root.y = 0;

        setCoordinates(tree.root);

        let nodes = [tree.root];

        function getNodes(root) {
            if (root == null) return;

            if (root.left == null && root.right == null) return;

            if (root.left != null) {
                nodes.push(root.left);
                getNodes(root.left);
            }

            if (root.right != null) {
                nodes.push(root.right);
                getNodes(root.right);
            }
        }

        getNodes(tree.root);

        let value = nodes.filter(node => node.x === goal.x && node.y === goal.y)[0];

        if(value === undefined) return;

        getPath(tree.root, value.data);
    });
});


