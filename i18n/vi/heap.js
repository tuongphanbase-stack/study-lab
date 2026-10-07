// Nội dung tiếng Việt cho heap.html (bản tiếng Anh nằm ngay trong trang).
(window.STUDY_LAB_I18N_DATA = window.STUDY_LAB_I18N_DATA || []).push({
  lang: 'vi',
  page: 'heap',
  strings: {
    title: 'Heap<span> / Hàng đợi ưu tiên</span>',
    sub: 'Min-heap nhị phân luôn giữ giá trị nhỏ nhất ở gốc. Thêm một giá trị và xem nó được đẩy lên (sift-up); lấy phần tử nhỏ nhất ra và xem phần tử cuối được đẩy xuống (sift-down) về đúng chỗ.',
    explain: `
    <h2>Cách hoạt động</h2>
    <p>Một min-heap nhị phân tuân theo đúng một quy tắc đơn giản ở mọi nơi trong cây: <b style="color:var(--text)">mọi nút cha đều nhỏ hơn hoặc bằng cả hai nút con của nó.</b> Nhờ quy tắc đó, giá trị nhỏ nhất của cả heap luôn nằm ngay trên đỉnh — không cần tìm kiếm gì cả.</p>
    <p><b style="color:var(--text)">Thêm (insert):</b></p>
    <ol style="margin:0 0 12px;padding-left:20px;color:var(--muted);font-size:15px;line-height:1.75;">
      <li>Đặt giá trị mới vào chỗ trống kế tiếp, để cây luôn cân bằng.</li>
      <li>So sánh nó với nút cha. Nếu nhỏ hơn, hoán đổi hai nút.</li>
      <li>Tiếp tục so sánh và hoán đổi lên trên cho đến khi nó không còn nhỏ hơn nút cha, hoặc đã lên tới đỉnh.</li>
    </ol>
    <p><b style="color:var(--text)">Lấy phần tử nhỏ nhất (extract-min):</b></p>
    <ol style="margin:0;padding-left:20px;color:var(--muted);font-size:15px;line-height:1.75;">
      <li>Lấy giá trị trên đỉnh — đó luôn là giá trị nhỏ nhất.</li>
      <li>Đưa giá trị nằm cuối cùng trong heap lên vị trí đỉnh.</li>
      <li>So sánh nó với các nút con, và hoán đổi với nút con nhỏ hơn.</li>
      <li>Tiếp tục hoán đổi xuống dưới cho đến khi cả hai nút con đều lớn hơn, hoặc đã xuống tới đáy.</li>
    </ol>
    <p>Cả hai thao tác chỉ đi lên hoặc đi xuống theo một đường duy nhất, nên mỗi thao tác mất khoảng <code>log(n)</code> bước.</p>
    <div class="example-box">
      <div class="example-label">Ví dụ</div>
      <p>Thêm <code>5</code>, rồi <code>3</code>, rồi <code>8</code>, rồi <code>1</code>. Khi <code>1</code> được đặt ở đáy, nó nhỏ hơn nút cha nên được hoán đổi lên trên — và cứ tiếp tục như vậy — cho đến khi lên tới tận đỉnh. Mảng heap cuối cùng là <code>[1, 3, 8, 5]</code>, với <code>1</code> nằm ở gốc vì là giá trị nhỏ nhất.</p>
    </div>

`,
    value: 'giá trị',
    insert: 'thêm',
    extract: 'lấy min (extract-min)',
    reset: 'đặt lại',
    heapEmpty: 'heap đang rỗng',
    empty: 'rỗng',
    emptyHeap: 'heap rỗng',
    cmpParent: 'so sánh giá trị mới ở chỉ số {i} với nút cha ở chỉ số {p}',
    checkChildren: 'kiểm tra các con của chỉ số {i} để tìm giá trị nhỏ hơn',
    inserted: 'đã thêm {v} vào cuối, giờ đẩy nó lên (sift-up)',
    restored: 'xong — tính chất heap đã được khôi phục',
    extracting: 'đang lấy min ({m}) ra khỏi gốc',
    extracted: 'đã lấy ra <b>{m}</b> — tính chất heap đã được khôi phục',
    ready: 'heap ban đầu đã sẵn sàng — hãy thử thêm hoặc lấy min'
  },
  comments: {
    'add at the next open spot (keeps it balanced)': 'thêm vào chỗ trống kế tiếp (giữ cây cân bằng)',
    'start at the newly inserted position': 'bắt đầu từ vị trí vừa thêm',
    'while the new value is smaller than its parent': 'khi giá trị mới vẫn còn nhỏ hơn nút cha',
    'bubble it upward': 'đẩy nó lên trên',
    'continue checking from the new position': 'tiếp tục kiểm tra từ vị trí mới',
    'the root is always the smallest value': 'gốc luôn là giá trị nhỏ nhất',
    "move the last element into the root's spot": 'đưa phần tử cuối vào chỗ của gốc',
    'restore the heap property from the top': 'khôi phục tính chất heap từ đỉnh xuống',
    'indices of the two children': 'chỉ số của hai nút con',
    'left child is smaller': 'con trái nhỏ hơn',
    'right child is smaller still': 'con phải còn nhỏ hơn nữa',
    'a child was smaller than the current node': 'có một nút con nhỏ hơn nút hiện tại',
    'swap it up': 'hoán đổi nó lên trên',
    'keep sifting down from the new position': 'tiếp tục đẩy xuống từ vị trí mới',
    "Python's heapq is a ready-made binary min-heap over a plain list": 'heapq của Python là một min-heap nhị phân có sẵn, chạy trên list thông thường',
    'insert, maintains heap order automatically': 'thêm vào, tự động giữ thứ tự heap',
    'extract-min, O(log n)': 'lấy phần tử nhỏ nhất, O(log n)',
    'Manual implementation, for reference:': 'Tự cài đặt, để tham khảo:',
    'index arithmetic for a binary heap stored as an array': 'công thức chỉ số cho heap nhị phân lưu trong mảng',
    'child smaller than its parent: violates heap order': 'con nhỏ hơn cha: vi phạm thứ tự heap',
    'heap order restored, stop early': 'thứ tự heap đã được khôi phục, dừng sớm',
    'no child smaller: heap order restored': 'không có con nào nhỏ hơn: thứ tự heap đã được khôi phục',
    'swap the smaller child up': 'hoán đổi nút con nhỏ hơn lên trên',
    'JavaScript has no built-in heap — a minimal manual version:': 'JavaScript không có heap dựng sẵn — một phiên bản tự viết tối giản:',
    'index arithmetic for an array-backed heap': 'công thức chỉ số cho heap lưu bằng mảng',
    'smaller than its parent: violates order': 'nhỏ hơn cha: vi phạm thứ tự',
    'bubble up': 'đẩy lên',
    'remove the last element': 'bỏ phần tử cuối ra',
    'move it into the now-empty root': 'đưa nó vào gốc vừa bị trống',
    'restore heap order from the top': 'khôi phục thứ tự heap từ đỉnh xuống',
    'left child smaller': 'con trái nhỏ hơn',
    'right child smaller': 'con phải nhỏ hơn',
    'no child smaller: order restored': 'không có con nào nhỏ hơn: thứ tự đã được khôi phục',
    'swap down': 'hoán đổi xuống',
    'continue from the new position': 'tiếp tục từ vị trí mới',
    "Java's PriorityQueue is a ready-made binary min-heap": 'PriorityQueue của Java là một min-heap nhị phân có sẵn',
    'Manual sift-down, for reference:': 'Tự viết sift-down, để tham khảo:',
    'std::priority_queue is a ready-made binary max-heap': 'std::priority_queue là một max-heap nhị phân có sẵn',
    '(pass greater<> for a min-heap, as below)': '(truyền greater<> để có min-heap, như bên dưới)'
  }
});
