# study://lab

A hub page linking to twenty-two small, single-file, dependency-free visualizers — each one takes a CS concept that's usually taught with static diagrams and makes it interactive.

**[View it live →](https://tuongphanbase-stack.github.io/study-lab/)**

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

No frameworks, no build step, no dependencies other than Google Fonts. Every page is its own self-contained HTML file with its `<style>` and `<script>` inline, same approach as [big-o-explained](https://github.com/tuongphanbase-stack/big-o-explained) and [sorting-algorithms](https://github.com/tuongphanbase-stack/sorting-algorithms).

## Running it locally

Just open `index.html` in a browser — no server or install required. Every link on the hub is a relative path to another file in the same folder, so the whole thing works straight off disk.

## Deploying with GitHub Pages

1. Go to **Settings → Pages** on [github.com/tuongphanbase-stack/study-lab](https://github.com/tuongphanbase-stack/study-lab).
2. Under **Source**, choose the branch you pushed to (usually `main`) and the `/ (root)` folder.
3. Save. The site is live at:

```
https://tuongphanbase-stack.github.io/study-lab/
```

## Adding another topic

1. Copy any existing page as a starting template — they all share the same color/type tokens at the top of the `<style>` block (`--bg`, `--card`, `--border`, `--accent`, `--accent-dark`, `--good`, `--mono`, etc.) so a new page will look consistent for free.
2. Build the visualization in the `<script>` block — most pages follow the same shape: render initial state, run an algorithm step by step with `await sleep(ms)` between steps, update the DOM after each step.
3. Add a card for it in `index.html`'s grid, linking to the new file.
4. Translate it: mark text with `data-i18n` attributes, add `i18n/vi/<page>.js` (and `i18n/en/<page>.js` for strings the script builds), then run the tests below — they list anything missing.

## License

Feel free to use, modify, and share.

## Progress and quizzes

`lab.js`, `lab-quizzes.js` and `lab.css` are loaded on every page:

- **Progress tracking:** a ✓ beside finished lessons in the sidebar, a
  progress bar, and a "Continue: next lesson" button on the overview page.
  Progress is saved in your browser (nothing is sent anywhere).
- **Quiz at the end of each lesson:** 3 questions with an explanation for
  every answer. Getting all 3 right marks the lesson as done (or use
  "Mark lesson as done").
- **Next lesson** button at the end of every lesson.
- Lesson pages now fit on phone screens.

Run `node tests/lab-quizzes.test.js` to check the quiz data and `node tests/i18n.test.js` to check the translations.

## Languages: English | Tiếng Việt

Every page has an **EN | VI** toggle in the header. All text switches in place — lesson prose, buttons, live
status messages, code comments (and the explanation bar under the code), quizzes — without reloading, so
progress, quiz answers and the running visualization are kept.

- The choice is saved in the browser. With no saved choice, Vietnamese is used when the browser language is `vi`.
- Shareable links: add `?lang=vi` or `?lang=en` to any page URL.
- How it's built (no dependencies, still works straight off disk):
  - `i18n/i18n.js` — the small i18n layer: picks the language, draws the toggle, swaps text, sets `<html lang>`.
  - `i18n/en.js`, `i18n/vi.js` — UI strings shared by every page (header, sidebar, progress, quiz UI).
  - `i18n/vi/<page>.js` — each page's Vietnamese content, keyed by section id (`title`, `sub`, `explain`, …),
    plus its code-comment translations. English stays in the HTML; `i18n/en/<page>.js` only holds strings that
    a page's script builds at runtime.
  - Quiz translations sit next to the English in `lab-quizzes.js` (`vi: {q, options, why}`) and share the same
    answer index, so scores are the same in both languages.
- To add another language: add `i18n/<code>.js` and `i18n/<code>/<page>.js` files, a `<code>: {…}` block per
  quiz question, list the new files in each page's `<head>`, and add the code to `LANGS`/`TRANSLATIONS` in the tests.

