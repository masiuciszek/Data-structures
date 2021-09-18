import {  assertEquals } from "../../../package.ts";
import { Node } from "./depth-first.ts";

Deno.test({
  name: "depthFirstSearch",
  fn: () => {
    const graph = new Node("A").addChild("B").addChild("C");
    graph.children[0].addChild("E").addChild("F");
    graph.children[1].addChild("G").addChild("H");

    const childrenList = graph.depthFirstSearch([]);
    assertEquals(childrenList, ["A", "B", "E", "F", "C", "G", "H"]);
    assertEquals(childrenList[0], "A");
    assertEquals(childrenList[childrenList.length - 1], "H");
  },
});
