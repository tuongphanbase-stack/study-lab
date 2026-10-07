// Nội dung tiếng Việt cho union-find.html (bản tiếng Anh nằm ngay trong trang).
(window.STUDY_LAB_I18N_DATA = window.STUDY_LAB_I18N_DATA || []).push({
  lang: 'vi',
  page: 'union-find',
  strings: {
    title: 'Union<span>-Find</span>',
    sub: '8 phần tử, ban đầu mỗi phần tử là một nhóm riêng. Hợp nhất hai phần tử với nhau, hoặc tìm gốc của một nhóm — và xem kỹ thuật nén đường đi (path compression) làm cây phẳng dần sau mỗi thao tác.',
    explain: `
    <h2>Cách hoạt động</h2>
    <p>Union-Find (còn gọi là cấu trúc tập hợp rời rạc – disjoint set) trả lời thật nhanh một câu hỏi: <b style="color:var(--text)">hai phần tử này đã được nối với nhau chưa?</b> Ban đầu, mỗi phần tử là một nhóm riêng và trỏ vào chính nó.</p>
    <p><code>find(x)</code> lần theo chuỗi con trỏ đi lên cho đến khi gặp một phần tử trỏ vào chính nó — đó là <b style="color:var(--text)">gốc</b> của nhóm. Hai phần tử được nối với nhau khi và chỉ khi chúng có chung một gốc.</p>
    <p><code>union(a, b)</code> nối hai nhóm bằng cách cho gốc của nhóm này trỏ tới gốc của nhóm kia. Đây chính là mẹo mà thuật toán Kruskal (ở trang thuật toán đồ thị) dùng để kiểm tra "thêm cạnh này có tạo thành chu trình không?" — nếu hai đầu cạnh đã có chung gốc, thêm cạnh đó vào chỉ tạo ra một chu trình.</p>
    <p><b style="color:var(--text)">Nén đường đi</b> (path compression) là kỹ thuật tối ưu mà bạn sẽ thấy bên dưới: mỗi lần <code>find</code> đi lên tới gốc, nó cho mọi nút trên đường đi trỏ thẳng tới gốc đó. Nhờ vậy, lần sau khi tra lại bất kỳ nút nào trong số đó, kết quả có ngay lập tức — không phải đi lại cùng một chuỗi nữa.</p>
    <div class="example-box">
      <div class="example-label">Ví dụ</div>
      <p>Bắt đầu với 4 phần tử riêng rẽ: <code>1, 2, 3, 4</code>. Sau <code>union(1, 2)</code> và <code>union(3, 4)</code>, ta có hai nhóm: <code>{1, 2}</code> và <code>{3, 4}</code>. <code>find(1)</code> và <code>find(2)</code> trả về cùng một gốc, nhưng <code>find(1)</code> và <code>find(3)</code> trả về hai gốc khác nhau — chúng vẫn thuộc hai nhóm riêng.</p>
    </div>

`,
    reset: 'đặt lại',
    initial: '8 phần tử, mỗi phần tử là một nhóm riêng',
    same: 'đã ở cùng một nhóm (gốc {r}) — không cần hợp nhất',
    unioned: 'đã hợp nhất: gốc {a} giờ trỏ tới gốc {b}',
    walking: 'đi ngược lên: {path}{root}',
    rootIs: ' (gốc = {r})',
    found: 'find({x}) = <b>{r}</b> — đã nén đường đi, mọi nút vừa đi qua giờ trỏ thẳng tới gốc'
  },
  comments: {
    'x is not its own root yet': 'x chưa phải là gốc của chính nó',
    'path compression: point straight at the root': 'nén đường đi: trỏ thẳng tới gốc',
    "the group's representative": 'phần tử đại diện của nhóm',
    "find a's group representative": 'tìm đại diện của nhóm chứa a',
    "find b's group representative": 'tìm đại diện của nhóm chứa b',
    "only merge if they're in different groups": 'chỉ hợp nhất khi chúng thuộc hai nhóm khác nhau',
    'attach one root to the other': 'gắn gốc này vào gốc kia',
    'everyone starts as their own group (parent = self)': 'ban đầu mỗi phần tử là một nhóm riêng (cha = chính nó)',
    'path compression: point at the root': 'nén đường đi: trỏ tới gốc',
    "find each side's group representative": 'tìm đại diện nhóm của mỗi bên',
    'only merge if in different groups': 'chỉ hợp nhất nếu khác nhóm',
    'everyone starts as their own group': 'ban đầu mỗi phần tử là một nhóm riêng',
    'path compression: point at root': 'nén đường đi: trỏ tới gốc',
    'merge only if different groups': 'chỉ hợp nhất nếu khác nhóm'
  }
});
