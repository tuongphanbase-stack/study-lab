// Nội dung tiếng Việt cho data-structures.html (bản tiếng Anh nằm ngay trong trang).
(window.STUDY_LAB_I18N_DATA = window.STUDY_LAB_I18N_DATA || []).push({
  lang: 'vi',
  page: 'data-structures',
  strings: {
    title: 'Cấu trúc <span>dữ liệu</span>',
    sub: 'Cùng một vài thao tác, nhưng bốn hình dạng khác nhau. Push vào stack, enqueue vào queue, chèn vào danh sách liên kết, hoặc thả một giá trị vào cây nhị phân tìm kiếm.',
    explain: `
    <h2>Cách hoạt động</h2>
    <ul>
      <li><b style="color:var(--text)">Stack – ngăn xếp (LIFO)</b> — hãy hình dung một chồng đĩa. Bạn chỉ có thể thêm hoặc lấy đĩa ở trên cùng. <code>push</code> đặt thêm một đĩa mới, <code>pop</code> lấy đĩa trên cùng ra. Ngăn xếp lời gọi (call stack) của một chương trình hoạt động y hệt như vậy (xem trang đệ quy).</li>
      <li><b style="color:var(--text)">Queue – hàng đợi (FIFO)</b> — hãy hình dung một hàng người chờ thanh toán. Người mới đứng vào cuối hàng, người ở đầu hàng rời đi trước. <code>enqueue</code> thêm vào cuối, <code>dequeue</code> lấy ra từ đầu. Đây chính là thứ BFS dùng để khám phá theo đúng thứ tự.</li>
      <li><b style="color:var(--text)">Danh sách liên kết</b> (linked list) — thay vì một khối bộ nhớ liền mạch như mảng, mỗi phần tử ("nút") chỉ trỏ tới phần tử kế tiếp. Thêm hoặc bớt ở hai đầu rất nhanh, vì không phải dịch chuyển phần tử nào. Cái giá phải trả: muốn tới phần tử thứ 5, bạn phải đi qua các phần tử từ 1 đến 4 trước.</li>
      <li><b style="color:var(--text)">Cây nhị phân tìm kiếm</b> (binary search tree, BST) — mọi nút đều tuân theo một quy tắc: giá trị nhỏ hơn đi sang trái, giá trị lớn hơn đi sang phải. Để chèn một giá trị, bắt đầu từ gốc và cứ rẽ trái hoặc phải theo quy tắc đó cho đến khi gặp một chỗ trống. Trên cây cân bằng, việc này mất khoảng <code>log(n)</code> bước.</li>
    </ul>
    <div class="example-box">
      <div class="example-label">Ví dụ</div>
      <p><b style="color:var(--text)">Stack:</b> push <code>1</code>, rồi <code>2</code>, rồi <code>3</code>. Gọi <code>pop</code> sẽ trả về <code>3</code> trước tiên — thứ được thêm vào sau cùng sẽ ra trước.</p>
      <p><b style="color:var(--text)">Queue:</b> enqueue <code>1</code>, rồi <code>2</code>, rồi <code>3</code>. Gọi <code>dequeue</code> sẽ trả về <code>1</code> trước tiên — thứ được thêm vào đầu tiên sẽ ra trước.</p>
      <p><b style="color:var(--text)">BST:</b> chèn <code>5</code>, rồi <code>3</code>, rồi <code>8</code>. <code>3</code> nhỏ hơn <code>5</code> nên trở thành con trái; <code>8</code> lớn hơn nên trở thành con phải.</p>
    </div>

`,
    tabStack: 'stack (ngăn xếp)',
    tabQueue: 'queue (hàng đợi)',
    tabList: 'danh sách liên kết',
    tabTree: 'cây nhị phân',
    value: 'giá trị',
    add: 'thêm',
    remove: 'xóa',
    clear: 'xóa hết',
    hintInitial: 'push(7) thêm vào đỉnh · pop() lấy ra từ đỉnh — LIFO',
    hint_stack: 'push(v) thêm vào đỉnh · pop() lấy ra từ đỉnh — LIFO',
    hint_queue: 'enqueue(v) thêm vào cuối hàng · dequeue() lấy ra từ đầu hàng — FIFO',
    hint_list: 'insert(v) nối thêm một nút mới · remove() bỏ nút cuối · mỗi ô trỏ tới ô kế tiếp',
    hint_tree: 'insert(v) rẽ trái nếu nhỏ hơn, rẽ phải nếu lớn hơn, cho đến khi gặp chỗ trống (cây nhị phân tìm kiếm)',
    emptyNull: 'rỗng → null',
    emptyTree: 'cây rỗng'
  },
  comments: {
    'Stack (LIFO) - only the top is ever touched': 'Ngăn xếp (LIFO) - chỉ thao tác ở đỉnh',
    'add to the top': 'thêm vào đỉnh',
    'remove from the top': 'lấy ra từ đỉnh',
    'Queue (FIFO) - added at the back, removed from the front': 'Hàng đợi (FIFO) - thêm ở cuối, lấy ra ở đầu',
    'add to the back': 'thêm vào cuối',
    'remove from the front': 'lấy ra từ đầu',
    'Binary search tree insert - keeps left < node < right everywhere': 'Chèn vào cây nhị phân tìm kiếm - mọi nơi luôn giữ trái < nút < phải',
    'found an empty spot: place it here': 'gặp chỗ trống: đặt vào đây',
    'go left if smaller': 'nhỏ hơn thì sang trái',
    'go right otherwise': 'ngược lại thì sang phải',
    'return node so the parent link updates': 'trả về nút để liên kết từ nút cha được cập nhật',
    'Stack (LIFO) - Python lists work directly, both ends O(1) amortized': 'Ngăn xếp (LIFO) - dùng thẳng list của Python, push và pop đều O(1) khấu hao',
    'push: add to the top': 'push: thêm vào đỉnh',
    'pop: remove from the top': 'pop: lấy ra từ đỉnh',
    'Queue (FIFO) - use deque for O(1) on both ends (lists are O(n) at the front)': 'Hàng đợi (FIFO) - dùng deque để có O(1) ở cả hai đầu (list tốn O(n) khi lấy ở đầu)',
    'enqueue: add to the back': 'enqueue: thêm vào cuối',
    'dequeue: remove from the front': 'dequeue: lấy ra từ đầu',
    'Binary search tree insert': 'Chèn vào cây nhị phân tìm kiếm',
    'the stored value': 'giá trị được lưu',
    'subtree of smaller values': 'cây con chứa các giá trị nhỏ hơn',
    'subtree of larger (or equal) values': 'cây con chứa các giá trị lớn hơn (hoặc bằng)',
    'found an empty spot: place the new node here': 'gặp chỗ trống: đặt nút mới vào đây',
    'smaller: recurse into the left subtree': 'nhỏ hơn: đệ quy vào cây con trái',
    'otherwise: recurse into the right subtree': 'ngược lại: đệ quy vào cây con phải',
    'hand back the (possibly updated) subtree to the caller': 'trả cây con (có thể đã thay đổi) về cho nơi gọi',
    'Stack (LIFO) - arrays work directly, both ends O(1)': 'Ngăn xếp (LIFO) - dùng thẳng mảng, push và pop đều O(1)',
    'Queue (FIFO) - shift() is O(n) here; a linked list gives true O(1) dequeue': 'Hàng đợi (FIFO) - ở đây shift() tốn O(n); danh sách liên kết mới cho dequeue O(1) thực sự',
    'smaller: go left': 'nhỏ hơn: sang trái',
    'otherwise: go right': 'ngược lại: sang phải',
    'Stack (LIFO) - ArrayDeque is the recommended stack implementation in Java': 'Ngăn xếp (LIFO) - ArrayDeque là cách cài đặt stack được khuyên dùng trong Java',
    'Queue (FIFO)': 'Hàng đợi (FIFO)',
    'subtrees of smaller / larger-or-equal values': 'các cây con chứa giá trị nhỏ hơn / lớn hơn hoặc bằng',
    'Stack (LIFO)': 'Ngăn xếp (LIFO)'
  }
});
