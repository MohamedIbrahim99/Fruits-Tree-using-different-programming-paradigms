# Fruits-Tree-using-different-programming-paradigms
- Fruits Tree using three different languages with different programming paradigms.

- Implement the same structure -fruits tree- using different programming paradigms to show the difference.

- In this implementation, we leveraged different features from multiple programming paradigms.

- Overview :

We need to implement a Binary Search Tree (BST). The nodes of the tree are of an abstract type named Fruit. This abstract type is the parent class of all types that can be in the tree such as Apple, Orange, Banana, Avocado, … etc.

It is possible to have multiple objects of the same fruit type in the tree (e.g., 3 applies, 10 bananas, … etc.), and we assume that our imaginary tree can have multiple fruit types at the same time (e.g., a mixture of apples, oranges, bananas, …. etc.).

It is encouraged that you have a hierarchy of fruits types according to their similar features. For example: both Apple and Avocado are subtypes of Oval-Shaped fruit. Also Blackberries, Elderberries, Gooseberries & Blueberries are subtypes of Berry. Furthermore, Berry and Grapes are subtypes of Tiny-Fruit.

The only common feature of all the fruits is the weight. The BST uses the weight attribute to order its nodes where at a given node all the nodes at its right side are heavier than it, and all nodes at its left are lighter than it.

- Requirements :

It is required to implement the Fruits Tree using three different languages :

C++ as an example of Class-based Object Oriented Language
JavaScript as an example of Prototype-based Object Oriented Language
Scala as an example of Functional Programming Language
In the three implementations you need to provide the following operations:

Iterate(); a method that prints the in-order traversal of the tree.
filterByType(Type): a method that prints the nodes of a given fruit type ordered by. weight. For example, get an ordered list of all apples in the tree
filterByWeight(Weight): a method that prints the nodes that have weight larger than the given amount ordered by wright. For example, get an ordered list of all fruits in the tree that are heavier than 500 grams.
magnifyByType(Type, Weight): a method that increases the weight of the nodes of a given fruit type by the given amount. For example, add 200 grams to all bananas in the tree.
findHeaviest(): a method that finds the node with the greatest weight in the tree.
findLightest(): a method that finds the node with the least weight in the tree.
- It is required that you show case of using the following features in your implementation as many as possible:

Multi-inheritance

Overriding methods

Delegation

Higher order functions
