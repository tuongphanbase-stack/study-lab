// Nội dung tiếng Việt cho sliding-window.html (bản tiếng Anh nằm ngay trong trang).
(window.STUDY_LAB_I18N_DATA = window.STUDY_LAB_I18N_DATA || []).push({
  lang: 'vi',
  page: 'sliding-window',
  strings: {
    title: 'Cửa sổ <span>trượt</span>',
    sub: 'Hai con trỏ quét qua một chuỗi để tìm chuỗi con dài nhất không có ký tự lặp lại — mở rộng dần về bên phải, và chỉ dịch mép trái khi bắt buộc.',
    explain: `
    <h2>Cách hoạt động</h2>
    <p>Cửa sổ trượt (sliding window) dùng hai con trỏ, <code>left</code> và <code>right</code>, để đánh dấu hai mép của một "cửa sổ" trên chuỗi. Thay vì kiểm tra lại từ đầu mọi đoạn có thể có của chuỗi, cửa sổ chỉ luôn tiến về phía trước — không bao giờ lùi lại.</p>
    <p>Trang này giải bài toán: <b style="color:var(--text)">đoạn dài nhất của chuỗi mà không có ký tự nào lặp lại là đoạn nào?</b> Cách làm như sau:</p>
    <ol style="margin:0;padding-left:20px;color:var(--muted);font-size:15px;line-height:1.75;">
      <li><code>right</code> tiến lên từng ký tự một, làm cửa sổ rộng ra.</li>
      <li>Nếu ký tự mới đã có sẵn trong cửa sổ, <code>left</code> nhảy lên ngay sau vị trí xuất hiện gần nhất của ký tự đó — thu hẹp cửa sổ vừa đủ để loại bỏ chỗ lặp.</li>
      <li>Sau mỗi bước, kiểm tra xem cửa sổ hiện tại có phải là dài nhất từ trước tới giờ không.</li>
    </ol>
    <p>Vì <code>left</code> và <code>right</code> chỉ luôn tiến về phía trước, cả chuỗi chỉ được quét đúng một lần — nhanh hơn nhiều so với kiểm tra riêng từng chuỗi con có thể có.</p>
    <div class="example-box">
      <div class="example-label">Ví dụ</div>
      <p>Chuỗi <code>"abcabcbb"</code>: cửa sổ lớn dần qua <code>a, b, c</code> (độ dài 3, không lặp). Thêm chữ <code>a</code> kế tiếp sẽ gây lặp, nên mép trái của cửa sổ nhảy lên qua chữ <code>a</code> đầu tiên. Đoạn dài nhất không lặp tìm được trong quá trình này là <code>"abc"</code>, độ dài 3.</p>
    </div>

`,
    strPh: 'chuỗi',
    run: '▶ Trượt cửa sổ',
    initial: 'nhấn “Trượt cửa sổ” để bắt đầu',
    bestLabel: 'cửa sổ tốt nhất tìm được đến giờ:',
    rightMoves: "right dịch tới chỉ số {i} ('{c}')",
    jump: "'{c}' đã có trong cửa sổ tại chỉ số {at} — left nhảy từ {from} lên {to}",
    window: 'cửa sổ [{l}, {r}] dài {len} — tốt nhất đến giờ: {best}',
    done: 'xong — chuỗi con dài nhất không lặp ký tự: "<b>{s}</b>" (độ dài {len})'
  },
  comments: {
    'left edge of the current window': 'mép trái của cửa sổ hiện tại',
    'character -> last index it was seen at': 'ký tự -> chỉ số gần nhất nó xuất hiện',
    'longest window length found so far': 'độ dài cửa sổ dài nhất tìm được đến giờ',
    'right edge expands one step at a time': 'mép phải mở rộng từng bước một',
    'duplicate found inside the window': 'phát hiện ký tự trùng trong cửa sổ',
    'jump left past the duplicate': 'cho left nhảy qua ký tự trùng',
    "record this character's newest position": 'ghi lại vị trí mới nhất của ký tự này',
    'update the best length seen so far': 'cập nhật độ dài tốt nhất đến giờ',
    'right edge expands one character at a time': 'mép phải mở rộng từng ký tự một',
    'duplicate found inside the current window': 'phát hiện ký tự trùng trong cửa sổ hiện tại',
    'left edge of window; longest length found so far': 'mép trái cửa sổ; độ dài lớn nhất tìm được đến giờ',
    'character -> last index seen at': 'ký tự -> chỉ số xuất hiện gần nhất',
    'duplicate inside current window': 'trùng trong cửa sổ hiện tại',
    'record newest position of c': 'ghi lại vị trí mới nhất của c',
    'update best length seen so far': 'cập nhật độ dài tốt nhất đến giờ',
    'left edge of window; best length so far': 'mép trái cửa sổ; độ dài tốt nhất đến giờ',
    'right edge expands one step': 'mép phải mở rộng một bước',
    'duplicate inside the window': 'trùng trong cửa sổ'
  }
});
