// Nội dung tiếng Việt cho huffman-coding.html (bản tiếng Anh nằm ngay trong trang).
(window.STUDY_LAB_I18N_DATA = window.STUDY_LAB_I18N_DATA || []).push({
  lang: 'vi',
  page: 'huffman-coding',
  strings: {
    title: 'Mã hóa <span>Huffman</span>',
    sub: 'Ký tự xuất hiện nhiều được mã ngắn, ký tự hiếm được mã dài — bằng cách liên tục gộp hai nút có tần suất thấp nhất thành một cái cây. Hãy xem cây nén lớn dần, rồi xem chuỗi bit sau khi mã hóa.',
    explain: `
    <h2>Cách hoạt động</h2>
    <p>Văn bản thông thường dùng cùng một số bit cho mọi ký tự, bất kể ký tự đó xuất hiện nhiều hay ít. Mã hóa Huffman làm tốt hơn: ký tự phổ biến được mã ngắn hơn, ký tự hiếm được mã dài hơn — cùng ý tưởng với mã Morse, nơi chữ "E" rất phổ biến chỉ được biểu diễn bằng đúng một dấu chấm.</p>
    <p><b style="color:var(--text)">Dựng cây:</b></p>
    <ol style="margin:0 0 12px;padding-left:20px;color:var(--muted);font-size:15px;line-height:1.75;">
      <li>Bắt đầu với mỗi ký tự một nút, có trọng số bằng số lần ký tự đó xuất hiện.</li>
      <li>Tìm hai nút có trọng số nhỏ nhất, và gộp chúng dưới một nút cha mới.</li>
      <li>Trọng số của nút mới bằng tổng trọng số của hai nút tạo nên nó.</li>
      <li>Cứ gộp hai nút nhỏ nhất như vậy cho đến khi chỉ còn một nút — đó là gốc.</li>
    </ol>
    <p>Mã của mỗi ký tự lấy từ đường đi xuống tới nó: mỗi nhánh trái thêm một bit <code>0</code>, mỗi nhánh phải thêm một bit <code>1</code>. Vì ký tự nào cũng nằm ở tận cùng một nhánh (không bao giờ nằm lưng chừng trên đường tới một ký tự khác), không mã nào là phần mở đầu của mã khác — và chính điều đó cho phép đọc ngược chuỗi bit đã mã hóa, từng ký tự một, mà không cần dấu phân cách.</p>
    <div class="example-box">
      <div class="example-label">Ví dụ</div>
      <p>Văn bản <code>"aab"</code>: <code>a</code> xuất hiện hai lần, <code>b</code> một lần. Chỉ có hai ký tự khác nhau, nên mỗi ký tự chỉ cần một bit: <code>a = 0</code>, <code>b = 1</code>. Mã hóa <code>"aab"</code> cho ra <code>001</code> — tổng cộng 3 bit, so với 24 bit (8 bit × 3 ký tự) nếu dùng ASCII thông thường.</p>
    </div>

`,
    textPh: 'văn bản cần mã hóa',
    build: '▶ Dựng cây Huffman',
    merging: "gộp '{a}' ({aw}) và '{b}' ({bw}) thành một nút mới có trọng số {w}",
    encoded: 'chuỗi đã mã hóa ({n} bit, so với {m} bit nếu dùng ASCII thông thường):<br>{bits}'
  },
  comments: {
    'how often each character appears': 'mỗi ký tự xuất hiện bao nhiêu lần',
    'the two least-frequent nodes...': 'hai nút có tần suất thấp nhất...',
    'merge them': 'gộp chúng lại',
    'the merged node re-enters the queue': 'nút vừa gộp quay lại hàng đợi',
    'the last node left is the root': 'nút cuối cùng còn lại là gốc',
    'path from root to leaf is the code': 'đường đi từ gốc tới lá chính là mã',
    'left branch adds a 0': 'nhánh trái thêm một bit 0',
    'right branch adds a 1': 'nhánh phải thêm một bit 1',
    'lets heapq compare nodes by weight': 'giúp heapq so sánh các nút theo trọng số',
    'one leaf per character': 'mỗi ký tự một lá',
    'arrange into a min-heap by weight': 'sắp thành min-heap theo trọng số',
    'merge and reinsert': 'gộp rồi chèn lại',
    'leaf: path from root to here is its code': 'lá: đường đi từ gốc tới đây là mã của nó',
    'guard against a single-character tree': 'phòng trường hợp cây chỉ có một ký tự',
    'one leaf per char': 'mỗi ký tự một lá',
    'find the two least-frequent nodes...': 'tìm hai nút có tần suất thấp nhất...',
    'leaf: its code': 'lá: mã của nó',
    'order by weight': 'sắp theo trọng số',
    'min-heap ordered by weight': 'min-heap sắp theo trọng số',
    'leaf': 'lá',
    'min-heap ordering': 'thứ tự của min-heap'
  }
});
