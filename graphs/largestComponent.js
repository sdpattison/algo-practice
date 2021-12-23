const largestComponent = (edges) => {
    const graph = createGraph(edges);
    const visited = new Set(); // this will track the nodes and defend against infinite loops via cycles
    let largest = -Infinity;

    for (let node in graph) {
        const componentSize = largestComponentHelper(graph, node, visited, 0);
        largest = Math.max(largest, componentSize);
    }
    return largest;
}

const createGraph = () => {
    const graph = {};
    for (let edge of edges) {
        const [ a, b ] = edge;
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
    console.log(graph);
    return graph;
}

const largestComponentHelper = (graph, source, visited) => {
    if (visited.has(String(source))) return 0;
    visited.add(String(source));
    let size = 1;
    for (let neighbor of graph[source]) {
        size += largestComponentHelper(graph, neighbor, visited);
    }
    return size;
}

edges = [
    [1, 2],
    [3],
    [4, 6],
    [5, 6],
    [6, 7],
    [8, 6]
]

console.log(largestComponent(edges)); // 