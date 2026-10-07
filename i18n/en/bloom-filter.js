// English strings that bloom-filter.html's own script builds at runtime.
// Static English text stays in the HTML; i18n/vi/bloom-filter.js holds the Vietnamese.
(window.STUDY_LAB_I18N_DATA = window.STUDY_LAB_I18N_DATA || []).push({
  lang: 'en',
  page: 'bloom-filter',
  strings: {
    initial: 'bit array of size 24, 3 hash functions',
    hashing: 'hashing "{k}" → positions {p}',
    inserted: 'inserted "{k}" — set bits at {p}',
    checking: 'checking "{k}" → positions {p}',
    maybeTrue: 'all bits set — "{k}" is <b>probably present</b> (and it really was inserted)',
    falsePositive: 'all bits set — "{k}" is <b>probably present</b>... but it was never inserted! This is a false positive caused by bit overlap with other keys.',
    definitelyNot: 'at least one bit is 0 — "{k}" was <b>definitely never inserted</b>'
  }
});
