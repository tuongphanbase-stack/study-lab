// Nội dung tiếng Việt cho sorting-comparison.html (bản tiếng Anh nằm ngay trong trang).
(window.STUDY_LAB_I18N_DATA = window.STUDY_LAB_I18N_DATA || []).push({
  lang: 'vi',
  page: 'sorting-comparison',
  strings: {
    title: 'So sánh <span>thuật toán sắp xếp</span>',
    sub: 'Quicksort, merge sort và heap sort chạy đua trên cùng một mảng. Hãy xem mỗi thuật toán di chuyển qua dữ liệu theo cách khác nhau thế nào để cùng đi tới một kết quả đã sắp xếp.',
    explain: `
    <h2>Cách hoạt động</h2>
    <p>Cả ba thuật toán cùng sắp xếp một dãy số, nhưng mỗi thuật toán quyết định so sánh hay di chuyển phần tử nào theo một cách riêng.</p>
    <ul>
      <li><b style="color:var(--text)">Quicksort</b> (sắp xếp nhanh) — chọn một số làm "pivot" (phần tử chốt). Chuyển mọi số nhỏ hơn sang bên trái nó, mọi số lớn hơn sang bên phải. Sau đó lặp lại đúng quy trình này riêng cho từng bên. Thường rất nhanh, nhưng nếu chọn pivot kém trên dữ liệu đã được sắp xếp sẵn thì có thể chậm đi rất nhiều.</li>
      <li><b style="color:var(--text)">Merge sort</b> (sắp xếp trộn) — chia đôi dãy, rồi tiếp tục chia đôi từng nửa cho đến khi chỉ còn các số đơn lẻ. Sau đó trộn từng cặp lại theo đúng thứ tự, cứ thế lặp lại cho đến khi lại thành một dãy duy nhất đã sắp xếp. Luôn nhanh một cách ổn định, nhưng cần thêm bộ nhớ để trộn.</li>
      <li><b style="color:var(--text)">Heap sort</b> (sắp xếp vun đống) — trước hết sắp xếp cả dãy thành một cấu trúc gọi là max-heap, trong đó số lớn nhất luôn nằm trên đỉnh. Sau đó liên tục lấy số trên đỉnh ra và đặt nó về cuối dãy. Nhanh một cách ổn định, và khác với merge sort, không cần thêm bộ nhớ.</li>
    </ul>
    <p>Hãy để ý cách mỗi thuật toán di chuyển qua cùng một dãy số: quicksort nhảy qua lại theo những lần phân hoạch dứt khoát, merge sort làm việc theo từng nửa gọn gàng, cân đối, còn heap sort thì đều đặn rút dần từ trên đỉnh xuống.</p>
    <div class="example-box">
      <div class="example-label">Ví dụ</div>
      <p>Mảng <code>[5, 2, 8, 1]</code>, dùng quicksort với phần tử cuối (<code>1</code>) làm pivot: không có số nào nhỏ hơn 1, nên nó đứng ở đầu mảng — ta được <code>[1, 5, 2, 8]</code> — rồi quicksort lặp lại riêng cho <code>[5, 2, 8]</code>, phần nằm bên phải nó.</p>
    </div>

`,
    size: 'kích thước',
    newArray: 'Mảng mới',
    race: '▶ Cho cả ba cùng chạy',
    descQ: 'chọn pivot rồi phân hoạch, đệ quy',
    descM: 'chia đôi, rồi trộn lại theo thứ tự',
    descH: 'dựng max-heap, liên tục lấy ra phần tử lớn nhất',
    cmp: 'số lần so sánh: <b>{c}</b>',
    hint: 'vàng = đang so sánh · đỏ = đang hoán đổi · xanh lá = đã nằm đúng vị trí cuối cùng'
  },
  comments: {
    'fewer than 2 elements: already sorted': 'ít hơn 2 phần tử: coi như đã sắp xếp',
    'pick the last element as the pivot': 'chọn phần tử cuối làm pivot',
    'boundary: everything before i is < pivot': 'ranh giới: mọi phần tử trước i đều < pivot',
    'scan the rest of the range': 'duyệt phần còn lại của khoảng',
    'move this smaller element into the left zone': 'chuyển phần tử nhỏ hơn này vào vùng bên trái',
    'grow the "smaller than pivot" zone': 'mở rộng vùng "nhỏ hơn pivot"',
    'put the pivot right after its smaller elements': 'đặt pivot ngay sau các phần tử nhỏ hơn nó',
    'recursively sort everything left of the pivot': 'sắp xếp đệ quy mọi thứ bên trái pivot',
    'recursively sort everything right of the pivot': 'sắp xếp đệ quy mọi thứ bên phải pivot',
    'default to sorting the whole array on first call': 'lần gọi đầu tiên mặc định sắp xếp cả mảng',
    'move this smaller element left of the boundary': 'chuyển phần tử nhỏ hơn này sang trái ranh giới',
    'place the pivot right after its smaller elements': 'đặt pivot ngay sau các phần tử nhỏ hơn nó',
    'swap into the left zone': 'hoán đổi vào vùng bên trái',
    'grow the left zone': 'mở rộng vùng bên trái',
    'place pivot after its smaller elements': 'đặt pivot sau các phần tử nhỏ hơn nó'
  }
});
