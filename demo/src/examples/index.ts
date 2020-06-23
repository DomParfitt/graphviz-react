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
  different_edge_types: `digraph D {

    A [shape=diamond]
    B [shape=box]
    C [shape=circle]
  
    A -> B [style=dashed, color=grey]
    A -> C [color="black:invis:black"]
    A -> D [penwidth=5, arrowhead=none]
  
  }`,
  nested_clusters: `digraph D {

    subgraph cluster_p {
      label = "Parent";
  
      subgraph cluster_c1 {
        label = "Child one";
        a;
  
        subgraph cluster_gc_1 {
          label = "Grand-Child one";
           b;
        }
        subgraph cluster_gc_2 {
          label = "Grand-Child two";
            c;
            d;
        }
  
      }
  
      subgraph cluster_c2 {
        label = "Child two";
        e;
      }
    }
}`,
};

export default examples;
