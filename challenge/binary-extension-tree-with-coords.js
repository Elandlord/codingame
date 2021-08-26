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

class Node {
    constructor(val) {
        this.val = val;
        this.x = null;
        this.y = null;
        this.right = null;
        this.left = null;
        this.count = 0;
    };
};

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    create(val) {
        const newNode = new Node(val);

        if (!this.root) {
            this.root = newNode;
            return this;
        };

        let current = this.root;

        const addSide = side => {
            if (!current[side]) {
                current[side] = newNode;
                return this;
            };

            current = current[side];
        };

        while (true) {
            if (val === current.val) {
                current.count++;
                return this;
            };

            val < current.val ? addSide('left') : addSide('right');
        };
    };

    find(val) {
        if (!this.root) return undefined;

        let current = this.root, found = false;

        while (current && !found) {
            if (val < current.val) current = current.left;
            else if (val > current.val) current = current.right;
            else found = true;
        };

        if (!found) return 'Nothing Found!';
        return current;
    }

    findByCoords(x, y) {
        // find the node by coords
        // find the left/right node to traverse to
        // if root? End the loop and reverse the array.
    }


    nodeCoordinates(node, x, y) {
        if (x === undefined && y === undefined ) {x = 0; y = 0;}
        if (!node) {return;}

        node.x = x;
        node.y = y;

        this.nodeCoordinates(node.left, --x, --y);
        this.nodeCoordinates(node.right, x+=2, y--);
    }
};

let tree = new BinarySearchTree();

for(let i = n; i > 0; i--) {
    tree.create(i);
}

tree.nodeCoordinates(tree.find(n));

goals.forEach((goal) => {
    tree.findByCoords(goal.x, goal.y);
});