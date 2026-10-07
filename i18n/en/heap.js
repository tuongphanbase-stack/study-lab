// English strings that heap.html's own script builds at runtime.
// Static English text stays in the HTML; i18n/vi/heap.js holds the Vietnamese.
(window.STUDY_LAB_I18N_DATA = window.STUDY_LAB_I18N_DATA || []).push({
  lang: 'en',
  page: 'heap',
  strings: {
    heapEmpty: 'heap is empty',
    empty: 'empty',
    emptyHeap: 'empty heap',
    cmpParent: 'comparing new value at index {i} with parent at index {p}',
    checkChildren: 'checking children of index {i} for the smaller value',
    inserted: 'inserted {v} at the end, now sifting up',
    restored: 'done — heap property restored',
    extracting: 'extracting min ({m}) from the root',
    extracted: 'extracted <b>{m}</b> — heap property restored',
    ready: 'starting heap ready — try insert or extract-min'
  }
});
