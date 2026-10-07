// Nội dung tiếng Việt cho trie.html (bản tiếng Anh nằm ngay trong trang).
(window.STUDY_LAB_I18N_DATA = window.STUDY_LAB_I18N_DATA || []).push({
  lang: 'vi',
  page: 'trie',
  strings: {
    title: 'Trie<span> (cây tiền tố)</span>',
    sub: 'Thêm các từ và xem những tiền tố chung rẽ nhánh từ cùng một đường đi. Gõ một tiền tố bên dưới để xem gợi ý tự động hoàn thành (autocomplete) được lấy thẳng từ cây.',
    explain: `
    <h2>Cách hoạt động</h2>
    <p>Trie lưu từ theo từng chữ cái một, và những từ bắt đầu giống nhau sẽ dùng chung một đường đi. Ví dụ, chèn <code>"cat"</code> rồi <code>"car"</code> sẽ tạo ra một đường đi chung cho <code>c → a</code>, sau đó tách thành hai nhánh: một cho <code>t</code>, một cho <code>r</code>.</p>
    <p>Mỗi nút giữ một cờ nhỏ, đánh dấu có từ hoàn chỉnh nào kết thúc tại đó hay không. Nhờ vậy trie phân biệt được <code>"car"</code> (một từ thật) với <code>"ca"</code> (chỉ là một chặng trên đường tới một từ khác).</p>
    <p><b style="color:var(--text)">Autocomplete (tự động hoàn thành) hoạt động như sau:</b> đi xuống cây theo các chữ cái bạn đã gõ. Khi tới điểm đó, gom lại mọi từ hoàn chỉnh nằm ở bất kỳ đâu bên dưới nó. Vì bạn chỉ xét bên trong đúng một nhánh đó — không bao giờ đụng tới phần còn lại của cây — nên thao tác này vẫn nhanh dù cây lưu một lượng từ khổng lồ.</p>
    <div class="example-box">
      <div class="example-label">Ví dụ</div>
      <p>Chèn <code>"cat"</code>, <code>"car"</code> và <code>"dog"</code>. Lúc này trie có hai nhánh đi ra từ gốc: một cho <code>c → a</code> (tách tiếp thành <code>t</code> và <code>r</code>), và một cho <code>d → o → g</code>. Gõ tiền tố <code>"ca"</code> rồi tìm các từ khớp sẽ đi xuống tới nút chung <code>c → a</code>, sau đó tìm thấy cả <code>"cat"</code> lẫn <code>"car"</code> bên dưới nó.</p>
    </div>

`,
    wordPh: 'từ cần thêm',
    insert: 'thêm',
    reset: 'đặt lại',
    prefixPh: 'gõ một tiền tố...',
    hint: 'thêm vài từ, rồi gõ một tiền tố bên dưới để xem tự động hoàn thành ngay lập tức',
    noMatches: 'không có từ nào khớp'
  },
  comments: {
    "create the branch the first time it's needed": 'tạo nhánh ở lần đầu tiên cần đến',
    'descend into that branch': 'đi xuống nhánh đó',
    'mark the final node as a complete word': 'đánh dấu nút cuối là một từ hoàn chỉnh',
    "prefix isn't in the trie": 'tiền tố không có trong trie',
    'descend one letter at a time': 'đi xuống từng chữ cái một',
    'walk further from here to collect all words under this prefix': 'đi tiếp từ đây để gom mọi từ có tiền tố này',
    'letter -> child TrieNode': 'chữ cái -> TrieNode con',
    'True if a word ends exactly at this node': 'True nếu có một từ kết thúc đúng tại nút này',
    'the empty-prefix starting point': 'điểm xuất phát, ứng với tiền tố rỗng',
    'create branch if missing': 'tạo nhánh nếu chưa có',
    "prefix isn't in the trie at all": 'tiền tố hoàn toàn không có trong trie',
    'gather every word below this point': 'gom mọi từ nằm bên dưới điểm này',
    'this node itself might be a word': 'bản thân nút này cũng có thể là một từ',
    'recurse into every branch': 'đệ quy vào mọi nhánh',
    'true if a word ends exactly at this node': 'true nếu có một từ kết thúc đúng tại nút này',
    'letter -> child node': 'chữ cái -> nút con',
    'create if missing': 'tạo nếu chưa có',
    'not in the trie': 'không có trong trie'
  }
});
