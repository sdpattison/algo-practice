const hasPathUndirected = (n, edges, nodeA, nodeB) => {
    const graph = edgeParser(edges);
    return hasPath(graph, nodeA, nodeB, new Set());
}

const hasPath = (graph, source, dst, visited) => {
    if (visited.has(source)) return false;
    if (source === dst) return true;
    visited.add(source);
    for (let neighbor of graph[source]) {
        if (hasPath(graph, neighbor, dst, visited)) {
            return true;
        }
    }
    return false;
}

const edgeParser = (edges) => {
    const graph = {};
    
    for (let edge of edges) {
        const [ a,b ] = edge;
        if (!(a in graph)) {
            graph[a] = [];
        }
        if (!(b in graph)) {
            graph[b] = [];
        }
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
}

console.log(hasPathUndirected(10, [[0,7],[0,8],[6,1],[2,0],[0,4],[5,8],[4,7],[1,3],[3,5],[6,5]], 7, 5));