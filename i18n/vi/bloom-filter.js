// Nội dung tiếng Việt cho bloom-filter.html (bản tiếng Anh nằm ngay trong trang).
(window.STUDY_LAB_I18N_DATA = window.STUDY_LAB_I18N_DATA || []).push({
  lang: 'vi',
  page: 'bloom-filter',
  strings: {
    title: 'Bloom<span> Filter</span>',
    sub: 'Một mảng bit kích thước cố định trả lời câu hỏi "mình đã gặp khóa này chưa?" mà không hề lưu lại khóa nào. Thêm vài khóa, rồi kiểm tra một khóa — và xem dương tính giả (false positive) có thể lọt vào như thế nào.',
    explain: `
    <h2>Cách hoạt động</h2>
    <p>Bloom filter trả lời một câu hỏi với chi phí rất thấp: <b style="color:var(--text)">"có thể mình đã gặp khóa này rồi không?"</b> Nó không lưu chính các khóa — chỉ lưu một hàng bit — và đó là lý do nó rất nhỏ gọn và nhanh. Cái giá phải trả: nó có thể nói "chắc chắn không", nhưng chỉ có thể nói "có lẽ có".</p>
    <p><b style="color:var(--text)">Thêm</b> một khóa nghĩa là cho nó đi qua vài hàm băm khác nhau. Mỗi hàm trỏ tới một vị trí bit, và tất cả các bit đó đều được bật lên.</p>
    <p><b style="color:var(--text)">Kiểm tra</b> một khóa nghĩa là cho nó đi qua đúng các hàm băm đó và xem lại đúng những vị trí bit đó.</p>
    <ul>
      <li>Nếu có bất kỳ bit nào đang tắt, khóa đó <b style="color:var(--text)">chắc chắn chưa từng được thêm.</b></li>
      <li>Nếu tất cả các bit đều bật, khóa đó <b style="color:var(--text)">có lẽ có trong tập</b> — nhưng cũng có thể những bit đó chỉ tình cờ được các khóa khác bật lên. Trường hợp này gọi là dương tính giả (false positive).</li>
    </ul>
    <p>Càng thêm nhiều khóa, càng nhiều bit được bật, và dương tính giả càng dễ xảy ra. Đó là sự đánh đổi cốt lõi của Bloom filter: tiết kiệm bộ nhớ, đổi lại chấp nhận một xác suất nhỏ bị sai theo một chiều.</p>
    <div class="example-box">
      <div class="example-label">Ví dụ</div>
      <p>Thêm <code>"cat"</code> có thể bật các bit 2, 5 và 9. Kiểm tra <code>"dog"</code> băm ra các bit 2, 5 và 7 — bit 7 đang tắt, nên bộ lọc nói đúng rằng <code>"dog"</code> <b style="color:var(--text)">chắc chắn chưa từng được thêm</b>. Kiểm tra lại <code>"cat"</code> băm ra đúng các bit 2, 5, 9, tất cả đều đang bật — nên nó báo <code>"cat"</code> là <b style="color:var(--text)">có lẽ có trong tập</b>.</p>
    </div>

`,
    keyPh: 'khóa cần thêm hoặc kiểm tra',
    insert: 'thêm',
    check: 'kiểm tra có trong tập không',
    reset: 'đặt lại',
    initial: 'mảng bit kích thước 24, 3 hàm băm',
    hashing: 'băm "{k}" → các vị trí {p}',
    inserted: 'đã thêm "{k}" — bật các bit tại {p}',
    checking: 'kiểm tra "{k}" → các vị trí {p}',
    maybeTrue: 'tất cả các bit đều bật — "{k}" <b>có lẽ có trong tập</b> (và đúng là nó đã được thêm)',
    falsePositive: 'tất cả các bit đều bật — "{k}" <b>có lẽ có trong tập</b>... nhưng thật ra nó chưa từng được thêm! Đây là dương tính giả (false positive), do trùng bit với các khóa khác.',
    definitelyNot: 'có ít nhất một bit bằng 0 — "{k}" <b>chắc chắn chưa từng được thêm</b>'
  },
  comments: {
    'run the key through every hash function': 'cho khóa đi qua từng hàm băm',
    'flip that bit on': 'bật bit đó lên',
    'check every bit the key would have set': 'kiểm tra mọi bit mà khóa này lẽ ra đã bật',
    'this bit is off: key was never inserted': 'bit này đang tắt: khóa chưa từng được thêm',
    'every relevant bit is on: maybe present (could be a false positive)': 'mọi bit liên quan đều bật: có thể có (cũng có thể là dương tính giả)',
    'start with every bit off': 'ban đầu mọi bit đều tắt',
    'three independent-ish hash functions over the same key': 'ba hàm băm gần như độc lập trên cùng một khóa',
    "flip each of this key's three bits on": 'bật cả ba bit của khóa này',
    "True only if every one of the key's three bits is already on": 'True chỉ khi cả ba bit của khóa đều đã bật',
    'flip each bit on': 'bật từng bit lên',
    "true only if every one of the key's three bits is already on": 'true chỉ khi cả ba bit của khóa đều đã bật',
    'starts with every bit false (off)': 'ban đầu mọi bit đều là false (tắt)',
    'this bit is off: definitely never inserted': 'bit này đang tắt: chắc chắn chưa từng được thêm',
    'every relevant bit is on: maybe present': 'mọi bit liên quan đều bật: có thể có',
    'starts all bits off': 'ban đầu tắt hết các bit'
  }
});
