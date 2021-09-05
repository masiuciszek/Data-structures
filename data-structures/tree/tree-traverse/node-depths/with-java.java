import java.util.*;

class Program {

  public static int nodeDepths(BinaryTree root) {
    return nodeDepthsHelper(root, 0);
  }

  public static int nodeDepths2(BinaryTree root) {
    int sum = 0;
    List<Level> stack = new ArrayList<Level>();
    stack.add(new Level(root, 0));
    while (stack.size() > 0) {
      // like pop in JS
      Level topLevel = stack.remove(stack.size() - 1);
      BinaryTree node = topLevel.root;
      int depth = topLevel.depth;
      if (node == null)
        continue;

      sum += depth;
      stack.add(new Level(node.left, depth + 1));
      stack.add(new Level(node.right, depth + 1));
    }

    return sum;

  }

  public static class Level {
    public BinaryTree root;
    int depth;

    public Level(BinaryTree root, int depth) {
      this.root = root;
      this.depth = depth;
    }
  }

  private static int nodeDepthsHelper(BinaryTree root, int depth) {
    if (root == null)
      return 0;

    return depth + nodeDepthsHelper(root.left, depth + 1) + nodeDepthsHelper(root.right, depth + 1);
  }

  static class BinaryTree {
    int value;
    BinaryTree left;
    BinaryTree right;

    public BinaryTree(int value) {
      this.value = value;
      left = null;
      right = null;
    }
  }
}
