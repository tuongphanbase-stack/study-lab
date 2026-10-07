// English strings that hashtable.html's own script builds at runtime.
// Static English text stays in the HTML; i18n/vi/hashtable.js holds the Vietnamese.
(window.STUDY_LAB_I18N_DATA = window.STUDY_LAB_I18N_DATA || []).push({
  lang: 'en',
  page: 'hashtable',
  strings: {
    typeKey: 'type a key and hit insert',
    hashLine: 'hash("{key}") = <b>{raw}</b> → bucket <b>{idx}</b> = {raw} % {size}',
    resizing: 'load factor exceeded 0.75 — resizing to <b>{size}</b> buckets and rehashing everything',
    empty: 'empty',
    stats: 'size: <b>{s}</b> · entries: <b>{e}</b> · load factor: <b>{lf}</b>'
  }
});
