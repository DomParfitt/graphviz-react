const examples = {
  simple_graph: `graph {
    a -- b
    a -- c
    b -- d
    c -- d
}`,
  simple_directed_graph: `digraph {
    rankdir=LR
    a -> b
    b -> c
    b -> d
    c -> e
    d -> e
    e -> a
}`,
};

export default examples;
