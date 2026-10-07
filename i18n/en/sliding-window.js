// English strings that sliding-window.html's own script builds at runtime.
// Static English text stays in the HTML; i18n/vi/sliding-window.js holds the Vietnamese.
(window.STUDY_LAB_I18N_DATA = window.STUDY_LAB_I18N_DATA || []).push({
  lang: 'en',
  page: 'sliding-window',
  strings: {
    rightMoves: 'right moves to index {i} (\'{c}\')',
    jump: '\'{c}\' already in window at index {at} — left jumps from {from} to {to}',
    window: 'window [{l}, {r}] has length {len} — best so far: {best}',
    done: 'done — longest substring without repeats: "<b>{s}</b>" (length {len})'
  }
});
