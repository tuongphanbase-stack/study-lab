// Nội dung tiếng Việt cho big-number-exponentiation.html (bản tiếng Anh nằm ngay trong trang).
(window.STUDY_LAB_I18N_DATA = window.STUDY_LAB_I18N_DATA || []).push({
  lang: 'vi',
  page: 'big-number-exponentiation',
  strings: {
    title: 'Lũy thừa <span>nhanh</span>',
    sub: 'Tính lũy thừa theo cách thông thường cần số phép nhân bằng đúng số mũ. Lũy thừa bằng bình phương liên tiếp (exponentiation by squaring) chỉ cần log(số mũ) bước, bằng cách duyệt qua các chữ số nhị phân của số mũ.',
    explain: `
    <h2>Cách hoạt động</h2>
    <p>Tính <code>base^exponent</code> theo cách hiển nhiên nghĩa là nhân <code>base</code> với chính nó, lặp đi lặp lại đủ <code>exponent</code> lần. Với số mũ nhỏ thì không sao, nhưng với số mũ cực lớn (mật mã học thường xuyên dùng số mũ dài hàng trăm chữ số) thì cách này quá chậm.</p>
    <p><b style="color:var(--text)">Lũy thừa bằng bình phương liên tiếp</b> (exponentiation by squaring) cho cùng một đáp án nhưng nhanh hơn nhiều:</p>
    <ol style="margin:0;padding-left:20px;color:var(--muted);font-size:15px;line-height:1.75;">
      <li>Xét lần lượt từng chữ số nhị phân của số mũ.</li>
      <li>Giữ một giá trị "cơ số đã bình phương" chạy theo, và bình phương nó thêm một lần sau mỗi chữ số.</li>
      <li>Mỗi khi gặp chữ số 1, nhân giá trị đã bình phương đó vào kết quả. Gặp chữ số 0 thì bỏ qua.</li>
    </ol>
    <p>Vì dạng nhị phân của số mũ chỉ có khoảng <code>log(exponent)</code> chữ số, cách này chỉ cần chừng ấy bước — ít hơn rất nhiều so với nhân từng lần một.</p>
    <div class="example-box">
      <div class="example-label">Ví dụ</div>
      <p>Tính <code>3^5</code>: 5 ở dạng nhị phân là <code>101</code>. Bắt đầu với kết quả <code>1</code> và cơ số <code>3</code> — bit 1 (ngoài cùng bên phải): nhân vào, kết quả thành <code>3</code>, bình phương cơ số thành <code>9</code>. Bit 0: bỏ qua, bình phương cơ số thành <code>81</code>. Bit 1: nhân vào, kết quả thành <code>3 × 81 = 243</code> — khớp với <code>3^5 = 243</code>, mà chỉ dùng 3 phép nhân thay vì 5.</p>
    </div>

`,
    base: 'cơ số',
    exponent: 'số mũ',
    run: '▶ Tính bằng bình phương liên tiếp',
    binaryLabel: 'số mũ ở dạng nhị phân (đọc từ phải sang trái, bit thấp nhất trước):',
    bitOne: 'bit {i} bằng 1 → kết quả = kết quả × cơ số hiện tại = <span class="cur">{r}</span>',
    bitZero: 'bit {i} bằng 0 → bỏ qua (không nhân vào kết quả)',
    square: 'bình phương cơ số đang giữ: {v} (tức là {b}^{p})'
  },
  comments: {
    'this bit of the exponent is 1': 'bit này của số mũ bằng 1',
    'fold the current squared base into the answer': 'nhân cơ số đã bình phương hiện tại vào kết quả',
    'square the base for the next bit position': 'bình phương cơ số cho vị trí bit tiếp theo',
    'move to the next bit (integer division)': 'chuyển sang bit tiếp theo (chia nguyên)',
    "Python's built-in pow(base, exp) already does this internally": 'hàm có sẵn pow(base, exp) của Python đã làm đúng việc này bên trong',
    'BigInt, so results stay exact for large exponents': 'BigInt, để kết quả vẫn chính xác với số mũ lớn',
    'for very large results, use java.math.BigInteger instead of long': 'với kết quả rất lớn, hãy dùng java.math.BigInteger thay cho long',
    'for arbitrarily large results, use a bignum library': 'với kết quả lớn tùy ý, hãy dùng một thư viện số lớn (bignum)'
  }
});
