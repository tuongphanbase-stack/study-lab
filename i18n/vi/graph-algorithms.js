// Nội dung tiếng Việt cho graph-algorithms.html (bản tiếng Anh nằm ngay trong trang).
(window.STUDY_LAB_I18N_DATA = window.STUDY_LAB_I18N_DATA || []).push({
  lang: 'vi',
  page: 'graph-algorithms',
  strings: {
    title: 'Thuật toán <span>đồ thị</span>',
    sub: 'Cùng một đồ thị có trọng số, hai câu hỏi khác nhau. Dijkstra tìm đường đi ngắn nhất từ một đỉnh tới mọi đỉnh khác. Kruskal tìm tập cạnh có tổng chi phí nhỏ nhất nối tất cả các đỉnh mà không tạo chu trình.',
    explain: `
    <h2>Cách hoạt động</h2>
    <p><b style="color:var(--text)">Thuật toán Dijkstra</b> tìm đường đi ngắn nhất từ một đỉnh xuất phát tới mọi đỉnh khác. Quy trình như sau:</p>
    <ol style="margin:0 0 12px;padding-left:20px;color:var(--muted);font-size:15px;line-height:1.75;">
      <li>Đặt khoảng cách của đỉnh xuất phát là 0, và khoảng cách của mọi đỉnh khác là vô cùng (chưa biết).</li>
      <li>Chọn đỉnh chưa thăm có khoảng cách đã biết nhỏ nhất hiện tại, và chốt khoảng cách đó là kết quả cuối cùng.</li>
      <li>Xét từng đỉnh kề của đỉnh đó: đi qua đỉnh này có cho chúng một đường ngắn hơn đường hiện có không? Nếu có, cập nhật lại.</li>
      <li>Lặp lại cho đến khi mọi đỉnh đều đã được chốt.</li>
    </ol>
    <p>Cách này đúng vì mọi trọng số cạnh đều dương — một khi một đỉnh có khoảng cách nhỏ nhất trong số các đỉnh còn lại, về sau không đường nào có thể ngắn hơn được nữa.</p>
    <p><b style="color:var(--text)">Thuật toán Kruskal</b> giải một bài toán khác: nối tất cả các đỉnh với chi phí thấp nhất có thể, chỉ dùng vừa đủ số cạnh cần thiết. Nó hoạt động như sau:</p>
    <ol style="margin:0;padding-left:20px;color:var(--muted);font-size:15px;line-height:1.75;">
      <li>Sắp xếp mọi cạnh từ rẻ nhất đến đắt nhất.</li>
      <li>Duyệt các cạnh theo thứ tự đó. Chỉ thêm một cạnh nếu nó nối hai nhóm chưa được nối với nhau.</li>
      <li>Bỏ qua mọi cạnh chỉ tạo ra chu trình giữa các đỉnh vốn đã được nối.</li>
      <li>Dừng lại khi mọi đỉnh đã được nối.</li>
    </ol>
    <div class="example-box">
      <div class="example-label">Ví dụ</div>
      <p>Giả sử đỉnh <code>A</code> nối tới <code>B</code> (trọng số 4) và <code>C</code> (trọng số 1). Bắt đầu từ <code>A</code>: khoảng cách tới <code>C</code> thành 1, khoảng cách tới <code>B</code> thành 4. Vì <code>C</code> rẻ hơn, Dijkstra chốt nó trước, rồi xét các đỉnh kề của C — nếu <code>C</code> nối tới <code>B</code> với trọng số 2, ta có đường đi dài <code>1 + 2 = 3</code> tới <code>B</code>, tốt hơn đường trực tiếp dài 4. Vậy khoảng cách của <code>B</code> được cập nhật thành 3.</p>
    </div>

`,
    optDijkstra: 'Dijkstra — đường đi ngắn nhất từ A',
    optKruskal: 'Kruskal — cây khung nhỏ nhất',
    run: '▶ Chạy',
    newGraph: 'Đồ thị mới',
    initial: 'chọn một thuật toán rồi nhấn chạy',
    hint: 'số trên cạnh là trọng số · xanh lá = đã chốt / đã chọn, vàng = đang được xét',
    finalizing: 'chốt <b>{n}</b> với khoảng cách <b>{d}</b>',
    dijkstraDone: 'xong — khoảng cách ngắn nhất từ <b>{n}</b> hiển thị phía trên mỗi đỉnh',
    considering: 'đang xét cạnh {a}–{b} (trọng số {w})',
    kruskalDone: 'xong — tổng trọng số của cây khung nhỏ nhất: <b>{w}</b>'
  },
  comments: {
    'zero distance to reach itself': 'khoảng cách tới chính nó bằng 0',
    'unknown distance initially': 'ban đầu chưa biết khoảng cách',
    'explore cheapest known distance first': 'khám phá trước đỉnh có khoảng cách đã biết rẻ nhất',
    'pull the currently-cheapest node': 'lấy ra đỉnh đang rẻ nhất',
    'a cheaper route was already found: skip': 'đã tìm được đường rẻ hơn: bỏ qua',
    'check every edge out of node': 'xét mọi cạnh đi ra từ node',
    'cost of reaching neighbor via node': 'chi phí tới đỉnh kề khi đi qua node',
    'found a cheaper route': 'tìm được đường rẻ hơn',
    'record the improvement': 'ghi nhận phần cải thiện',
    're-check this neighbor later': 'sau này sẽ xét lại đỉnh kề này',
    'shortest distance from source to every node': 'khoảng cách ngắn nhất từ đỉnh nguồn tới mọi đỉnh',
    'binary min-heap, used as the priority queue': 'min-heap nhị phân, dùng làm hàng đợi ưu tiên',
    'unknown distance to every node': 'chưa biết khoảng cách tới mọi đỉnh',
    '(distance, node), cheapest first': '(khoảng cách, đỉnh), rẻ nhất đứng trước',
    'a cheaper route was already found: skip stale entry': 'đã tìm được đường rẻ hơn: bỏ qua mục đã lỗi thời',
    'simple array used as a priority queue (distance, node)': 'mảng đơn giản dùng làm hàng đợi ưu tiên (khoảng cách, đỉnh)',
    're-sort so the cheapest entry is first': 'sắp xếp lại để mục rẻ nhất đứng đầu',
    'stale entry: a cheaper route already found': 'mục lỗi thời: đã tìm được đường rẻ hơn',
    'cost via this node': 'chi phí khi đi qua đỉnh này',
    'unknown distance': 'chưa biết khoảng cách',
    'cheapest first': 'rẻ nhất đứng trước',
    'dist now holds the shortest distance from source to every node': 'giờ dist chứa khoảng cách ngắn nhất từ đỉnh nguồn tới mọi đỉnh',
    'min-heap': 'min-heap',
    'stale entry: cheaper route already found': 'mục lỗi thời: đã có đường rẻ hơn'
  }
});
