// Shared across every page: lesson progress (saved in this browser), a short
// quiz at the end of each lesson, and "next lesson" navigation.
(function () {
  'use strict';

  var DONE_KEY = 'studylab_done';
  var SCORE_KEY = 'studylab_quiz_scores';
  var QUIZZES = window.STUDY_LAB_QUIZZES || {};

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
    return { slug: a.getAttribute('href').replace(/\.html$/, ''), title: a.textContent.trim(), link: a };
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

  /* ---------- Sidebar: ✓ marks and a progress line ---------- */

  function paintSidebar() {
    lessons.forEach(function (l) {
      l.link.classList.toggle('lab-done', !!done[l.slug]);
      l.link.setAttribute('aria-label', l.title + (done[l.slug] ? ' (done)' : ''));
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
    box.querySelector('.lab-side-label').textContent = n + ' / ' + lessons.length + ' lessons done';
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
    text.appendChild(el('strong', null, n === 0 ? 'Start learning' : n === lessons.length ? 'All lessons done 🎉' : 'Your progress'));
    text.appendChild(el('span', null, n + ' of ' + lessons.length + ' lessons done · saved in this browser'));
    var track = el('div', 'lab-bar lab-bar-big');
    var fill = el('span');
    fill.style.width = (n / lessons.length * 100) + '%';
    track.appendChild(fill);
    card.appendChild(text);
    card.appendChild(track);
    if (next) {
      var go = el('a', 'lab-btn', (n ? 'Continue: ' : 'Start with: ') + next.title + ' →');
      go.href = next.slug + '.html';
      card.appendChild(go);
    }
    hero.appendChild(card);

    Array.prototype.forEach.call(document.querySelectorAll('a.card'), function (c) {
      var slug = (c.getAttribute('href') || '').replace(/\.html$/, '');
      if (done[slug]) {
        c.classList.add('lab-done-card');
        var go = c.querySelector('.go');
        if (go) go.textContent = '✓ Done · review →';
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
    var h = el('h2', null, 'Check your understanding');
    h.id = 'labQuizTitle';
    head.appendChild(h);
    head.appendChild(el('p', 'lab-sub', questions.length + ' quick questions. Get them all right and the lesson is marked as done.'));
    wrap.appendChild(head);

    var answered = 0, correct = 0;
    var resultLine = el('p', 'lab-result');
    resultLine.setAttribute('aria-live', 'polite');

    questions.forEach(function (item, qi) {
      var card = el('div', 'lab-q');
      card.appendChild(el('p', 'lab-q-text', (qi + 1) + '. ' + item.q));
      var opts = el('div', 'lab-opts');
      opts.setAttribute('role', 'group');
      var why = el('p', 'lab-why');
      item.options.forEach(function (opt, oi) {
        var b = el('button', 'lab-opt', opt);
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
          why.textContent = (right ? '✓ Correct. ' : '✗ Not quite. ') + item.why;
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
        resultLine.textContent = 'All ' + correct + ' correct. Lesson marked as done ✓';
      } else {
        resultLine.textContent = correct + ' / ' + questions.length + ' correct. Read the explanations, then try again.';
      }
      resultLine.className = 'lab-result show';
      retry.hidden = false;
      paintDoneButton();
    }

    wrap.appendChild(resultLine);

    var actions = el('div', 'lab-actions');
    var retry = el('button', 'lab-btn ghost', 'Try the quiz again ↻');
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
      toggle.textContent = isDone ? '✓ Done · mark as not done' : 'Mark lesson as done';
      toggle.setAttribute('aria-pressed', String(isDone));
    }
    toggle.addEventListener('click', function () { setDone(lesson.slug, !done[lesson.slug]); paintDoneButton(); });
    paintDoneButton();
    actions.appendChild(retry);
    actions.appendChild(toggle);
    var next = lessons[idx + 1];
    var nextLink = el('a', 'lab-btn', next ? 'Next: ' + next.title + ' →' : 'Back to all topics →');
    nextLink.href = next ? next.slug + '.html' : 'index.html';
    actions.appendChild(nextLink);
    wrap.appendChild(actions);

    if (scores[lesson.slug] != null) {
      wrap.appendChild(el('p', 'lab-best', 'Best quiz score: ' + scores[lesson.slug] + ' / ' + questions.length));
    }
    main.appendChild(wrap);
  }

  paintSidebar();
  if (current === 'index') paintOverview(); else paintLesson();
})();
