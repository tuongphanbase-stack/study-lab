// Nội dung tiếng Việt cho dp.html (bản tiếng Anh nằm ngay trong trang).
(window.STUDY_LAB_I18N_DATA = window.STUDY_LAB_I18N_DATA || []).push({
  lang: 'vi',
  page: 'dp',
  strings: {
    title: 'Quy hoạch <span>động</span>',
    sub: 'Quy hoạch động (DP) giải một bài toán lớn bằng cách điền một bảng các bài toán con nhỏ hơn, mỗi bài đúng một lần, rồi dùng lại các đáp án đó thay vì tính lại. Hãy xem bảng được điền dần, từng ô một.',
    explain: `
    <h2>Cách hoạt động</h2>
    <p>Quy hoạch động (dynamic programming, DP) hữu ích khi một bài toán có thể chia thành các phiên bản nhỏ hơn của chính nó, và những phiên bản nhỏ đó lặp đi lặp lại. Thay vì giải đi giải lại cùng một bài toán con (như đệ quy thuần túy vẫn làm), DP giải mỗi bài toán con <b style="color:var(--text)">đúng một lần</b> và lưu đáp án vào một bảng để dùng về sau.</p>
    <p><b style="color:var(--text)">Fibonacci:</b> mỗi ô đơn giản là tổng của hai ô đứng trước nó — <code>dp[i] = dp[i-1] + dp[i-2]</code>. Điền bảng từ trái sang phải, bắt đầu từ hai giá trị cơ sở đã biết.</p>
    <p><b style="color:var(--text)">Cái túi 0/1</b> (0/1 knapsack): mỗi ô <code>dp[i][c]</code> trả lời câu hỏi "giá trị tốt nhất có thể đạt được là bao nhiêu, nếu chỉ dùng <code>i</code> vật đầu tiên và còn sức chứa <code>c</code>?" Với mỗi vật có hai lựa chọn: bỏ qua, hoặc lấy nó nếu còn vừa. Ô đó lưu lựa chọn cho kết quả tốt hơn.</p>
    <p><b style="color:var(--text)">Khoảng cách chỉnh sửa</b> (edit distance): mỗi ô hỏi "cần bao nhiêu lần sửa từng chữ cái để biến tiền tố này thành tiền tố kia?" Nếu hai chữ cái hiện tại đã khớp nhau thì không cần làm thêm gì — chỉ việc chép đáp án từ ô chéo. Ngược lại, cộng thêm một lần sửa vào ô lân cận nào rẻ nhất.</p>
    <p>Trong mọi trường hợp, bảng chỉ cần điền một lần, và mỗi ô chỉ phụ thuộc vào những ô đã được tính trước đó.</p>
    <div class="example-box">
      <div class="example-label">Ví dụ</div>
      <p><b style="color:var(--text)">Ví dụ cái túi:</b> sức chứa 5, một vật nặng 3 và có giá trị 4, một vật khác nặng 2 và có giá trị 3. Lấy cả hai thì vừa khít (<code>3 + 2 = 5</code>) với tổng giá trị <code>4 + 3 = 7</code> — tốt hơn so với chỉ lấy một vật.</p>
      <p><b style="color:var(--text)">Ví dụ Fibonacci:</b> <code>dp[5] = dp[4] + dp[3] = 3 + 2 = 5</code>, được điền thẳng từ hai ô đã biết.</p>
    </div>

`,
    tabFib: 'fibonacci (có ghi nhớ)',
    tabKnap: 'cái túi 0/1',
    tabEdit: 'khoảng cách chỉnh sửa',
    fill: '▶ Điền bảng',
    capacity: 'sức chứa',
    items: 'các vật (khối lượng/giá trị): {list}',
    baseCases: 'trường hợp cơ sở: dp[0]=0, dp[1]=1',
    fibDone: 'xong — fib({n}) = <b>{v}</b>',
    itemCap: 'vật\\sức chứa',
    ksTake: 'vật {i} (w{w}/v{v}), sức chứa {c}: max(bỏ qua={skip}, lấy={take})',
    ksHeavy: 'vật {i} (w{w}/v{v}), sức chứa {c}: quá nặng, giữ nguyên {keep}',
    ksDone: 'xong — giá trị tốt nhất với sức chứa {cap}: <b>{v}</b>',
    edSame: "'{a}' == '{b}' → chép từ ô chéo: {d}",
    edDiff: "'{a}' ≠ '{b}' → 1 + min(xóa {del}, chèn {ins}, thay {d})",
    edDone: 'xong — khoảng cách chỉnh sửa giữa "{a}" và "{b}": <b>{v}</b>'
  },
  comments: {
    'dp[i][c] = best value': 'dp[i][c] = giá trị tốt nhất',
    'consider items one at a time': 'xét lần lượt từng vật',
    'for every possible capacity so far': 'với mọi sức chứa có thể tính đến lúc này',
    'option 1: skip item i, carry forward': 'lựa chọn 1: bỏ qua vật i, giữ nguyên giá trị cũ',
    'item i actually fits in capacity c': 'vật i thực sự vừa với sức chứa c',
    'option 2: take item i, add its value to the best value with less capacity': 'lựa chọn 2: lấy vật i, cộng giá trị của nó vào giá trị tốt nhất với sức chứa nhỏ hơn',
    'best value achievable using all items within the capacity': 'giá trị tốt nhất có thể đạt được khi dùng mọi vật trong giới hạn sức chứa',
    'dp[i][c] = best value so far': 'dp[i][c] = giá trị tốt nhất đến giờ',
    'dp[i][c] = best value achievable using the first i items with capacity c': 'dp[i][c] = giá trị tốt nhất đạt được khi dùng i vật đầu tiên với sức chứa c',
    'option 2: take item i, add its value to best value with less capacity': 'lựa chọn 2: lấy vật i, cộng giá trị của nó vào giá trị tốt nhất với sức chứa nhỏ hơn'
  }
});
