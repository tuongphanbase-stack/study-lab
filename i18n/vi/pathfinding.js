// Nội dung tiếng Việt cho pathfinding.html (bản tiếng Anh nằm ngay trong trang).
(window.STUDY_LAB_I18N_DATA = window.STUDY_LAB_I18N_DATA || []).push({
  lang: 'vi',
  page: 'pathfinding',
  strings: {
    title: 'Tìm đường',
    sub: 'Kéo chuột để vẽ tường, rồi cho BFS, DFS, Dijkstra hoặc A* chạy đua từ ô xanh lá đến ô đỏ. Các ô tô màu nhạt là những ô đã được khám phá; vệt màu chàm đậm là đường đi cuối cùng.',
    explain: `
    <h2>Cách hoạt động</h2>
    <p>Cả bốn thuật toán về cơ bản đều làm cùng một việc: bắt đầu từ ô xanh lá, rồi lan dần sang các ô lân cận, mỗi lần một bước, cho đến khi chạm tới ô đỏ. Điểm khác nhau nằm ở chỗ <b style="color:var(--text)">mỗi thuật toán chọn ô nào để đi tiếp.</b></p>
    <ul>
      <li><code>BFS</code> (tìm kiếm theo chiều rộng) luôn khám phá trước những ô gần nhất chưa được khám phá. Hãy hình dung những gợn sóng lan ra khi bạn thả một hòn đá xuống mặt nước. Nhờ vậy, ngay lần đầu tiên nó chạm tới đích, con đường đó chắc chắn là ngắn nhất.</li>
      <li><code>DFS</code> (tìm kiếm theo chiều sâu) chọn một hướng rồi đi theo hướng đó xa nhất có thể, chỉ quay lại khi gặp ngõ cụt. Nó sẽ tìm được một đường đi, nhưng không nhất thiết là đường ngắn nhất.</li>
      <li><code>Dijkstra</code> được thiết kế cho những lưới mà các bước đi có chi phí khác nhau. Ở mỗi bước, nó luôn đi tiếp từ ô có tổng chi phí tích lũy thấp nhất trong số các ô đang tới được.</li>
      <li><code>A*</code> hoạt động giống Dijkstra, nhưng còn ước lượng thêm khoảng cách theo đường thẳng từ mỗi ô tới đích. Phép ước lượng này (gọi là heuristic) kéo quá trình tìm kiếm về phía đích, thay vì lan đều ra mọi hướng.</li>
    </ul>
    <p>Tường thì rất đơn giản: đó chỉ là những ô mà thuật toán không bao giờ được phép bước vào.</p>
    <div class="example-box">
      <div class="example-label">Ví dụ</div>
      <p>Hãy hình dung một lưới 4×4 có một bức tường chắn ở giữa, chỉ chừa lại một khe hở. Xuất phát từ góc trên bên trái, BFS kiểm tra tất cả các ô cách 1 bước trước, rồi tới các ô cách 2 bước, cứ thế tiếp tục — giống như những gợn sóng lan ra. Nó tới được khe hở trên tường, lan qua đó và chạm tới góc dưới bên phải sau đúng 6 bước. Vì BFS luôn xử lý xong các ô gần rồi mới tới các ô xa hơn, con đường 6 bước đó chắc chắn là ngắn nhất có thể.</p>
    </div>
`,
    optBfs: 'BFS (đường ngắn nhất, không trọng số)',
    optDfs: 'DFS (khám phá, không đảm bảo ngắn nhất)',
    optDijkstra: 'Dijkstra (đường ngắn nhất có trọng số)',
    optAstar: 'A* (dẫn hướng bằng heuristic)',
    run: '▶ Chạy',
    clearWalls: 'Xóa tường',
    maze: 'Mê cung ngẫu nhiên',
    resetGrid: 'Đặt lại lưới',
    legendStart: 'điểm đầu',
    legendEnd: 'điểm cuối',
    legendWall: 'tường',
    legendFrontier: 'biên (frontier)',
    legendVisited: 'đã duyệt',
    legendPath: 'đường đi',
    stats: 'số ô đã duyệt: <b>{v}</b> · độ dài đường đi: <b>{len}</b>',
    noPath: 'không tìm thấy đường',
    hint: 'nhấn và kéo trên các ô trống để thêm/xóa tường · kéo ô đầu hoặc ô cuối để di chuyển chúng'
  },
  comments: {
    'cells waiting to be explored, oldest first': 'các ô đang chờ khám phá, ô vào trước được xét trước',
    "cells we've already queued, so we don't requeue them": 'các ô đã đưa vào hàng đợi, để không đưa vào lại',
    'remembers how we reached each cell, for path rebuilding': 'ghi nhớ ta đã đến mỗi ô từ đâu, để dựng lại đường đi',
    'keep going until nothing left to explore': 'tiếp tục cho đến khi không còn gì để khám phá',
    'take the oldest queued cell': 'lấy ô vào hàng đợi sớm nhất',
    'reached the destination': 'đã tới đích',
    'walk parent pointers back to start': 'lần theo con trỏ cha ngược về điểm đầu',
    'check every adjacent cell': 'xét mọi ô kề',
    'mark so we never requeue it': 'đánh dấu để không bao giờ đưa nó vào hàng đợi lần nữa',
    'remember how we got here': 'ghi nhớ ta đến đây từ đâu',
    'schedule it for exploration': 'xếp nó vào danh sách chờ khám phá',
    'queue emptied without reaching the end': 'hàng đợi đã rỗng mà vẫn chưa tới đích',
    'deque gives O(1) pops from the front': 'deque cho phép lấy phần tử ở đầu trong O(1)',
    "cells already queued, so we don't requeue them": 'các ô đã vào hàng đợi, để không đưa vào lại',
    'maps a cell to the cell we reached it from': 'ánh xạ mỗi ô tới ô mà ta đã đi từ đó sang',
    'take the oldest queued cell, O(1)': 'lấy ô vào hàng đợi sớm nhất, O(1)',
    'check every adjacent, non-wall cell': 'xét mọi ô kề không phải là tường',
    "mark so it's never queued twice": 'đánh dấu để không bao giờ vào hàng đợi hai lần',
    'start from the destination and work backwards': 'bắt đầu từ đích rồi đi ngược lại',
    'keep walking until we hit the start (no parent)': 'đi tiếp cho đến khi gặp điểm đầu (không có cha)',
    'we built it backwards, so flip it': 'ta dựng đường đi theo chiều ngược, nên đảo lại',
    'stringified coords already queued': 'tọa độ (dạng chuỗi) đã vào hàng đợi',
    'cell -> the cell we reached it from': 'ô -> ô mà ta đã đi từ đó sang',
    'cells already queued': 'các ô đã vào hàng đợi',
    'seed the search with the starting cell': 'khởi động việc tìm kiếm bằng ô xuất phát',
    'mark the start as seen immediately': 'đánh dấu ngay điểm đầu là đã thấy'
  }
});
