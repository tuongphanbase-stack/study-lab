// English strings that lru-cache.html's own script builds at runtime.
// Static English text stays in the HTML; i18n/vi/lru-cache.js holds the Vietnamese.
(window.STUDY_LAB_I18N_DATA = window.STUDY_LAB_I18N_DATA || []).push({
  lang: 'en',
  page: 'lru-cache',
  strings: {
    cacheEmpty: 'cache is empty',
    empty: 'empty',
    hit: 'cache hit on "{k}" — moving it to the front (most recent)',
    miss: 'cache miss on "{k}" — inserting at the front',
    evict: 'cache full — evicting least-recently-used: "<b>{k}</b>"',
    order: 'order (most → least recent): <b>{o}</b>'
  }
});
