// Nội dung tiếng Việt cho segment-tree.html (bản tiếng Anh nằm ngay trong trang).
(window.STUDY_LAB_I18N_DATA = window.STUDY_LAB_I18N_DATA || []).push({
  lang: 'vi',
  page: 'segment-tree',
  strings: {
    title: 'Segment Tree<span> (cây phân đoạn)</span>',
    sub: 'Một cái cây tính gộp sẵn các đoạn của mảng, nhờ đó truy vấn tổng trên một khoảng chỉ mất O(log n) thay vì O(n). Hãy dựng cây, rồi truy vấn một khoảng bất kỳ và xem nó quyết định những nút nào có thể dùng thẳng kết quả.',
    explain: `
    <h2>Cách hoạt động</h2>
    <p>Một mảng thông thường vẫn trả lời được câu hỏi "tổng của khoảng này là bao nhiêu?", nhưng mỗi lần đều phải cộng từng số một, nên sẽ chậm với các khoảng lớn. Segment tree (cây phân đoạn) trả lời cùng câu hỏi đó nhanh hơn nhiều bằng cách tính trước các tổng và lưu chúng trong một cái cây.</p>
    <p><b style="color:var(--text)">Dựng cây:</b> mỗi lá giữ một số của mảng. Mỗi nút phía trên lá giữ tổng của hai nút con. Cứ gộp dần lên trên cho đến khi nút trên cùng giữ tổng của cả mảng.</p>
    <p><b style="color:var(--text)">Truy vấn một khoảng:</b> bắt đầu từ gốc và đi dần xuống.</p>
    <ol style="margin:0;padding-left:20px;color:var(--muted);font-size:15px;line-height:1.75;">
      <li>Nếu đoạn của một nút nằm trọn trong khoảng bạn đang hỏi, chỉ việc dùng tổng đã tính sẵn của nó. Không cần đi sâu hơn.</li>
      <li>Nếu đoạn của một nút chỉ chồng lấn một phần, xét riêng hai nút con của nó rồi cộng kết quả lại.</li>
      <li>Nếu đoạn của một nút hoàn toàn không chồng lấn, bỏ qua nó.</li>
    </ol>
    <p>Vì phần lớn cây được bỏ qua theo cách này, mỗi truy vấn chỉ cần xét một số ít nút.</p>
    <div class="example-box">
      <div class="example-label">Ví dụ</div>
      <p>Mảng <code>[1, 3, 5, 7]</code>. Gốc của cây giữ tổng toàn bộ, <code>16</code>. Hỏi tổng của khoảng <code>[1, 2]</code> (các giá trị <code>3</code> và <code>5</code>) hoàn toàn không cần dùng tới gốc — nó đi thẳng tới nút đã tính sẵn phủ đúng khoảng đó, nút này đã giữ sẵn <code>8</code>.</p>
    </div>

`,
    arrayPh: 'các số, cách nhau bằng dấu phẩy',
    build: 'dựng cây',
    range: 'khoảng',
    query: '▶ Truy vấn tổng',
    initial: 'dựng cây trước, rồi truy vấn một khoảng',
    visiting: 'đang xét nút phủ đoạn [{s}, {e}] cho truy vấn [{l}, {r}]',
    inside: '[{s}, {e}] nằm trọn trong [{l}, {r}] — dùng luôn tổng đã tính sẵn {sum}',
    built: 'đã dựng xong cây — hãy thử truy vấn một khoảng',
    buildFirst: 'hãy dựng cây trước',
    sum: 'tổng của khoảng [{l}, {r}] = <b>{sum}</b>'
  },
  comments: {
    'a single-element range: this is a leaf': 'đoạn chỉ có một phần tử: đây là lá',
    'split the range in half': 'chia đôi đoạn',
    'recursively build the left half': 'dựng đệ quy nửa trái',
    'recursively build the right half': 'dựng đệ quy nửa phải',
    'this node = sum of its two children': 'nút này = tổng của hai nút con',
    "this node's range doesn't overlap [l,r]": 'đoạn của nút này không giao với [l,r]',
    "this node's range is fully inside [l,r]": 'đoạn của nút này nằm trọn trong [l,r]',
    'partial overlap: split and recurse': 'giao một phần: chia ra và đệ quy',
    '4n is enough room for any binary tree over n leaves': '4n là đủ chỗ cho mọi cây nhị phân có n lá',
    'single-element range: this is a leaf': 'đoạn một phần tử: đây là lá',
    'sum of children': 'tổng của các nút con',
    "this node's range doesn't overlap [l, r] at all": 'đoạn của nút này hoàn toàn không giao với [l, r]',
    "this node's range is fully inside [l, r]": 'đoạn của nút này nằm trọn trong [l, r]',
    'partial overlap: split and recurse into both': 'giao một phần: chia ra và đệ quy vào cả hai bên',
    '4n is enough for any binary tree over n leaves': '4n là đủ cho mọi cây nhị phân có n lá',
    'leaf: one element': 'lá: một phần tử',
    'no overlap with [l, r] at all': 'hoàn toàn không giao với [l, r]',
    'fully inside [l, r]': 'nằm trọn trong [l, r]'
  }
});
