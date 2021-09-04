
import java.util.ArrayList;

public class DomNode {

  private final String key;
  private ArrayList<DomNode> children;

  public DomNode(String key) {
    this.key = key;
    this.children = new ArrayList<>();
  }

  public DomNode addChild(String key) {
    DomNode newChildNode = new DomNode(key);
    children.add(newChildNode);
    return newChildNode;
  }

  public String getKey() {
    return key;
  }

  public ArrayList<DomNode> getChildren() {
    return children;
  }
}

public class DomTree {

  private DomNode root;
  private String result;

  public DomTree() {
    this.root = null;
    this.result = "";
  }

  DomNode setRoot(String key) {
    if (root == null) {
      root = new DomNode(key);
      return root;
    }
    return root;
  }

  public String print() {
    this.traverse(root, 0);
    return result;
  }

  private void addNodeToResult(DomNode domNode, int level) {
    if (this.result.length() == 0) {
      this.result += domNode.getKey();
    } else {
      this.result += "\n" + " ".repeat(level * 2) + domNode.getKey();
    }
  }

  private void traverse(DomNode domNode, int level) {
    this.addNodeToResult(domNode, level);
    if (domNode.getChildren().size() > 0) {
      domNode.getChildren().forEach(node -> traverse(node, level + 1));
    }
  }
}

public class App {

  public static void main(String[] args) {
    DomTree domTree = new DomTree();
    DomNode html = domTree.setRoot("HTML");
    DomNode nav = html.addChild("nav");
    DomNode footer = html.addChild("footer");
    DomNode main = html.addChild("footer");
    DomNode div1 = main.addChild("footer");
    DomNode div2 = main.addChild("footer");
    DomNode h1 = main.addChild("h1 -- title");
    DomNode p1 = div1.addChild("p -- paragraph");
    DomNode ul = div1.addChild("ul --unordered list");
    DomNode li1 = ul.addChild("li --apple");
    DomNode li2 = ul.addChild("li --orange");
    DomNode li3 = ul.addChild("li --banana");

    String dom = domTree.print();
    System.out.println(dom);
  }
}
