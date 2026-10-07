# study://lab

A hub page linking to twenty-two small, single-file, dependency-free visualizers — each one takes a CS concept that's usually taught with static diagrams and makes it interactive.

**[View it live →](https://tuongphantrue.github.io/study-lab/)**

## What's inside

| Page | Covers |
|---|---|
| `pathfinding.html` | BFS, DFS, Dijkstra &amp; A* racing across a grid you draw walls on |
| `searching.html` | Linear vs. binary search, step by step, side by side |
| `data-structures.html` | Stack, queue, linked list &amp; binary tree — push, pop, insert, live |
| `recursion.html` | The call stack for fibonacci, plus N-Queens backtracking |
| `graph-algorithms.html` | Dijkstra's shortest path &amp; Kruskal's MST on a node-edge graph |
| `hashtable.html` | Buckets, hash collisions, chaining &amp; live resizing |
| `regex.html` | Step through a pattern matching a string, character by character |
| `dp.html` | Memoization tables filling in live: fibonacci, knapsack, edit distance |
| `bitwise.html` | AND / OR / XOR / shifts, one bit at a time, on an 8-bit grid |
| `sorting-comparison.html` | Quicksort, merge sort &amp; heap sort racing on the same array |
| `trie.html` | A prefix tree with live autocomplete |
| `heap.html` | Binary min-heap — insert (sift-up) and extract-min (sift-down) |
| `union-find.html` | Union groups together, watch path compression flatten the tree |
| `sliding-window.html` | Two pointers finding the longest substring without repeats |
| `topological-sort.html` | Kahn's algorithm scheduling tasks on a dependency DAG |
| `lru-cache.html` | Hash map + doubly linked list, eviction on overflow |
| `segment-tree.html` | Range-sum queries in log time via a precomputed tree |
| `bloom-filter.html` | Multiple hash functions setting bits — no keys stored |
| `consistent-hashing.html` | Servers &amp; keys sharing a ring, minimal remap on server changes |
| `big-number-exponentiation.html` | Exponentiation by squaring, walking the exponent's binary digits |
| `fsm.html` | A turnstile finite state machine — states plus a transition table |
| `huffman-coding.html` | Building a compression tree from character frequencies |

`index.html` is the hub — a light, card-based landing page that links out to each page above.

No frameworks, no build step, no dependencies other than Google Fonts. Every page is its own self-contained HTML file with its `<style>` and `<script>` inline, same approach as [big-o-explained](https://github.com/tuongphantrue/big-o-explained) and [sorting-algorithms](https://github.com/tuongphantrue/sorting-algorithms).

## Running it locally

Just open `index.html` in a browser — no server or install required. Every link on the hub is a relative path to another file in the same folder, so the whole thing works straight off disk.

## Deploying with GitHub Pages

1. Go to **Settings → Pages** on [github.com/tuongphantrue/study-lab](https://github.com/tuongphantrue/study-lab).
2. Under **Source**, choose the branch you pushed to (usually `main`) and the `/ (root)` folder.
3. Save. The site is live at:

```
https://tuongphantrue.github.io/study-lab/
```

## Adding another topic

1. Copy any existing page as a starting template — they all share the same color/type tokens at the top of the `<style>` block (`--bg`, `--card`, `--border`, `--accent`, `--accent-dark`, `--good`, `--mono`, etc.) so a new page will look consistent for free.
2. Build the visualization in the `<script>` block — most pages follow the same shape: render initial state, run an algorithm step by step with `await sleep(ms)` between steps, update the DOM after each step.
3. Add a card for it in `index.html`'s grid, linking to the new file.

## License

Feel free to use, modify, and share.
