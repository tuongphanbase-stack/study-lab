// English strings that union-find.html's own script builds at runtime.
// Static English text stays in the HTML; i18n/vi/union-find.js holds the Vietnamese.
(window.STUDY_LAB_I18N_DATA = window.STUDY_LAB_I18N_DATA || []).push({
  lang: 'en',
  page: 'union-find',
  strings: {
    same: 'already in the same group (root {r}) — no union needed',
    unioned: 'unioned: root {a} now points to root {b}',
    walking: 'walking up: {path}{root}',
    rootIs: ' (root = {r})',
    found: 'find({x}) = <b>{r}</b> — path compressed, every visited node now points directly at the root'
  }
});
