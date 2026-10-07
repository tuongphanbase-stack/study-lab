// Nội dung tiếng Việt cho regex.html (bản tiếng Anh nằm ngay trong trang).
(window.STUDY_LAB_I18N_DATA = window.STUDY_LAB_I18N_DATA || []).push({
  lang: 'vi',
  page: 'regex',
  strings: {
    title: 'Bộ máy <span>Regex</span>',
    sub: 'Một bộ máy regex rút gọn, hỗ trợ ký tự thường, <code>.</code> (ký tự bất kỳ), <code>*</code> (không hoặc nhiều lần token đứng trước) và <code>+</code> (một hoặc nhiều lần). Hãy xem nó thử khớp mẫu với chuỗi, từng vị trí một.',
    explain: `
    <h2>Cách hoạt động</h2>
    <p>Mẫu (pattern) được tách thành những mảnh nhỏ gọi là <b style="color:var(--text)">token</b> — mỗi token hoặc là một ký tự thường, hoặc là <code>.</code> (khớp mọi ký tự), hoặc là một ký tự theo sau bởi <code>*</code>/<code>+</code>. Bộ máy duyệt các token từ trái sang phải, so từng token với chuỗi.</p>
    <p>Phần khó là <code>*</code> và <code>+</code>, vì "không hoặc nhiều lần" hay "một hoặc nhiều lần" không nói chính xác phải lấy bao nhiêu ký tự. Bộ máy này giải quyết bằng một chiến lược gọi là <b style="color:var(--text)">quay lui tham lam</b> (greedy backtracking):</p>
    <ol style="margin:0 0 12px;padding-left:20px;color:var(--muted);font-size:15px;line-height:1.75;">
      <li>Lấy càng nhiều ký tự khớp càng tốt.</li>
      <li>Thử khớp phần còn lại của mẫu với phần chuỗi còn lại.</li>
      <li>Nếu thất bại, trả lại một ký tự rồi thử lại.</li>
      <li>Cứ trả lại từng ký tự như vậy cho đến khi khớp được, hoặc không còn gì để trả lại.</li>
    </ol>
    <p>Mẫu cũng không bị gắn cố định vào đầu chuỗi. Nếu không khớp khi bắt đầu từ vị trí 0, bộ máy thử lại từ vị trí 1, rồi 2, cứ thế tiếp tục — khớp ở bất kỳ đâu trong chuỗi đều được tính là thành công.</p>
    <div class="example-box">
      <div class="example-label">Ví dụ</div>
      <p>Mẫu <code>a*b</code> với chuỗi <code>"aaab"</code>: trước tiên bộ máy thử lấy cả ba chữ <code>a</code> cho phần <code>a*</code>, rồi kiểm tra <code>b</code> có khớp với phần còn lại không — có, nên toàn bộ mẫu khớp. Nếu chuỗi là <code>"aaa"</code> (không có b ở cuối), lấy cả ba chữ <code>a</code> sẽ không còn gì để <code>b</code> khớp, nên bộ máy quay lui về lấy hai chữ <code>a</code>, rồi một, cứ thế cho đến khi thất bại hoàn toàn — vì trong chuỗi không hề có chữ <code>b</code> nào.</p>
    </div>

`,
    patternPh: 'mẫu (pattern)',
    textPh: 'chuỗi cần thử',
    run: '▶ Chạy từng bước',
    note: 'cú pháp hỗ trợ: ký tự thường, <b style="color:var(--accent-dark)">.</b> ký tự bất kỳ, <b style="color:var(--accent-dark)">*</b> không hoặc nhiều lần, <b style="color:var(--accent-dark)">+</b> một hoặc nhiều lần (áp dụng cho token đứng ngay trước nó)',
    initial: 'nhập mẫu và chuỗi, rồi chạy từng bước',
    trying: 'thử cho <b>{tok}</b> lấy {n} ký tự (vị trí {from}–{to})',
    matches: 'token <b>{tok}</b> khớp với "<b>{c}</b>" tại vị trí {p}',
    noMatch: 'token <b>{tok}</b> không khớp tại vị trí {p} — ngõ cụt',
    attempt: 'thử khớp bắt đầu từ vị trí <b>{p}</b>',
    found: '✓ tìm thấy mẫu, bắt đầu tại vị trí {p}',
    none: '✗ không khớp ở bất kỳ đâu trong chuỗi'
  },
  comments: {
    'both exhausted together: a full match': 'cả hai cùng hết: khớp hoàn toàn',
    'zero occurrences, or one occurrence + retry': 'không lần nào, hoặc một lần rồi thử tiếp',
    'skip the starred token': 'bỏ qua token có dấu *',
    'consume one, stay on it': 'lấy một ký tự, vẫn ở lại token đó',
    'consume one character from each': 'lấy một ký tự ở mỗi bên',
    'does the first token match?': 'token đầu tiên có khớp không?',
    'skip the starred token entirely': 'bỏ qua hẳn token có dấu *',
    'consume one, stay on same token': 'lấy một ký tự, vẫn ở token cũ',
    'consume one char from each side': 'lấy một ký tự ở mỗi bên',
    'both exhausted: a full match': 'cả hai đều hết: khớp hoàn toàn',
    'consume from both sides': 'lấy ở cả hai bên',
    'skip starred token': 'bỏ qua token có dấu *',
    'consume both': 'lấy cả hai',
    'consume from both': 'lấy ở cả hai bên'
  }
});
