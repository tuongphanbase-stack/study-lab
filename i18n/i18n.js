// Small i18n layer shared by every page. No dependencies, no build step.
//
// Language data is plain JS (so the site still works straight off disk) and is
// loaded *before* this file. Each data file pushes one entry:
//   { lang: 'vi', name: 'Tiếng Việt', short: 'VI', strings: {...} }      site-wide UI strings (i18n/vi.js)
//   { lang: 'vi', page: 'searching', strings: {...}, comments: {...} }  one page (i18n/vi/searching.js)
// English is the source language: the English text stays in the HTML, so the
// English files only hold strings that page scripts build at runtime.
//
// Markup:
//   data-i18n="key"                        replaces textContent
//   data-i18n-html="key"                   replaces innerHTML (prose sections, keyed by section id)
//   data-i18n-attr="title:key;placeholder:key2"
//   data-i18n-vars='{"c":0}'               values for {placeholders}
// Code comments inside .codeline elements are translated through the page's
// `comments` map (English comment text -> translation); the code itself never changes.
//
// Scripts:
//   I18N.t(key, vars)                      string in the current language
//   I18N.text(el, key|fn, vars)            set textContent now and again on every language change
//   I18N.html(el, key|fn, vars)            same for innerHTML
//   I18N.attr(el, name, key|fn, vars)      same for an attribute
//   I18N.lang(), I18N.languages(), I18N.setLang(code), I18N.onChange(fn)
(function (root) {
  'use strict';

  var SOURCE = 'en';
  var STORE_KEY = 'studylab_lang';
  var doc = root.document;
  var has = function (o, k) { return !!o && Object.prototype.hasOwnProperty.call(o, k); };

  var slug = (root.location.pathname.split('/').pop() || '').replace(/\.html$/, '') || 'index';
  var langs = {};   // code -> { name, short, strings }
  var codes = [];   // language codes in registration order (= toggle order)
  var pages = {};   // code -> { strings, comments } for *this* page

  (root.STUDY_LAB_I18N_DATA || []).forEach(function (d) {
    if (d.page) {
      if (d.page !== slug) return;
      var p = pages[d.lang] || (pages[d.lang] = { strings: {}, comments: {} });
      Object.assign(p.strings, d.strings);
      Object.assign(p.comments, d.comments);
      return;
    }
    if (!langs[d.lang]) { langs[d.lang] = { name: d.name, short: d.short, strings: {} }; codes.push(d.lang); }
    Object.assign(langs[d.lang].strings, d.strings);
  });

  /* ---------- Which language? URL ?lang= > saved choice > browser language > English ---------- */

  function norm(code) { return String(code || '').trim().toLowerCase().split(/[-_]/)[0]; }
  function supported(code) { return has(langs, code); }
  function readStored() { try { return root.localStorage.getItem(STORE_KEY); } catch (e) { return null; } }
  function store(code) { try { root.localStorage.setItem(STORE_KEY, code); } catch (e) { /* storage blocked */ } }
  function urlLang() {
    try { return norm(new URLSearchParams(root.location.search).get('lang')); } catch (e) { return ''; }
  }

  var current = SOURCE;
  (function pick() {
    var fromUrl = urlLang();
    if (supported(fromUrl)) { current = fromUrl; store(fromUrl); return; }
    var saved = norm(readStored());
    if (supported(saved)) { current = saved; return; }
    var browser = norm(root.navigator && root.navigator.language);
    if (supported(browser)) current = browser;
  })();
  doc.documentElement.lang = current;
  // Hide the page until the first swap so a Vietnamese reader never sees an English flash.
  if (current !== SOURCE) doc.documentElement.classList.add('i18n-pending');

  /* ---------- Lookup ---------- */

  function lookup(lang, key) {
    var p = pages[lang];
    if (p && has(p.strings, key)) return p.strings[key];
    var g = langs[lang];
    if (g && has(g.strings, key)) return g.strings[key];
    return undefined;
  }
  function fill(str, vars) {
    if (!vars) return String(str);
    return String(str).replace(/\{(\w+)\}/g, function (m, k) { return has(vars, k) ? String(vars[k]) : m; });
  }
  function t(key, vars) {
    var s = lookup(current, key);
    if (s === undefined) s = lookup(SOURCE, key);
    return s === undefined ? key : fill(s, vars);
  }

  /* ---------- Static markup ---------- */

  var originals = new WeakMap(); // el -> { content, attrs: {name: value} }  (English, captured on first use)
  var written = new WeakMap();   // el -> what we last wrote, so content a script replaced is never clobbered

  function varsOf(el) {
    var raw = el.getAttribute('data-i18n-vars');
    if (!raw) return null;
    try { return JSON.parse(raw); } catch (e) { return null; }
  }
  // Current language, then an English template from the dictionaries, then the English in the HTML.
  function staticValue(key, vars, original) {
    var s = lookup(current, key);
    if (s === undefined) s = lookup(SOURCE, key);
    return s === undefined ? original : fill(s, vars);
  }
  function rec(el) {
    var r = originals.get(el);
    if (!r) { r = { attrs: {} }; originals.set(el, r); }
    return r;
  }
  function highlightCode(el) {
    if (typeof root.syntaxHighlight !== 'function' || !el.closest('.explain')) return;
    Array.prototype.forEach.call(el.querySelectorAll('code'), function (c) { c.innerHTML = root.syntaxHighlight(c.textContent); });
  }

  function applyElement(el) {
    var r = rec(el);
    var key = el.getAttribute('data-i18n-html'), prop = 'innerHTML';
    if (key == null) { key = el.getAttribute('data-i18n'); prop = 'textContent'; }
    if (key != null) {
      if (r.content === undefined) r.content = el[prop];
      var last = written.get(el);
      if (last === undefined || last === el[prop]) {
        var value = staticValue(key, varsOf(el), r.content);
        if (el[prop] !== value) {
          el[prop] = value;
          if (prop === 'innerHTML') highlightCode(el);
        }
        written.set(el, el[prop]);
      }
    }
    var spec = el.getAttribute('data-i18n-attr');
    if (spec) {
      spec.split(';').forEach(function (pair) {
        var i = pair.indexOf(':');
        if (i < 0) return;
        var name = pair.slice(0, i).trim(), k = pair.slice(i + 1).trim();
        if (!has(r.attrs, name)) r.attrs[name] = el.getAttribute(name);
        el.setAttribute(name, staticValue(k, null, r.attrs[name]));
      });
    }
  }

  // Comments: try the text after each // or # marker (same rule as the pages' highlighter),
  // so "x //= 2   # move to the next bit" still finds "move to the next bit".
  var MARKER = /\/\/|#(?![a-zA-Z])/g;
  function translateComment(text, dict) {
    MARKER.lastIndex = 0;
    var m;
    while ((m = MARKER.exec(text))) {
      var start = m.index + m[0].length, rest = text.slice(start), key = rest.trim();
      if (key && has(dict, key)) {
        return text.slice(0, start) + rest.match(/^\s*/)[0] + dict[key] + rest.match(/\s*$/)[0];
      }
    }
    return null;
  }
  function applyComments() {
    var dict = (pages[current] || {}).comments || {};
    Array.prototype.forEach.call(doc.querySelectorAll('.codeline .tok-comment'), function (span) {
      var r = rec(span);
      if (r.content === undefined) r.content = span.textContent;
      var next = current === SOURCE ? r.content : (translateComment(r.content, dict) || r.content);
      if (span.textContent !== next) span.textContent = next;
    });
  }

  var sourceTitle = doc.title;
  function applyTitle() {
    if (current === SOURCE) { doc.title = sourceTitle; return; }
    var own = lookup(current, 'pageTitle');
    var lesson = lookup(current, 'lesson.' + slug);
    doc.title = own !== undefined ? own : lesson !== undefined ? lesson + ' — study://lab' : sourceTitle;
  }

  function applyStatic(scope) {
    var nodes = (scope || doc).querySelectorAll('[data-i18n],[data-i18n-html],[data-i18n-attr]');
    Array.prototype.forEach.call(nodes, applyElement);
    applyComments();
    applyTitle();
  }

  /* ---------- Bindings: content built by scripts, re-rendered on every switch ---------- */

  var bound = new Map(); // el -> { content: {fn, html}, 'attr:name': fn }

  function asFn(k, vars) { return typeof k === 'function' ? k : function () { return t(k, vars); }; }
  function renderBinding(el, slot, b) {
    if (slot === 'content') {
      var v = b.fn();
      if (b.html) { if (el.innerHTML !== v) el.innerHTML = v; } else if (el.textContent !== v) el.textContent = v;
    } else {
      el.setAttribute(slot.slice(5), b());
    }
  }
  function bind(el, slot, value) {
    if (!el) return;
    var slots = bound.get(el);
    if (!slots) { slots = {}; bound.set(el, slots); }
    slots[slot] = value;
    if (slot === 'content') {
      // A script now owns this element's content; static markup must not overwrite it.
      el.removeAttribute('data-i18n');
      el.removeAttribute('data-i18n-html');
      el.removeAttribute('data-i18n-vars');
    }
    renderBinding(el, slot, value);
  }
  function renderBindings() {
    bound.forEach(function (slots, el) {
      if (!el.isConnected) { bound.delete(el); return; }
      Object.keys(slots).forEach(function (slot) { renderBinding(el, slot, slots[slot]); });
    });
  }

  /* ---------- Switching ---------- */

  var listeners = [];

  // Keep the reader's place: remember where the element at the top of the viewport
  // sits, swap the text, then scroll so the same spot is back under the same line.
  function captureAnchor() {
    if ((root.scrollY || root.pageYOffset || 0) < 1) return null;
    var main = doc.querySelector('.main-content') || doc.body;
    var box = main.getBoundingClientRect();
    var x = Math.max(1, Math.min(root.innerWidth - 2, box.left + Math.min(box.width / 2, 240)));
    var y = Math.min(80, root.innerHeight / 3);
    var hit = doc.elementFromPoint(x, y);
    var chain = [];
    for (var n = hit; n && n !== doc.body && n !== doc.documentElement; n = n.parentElement) {
      var r = n.getBoundingClientRect();
      chain.push({ el: n, frac: r.height ? (y - r.top) / r.height : 0 });
    }
    return chain.length ? { y: y, chain: chain } : null;
  }
  function restoreAnchor(a) {
    if (!a) return;
    for (var i = 0; i < a.chain.length; i++) {
      var c = a.chain[i];
      if (!c.el.isConnected) continue;
      var r = c.el.getBoundingClientRect();
      root.scrollBy(0, r.top + c.frac * r.height - a.y);
      return;
    }
  }

  function refreshExplainBar() {
    var bar = doc.getElementById('codeExplainBar'), text = doc.getElementById('codeExplainText');
    if (!bar || !text || !bar.classList.contains('show') || typeof root.extractExplanation !== 'function') return;
    var active = doc.querySelector('.codeblock .codeline.active');
    var e = active && root.extractExplanation(active);
    if (e) text.textContent = e;
  }

  function updateUrl(code) {
    try {
      var url = new URL(root.location.href);
      if (!url.searchParams.has('lang')) return; // only keep an existing ?lang= in step
      url.searchParams.set('lang', code);
      root.history.replaceState(root.history.state, '', url.href);
    } catch (e) { /* file:// or old browser */ }
  }

  function setLang(code) {
    code = norm(code);
    if (!supported(code)) return false;
    store(code);
    updateUrl(code);
    if (code === current) return true;
    var anchor = captureAnchor();
    current = code;
    doc.documentElement.lang = code;
    applyStatic();
    renderBindings();
    refreshExplainBar();
    paintToggle();
    listeners.forEach(function (fn) { try { fn(code); } catch (e) { root.console && console.error(e); } });
    restoreAnchor(anchor);
    return true;
  }

  /* ---------- Header toggle: EN | VI ---------- */

  var toggle = null;
  function paintToggle() {
    if (!toggle) return;
    toggle.setAttribute('aria-label', t('nav.language'));
    Array.prototype.forEach.call(toggle.querySelectorAll('button'), function (b) {
      var on = b.getAttribute('data-lang') === current;
      b.setAttribute('aria-pressed', String(on));
      b.classList.toggle('on', on);
    });
  }
  function buildToggle() {
    var nav = doc.querySelector('.navbar-outer nav') || doc.querySelector('nav');
    if (!nav || codes.length < 2) return;
    toggle = doc.createElement('div');
    toggle.className = 'lab-lang';
    toggle.setAttribute('role', 'group');
    codes.forEach(function (code, i) {
      if (i) {
        var sep = doc.createElement('span');
        sep.className = 'lab-lang-sep';
        sep.setAttribute('aria-hidden', 'true');
        sep.textContent = '|';
        toggle.appendChild(sep);
      }
      var b = doc.createElement('button');
      b.type = 'button';
      b.className = 'lab-lang-btn';
      b.setAttribute('data-lang', code);
      b.setAttribute('lang', code);
      b.title = langs[code].name || code;
      b.textContent = langs[code].short || code.toUpperCase();
      b.addEventListener('click', function () { setLang(code); });
      toggle.appendChild(b);
    });
    var gh = nav.querySelector('.ghlink');
    if (gh) {
      // Keep the hub's header layout: toggle and GitHub link sit together on the right.
      var end = doc.createElement('div');
      end.className = 'lab-nav-end';
      nav.insertBefore(end, gh);
      end.appendChild(toggle);
      end.appendChild(gh);
    } else {
      nav.appendChild(toggle);
    }
    paintToggle();
  }

  function init() {
    buildToggle();
    if (current !== SOURCE) {
      applyStatic();
      refreshExplainBar(); // a page may have run (and explained a code line) before the swap
    } else {
      applyTitle();
    }
    doc.documentElement.classList.remove('i18n-pending');
  }
  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', init);
  else init();
  setTimeout(function () { doc.documentElement.classList.remove('i18n-pending'); }, 2500);

  root.I18N = {
    source: SOURCE,
    page: slug,
    t: t,
    has: function (key) { return lookup(current, key) !== undefined || lookup(SOURCE, key) !== undefined; },
    lang: function () { return current; },
    languages: function () { return codes.slice(); },
    setLang: setLang,
    onChange: function (fn) { listeners.push(fn); },
    text: function (el, k, vars) { bind(el, 'content', { fn: asFn(k, vars), html: false }); },
    html: function (el, k, vars) { bind(el, 'content', { fn: asFn(k, vars), html: true }); },
    attr: function (el, name, k, vars) { bind(el, 'attr:' + name, asFn(k, vars)); },
    apply: applyStatic
  };
})(window);
