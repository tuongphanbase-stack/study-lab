// Nội dung tiếng Việt cho recursion.html (bản tiếng Anh nằm ngay trong trang).
(window.STUDY_LAB_I18N_DATA = window.STUDY_LAB_I18N_DATA || []).push({
  lang: 'vi',
  page: 'recursion',
  strings: {
    title: 'Đệ quy',
    sub: 'Đệ quy là khi một hàm tự gọi lại chính nó, còn một ngăn xếp lặng lẽ ghi nhớ mọi lời gọi chưa hoàn thành. Hãy quan sát ngăn xếp khi tính fibonacci, và xem quay lui (backtracking) hủy bỏ những lựa chọn sai trong bài toán N-Queens.',
    explain: `
    <h2>Cách hoạt động</h2>
    <p>Một hàm đệ quy tự gọi lại chính nó để giải một phiên bản nhỏ hơn của cùng bài toán. Nó luôn cần hai phần:</p>
    <ul>
      <li><b style="color:var(--text)">Trường hợp cơ sở</b> (base case) — một phiên bản đơn giản có thể trả lời ngay, không cần gọi thêm. Ở đây, <code>fib(0)</code> và <code>fib(1)</code> trả về kết quả ngay lập tức.</li>
      <li><b style="color:var(--text)">Trường hợp đệ quy</b> (recursive case) — hàm tự gọi lại với đầu vào nhỏ hơn. <code>fib(n)</code> gọi <code>fib(n-1)</code> và <code>fib(n-2)</code>, rồi cộng hai kết quả lại.</li>
    </ul>
    <p>Mỗi khi một lời gọi bắt đầu, nó được đẩy vào <b style="color:var(--text)">ngăn xếp lời gọi</b> (call stack) — chính là bảng "ngăn xếp lời gọi (trực tiếp)" bên dưới. Nó nằm đó cho đến khi nhận được kết quả từ các lời gọi đệ quy của chính nó, rồi mới được lấy ra. Đó là lý do cây lời gọi phình ra trước, rồi mới thu dần lại thành đáp án cuối cùng.</p>
    <p>Phiên bản đơn giản này có một vấn đề: nó lặp lại công việc. <code>fib(3)</code> bị tính riêng hai lần, một lần bên trong <code>fib(4)</code> và một lần bên trong <code>fib(5)</code>. Trang quy hoạch động khắc phục đúng điều này.</p>
    <p><b style="color:var(--text)">N-Queens dùng một kỹ thuật đệ quy khác gọi là quay lui (backtracking):</b> đặt một quân hậu, rồi thử đặt quân tiếp theo. Nếu đến lúc nào đó bị kẹt, không còn ô hợp lệ nào, hãy gỡ quân vừa đặt và thử một cột khác. Đây là thử và sai, nhưng nó sớm từ bỏ những hướng đi tệ thay vì kiểm tra mọi khả năng đến tận cùng.</p>
    <div class="example-box">
      <div class="example-label">Ví dụ</div>
      <p><code>fib(4)</code> gọi <code>fib(3)</code> và <code>fib(2)</code>. Sau đó <code>fib(3)</code> lại gọi <code>fib(2)</code> và <code>fib(1)</code> — để ý rằng <code>fib(2)</code> bị tính hai lần, một lần trong lời gọi của <code>fib(4)</code> và một lần trong lời gọi của <code>fib(3)</code>. Phần việc lặp lại đó chính là thứ mà trang quy hoạch động tránh được.</p>
      <p>Với N-Queens trên bàn cờ 4×4: đặt một quân hậu ở hàng 0, cột 0. Hóa ra ô an toàn duy nhất ở hàng 1 lại xung đột với các hàng sau, nên thuật toán quay lui ngược về tận hàng 0, chuyển sang thử cột 1, rồi tiếp tục từ đó.</p>
    </div>

`,
    tabFib: 'cây lời gọi fibonacci',
    tabQueens: 'quay lui N-Queens',
    runFib: '▶ Chạy fib(n)',
    stackTitle: 'ngăn xếp lời gọi (trực tiếp)',
    treeTitle: 'cây lời gọi (mỗi nút là một lần gọi hàm)',
    calls: 'tổng số lời gọi: <b>{n}</b>',
    boardSize: 'kích thước bàn cờ',
    solve: '▶ Giải',
    tries: 'số lần thử đặt: <b>{n}</b>'
  },
  comments: {
    'base case: fib(0)=0, fib(1)=1, nothing to compute': 'trường hợp cơ sở: fib(0)=0, fib(1)=1, không cần tính gì',
    'recursive case: sum of the two prior values': 'trường hợp đệ quy: tổng của hai giá trị liền trước',
    'every row has a queen: solution found': 'hàng nào cũng có một quân hậu: đã tìm ra lời giải',
    'try each column in this row': 'thử từng cột trong hàng này',
    'no earlier queen attacks this square': 'không quân hậu nào đặt trước tấn công ô này',
    'place the queen here': 'đặt quân hậu vào đây',
    'recurse into the next row': 'đệ quy sang hàng tiếp theo',
    'downstream succeeded, bubble success up': 'các hàng sau đã thành công, báo thành công ngược lên',
    'backtrack: undo the placement, try next column': 'quay lui: gỡ quân vừa đặt, thử cột tiếp theo',
    'no column in this row worked': 'không cột nào trong hàng này dùng được',
    'base case: fib(0)=0, fib(1)=1': 'trường hợp cơ sở: fib(0)=0, fib(1)=1',
    'every row has a queen placed: solution found': 'hàng nào cũng đã có quân hậu: đã tìm ra lời giải',
    'success! bubble it back up': 'thành công! báo ngược lên trên',
    'no column in this row led to a solution': 'không cột nào trong hàng này dẫn tới lời giải',
    'check every earlier row': 'kiểm tra mọi hàng phía trước',
    'same column or same diagonal': 'cùng cột hoặc cùng đường chéo',
    'recurse; success bubbles up': 'đệ quy; thành công sẽ được báo ngược lên',
    'backtrack: undo, try the next column': 'quay lui: gỡ ra, thử cột tiếp theo',
    'recurse; bubble success up': 'đệ quy; báo thành công ngược lên',
    'backtrack: undo, try next column': 'quay lui: gỡ ra, thử cột tiếp theo'
  }
});
