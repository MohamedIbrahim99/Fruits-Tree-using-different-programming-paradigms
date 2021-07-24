
function Fruit() { }
Fruit.prototype = {
    weight: 0,
    name: "Fruit",
    getWeight: function () { return this.weight },
    incWeight: function (w) { this.weight = this.weight + w; },
    getName: function () { return this.name },
    CalculateCalories: function () { return 1; }
};

function RedFruit() { }
RedFruit.prototype = Object.create(Fruit.prototype);

function TinyFruit() { }
TinyFruit.prototype = {
    __proto__: Fruit.prototype,

    CalculateCalories: function () {
        return this.weight * 1.5;
    }
};

function Berry() { }
Berry.prototype = {
    __proto__: TinyFruit.prototype,
    name: "Berry"
};

function BlackBerry() { }
BlackBerry.prototype = {
    __proto__: Berry.prototype,
    name: "BlackBerry",
    weight: 0,

};

function BlueBerry() { }
BlueBerry.prototype = {
    __proto__: Berry.prototype,
    name: "BlueBerry",
};

function Cherries() { }
Cherries.prototype = {
    __proto__: RedFruit.prototype,
    name: "Cherries",
    weight: 0,

    CalculateCalories: function () {
        return this.weight * 3.77;
    }
};

var Searcher = {
    // A function to search a given key in BST
    mySearch: function (node, key) {
        // Base Cases: node is null or key is present at node
        if (node == null || node.fruit.weight == key)
            return node;
        // Key is greater than node's key
        if (node.fruit.weight < key)
            return this.mySearch(node.right, key);
        // Key is smaller than node's key
        return this.mySearch(node.left, key);
    },
}

var Node = {
    fruit: '',
    left: null,
    right: null,
    getfruit: function () { return this.fruit; },
    getleft: function () { return this.left; },
    getright: function () { return this.right; },
}

var BST = {
    root: null,
    size: 0,
    getRoot: function () { return this.root; },
    getsize: function () { return this.size; },

    // a method that inserts a fruit node
    insert: function (fruit) {
        var node = Object.create(Node);
        node.fruit = fruit;
        if (this.root == null) {
            this.root = node;
            this.size++;
            return;
        }
        prev = null;
        temp = this.root;
        while (temp != null) {
            if (temp.fruit.weight > fruit.weight) {
                prev = temp;
                temp = temp.left;
            }
            else if (temp.fruit.weight < fruit.weight) {
                prev = temp;
                temp = temp.right;
            }
        }
        if (prev.fruit.weight > fruit.weight)
            prev.left = node;
        else prev.right = node;
        this.size++;
    },

    // Higher order functions apllication
    // a recursive iteration function 
    // is used to: 1) iterate and print - 2) iterate to filter by type - 3) iterate to filter by weight - 4) iterate to copy the BST with increasing the weight of a given fruit type
    IterateRec: function (myFun, node, type, weight , newBST) {
        if (node != null) {
            this.IterateRec(myFun, node.left, type, weight , newBST);
            myFun(node, type, weight , newBST);
            this.IterateRec(myFun, node.right, type, weight , newBST);
        }
    },
    
    // a method that prints the in-order traversal of the tree.
    Iterate: function () {
        this.IterateRec(this.print, this.root);
    },

    

    // a method to print the node
    print: function (node) {
        console.log(node.fruit.getName() + " " + node.fruit.getWeight());
    },

    // a method that prints the nodes of a given fruit type ordered by. weight.
    filterByType: function (type) {
        this.IterateRec(this.checkType, this.root, type);
    },

    // a method that checks the type of the fruit and print this node if this is the type we need
    checkType: function (node, type) {
        var fruit = node.fruit;
        if (fruit.getName() == type) {
            console.log(fruit.getName() + " " + fruit.getWeight());
        }
    },

    checkWeight: function (node, type, weight) {
        var fruit = node.fruit;
        if (fruit.getWeight() > weight) {
            console.log(fruit.getName() + " " + fruit.getWeight());
        }
    },

    // a method that prints the nodes that have weight larger than the given amount ordered by weight
    filterByWeight: function (weight) {
        this.IterateRec(this.checkWeight, this.root, null ,weight);
    },

    // A function to search a given key weight in the Fruit BST
    // Example in delegation
    getFruit: function (key) {
        var s = Object.create(Searcher);
        var node = s.mySearch(this.root,key);
        console.log(node.fruit.getName() + " " + node.fruit.getWeight());
        return node;
    },

    magnifyByType: function (Type, Weight) {
        var newBST = Object.create(BST);
        this.IterateRec(this.copy_with_incWeight_byType , this.root, Type, Weight, newBST);
        this.root = newBST.root;
    },

    // function to copy a BST with increasing the weight of a given fruit type
    copy_with_incWeight_byType: function (node, type, weight, newBST) {
        fruit = node.fruit;
        if (fruit.getName() == type) {
            fruit.incWeight(weight);
            newBST.insert(fruit);
        }
        else {
            newBST.insert(fruit);
        }
    },

    findHeaviest: function () {
        var node = this.root;

        while (node.right != null) {
            node = node.right;
        }

        return node;
    },

    findLightest: function () {
        var node = this.root;

        while (node.left != null) {
            node = node.left;
        }

        return node;
    }

}



// main
var bst = Object.create(BST);
var f1 = Object.create(BlueBerry.prototype, { weight: { value: 9 , writable: true} });
var f2 = Object.create(BlackBerry.prototype, { weight: { value: 70 , writable: true} });
var f3 = Object.create(Cherries.prototype, { weight: { value: 3 , writable: true} });
var f4 = Object.create(Cherries.prototype, { weight: { value: 14 , writable: true} });
var f5 = Object.create(BlueBerry.prototype, { weight: { value: 30 , writable: true} });
var f6 = Object.create(BlackBerry.prototype, { weight: { value: 40 , writable: true} });
var f7 = Object.create(Cherries.prototype, { weight: { value: 55 , writable: true} });

bst.insert(f1);
bst.insert(f2);
bst.insert(f3);
bst.insert(f4);
bst.insert(f5);
bst.insert(f6);
bst.insert(f7);

console.log(">>> Print the in-order traversal : ");
bst.Iterate();
console.log();

console.log(">>> filterByType : BlueBerry");
bst.filterByType("BlueBerry");
console.log();

console.log(">>> filterByWeight : 25");
bst.filterByWeight(25);
console.log();

console.log(">>> findHeaviest :-");
var h = bst.findHeaviest();
console.log(h.fruit.getWeight());

console.log(">>> findLightest :-");
var l = bst.findLightest();
console.log(l.fruit.getWeight());

console.log(">>> Search for : 70");
bst.getFruit(70);
console.log();

console.log(">>> magnifyByType : Cherries, 50");
bst.magnifyByType("Cherries", 50);
bst.Iterate();

