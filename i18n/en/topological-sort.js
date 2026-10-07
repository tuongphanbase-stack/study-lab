// English strings that topological-sort.html's own script builds at runtime.
// Static English text stays in the HTML; i18n/vi/topological-sort.js holds the Vietnamese.
(window.STUDY_LAB_I18N_DATA = window.STUDY_LAB_I18N_DATA || []).push({
  lang: 'en',
  page: 'topological-sort',
  strings: {
    cycle: 'cycle detected — no valid order',
    readyNow: 'ready now (in-degree 0): {list}',
    scheduled: 'scheduled "{n}" — decrementing in-degree of its dependents',
    done: 'done — valid order: <b>{o}</b>'
  }
});
