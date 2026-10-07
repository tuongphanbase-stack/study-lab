// English strings that regex.html's own script builds at runtime.
// Static English text stays in the HTML; i18n/vi/regex.js holds the Vietnamese.
(window.STUDY_LAB_I18N_DATA = window.STUDY_LAB_I18N_DATA || []).push({
  lang: 'en',
  page: 'regex',
  strings: {
    trying: 'trying <b>{tok}</b> to consume {n} char(s) (positions {from}–{to})',
    matches: 'token <b>{tok}</b> matches "<b>{c}</b>" at position {p}',
    noMatch: 'token <b>{tok}</b> does not match position {p} — dead end',
    attempt: 'attempting match starting at position <b>{p}</b>',
    found: '✓ pattern found starting at position {p}',
    none: '✗ no match anywhere in the string'
  }
});
