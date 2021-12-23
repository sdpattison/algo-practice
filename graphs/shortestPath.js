const shortestPath = (edges, start, end) => {
    const graph = createGraph(edges);
    const queue = [{ node: start, distance: 0 }];
    const visited = new Set([ start ]);
    let minPath = Infinity;
    while (queue.length) {
        const { node, distance } = queue.shift();
        if (node === end) {
            minPath = Math.min(minPath, distance);
        }
        for (let neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push({ node: neighbor, distance: distance + 1 });
            }
        }
        
    }
    return minPath;
}

const createGraph = (edges) => {
    const graph = {};

    for (let edge of edges) {
        const [a, b] = edge;
        if (a && !(graph[a])) {
            graph[a] = [];
        }
        if (b && !(graph[b])) {
            graph[b] = [];
        }
        if (a && b) {
            graph[a].push(b);
            graph[b].push(a);
        }
    }
    return graph;
}

edges = [
    [1, 2],
    [3],
    [4, 6],
    [5, 6],
    [6, 7],
    [8, 6]
]

edges2 = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
]

console.log(shortestPath(edges2, 'w', 'z'));