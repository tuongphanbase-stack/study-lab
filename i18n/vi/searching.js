// Nội dung tiếng Việt cho searching.html (bản tiếng Anh nằm ngay trong trang).
(window.STUDY_LAB_I18N_DATA = window.STUDY_LAB_I18N_DATA || []).push({
  lang: 'vi',
  page: 'searching',
  strings: {
    title: 'Tìm kiếm',
    sub: 'Tìm kiếm tuyến tính kiểm tra lần lượt từng ô — O(n). Tìm kiếm nhị phân chỉ dùng được trên mảng đã sắp xếp, nhưng mỗi bước lại thu hẹp vùng tìm kiếm còn một nửa — O(log n). Cùng một mảng, cùng một giá trị cần tìm, hãy chạy cả hai.',
    explain: `
    <h2>Cách hoạt động</h2>
    <p><b style="color:var(--text)">Tìm kiếm tuyến tính</b> (linear search) là cách đơn giản nhất: kiểm tra chỉ số 0, rồi 1, rồi 2, cứ thế cho đến khi tìm thấy giá trị cần tìm hoặc hết phần tử. Nó không bỏ qua phần tử nào, nên trong trường hợp xấu nhất phải kiểm tra đủ cả <code>n</code> phần tử.</p>
    <p><b style="color:var(--text)">Tìm kiếm nhị phân</b> (binary search) nhanh hơn nhiều, nhưng chỉ dùng được trên mảng đã sắp xếp. Ý tưởng như sau:</p>
    <ol style="margin:0 0 12px;padding-left:20px;color:var(--muted);font-size:15px;line-height:1.75;">
      <li>Xem phần tử ở giữa.</li>
      <li>Nếu đó là giá trị cần tìm thì xong.</li>
      <li>Nếu giá trị cần tìm nhỏ hơn, bỏ qua toàn bộ nửa bên phải — mảng đã sắp xếp nên không phần tử nào ở đó có thể khớp.</li>
      <li>Nếu giá trị cần tìm lớn hơn, bỏ qua toàn bộ nửa bên trái.</li>
      <li>Lặp lại với nửa còn lại.</li>
    </ol>
    <p>Mỗi bước cắt vùng tìm kiếm còn một nửa, nên chỉ cần khoảng <code>log₂(n)</code> bước. Với 1.000 phần tử, đó là khoảng 10 bước thay vì tối đa 1.000 bước.</p>
    <p>Điểm cần lưu ý: tìm kiếm nhị phân chỉ đáng dùng khi mảng đã được sắp xếp sẵn, vì bản thân việc sắp xếp cũng tốn thêm thời gian.</p>
    <div class="example-box">
      <div class="example-label">Ví dụ</div>
      <p>Mảng: <code>[2, 5, 8, 12, 16, 23, 38, 45]</code>, cần tìm <code>23</code>.</p>
      <p>Chỉ số ở giữa là 3 (giá trị <code>12</code>). Vì <code>23 &gt; 12</code>, ta loại bỏ mọi phần tử từ chỉ số 3 trở về trước. Giờ kiểm tra phần tử ở giữa phần còn lại: chỉ số 5 (giá trị <code>23</code>) — tìm thấy, chỉ sau 2 lần so sánh thay vì phải kiểm tra lần lượt cả 8 phần tử.</p>
    </div>

`,
    size: 'kích thước',
    target: 'giá trị cần tìm',
    newArray: 'Mảng mới',
    runBoth: '▶ Chạy cả hai',
    linearTitle: 'tìm kiếm tuyến tính — O(n)',
    linearDesc: 'Duyệt mảng từ trái sang phải cho đến khi tìm thấy giá trị cần tìm hoặc hết ô.',
    binaryTitle: 'tìm kiếm nhị phân — O(log n)',
    binaryDesc: 'Mảng được sắp xếp trước. Mỗi bước kiểm tra phần tử ở giữa khoảng còn lại và loại bỏ nửa không thể chứa giá trị cần tìm.',
    cmp: 'số lần so sánh: <b>{c}</b>',
    cmpChecking: 'số lần so sánh: <b>{c}</b> — đang kiểm tra chỉ số {i}',
    cmpFound: 'số lần so sánh: <b>{c}</b> — tìm thấy tại chỉ số <b>{i}</b>',
    cmpNotFound: 'số lần so sánh: <b>{c}</b> — không tìm thấy',
    cmpRange: 'số lần so sánh: <b>{c}</b> — khoảng [{lo}, {hi}], giữa {mid}'
  },
  comments: {
    'left edge of the range still worth checking': 'mép trái của khoảng còn cần kiểm tra',
    'right edge of the range still worth checking': 'mép phải của khoảng còn cần kiểm tra',
    'keep going while a range remains': 'tiếp tục khi khoảng vẫn chưa rỗng',
    'pick the midpoint of the range': 'chọn điểm giữa của khoảng',
    'found it': 'tìm thấy rồi',
    'target must be to the right': 'giá trị cần tìm chắc chắn nằm bên phải',
    'discard the left half, including mid': 'bỏ nửa bên trái, tính cả mid',
    'target must be to the left': 'giá trị cần tìm chắc chắn nằm bên trái',
    'discard the right half, including mid': 'bỏ nửa bên phải, tính cả mid',
    "range shrank to nothing: target isn't in the array": 'khoảng đã thu về rỗng: giá trị cần tìm không có trong mảng',
    'the range of indices still worth checking': 'khoảng chỉ số còn cần kiểm tra',
    'midpoint of the current range': 'điểm giữa của khoảng hiện tại',
    'target is to the right: drop left half': 'giá trị cần tìm ở bên phải: bỏ nửa trái',
    'target is to the left: drop right half': 'giá trị cần tìm ở bên trái: bỏ nửa phải',
    'avoids overflow vs (low+high)/2': 'tránh tràn số so với (low+high)/2',
    'target is to the right': 'giá trị cần tìm ở bên phải',
    'target is to the left': 'giá trị cần tìm ở bên trái'
  }
});
