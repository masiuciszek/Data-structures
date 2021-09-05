import java.util.*;

public class Main {
  public static class BinaryTree {
    int value;
    BinaryTree left;
    BinaryTree right;

    public BinaryTree(int value){
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  public static List<Integer> branchSums(BinaryTree root){
    ArrayList<Integer> xs = new ArrayList<>();

    calculateBranchSum(root,0,xs);

    return xs;
  }

  public static void calculateBranchSum(BinaryTree node, int sum, ArrayList<Integer> xs){
    if(node == null) return;
    int currentSum = node.value + sum;
    if(node.left == null && node.right == null){
      xs.add(currentSum);
      return;
    }
    calculateBranchSum(node.left, currentSum, xs);
    calculateBranchSum(node.right, currentSum, xs);
  }
}
