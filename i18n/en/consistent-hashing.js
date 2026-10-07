// English strings that consistent-hashing.html's own script builds at runtime.
// Static English text stays in the HTML; i18n/vi/consistent-hashing.js holds the Vietnamese.
(window.STUDY_LAB_I18N_DATA = window.STUDY_LAB_I18N_DATA || []).push({
  lang: 'en',
  page: 'consistent-hashing',
  strings: {
    initial: 'servers and keys share one ring — a key belongs to the next server clockwise',
    added: 'added server {n} — only keys between it and the previous server on the ring get reassigned',
    removed: 'removed {n} — its keys fall to the next server clockwise; nothing else moves',
    maps: 'key {k} maps to server {s} (next clockwise on the ring)',
    keyAdded: 'key {k} added — add a server to see where it maps'
  }
});
