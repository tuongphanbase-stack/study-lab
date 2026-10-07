// English strings that dp.html's own script builds at runtime.
// Static English text stays in the HTML; i18n/vi/dp.js holds the Vietnamese.
(window.STUDY_LAB_I18N_DATA = window.STUDY_LAB_I18N_DATA || []).push({
  lang: 'en',
  page: 'dp',
  strings: {
    items: 'items (weight/value): {list}',
    baseCases: 'base cases: dp[0]=0, dp[1]=1',
    fibDone: 'done — fib({n}) = <b>{v}</b>',
    itemCap: 'item\\cap',
    ksTake: 'item {i} (w{w}/v{v}), cap {c}: max(skip={skip}, take={take})',
    ksHeavy: 'item {i} (w{w}/v{v}), cap {c}: too heavy, carry forward {keep}',
    ksDone: 'done — best value with capacity {cap}: <b>{v}</b>',
    edSame: '\'{a}\' == \'{b}\' → copy diagonal: {d}',
    edDiff: '\'{a}\' ≠ \'{b}\' → 1 + min(delete {del}, insert {ins}, replace {d})',
    edDone: 'done — edit distance between "{a}" and "{b}": <b>{v}</b>'
  }
});
