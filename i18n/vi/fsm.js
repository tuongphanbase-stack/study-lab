// Nội dung tiếng Việt cho fsm.html (bản tiếng Anh nằm ngay trong trang).
// Tên trạng thái/đầu vào (locked, unlocked, coin, push) là định danh trong code nên giữ nguyên.
(window.STUDY_LAB_I18N_DATA = window.STUDY_LAB_I18N_DATA || []).push({
  lang: 'vi',
  page: 'fsm',
  strings: {
    title: 'Máy trạng thái <span>hữu hạn</span>',
    sub: 'Một cửa xoay (turnstile) có đúng hai trạng thái và hai kiểu đầu vào. Hãy bỏ xu và đẩy cửa, rồi xem nó chuyển trạng thái — cũng chính là mô hình "trạng thái cộng quy tắc" đứng sau bộ máy regex trên trang này.',
    explain: `
    <h2>Cách hoạt động</h2>
    <p>Máy trạng thái hữu hạn (finite state machine, FSM) chỉ gồm hai thứ: một tập các <b style="color:var(--text)">trạng thái</b>, và một bảng quy tắc kiểu "nếu đang ở trạng thái X mà đầu vào Y xảy ra, thì chuyển sang trạng thái Z". Ở mỗi thời điểm, máy nằm ở đúng một trạng thái — ngoài ra không ghi nhớ gì thêm.</p>
    <p>Trang này mô phỏng một <b style="color:var(--text)">cửa xoay</b> (turnstile) với hai trạng thái, <code>locked</code> (khóa) và <code>unlocked</code> (mở), cùng hai kiểu đầu vào, <code>coin</code> (bỏ xu) và <code>push</code> (đẩy):</p>
    <ul>
      <li>Bỏ xu vào cửa xoay đang khóa → nó mở khóa.</li>
      <li>Đẩy cửa xoay đang mở → nó khóa lại.</li>
      <li>Bỏ xu vào cửa xoay vốn đã mở → không có gì thay đổi.</li>
      <li>Đẩy cửa xoay đang khóa → không có gì thay đổi, nó vẫn khóa.</li>
    </ul>
    <p>Chính ý tưởng này — các trạng thái cộng với một bảng quy tắc — cũng là thứ đứng sau bộ máy regex trên trang này. Một mẫu được chuyển thành một máy trạng thái, và khớp một chuỗi đơn giản là đưa chuỗi đó vào máy, từng ký tự một.</p>
    <div class="example-box">
      <div class="example-label">Ví dụ</div>
      <p>Bắt đầu ở <code>locked</code>: bỏ một <code>coin</code> → trạng thái thành <code>unlocked</code>. <code>push</code> → trạng thái lại thành <code>locked</code>. Thử <code>push</code> cửa xoay đang khóa → không có gì xảy ra, nó vẫn <code>locked</code>. Mỗi lần chuyển trạng thái chỉ phụ thuộc vào trạng thái hiện tại và đầu vào — không có gì từ trước đó được ghi nhớ.</p>
    </div>

`,
    coin: 'bỏ xu',
    push: 'đẩy cửa xoay',
    reset: 'đặt lại',
    state: 'trạng thái hiện tại: <b>{s}</b>'
  },
  comments: {
    'inserting a coin unlocks it': 'bỏ xu vào thì cửa mở khóa',
    'pushing a locked turnstile does nothing': 'đẩy cửa xoay đang khóa thì không có gì xảy ra',
    "a second coin doesn't change anything": 'bỏ thêm xu không thay đổi gì',
    'pushing an unlocked turnstile locks it again': 'đẩy cửa xoay đang mở thì nó khóa lại',
    'every turnstile starts locked': 'cửa xoay nào cũng bắt đầu ở trạng thái khóa',
    'look up the one valid next state': 'tra trạng thái kế tiếp hợp lệ duy nhất',
    'state becomes "unlocked"': 'trạng thái thành "unlocked"',
    'state becomes "locked"': 'trạng thái thành "locked"',
    'look up next state -> "unlocked"': 'tra trạng thái kế tiếp -> "unlocked"',
    'look up next state -> "locked"': 'tra trạng thái kế tiếp -> "locked"'
  }
});
