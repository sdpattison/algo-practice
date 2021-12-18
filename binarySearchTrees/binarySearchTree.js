class Leaf {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    traverse(leaf) {
        !leaf.left ? null : this.traverse(leaf.left);
        !leaf.right ? null : this.traverse(leaf.right);
        return leaf;
    }

    insert(leaf, runner = this.root) {
        if (!this.root) {
            this.root = leaf;
            return this;
        }
        if (leaf.value === runner.value) {
            return this;

        } else if (leaf.value > runner.value) {
            if (runner.right) {
                return this.insert(leaf, runner.right);
            } else {
                runner.right = leaf;
                return this;
            }
        } else if (leaf.value < runner.value) {
            if (runner.left) {
                return this.insert(leaf, runner.left);
            } else {
                runner.left = leaf;
                return this;
            }
        }
    }

    lookup(value, runner = this.root) {
        if (!runner) {
            return false;
        } else if (value === runner.value) {
            return true;
        }
        if (value > runner.value) {
            return this.lookup(value, runner.right);
        } else {
            return this.lookup(value, runner.left);
        }
    }

    delete(value, runner = this.root) {
        if (!this.root) {
            return this;
        }
        let targetNode;
        if (value < runner.value) {
            if (value === runner.left) {
                targetNode = runner.right;
                if (!(targetNode.left && targetNode.right)) {
                    targetNode = null;
                } else if (targetNode.left && !targetNode.right) {
                    targetNode = targetNode.left;
                } else if (!targetNode.left && targetNode.right) {
                    targetNode = targetNode.right;
                } else {
                    // other logic
                }
                return this;
            } else {
                this.delete(value, runner.left);
            }
        } else {
            if (value === runner.right) {
                targetNode = runner.right;
                if (!(targetNode.left && targetNode.right)) {
                    targetNode = null;
                } else if (targetNode.left && !targetNode.right) {
                    targetNode = targetNode.left;
                } else if (!targetNode.left && targetNode.right) {
                    targetNode = targetNode.right;
                } else {
                    // other logic
                }
                
                return this;
            } else {
                this.delete(value, runner.right);
            }
        }
    }

    deleteHelper(leaf) {
        let value;
        if (!(leaf.left && leaf.right)) {
            return null;
        } else if (leaf.left && !leaf.right) {

        } else if (!leaf.left && leaf.right) {

        }

    }

    breadthFirstSearch() {
        if (!this.root) {
            return this;
        }
        let current = this.root;
        let list = [];
        let queue = [];
        queue.push(current);

        while(queue.length) {
            current = queue.shift();
            list.push(current.value);
            if (current.left) {
                queue.push(current.left);
            }
            if (current.right) {
                queue.push(current.right);
            }
        }
        return list;
    }

    breadthFirstSearchRecursive(list = [], queue = [this.root]) {
        if (!this.root || !queue.length){
            return list;
        }
        let current = queue.shift();
        list.push(current.value);
        if (current.left) {
            queue.push(current.left);
        }
        if (current.right) {
            queue.push(current.right);
        }
        this.breadthFirstSearchRecursive(list, queue);
    }
    maxDepth(root) {
        return this.maxDepthHelper(root, [], 0);
    };
    
    maxDepthHelper(root, maxDepth, runningDepth) {
        if (!root) return Math.max(...maxDepth);
        runningDepth++;
        if (!root.left && !root.right) {
            maxDepth.push(runningDepth);
        }
        this.maxDepthHelper(root.left, maxDepth, runningDepth);
        this.maxDepthHelper(root.right, maxDepth, runningDepth);
        return Math.max(...maxDepth);
    }
}


let tree = new BST();
const leaf1 = new Leaf(9);
const leaf2 = new Leaf(4);
const leaf3 = new Leaf(6);
const leaf4 = new Leaf(20);
const leaf5 = new Leaf(170);
const leaf6 = new Leaf(15);
const leaf7 = new Leaf(1);

tree.insert(leaf1);
tree.insert(leaf2);
tree.insert(leaf3);
tree.insert(leaf4);
tree.insert(leaf5);
tree.insert(leaf6);
tree.insert(leaf7);

//              9
//      4             20
//  1       6     15      170
// 

tree.breadthFirstSearch();
tree.breadthFirstSearchRecursive();
console.log(tree.maxDepth(tree.root));