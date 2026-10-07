// Nội dung tiếng Việt cho bitwise.html (bản tiếng Anh nằm ngay trong trang).
(window.STUDY_LAB_I18N_DATA = window.STUDY_LAB_I18N_DATA || []).push({
  lang: 'vi',
  page: 'bitwise',
  strings: {
    title: 'Phép toán <span>bit</span>',
    sub: 'Nhấn vào bit bất kỳ để lật nó, chọn một phép toán, rồi xem kết quả hình thành từng bit một — cũng chính là logic CPU chạy trên mọi số nguyên, chỉ thu nhỏ lại ở quy mô 8 bit.',
    explain: `
    <h2>Cách hoạt động</h2>
    <p>Một số lưu ở dạng nhị phân chỉ là một hàng các chữ số 0 và 1. Mỗi cột có giá trị gấp đôi cột ngay bên phải nó — với 8 bit là 128, 64, 32, 16, 8, 4, 2, 1. Mọi phép toán bên dưới đều làm việc theo từng cột, chỉ so sánh hai bit nằm thẳng hàng với nhau.</p>
    <ul>
      <li><code>AND</code> — bit kết quả là 1 chỉ khi <b style="color:var(--text)">cả hai</b> bit đầu vào đều là 1. Hữu ích để tắt một số bit cụ thể mà vẫn giữ nguyên phần còn lại.</li>
      <li><code>OR</code> — bit kết quả là 1 khi <b style="color:var(--text)">ít nhất một</b> bit đầu vào là 1. Hữu ích để bật một số bit cụ thể.</li>
      <li><code>XOR</code> — bit kết quả là 1 khi hai bit đầu vào <b style="color:var(--text)">khác nhau</b>. Hữu ích để lật bit, hoặc để tìm ra chỗ thay đổi giữa hai giá trị.</li>
      <li><code>NOT</code> — lật mọi bit: 0 thành 1, và 1 thành 0.</li>
      <li><code>&lt;&lt;</code> và <code>&gt;&gt;</code> — dịch mọi bit sang trái hoặc sang phải một vị trí. Dịch trái làm số tăng gấp đôi; dịch phải làm số giảm còn một nửa.</li>
    </ul>
    <div class="example-box">
      <div class="example-label">Ví dụ</div>
      <p><code>5</code> ở dạng nhị phân là <code>0101</code>, còn <code>3</code> là <code>0011</code>. Xét từng cột: <code>0&amp;0=0</code>, <code>1&amp;0=0</code>, <code>0&amp;1=0</code>, <code>1&amp;1=1</code>. Vậy <code>5 AND 3 = 0001</code>, tức là <code>1</code> — chỉ ở cột cuối cùng cả hai số mới cùng có bit 1.</p>
    </div>

`,
    optNot: 'NOT (chỉ A)',
    compute: '▶ Tính',
    result: 'kết quả',
    hint: 'nhấn vào các bit của A hoặc B để sửa trực tiếp trước khi tính'
  },
  comments: {
    'masks: keeps shared bits': 'mặt nạ: chỉ giữ các bit chung',
    'combines: turns bits on': 'kết hợp: bật các bit',
    'toggles: flips differing bits': 'đảo: lật các bit khác nhau',
    '0 becomes 1, 1 becomes 0': '0 thành 1, 1 thành 0',
    'fills new low bits with 0': 'điền 0 vào các bit thấp mới',
    'discards the low bits shifted out': 'bỏ đi các bit thấp bị đẩy ra ngoài',
    'two 8-bit values written in binary': 'hai giá trị 8 bit viết ở dạng nhị phân',
    'AND -> masks: keep only bits set in both a and b': 'AND -> mặt nạ: chỉ giữ các bit được bật ở cả a và b',
    'OR  -> combine: set bits present in either a or b': 'OR  -> kết hợp: bật các bit có ở a hoặc b',
    'XOR -> toggle: set bits where a and b differ': 'XOR -> đảo: bật các bit mà a và b khác nhau',
    'NOT -> flips every bit (Python ints are infinite-width,': 'NOT -> lật mọi bit (số nguyên Python có độ rộng vô hạn,',
    'so this looks different from a fixed 8-bit flip)': 'nên kết quả trông khác với việc lật đúng 8 bit)',
    'shift left  -> multiply by 2, a 0 fills the new low bit': 'dịch trái -> nhân 2, bit thấp mới được điền 0',
    'shift right -> divide by 2 (integer division), low bit is discarded': 'dịch phải -> chia 2 (chia nguyên), bit thấp nhất bị bỏ đi',
    'NOT -> flip every bit, masked to 8 bits so it displays cleanly': 'NOT -> lật mọi bit, rồi giới hạn trong 8 bit để hiển thị gọn',
    'NOT -> flip every bit (unsigned char wraps naturally at 8 bits)': 'NOT -> lật mọi bit (unsigned char tự quay vòng trong 8 bit)'
  }
});
