// Nội dung tiếng Việt cho consistent-hashing.html (bản tiếng Anh nằm ngay trong trang).
(window.STUDY_LAB_I18N_DATA = window.STUDY_LAB_I18N_DATA || []).push({
  lang: 'vi',
  page: 'consistent-hashing',
  strings: {
    title: 'Băm <span>nhất quán</span>',
    sub: 'Server và khóa cùng nằm trên một vòng tròn thay vì dùng hash % N thông thường. Thêm hoặc gỡ một server và xem chỉ có rất ít khóa phải ánh xạ lại, so với cách chia lấy dư đơn thuần khi gần như mọi thứ đều phải chuyển chỗ.',
    explain: `
    <h2>Cách hoạt động</h2>
    <p>Một cách đơn giản để chia dữ liệu cho nhiều server là <code>hash(key) % number_of_servers</code>. Cách này chạy tốt — cho đến khi bạn thêm hoặc gỡ một server. Ngay khi số server thay đổi, server đích của gần như <b style="color:var(--text)">mọi</b> khóa cũng thay đổi theo, buộc một lượng dữ liệu khổng lồ phải di chuyển.</p>
    <p>Băm nhất quán (consistent hashing) khắc phục điều này bằng một cách bố trí khác: hãy hình dung một vòng tròn (gọi là "ring"). Cả <b style="color:var(--text)">server</b> lẫn <b style="color:var(--text)">khóa</b> đều được đặt ở đâu đó trên cùng vòng tròn này, dựa vào giá trị băm của chúng. Một khóa thuộc về <b style="color:var(--text)">server kế tiếp theo chiều kim đồng hồ</b> tính từ vị trí của nó.</p>
    <p>Và đây là lợi ích: khi thêm hoặc gỡ một server, chỉ những khóa nằm giữa nó và server liền trước trên vòng mới phải di chuyển. Mọi thứ khác trên vòng giữ nguyên vị trí. Hãy so với cách chia lấy dư đơn thuần, khi thay đổi số server sẽ xáo trộn gần như tất cả.</p>
    <div class="example-box">
      <div class="example-label">Ví dụ</div>
      <p>Vòng có các vị trí 0–999. Các server nằm ở <code>100</code>, <code>400</code> và <code>700</code>. Một khóa băm ra <code>250</code> thuộc về server ở <code>400</code> — server kế tiếp theo chiều kim đồng hồ. Nếu server ở <code>400</code> bị gỡ, chỉ riêng khóa đó di chuyển (sang server ở <code>700</code>); khóa đang thuộc về server ở <code>100</code> không bị ảnh hưởng.</p>
    </div>

`,
    addServer: 'thêm server',
    removeServer: 'gỡ một server',
    addKey: 'thêm khóa',
    reset: 'đặt lại',
    initial: 'server và khóa cùng nằm trên một vòng — mỗi khóa thuộc về server kế tiếp theo chiều kim đồng hồ',
    added: 'đã thêm server {n} — chỉ những khóa nằm giữa nó và server liền trước trên vòng mới được gán lại',
    removed: 'đã gỡ {n} — các khóa của nó chuyển sang server kế tiếp theo chiều kim đồng hồ; mọi thứ khác giữ nguyên',
    maps: 'khóa {k} thuộc về server {s} (server kế tiếp theo chiều kim đồng hồ trên vòng)',
    keyAdded: 'đã thêm khóa {k} — hãy thêm một server để xem nó thuộc về đâu'
  },
  comments: {
    'where this server lands on the ring': 'vị trí của server này trên vòng',
    'where this key lands on the ring': 'vị trí của khóa này trên vòng',
    'ring has no "end", it loops': 'vòng không có "điểm cuối", nó quay vòng',
    'binary search helpers, used to keep positions sorted': 'hàm hỗ trợ tìm kiếm nhị phân, dùng để giữ các vị trí luôn được sắp xếp',
    'sorted server positions on the ring': 'các vị trí server trên vòng, đã sắp xếp',
    'position -> server name': 'vị trí -> tên server',
    'insert while keeping positions sorted': 'chèn mà vẫn giữ các vị trí được sắp xếp',
    'first server position >= pos': 'vị trí server đầu tiên >= pos',
    'nothing found going clockwise: wrap around to the first server': 'đi theo chiều kim đồng hồ không gặp server nào: quay vòng về server đầu tiên',
    '{ name, pos } entries, kept sorted by pos': 'các mục { name, pos }, luôn được sắp xếp theo pos',
    'keep the list sorted by position': 'giữ danh sách được sắp xếp theo vị trí',
    'first server at or after pos': 'server đầu tiên tại hoặc sau pos',
    'none found: wrap to the first': 'không thấy: quay vòng về server đầu tiên',
    'sorted map: position -> server name': 'map đã sắp xếp: vị trí -> tên server',
    'TreeMap keeps this sorted by position automatically': 'TreeMap tự động giữ các mục được sắp xếp theo vị trí',
    'first position >= pos': 'vị trí đầu tiên >= pos',
    'else wrap': 'nếu không thì quay vòng',
    'std::map keeps this sorted by position automatically': 'std::map tự động giữ các mục được sắp xếp theo vị trí',
    'none found: wrap to the first server': 'không thấy: quay vòng về server đầu tiên'
  }
});
