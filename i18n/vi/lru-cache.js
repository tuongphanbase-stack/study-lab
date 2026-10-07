// Nội dung tiếng Việt cho lru-cache.html (bản tiếng Anh nằm ngay trong trang).
(window.STUDY_LAB_I18N_DATA = window.STUDY_LAB_I18N_DATA || []).push({
  lang: 'vi',
  page: 'lru-cache',
  strings: {
    title: 'LRU<span> Cache</span>',
    sub: 'Một hash map để tra cứu trong O(1), cộng thêm một thứ tự để loại bỏ (evict) trong O(1). Truy cập một khóa và xem nó nhảy lên đầu — nạp cache vượt quá sức chứa và xem khóa cũ nhất bị loại ra.',
    explain: `
    <h2>Cách hoạt động</h2>
    <p>LRU cache (bộ nhớ đệm loại bỏ phần tử lâu chưa dùng nhất — Least Recently Used) cần nhanh ở hai việc: tra một khóa, và biết khóa nào đã lâu nhất không được dùng. Không cấu trúc nào tự mình làm tốt cả hai — hash map tra cứu nhanh nhưng không có khái niệm thứ tự, còn một danh sách thông thường có thứ tự nhưng tra cứu chậm. Vì vậy cache này kết hợp cả hai.</p>
    <p>Một <b style="color:var(--text)">danh sách liên kết đôi</b> (doubly linked list) giữ mọi khóa theo thứ tự từ mới dùng nhất đến lâu chưa dùng nhất. Một <b style="color:var(--text)">hash map</b> lưu chính xác vị trí của mỗi khóa trong danh sách đó, nên bạn có thể nhảy thẳng tới nó thay vì phải tìm.</p>
    <p>Mỗi khi một khóa được đọc hoặc ghi, nó được chuyển lên đầu danh sách — việc này rất nhanh, vì mỗi nút của danh sách liên kết đã biết sẵn hai nút hàng xóm của mình. Khi cache đầy mà có khóa mới đến, thứ nằm ở cuối cùng của danh sách — khóa lâu chưa dùng nhất — sẽ bị loại bỏ.</p>
    <div class="example-box">
      <div class="example-label">Ví dụ</div>
      <p>Cache có sức chứa 2. Thêm <code>a</code>, rồi <code>b</code> — cache chứa <code>[b, a]</code> (mới nhất đứng trước). Truy cập lại <code>a</code> — nó nhảy lên đầu: <code>[a, b]</code>. Giờ thêm <code>c</code> — cache đã đầy, nên <code>b</code> (lâu chưa dùng nhất) bị loại, còn lại <code>[c, a]</code>.</p>
    </div>

`,
    capacity: 'sức chứa',
    keyPh: 'khóa',
    reset: 'đặt lại',
    mapLabel: 'mới dùng nhất ← → lâu chưa dùng nhất',
    cacheEmpty: 'cache đang rỗng',
    empty: 'rỗng',
    hit: 'cache hit với "{k}" — chuyển nó lên đầu (mới dùng nhất)',
    miss: 'cache miss với "{k}" — chèn vào đầu',
    evict: 'cache đã đầy — loại phần tử lâu chưa dùng nhất: "<b>{k}</b>"',
    order: 'thứ tự (mới nhất → cũ nhất): <b>{o}</b>'
  },
  comments: {
    'key was never cached, or already evicted': 'khóa chưa từng được cache, hoặc đã bị loại',
    'touching a key marks it most-recently-used': 'chạm vào một khóa sẽ đánh dấu nó là mới dùng nhất',
    'already cached: just refresh its position': 'đã có trong cache: chỉ cần làm mới vị trí của nó',
    'full: drop the back of the list first': 'đầy: bỏ phần tử cuối danh sách trước',
    'insert the new key as most-recently-used': 'chèn khóa mới như phần tử mới dùng nhất',
    'remembers insertion/access order': 'ghi nhớ thứ tự chèn/truy cập',
    'front = least recent, back = most recent': 'đầu = lâu chưa dùng nhất, cuối = mới dùng nhất',
    'mark as most recently used': 'đánh dấu là mới dùng nhất',
    'already cached: refresh its position': 'đã có trong cache: làm mới vị trí của nó',
    'insert or overwrite': 'chèn mới hoặc ghi đè',
    'over capacity: evict the least recently used': 'vượt sức chứa: loại phần tử lâu chưa dùng nhất',
    'Maps preserve insertion order in JS, which we exploit here': 'Map trong JS giữ thứ tự chèn, và ở đây ta tận dụng điều đó',
    'remove and re-add to move it to the "recent" end': 'xóa rồi thêm lại để chuyển nó về đầu "mới dùng"',
    "now it's the most recently used entry": 'giờ nó là phần tử mới dùng nhất',
    'remove old position first, if any': 'xóa vị trí cũ trước, nếu có',
    'insert as most recently used': 'chèn như phần tử mới dùng nhất',
    'Map iterates oldest-first': 'Map duyệt từ phần tử cũ nhất trước',
    'evict least recently used': 'loại phần tử lâu chưa dùng nhất',
    'accessOrder=true reorders entries on every get()': 'accessOrder=true sắp xếp lại các phần tử sau mỗi lần get()',
    'returning true here auto-evicts the least recently used': 'trả về true ở đây sẽ tự động loại phần tử lâu chưa dùng nhất',
    'usage:': 'cách dùng:',
    // Ví dụ code nằm trong comment: giữ nguyên.
    'LRUCache cache = new LRUCache(4);': 'LRUCache cache = new LRUCache(4);',
    'cache.put(1, 100);': 'cache.put(1, 100);',
    'marks key 1 as most recently used': 'đánh dấu khóa 1 là mới dùng nhất',
    'doubly linked list; front = most recently used': 'danh sách liên kết đôi; đầu = mới dùng nhất',
    'key -> position in the list': 'khóa -> vị trí trong danh sách',
    'key was never cached, or evicted': 'khóa chưa từng được cache, hoặc đã bị loại',
    'move this node to the front, O(1)': 'chuyển nút này lên đầu, O(1)',
    'remove old entry first, if present': 'xóa phần tử cũ trước, nếu có',
    'remember its new position': 'ghi nhớ vị trí mới của nó',
    'the least recently used entry': 'phần tử lâu chưa dùng nhất',
    'evict it': 'loại nó ra'
  }
});
