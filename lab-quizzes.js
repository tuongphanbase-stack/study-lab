// Three check-your-understanding questions per lesson.
// Each: {q, options, answer (index into options), why}
(function (root) {
  'use strict';
  var Q = {
    'pathfinding': [
      { q: 'On a grid where every step costs the same, which algorithm finds a shortest path while exploring the fewest cells (given a good heuristic)?', options: ['DFS', 'BFS', 'A*', 'Random walk'], answer: 2, why: 'A* expands cells in order of cost-so-far + estimated cost-to-goal, so a good (admissible) heuristic steers it straight at the goal. BFS also finds a shortest path but explores in every direction.' },
      { q: 'Why can DFS return a path that is not the shortest?', options: ['It visits cells twice', 'It commits to one direction as deep as possible before trying others', 'It ignores walls', 'It only works on trees'], answer: 1, why: 'DFS follows one branch to the end before backtracking, so the first path it reaches the goal by can be long and winding.' },
      { q: 'What does Dijkstra add over BFS?', options: ['A heuristic', 'Support for different edge weights', 'Support for negative edges', 'Lower memory use'], answer: 1, why: 'Dijkstra uses a priority queue ordered by total distance, so it handles non-negative edge weights. With all weights equal it behaves like BFS.' }
    ],
    'searching': [
      { q: 'What must be true for binary search to work?', options: ['The array is sorted', 'The array has no duplicates', 'The array length is a power of 2', 'The values are numbers'], answer: 0, why: 'Binary search discards half the range each step based on a comparison, which is only valid if the data is sorted.' },
      { q: 'About how many comparisons does binary search need on 1,000,000 sorted items in the worst case?', options: ['~20', '~1,000', '~500,000', '~1,000,000'], answer: 0, why: 'log₂(1,000,000) ≈ 20. Each comparison halves the remaining range.' },
      { q: 'When is linear search the better choice?', options: ['Never', 'On small or unsorted data that is searched once', 'On huge sorted arrays', 'When there are duplicates'], answer: 1, why: 'Sorting costs O(n log n). For a single lookup in unsorted (or tiny) data, an O(n) scan is cheaper.' }
    ],
    'sorting-comparison': [
      { q: 'Which sort has O(n log n) worst-case time AND is stable?', options: ['Quicksort', 'Merge sort', 'Heapsort', 'Selection sort'], answer: 1, why: 'Merge sort is always O(n log n) and keeps equal elements in their original order. Quicksort can degrade to O(n²); heapsort is not stable.' },
      { q: 'What is insertion sort’s running time on an already-sorted array?', options: ['O(1)', 'O(n)', 'O(n log n)', 'O(n²)'], answer: 1, why: 'Each element is compared once with its left neighbour and stays put, so it is a single linear pass.' },
      { q: 'What causes quicksort’s O(n²) worst case?', options: ['Too many duplicates only', 'Pivots that repeatedly split the array very unevenly', 'Recursion depth limits', 'Using an in-place partition'], answer: 1, why: 'If the pivot is always the smallest or largest element (e.g. first-element pivot on sorted input), each partition removes just one item.' }
    ],
    'recursion': [
      { q: 'Why is naive recursive Fibonacci so slow?', options: ['Recursion is always slow', 'It recomputes the same subproblems exponentially many times', 'It uses floating point', 'It has no base case'], answer: 1, why: 'fib(n) calls fib(n-1) and fib(n-2), which overlap heavily, giving roughly O(2ⁿ) calls. Memoization makes it O(n).' },
      { q: 'What happens without a reachable base case?', options: ['It returns 0', 'Infinite recursion until the call stack overflows', 'It becomes iterative', 'The compiler adds one'], answer: 1, why: 'Every call pushes a new stack frame; with no stopping point the stack eventually overflows.' },
      { q: 'In N-Queens backtracking, what happens when a queen can’t be placed in any column of the current row?', options: ['Restart from scratch', 'Undo the previous row’s choice and try its next column', 'Place it anyway', 'Skip the row'], answer: 1, why: 'Backtracking returns to the last decision point, undoes it, and tries the next option there.' }
    ],
    'bitwise': [
      { q: 'What is 0b1100 XOR 0b1010?', options: ['0b1000', '0b1110', '0b0110', '0b0010'], answer: 2, why: 'XOR is 1 where the bits differ: 1100 ⊕ 1010 = 0110.' },
      { q: 'For a non-negative integer, what does x << 1 equal?', options: ['x / 2', 'x * 2', 'x + 1', 'x²'], answer: 1, why: 'Shifting left by one moves every bit up a place, doubling the value (as long as it doesn’t overflow).' },
      { q: 'What does x & (x - 1) == 0 test for (x > 0)?', options: ['x is even', 'x is a power of two', 'x is odd', 'x is negative'], answer: 1, why: 'A power of two has exactly one 1 bit; subtracting 1 flips it and all lower bits, so the AND is 0.' }
    ],
    'big-number-exponentiation': [
      { q: 'How many multiplications does fast (square-and-multiply) exponentiation need for aⁿ?', options: ['O(n)', 'O(log n)', 'O(√n)', 'O(n²)'], answer: 1, why: 'Each step squares the base and halves the exponent, so it takes about log₂ n steps.' },
      { q: 'Using square-and-multiply, how is a¹³ built? (13 = 1101 in binary)', options: ['a⁸·a⁴·a¹', 'a⁸·a⁴·a²', 'a¹⁰·a³', 'a¹²·a'], answer: 0, why: 'The 1 bits of 1101 are the 8, 4 and 1 places, so a¹³ = a⁸ · a⁴ · a¹.' },
      { q: 'Why take the modulus after every multiplication in modular exponentiation?', options: ['It is required for correctness only at the end', 'It keeps intermediate numbers small', 'It makes the result exact', 'It avoids negative numbers'], answer: 1, why: '(a·b) mod m = ((a mod m)(b mod m)) mod m, so reducing each step gives the same answer without huge intermediate values.' }
    ],
    'data-structures': [
      { q: 'Which structure is last-in, first-out (LIFO)?', options: ['Queue', 'Stack', 'Linked list', 'Binary search tree'], answer: 1, why: 'A stack pops the most recently pushed item first, like a stack of plates.' },
      { q: 'What is the cost of inserting at the head of a singly linked list?', options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'], answer: 0, why: 'You create a node pointing to the old head and update the head pointer; no traversal is needed.' },
      { q: 'An in-order traversal of a binary search tree visits keys in what order?', options: ['Insertion order', 'Sorted order', 'Reverse insertion order', 'Level by level'], answer: 1, why: 'Left subtree < node < right subtree, so left-node-right visits keys in ascending order.' }
    ],
    'trie': [
      { q: 'Looking up a word of length L in a trie takes about…', options: ['O(1)', 'O(L)', 'O(log n) where n = number of words', 'O(n)'], answer: 1, why: 'You follow one edge per character, independent of how many words are stored.' },
      { q: 'How does a trie distinguish the word "car" from just a prefix of "card"?', options: ['It stores lengths', 'A node is flagged as end-of-word', 'It stores words in leaves only', 'It cannot'], answer: 1, why: 'Each node has an end-of-word marker; "car" is a word only if its last node is marked.' },
      { q: 'Which task is a trie especially good at?', options: ['Finding the median', 'Autocomplete: all words with a given prefix', 'Sorting numbers', 'Shortest paths'], answer: 1, why: 'All words sharing a prefix live under the same node, so you walk to it and list its subtree.' }
    ],
    'heap': [
      { q: 'In a min-heap, where is the smallest element?', options: ['A random leaf', 'The root', 'The last array slot', 'The leftmost leaf'], answer: 1, why: 'The heap property (parent ≤ children) puts the minimum at the root, index 0.' },
      { q: 'For a node at array index i (0-based), where is its left child?', options: ['i + 1', '2i', '2i + 1', 'i / 2'], answer: 2, why: 'Children of i are at 2i+1 and 2i+2; the parent of i is at ⌊(i−1)/2⌋.' },
      { q: 'How long does extract-min take?', options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'], answer: 1, why: 'Move the last element to the root, then sift it down at most the tree height, which is log n.' }
    ],
    'union-find': [
      { q: 'What does find(x) return?', options: ['The size of x’s set', 'The representative (root) of x’s set', 'All members of the set', 'x’s parent only'], answer: 1, why: 'find follows parent pointers up to the root, which identifies the set.' },
      { q: 'What does path compression do?', options: ['Deletes unused nodes', 'Points visited nodes directly at the root during find', 'Merges the two smallest sets', 'Sorts the parent array'], answer: 1, why: 'After a find, every node on the path points straight at the root, so later finds are almost O(1).' },
      { q: 'Union-find is the key structure in which algorithm?', options: ['Dijkstra', 'Kruskal’s minimum spanning tree', 'Binary search', 'Topological sort'], answer: 1, why: 'Kruskal adds the cheapest edge that doesn’t form a cycle; union-find checks whether both ends are already connected.' }
    ],
    'hashtable': [
      { q: 'What is a hash collision?', options: ['Two keys hash to the same bucket', 'A key is missing', 'The table is full', 'Two equal keys'], answer: 0, why: 'Different keys can map to the same bucket; chaining or probing handles it.' },
      { q: 'Why does a hash table resize when the load factor gets high?', options: ['To sort keys', 'To keep chains short so operations stay O(1) on average', 'To free memory', 'To change the hash function'], answer: 1, why: 'More items per bucket means longer chains and slower lookups; growing the table spreads them out again.' },
      { q: 'With chaining, what is the worst-case lookup time?', options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'], answer: 2, why: 'If every key lands in the same bucket, a lookup scans one chain of length n.' }
    ],
    'lru-cache': [
      { q: 'When an LRU cache is full and a new item arrives, what is evicted?', options: ['The newest item', 'The least recently used item', 'A random item', 'The largest item'], answer: 1, why: 'LRU = Least Recently Used: the item untouched for the longest time goes first.' },
      { q: 'Which pair of structures gives O(1) get and put?', options: ['Array + binary search', 'Hash map + doubly linked list', 'Heap + stack', 'Trie + queue'], answer: 1, why: 'The hash map finds a node instantly; the doubly linked list moves it to the front or removes the tail in O(1).' },
      { q: 'What happens to an item’s position on a successful get?', options: ['Nothing', 'It moves to the most-recently-used end', 'It is evicted', 'It moves to the least-recently-used end'], answer: 1, why: 'Reading counts as a use, so the item becomes the most recently used.' }
    ],
    'segment-tree': [
      { q: 'What does a segment tree make fast?', options: ['Sorting', 'Range queries (like sum or min of a[l..r]) with point updates', 'String matching', 'Shortest paths'], answer: 1, why: 'Each node stores the answer for a segment, so any range is combined from O(log n) nodes.' },
      { q: 'Time for a range query and for a point update?', options: ['O(1) and O(n)', 'O(log n) and O(log n)', 'O(n) and O(1)', 'O(n log n) both'], answer: 1, why: 'Both walk down (or up) one root-to-leaf path plus a few siblings, about log n nodes.' },
      { q: 'Roughly how much memory does an array-based segment tree use for n elements?', options: ['n', 'up to about 4n', 'n²', 'log n'], answer: 1, why: 'A full binary tree over n leaves needs under 2n nodes when n is a power of two; 4n is the safe array size in general.' }
    ],
    'bloom-filter': [
      { q: 'A Bloom filter says "possibly in set". What can you conclude?', options: ['It is definitely in the set', 'It may be a false positive', 'It is definitely not in the set', 'The filter is full'], answer: 1, why: 'All k bits may have been set by other items, so a "yes" can be wrong.' },
      { q: 'A Bloom filter says "not in set". What can you conclude?', options: ['It might still be in the set', 'It is definitely not in the set', 'It was deleted', 'Nothing'], answer: 1, why: 'If any of the k bits is 0, the item was never added; there are no false negatives.' },
      { q: 'Why can’t a basic Bloom filter delete items?', options: ['Bits are shared by many items, so clearing one could remove others', 'Deletion is O(n)', 'Hash functions are one-way', 'It can, easily'], answer: 0, why: 'Clearing a bit might also "remove" other items that set it, causing false negatives. Counting Bloom filters solve this.' }
    ],
    'graph-algorithms': [
      { q: 'Why does Dijkstra fail with negative edge weights?', options: ['It loops forever', 'A node it finalised early could later get a shorter path', 'It needs a heuristic', 'It only works on trees'], answer: 1, why: 'Dijkstra assumes a node’s distance is final when popped; a negative edge found later could improve it. Bellman-Ford handles this.' },
      { q: 'A minimum spanning tree of a connected graph with V vertices has how many edges?', options: ['V', 'V − 1', 'E', '2V'], answer: 1, why: 'A tree connecting V vertices always has exactly V − 1 edges.' },
      { q: 'In what order does Kruskal consider edges?', options: ['Random', 'By increasing weight', 'By decreasing weight', 'BFS order'], answer: 1, why: 'It greedily takes the cheapest edge that doesn’t create a cycle.' }
    ],
    'topological-sort': [
      { q: 'A topological order exists only for which graphs?', options: ['Undirected graphs', 'Directed acyclic graphs (DAGs)', 'Complete graphs', 'Trees only'], answer: 1, why: 'A cycle means some task must come before itself, so no valid order exists.' },
      { q: 'In Kahn’s algorithm, which nodes are processed first?', options: ['Nodes with the most edges', 'Nodes with in-degree 0', 'Leaves', 'Random nodes'], answer: 1, why: 'Nodes with no incoming edges have no prerequisites, so they can go first.' },
      { q: 'How does Kahn’s algorithm detect a cycle?', options: ['It overflows', 'Fewer than V nodes end up in the output', 'A node has in-degree 1', 'It can’t'], answer: 1, why: 'Nodes on a cycle never reach in-degree 0, so they are never output.' }
    ],
    'consistent-hashing': [
      { q: 'What is the main benefit of consistent hashing over hash(key) mod N?', options: ['Faster hashing', 'Adding/removing a server moves only about 1/N of the keys', 'Perfect balance', 'No collisions'], answer: 1, why: 'With mod N, changing N remaps almost every key. On a ring, only keys between the changed server and its neighbour move.' },
      { q: 'Which server owns a key on the ring?', options: ['The closest server counter-clockwise', 'The first server clockwise from the key’s position', 'A random server', 'The server with fewest keys'], answer: 1, why: 'Walk clockwise from the key’s hash; the first server you meet owns it.' },
      { q: 'Why use virtual nodes?', options: ['To encrypt keys', 'To spread each server around the ring for better balance', 'To reduce memory', 'To avoid hashing'], answer: 1, why: 'Each physical server gets many points on the ring, smoothing out uneven gaps.' }
    ],
    'sliding-window': [
      { q: 'What makes sliding window O(n) instead of O(n·k)?', options: ['Sorting first', 'Updating the window result incrementally as one element enters and one leaves', 'Using recursion', 'Binary search'], answer: 1, why: 'Instead of recomputing each window from scratch, add the new element and remove the old one.' },
      { q: 'For "longest substring without repeating characters", when does the window shrink?', options: ['Every step', 'When the new character is already in the window', 'Never', 'When the window reaches size k'], answer: 1, why: 'Move the left edge past the earlier copy of the repeated character, then continue.' },
      { q: 'Each element is added and removed at most how many times?', options: ['Once each', 'k times', 'n times', 'log n times'], answer: 0, why: 'Both edges only move forward, so every element enters once and leaves once: O(n) total.' }
    ],
    'dp': [
      { q: 'Which two properties make a problem a good fit for dynamic programming?', options: ['Sorted input and small n', 'Overlapping subproblems and optimal substructure', 'Recursion and randomness', 'Greedy choice and no cycles'], answer: 1, why: 'Subproblems repeat (so caching helps) and the best answer is built from best sub-answers.' },
      { q: 'Time complexity of the classic 0/1 knapsack table with n items and capacity W?', options: ['O(n)', 'O(2ⁿ)', 'O(n·W)', 'O(W)'], answer: 2, why: 'The table has n × W cells, each filled in O(1).' },
      { q: 'In edit distance, what does each cell dp[i][j] represent?', options: ['Characters matched so far', 'Minimum edits to turn the first i chars of A into the first j chars of B', 'Length of the longest common substring', 'Number of insertions only'], answer: 1, why: 'Each cell takes the cheapest of insert, delete or replace from neighbouring cells.' }
    ],
    'regex': [
      { q: 'What does the regex a* match?', options: ['Exactly one "a"', 'Zero or more "a"s', 'One or more "a"s', 'Any character'], answer: 1, why: '* means "zero or more of the previous item", so it even matches the empty string.' },
      { q: 'What does . match (by default)?', options: ['A literal dot only', 'Any single character except a newline', 'The end of a line', 'Nothing'], answer: 1, why: 'The dot is a wildcard for one character; escape it (\\.) to match a real dot.' },
      { q: 'Why can a naive backtracking regex engine be very slow on patterns like (a*)*b?', options: ['It caches too much', 'It can try exponentially many ways to split the input', 'It reads the input twice', 'Regex is always slow'], answer: 1, why: 'Nested quantifiers give many equivalent ways to match, and a failing match retries them all ("catastrophic backtracking").' }
    ],
    'fsm': [
      { q: 'What defines a finite state machine?', options: ['A stack and a queue', 'A finite set of states, transitions on inputs, a start state and accepting states', 'An infinite tape', 'A set of variables'], answer: 1, why: 'Those parts fully describe how the machine reacts to each input symbol.' },
      { q: 'What is the difference between a DFA and an NFA?', options: ['DFAs can recognise more languages', 'In a DFA each state has exactly one transition per symbol; an NFA can have several or none', 'NFAs have no start state', 'There is none'], answer: 1, why: 'DFAs and NFAs recognise the same languages; an NFA can always be converted to a DFA.' },
      { q: 'Which can a finite state machine NOT recognise?', options: ['Binary strings with an even number of 1s', 'Strings with balanced parentheses of any depth', 'Strings ending in "ab"', 'Strings that contain "101"'], answer: 1, why: 'Arbitrary nesting needs unbounded memory (a stack); an FSM only has a fixed number of states.' }
    ],
    'huffman-coding': [
      { q: 'Which symbols get the shortest Huffman codes?', options: ['The rarest', 'The most frequent', 'Alphabetically first', 'All codes are equal length'], answer: 1, why: 'Frequent symbols end up near the root, so they get fewer bits.' },
      { q: 'Why can Huffman codes be decoded without separators?', options: ['They are fixed length', 'No code is a prefix of another (prefix-free)', 'They use a stop bit', 'They are sorted'], answer: 1, why: 'Symbols sit only at leaves, so reading bits down the tree reaches exactly one symbol.' },
      { q: 'How is the Huffman tree built?', options: ['Split the alphabet in half repeatedly', 'Repeatedly merge the two least frequent nodes', 'Sort codes by length', 'Randomly'], answer: 1, why: 'A min-heap pops the two smallest weights, merges them, and pushes the sum until one tree remains.' }
    ]
  };
  root.STUDY_LAB_QUIZZES = Q;
  if (typeof module !== 'undefined' && module.exports) module.exports = Q;
})(typeof window !== 'undefined' ? window : globalThis);
