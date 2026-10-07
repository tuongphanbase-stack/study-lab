// Nội dung tiếng Việt cho hashtable.html (bản tiếng Anh nằm ngay trong trang).
(window.STUDY_LAB_I18N_DATA = window.STUDY_LAB_I18N_DATA || []).push({
  lang: 'vi',
  page: 'hashtable',
  strings: {
    title: 'Bảng <span>băm</span>',
    sub: 'Mỗi khóa được băm thành một con số, rồi được thả vào <code>bucket = hash % size</code>. Hai khóa rơi vào cùng một bucket gọi là xung đột (collision) — bảng này xử lý bằng cách nối chuỗi (chaining), và tự mở rộng khi trở nên quá chật.',
    explain: `
    <h2>Cách hoạt động</h2>
    <p><b style="color:var(--text)">Băm</b> (hashing) biến một khóa (ở đây là một đoạn văn bản) thành một con số. Trang này làm việc đó bằng cách duyệt qua từng ký tự và trộn nó vào một giá trị tích lũy. Con số đó sau đó được thu gọn bằng <code>% size</code> để luôn rơi vào bên trong bảng — con số cuối cùng này chính là bucket (ô chứa) mà khóa thuộc về.</p>
    <p><b style="color:var(--text)">Xung đột</b> (collision) xảy ra khi hai khóa khác nhau rơi vào cùng một bucket. Với đủ nhiều khóa và số bucket có hạn, sớm muộn gì chuyện này cũng xảy ra. Trang này xử lý bằng <b style="color:var(--text)">nối chuỗi</b> (chaining): mỗi bucket giữ một danh sách nhỏ, nên khóa mới chỉ việc được thêm vào danh sách của bucket đó thay vì ghi đè lên thứ đã có.</p>
    <p><b style="color:var(--text)">Hệ số tải</b> (load factor) cho biết bảng đang đầy tới mức nào (số phần tử ÷ số bucket). Bảng càng đầy, danh sách ở mỗi bucket càng dài và việc tra cứu càng chậm. Khi hệ số tải vượt quá 0.75, bảng sẽ <b style="color:var(--text)">mở rộng</b> (resize): nó tạo thêm bucket và chèn lại mọi khóa, vì bảng lớn hơn sẽ làm thay đổi vị trí mà giá trị băm của mỗi khóa rơi vào.</p>
    <div class="example-box">
      <div class="example-label">Ví dụ</div>
      <p>Giả sử bảng có 8 bucket. Băm <code>"cat"</code> có thể cho ra bucket 3, và băm <code>"dog"</code> cũng có thể cho ra bucket 3 — một vụ xung đột. Cả hai khóa được nối chung vào danh sách của bucket 3: <code>[("cat", ...), ("dog", ...)]</code>. Tra <code>"dog"</code> nghĩa là đi tới bucket 3 rồi duyệt danh sách ngắn đó cho đến khi gặp khóa khớp.</p>
    </div>

`,
    keyPh: 'khóa',
    insert: 'thêm',
    resetTable: 'đặt lại bảng',
    typeKey: 'nhập một khóa rồi nhấn thêm',
    hashLine: 'hash("{key}") = <b>{raw}</b> → bucket <b>{idx}</b> = {raw} % {size}',
    resizing: 'hệ số tải vượt quá 0.75 — mở rộng lên <b>{size}</b> bucket và băm lại toàn bộ',
    empty: 'rỗng',
    stats: 'kích thước: <b>{s}</b> · số phần tử: <b>{e}</b> · hệ số tải: <b>{lf}</b>',
    hint: 'hệ số tải vượt quá 0.75 sẽ kích hoạt việc mở rộng — mọi khóa được băm lại vào một bảng lớn hơn'
  },
  comments: {
    'mix each character into a running hash': 'trộn từng ký tự vào giá trị băm tích lũy',
    'final bucket index, always in [0, size)': 'chỉ số bucket cuối cùng, luôn nằm trong [0, size)',
    'find which bucket this key belongs to': 'tìm bucket mà khóa này thuộc về',
    "chaining: append, don't overwrite": 'nối chuỗi: thêm vào cuối, không ghi đè',
    'find the same bucket used at insert time': 'tìm đúng bucket đã dùng lúc chèn',
    'scan the (short) chain in that bucket': 'duyệt chuỗi (ngắn) trong bucket đó',
    'match found': 'tìm thấy khóa khớp',
    'exhausted the chain without a match': 'đã duyệt hết chuỗi mà không có khóa nào khớp',
    'one empty chain per bucket': 'mỗi bucket một chuỗi rỗng',
    'bucket index, always in [0, size)': 'chỉ số bucket, luôn nằm trong [0, size)',
    'check if the key already exists': 'kiểm tra khóa đã tồn tại hay chưa',
    'update existing entry in place': 'cập nhật tại chỗ phần tử đã có',
    'new key: append to the chain': 'khóa mới: thêm vào cuối chuỗi',
    'mix each char in': 'trộn từng ký tự vào',
    'scan the chain': 'duyệt chuỗi',
    'undefined if the chain had no match': 'undefined nếu chuỗi không có khóa nào khớp',
    'empty chains': 'các chuỗi rỗng',
    'update in place': 'cập nhật tại chỗ',
    'scan the chain in the right bucket': 'duyệt chuỗi trong đúng bucket',
    'one chain per bucket': 'mỗi bucket một chuỗi',
    'mix each char into a running hash': 'trộn từng ký tự vào giá trị băm tích lũy',
    'pre-allocate empty chains': 'cấp phát sẵn các chuỗi rỗng'
  }
});
