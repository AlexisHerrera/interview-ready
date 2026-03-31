// 1. *Route Between Nodes*:

// Given a directed graph, design an algorithm to find out whether there is a route
// between two nodes.

export type GraphNode = {
  value: number;
  neighbors: GraphNode[];
};

export default function hasRouteBetweenNodes(
  start: GraphNode,
  end: GraphNode,
): boolean {
  const stack = [start];
  const visited: Set<GraphNode> = new Set();
  while (stack.length > 0) {
    const node = stack.pop();
    if (!node) continue;
    visited.add(node);
    if (node === end) {
      return true;
    }
    for (let i = 0; i < node.neighbors.length; i++) {
      const neighbor = node.neighbors[i];
      if (visited.has(neighbor)) continue;
      stack.push(neighbor);
    }
  }
  return false;
}
