const hasPathDepthFirst = (graph, source, dst) => {
    if (source === dst) return true;
    for (let neighbor of graph[source]) {
        if (hasPath(graph, source, dst)) {
            return true;
        }
    }
    return false;
}

const hasPathBreadthFirst = (graph, source, dst) => {
    const queue = [source];
    
    while (queue.length) {
        const current = queue.shift();
        if (current === dst) return true;
        for (let neighbor of graph[current]) {
            queue.push(neighbor);
        }
    }
    return false;
}

const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

console.log(breadthFirstSearch(graph, 'a'));