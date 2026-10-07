// Nội dung tiếng Việt cho topological-sort.html (bản tiếng Anh nằm ngay trong trang).
// Tên các việc trong đồ thị (setup, design, backend, ...) được giữ nguyên như định danh.
(window.STUDY_LAB_I18N_DATA = window.STUDY_LAB_I18N_DATA || []).push({
  lang: 'vi',
  page: 'topological-sort',
  strings: {
    title: 'Sắp xếp <span>tô-pô</span>',
    sub: 'Biểu diễn sự phụ thuộc giữa các công việc thành một đồ thị: mũi tên từ A tới B nghĩa là A phải xong trước. Thuật toán Kahn tìm ra một thứ tự thực hiện hợp lệ bằng cách liên tục xếp lịch cho những việc không còn điều kiện tiên quyết nào chưa hoàn thành.',
    explain: `
    <h2>Cách hoạt động</h2>
    <p>Cách này chỉ dùng được trên <b style="color:var(--text)">DAG</b> — đồ thị có hướng không chu trình (directed acyclic graph): các cạnh có mũi tên và không có vòng lặp nào. Hãy coi nó như sự phụ thuộc giữa các công việc: mũi tên từ A tới B nghĩa là "A phải xong thì B mới được bắt đầu". Mục tiêu là tìm ra một thứ tự hợp lệ để làm tất cả.</p>
    <p>Trang này dùng <b style="color:var(--text)">thuật toán Kahn</b>:</p>
    <ol style="margin:0 0 12px;padding-left:20px;color:var(--muted);font-size:15px;line-height:1.75;">
      <li>Đếm <b style="color:var(--text)">bậc vào</b> (in-degree) của mỗi việc — có bao nhiêu việc khác trỏ vào nó, tức là nó có bao nhiêu điều kiện tiên quyết.</li>
      <li>Việc nào không có điều kiện tiên quyết thì sẵn sàng làm ngay.</li>
      <li>Chọn một việc đã sẵn sàng, thêm nó vào thứ tự đã hoàn thành, rồi gỡ nó khỏi đồ thị.</li>
      <li>Gỡ nó đi sẽ làm giảm bậc vào của những việc mà nó trỏ tới — một số việc trong đó có thể cũng trở nên sẵn sàng.</li>
      <li>Lặp lại cho đến khi mọi việc đều được xếp lịch.</li>
    </ol>
    <p>Nếu có những việc mãi không giảm được bậc vào về 0, nghĩa là các phụ thuộc thật sự tạo thành chu trình — không tồn tại thứ tự hợp lệ nào.</p>
    <div class="example-box">
      <div class="example-label">Ví dụ</div>
      <p>Các việc: <code>wash → dry → fold</code> (giặt → sấy → gấp). <code>wash</code> không có điều kiện tiên quyết, nên sẵn sàng trước tiên. Khi nó xong, <code>dry</code> trở nên sẵn sàng (điều kiện tiên quyết duy nhất của nó đã hoàn thành). Khi <code>dry</code> xong, <code>fold</code> trở nên sẵn sàng. Thứ tự hợp lệ duy nhất ở đây là <code>wash, dry, fold</code> — làm theo bất kỳ thứ tự nào khác đều phá vỡ một phụ thuộc.</p>
    </div>

`,
    run: '▶ Chạy thuật toán Kahn',
    newGraph: 'Đồ thị mới',
    initial: 'vàng = sẵn sàng để xếp lịch (bậc vào 0) · xanh lá = đã xếp lịch',
    cycle: 'phát hiện chu trình — không có thứ tự hợp lệ',
    readyNow: 'sẵn sàng lúc này (bậc vào 0): {list}',
    scheduled: 'đã xếp lịch "{n}" — giảm bậc vào của các việc phụ thuộc vào nó',
    done: 'xong — thứ tự hợp lệ: <b>{o}</b>'
  },
  comments: {
    'how many prerequisites each node has': 'mỗi đỉnh có bao nhiêu điều kiện tiên quyết',
    'nodes with no unfinished prerequisites': 'các đỉnh không còn điều kiện tiên quyết nào chưa xong',
    'schedule this ready node next': 'xếp lịch tiếp cho đỉnh đã sẵn sàng này',
    'node "unlocks" each of its dependents': 'đỉnh này "mở khóa" từng đỉnh phụ thuộc vào nó',
    'one fewer prerequisite remains': 'bớt đi một điều kiện tiên quyết',
    "no prerequisites left: it's ready": 'hết điều kiện tiên quyết: nó đã sẵn sàng',
    'some nodes never hit inDegree 0': 'có đỉnh không bao giờ đạt inDegree 0',
    'neighbor gains one more prerequisite': 'đỉnh kề có thêm một điều kiện tiên quyết',
    'ready nodes now': 'các đỉnh đã sẵn sàng lúc này',
    "no prerequisites left: it's ready now": 'hết điều kiện tiên quyết: giờ nó đã sẵn sàng',
    'some nodes never reached in-degree 0': 'có đỉnh không bao giờ giảm được bậc vào về 0',
    'neighbor gains a prerequisite': 'đỉnh kề có thêm một điều kiện tiên quyết',
    'no prereqs left: ready now': 'hết điều kiện tiên quyết: đã sẵn sàng',
    'some nodes never unlocked': 'có đỉnh không bao giờ được mở khóa',
    'gains a prerequisite': 'có thêm một điều kiện tiên quyết',
    'ready now': 'đã sẵn sàng',
    'unlock dependents': 'mở khóa các đỉnh phụ thuộc',
    'never unlocked': 'không bao giờ được mở khóa',
    'unlock its dependents': 'mở khóa các đỉnh phụ thuộc vào nó'
  }
});
