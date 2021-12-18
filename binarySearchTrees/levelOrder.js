const levelOrder = (root) => {
    const queue = [];
    const values = [];
    let current;
    queue.push(root);
    while (queue.length) {
        current = queue.shift();
        values.push(current.value);
        if (current.left) {
            queue.push(current.left);
        }
        if (current.right) {
            queue.push(current.right);
        }
    }
    console.log(values.join(' '));
}

// const levelOrderRecursive = (root, queue = [root], values = []) => {
//     if(!queue.length){
//         console.log(values.join(' '));
//         return;
//     }
//     const current = queue.shift();
//     values.push(current.value);
//     if (current.left) {
//         queue.push(current.left);
//     }
//     if (current.right) {
//         queue.push(current.right);
//     }
//     return levelOrderRecursive(root, queue, values);
// }

