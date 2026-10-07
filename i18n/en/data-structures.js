// English strings that data-structures.html's own script builds at runtime.
// Static English text stays in the HTML; i18n/vi/data-structures.js holds the Vietnamese.
(window.STUDY_LAB_I18N_DATA = window.STUDY_LAB_I18N_DATA || []).push({
  lang: 'en',
  page: 'data-structures',
  strings: {
    hint_stack: 'push(v) adds to the top · pop() removes from the top — LIFO',
    hint_queue: 'enqueue(v) adds to the back · dequeue() removes from the front — FIFO',
    hint_list: 'insert(v) appends a new node · remove() drops the tail node · each box points to the next',
    hint_tree: 'insert(v) walks left if smaller, right if larger, until it finds an empty spot (binary search tree)',
    emptyNull: 'empty → null',
    emptyTree: 'empty tree'
  }
});
