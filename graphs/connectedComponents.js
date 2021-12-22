const connectedComponentsCount = (edges) => {
    const graph = createGraph(edges);
    const visited = new Set();
    let count = 0;

    for (let node in graph) {
        if (explore(graph, node, visited)) {
            count +=1;
        }
    }
    return count;
}

const createGraph = (edges) => {
    const graph = {};
    for (let edge of edges) {
        const [a, b] = edge;
        if (a && !graph[a]) {
            graph[a] = [];
        }
        if (b && !graph[b]) {
            graph[b] = [];
        }
        if (a && b) {
            graph[a].push(b);
            graph[b].push(a);
        }
    }
    return graph;
}

const explore = (graph, current, visited) => {
    if (visited.has(String(current))) return false;
    visited.add(String(current));

    for (let neightbor of graph[current]) {
        explore(graph, neightbor, visited);
    }
    return true;
}

edges = [
    [1, 2],
    [3],
    [4, 6],
    [5, 6],
    [6, 7],
    [8, 6]
]

console.log(connectedComponentsCount(edges));