// Shared across every page: lesson progress (saved in this browser), a short
// quiz at the end of each lesson, and "next lesson" navigation.
// All text goes through window.I18N (i18n/i18n.js), so switching language
// re-renders it in place without touching progress or quiz answers.
(function () {
  'use strict';

  var DONE_KEY = 'studylab_done';
  var SCORE_KEY = 'studylab_quiz_scores';
  var QUIZZES = window.STUDY_LAB_QUIZZES || {};
  var I18N = window.I18N;
  var t = I18N.t;

  function readJSON(key, fallback) {
    try { var v = JSON.parse(localStorage.getItem(key)); return v == null ? fallback : v; } catch (e) { return fallback; }
  }
  function writeJSON(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* storage blocked */ }
  }
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  // Lessons in sidebar order, read from the page itself so it never drifts.
  var lessons = Array.prototype.map.call(document.querySelectorAll('.sidebar a.navitem:not(.overview)'), function (a) {
    var slug = a.getAttribute('href').replace(/\.html$/, '');
    var fallback = a.textContent.trim();
    return { slug: slug, link: a, title: function () { return I18N.has('lesson.' + slug) ? t('lesson.' + slug) : fallback; } };
  });
  var current = (location.pathname.split('/').pop() || 'index.html').replace(/\.html$/, '') || 'index';
  var done = readJSON(DONE_KEY, {});
  var scores = readJSON(SCORE_KEY, {});

  function doneCount() { return lessons.filter(function (l) { return done[l.slug]; }).length; }

  function setDone(slug, value) {
    if (value) done[slug] = new Date().toISOString().slice(0, 10); else delete done[slug];
    writeJSON(DONE_KEY, done);
    paintSidebar();
  }

  // A question's text in the current language (same ids/answers in every
  // language); falls back to English field by field.
  function field(item, name) {
    var tr = item[I18N.lang()];
    return tr && tr[name] != null ? tr[name] : item[name];
  }

  /* ---------- Sidebar: ✓ marks and a progress line ---------- */

  function paintSidebar() {
    lessons.forEach(function (l) {
      l.link.classList.toggle('lab-done', !!done[l.slug]);
      I18N.attr(l.link, 'aria-label', function () { return l.title() + (done[l.slug] ? t('lab.doneSuffix') : ''); });
    });
    var sidebar = document.querySelector('.sidebar');
    if (!sidebar) return;
    var box = sidebar.querySelector('.lab-side-progress');
    if (!box) {
      box = el('div', 'lab-side-progress');
      box.appendChild(el('div', 'lab-side-label'));
      var track = el('div', 'lab-bar');
      track.appendChild(el('span'));
      box.appendChild(track);
      var overview = sidebar.querySelector('.navitem.overview');
      sidebar.insertBefore(box, overview ? overview.nextSibling : sidebar.firstChild);
    }
    var n = doneCount();
    I18N.text(box.querySelector('.lab-side-label'), 'lab.sideProgress', { n: n, total: lessons.length });
    box.querySelector('.lab-bar span').style.width = (lessons.length ? n / lessons.length * 100 : 0) + '%';
  }

  /* ---------- Overview page: progress card + "done" badges ---------- */

  function paintOverview() {
    var hero = document.querySelector('.hero');
    if (!hero) return;
    var card = el('div', 'lab-overview');
    var n = doneCount();
    var next = lessons.filter(function (l) { return !done[l.slug]; })[0];
    var text = el('div', 'lab-overview-text');
    var heading = el('strong');
    I18N.text(heading, n === 0 ? 'lab.startLearning' : n === lessons.length ? 'lab.allDone' : 'lab.yourProgress');
    var line = el('span');
    I18N.text(line, 'lab.overviewProgress', { n: n, total: lessons.length });
    text.appendChild(heading);
    text.appendChild(line);
    var track = el('div', 'lab-bar lab-bar-big');
    var fill = el('span');
    fill.style.width = (n / lessons.length * 100) + '%';
    track.appendChild(fill);
    card.appendChild(text);
    card.appendChild(track);
    if (next) {
      var go = el('a', 'lab-btn');
      I18N.text(go, function () { return t(n ? 'lab.continue' : 'lab.startWith', { title: next.title() }); });
      go.href = next.slug + '.html';
      card.appendChild(go);
    }
    hero.appendChild(card);

    Array.prototype.forEach.call(document.querySelectorAll('a.card'), function (c) {
      var slug = (c.getAttribute('href') || '').replace(/\.html$/, '');
      if (done[slug]) {
        c.classList.add('lab-done-card');
        var badge = c.querySelector('.go');
        if (badge) I18N.text(badge, 'lab.doneReview');
      }
    });
  }

  /* ---------- Lesson page: quiz + mark done + next ---------- */

  function paintLesson() {
    var lesson = lessons.filter(function (l) { return l.slug === current; })[0];
    var main = document.querySelector('.main-content main') || document.querySelector('main');
    if (!lesson || !main) return;
    var idx = lessons.indexOf(lesson);
    var questions = QUIZZES[lesson.slug] || [];

    var wrap = el('section', 'lab-wrap');
    wrap.setAttribute('aria-labelledby', 'labQuizTitle');
    var head = el('div', 'lab-head');
    var h = el('h2');
    I18N.text(h, 'lab.quizTitle');
    h.id = 'labQuizTitle';
    head.appendChild(h);
    var sub = el('p', 'lab-sub');
    I18N.text(sub, 'lab.quizSub', { n: questions.length });
    head.appendChild(sub);
    wrap.appendChild(head);

    var answered = 0, correct = 0;
    var resultLine = el('p', 'lab-result');
    resultLine.setAttribute('aria-live', 'polite');

    questions.forEach(function (item, qi) {
      var card = el('div', 'lab-q');
      var qText = el('p', 'lab-q-text');
      I18N.text(qText, function () { return (qi + 1) + '. ' + field(item, 'q'); });
      card.appendChild(qText);
      var opts = el('div', 'lab-opts');
      opts.setAttribute('role', 'group');
      var why = el('p', 'lab-why');
      item.options.forEach(function (opt, oi) {
        var b = el('button', 'lab-opt');
        I18N.text(b, function () { return field(item, 'options')[oi]; });
        b.type = 'button';
        b.addEventListener('click', function () {
          if (card.dataset.answered) return;
          card.dataset.answered = '1';
          answered++;
          var right = oi === item.answer;
          if (right) correct++;
          Array.prototype.forEach.call(opts.children, function (o, k) {
            o.disabled = true;
            if (k === item.answer) o.classList.add('right');
            else if (o === b) o.classList.add('wrong');
          });
          I18N.text(why, function () { return t(right ? 'lab.correct' : 'lab.notQuite') + ' ' + field(item, 'why'); });
          why.className = 'lab-why ' + (right ? 'ok' : 'no');
          if (answered === questions.length) finish();
        });
        opts.appendChild(b);
      });
      card.appendChild(opts);
      card.appendChild(why);
      wrap.appendChild(card);
    });

    function finish() {
      var best = Math.max(scores[lesson.slug] || 0, correct);
      scores[lesson.slug] = best;
      writeJSON(SCORE_KEY, scores);
      if (correct === questions.length) {
        setDone(lesson.slug, true);
        I18N.text(resultLine, 'lab.allCorrect', { n: correct });
      } else {
        I18N.text(resultLine, 'lab.someCorrect', { c: correct, n: questions.length });
      }
      resultLine.className = 'lab-result show';
      retry.hidden = false;
      paintDoneButton();
    }

    wrap.appendChild(resultLine);

    var actions = el('div', 'lab-actions');
    var retry = el('button', 'lab-btn ghost');
    I18N.text(retry, 'lab.retry');
    retry.type = 'button';
    retry.hidden = true;
    retry.addEventListener('click', function () {
      wrap.remove();
      paintLesson();
      var again = document.getElementById('labQuizTitle');
      if (again) again.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    var toggle = el('button', 'lab-btn ghost');
    toggle.type = 'button';
    function paintDoneButton() {
      var isDone = !!done[lesson.slug];
      I18N.text(toggle, isDone ? 'lab.unmarkDone' : 'lab.markDone');
      toggle.setAttribute('aria-pressed', String(isDone));
    }
    toggle.addEventListener('click', function () { setDone(lesson.slug, !done[lesson.slug]); paintDoneButton(); });
    paintDoneButton();
    actions.appendChild(retry);
    actions.appendChild(toggle);
    var next = lessons[idx + 1];
    var nextLink = el('a', 'lab-btn');
    I18N.text(nextLink, function () { return next ? t('lab.next', { title: next.title() }) : t('lab.backToTopics'); });
    nextLink.href = next ? next.slug + '.html' : 'index.html';
    actions.appendChild(nextLink);
    wrap.appendChild(actions);

    if (scores[lesson.slug] != null) {
      var best = el('p', 'lab-best');
      I18N.text(best, 'lab.bestScore', { s: scores[lesson.slug], n: questions.length });
      wrap.appendChild(best);
    }
    main.appendChild(wrap);
  }

  paintSidebar();
  if (current === 'index') paintOverview(); else paintLesson();
})();
