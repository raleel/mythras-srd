# Hướng Dẫn Phong Cách

Sử dụng tiêu đề h1 (`# Heading Title`) cho tiêu đề chương chính. Tất cả các tiêu đề hx sẽ xuất hiện trong thanh bên dưới dạng dấu trang.

Nếu tiêu đề không phải là tiêu đề h1, thanh bên sẽ gặp lỗi trùng lặp hiển thị trang và sau đó là tiêu đề h2 'title'.

---
## Các tiêu đề phần (h2)

Sử dụng tiêu đề h2 (`## Section Heading`) đứng trước bởi một đường kẻ (`---`) cho mỗi phần chính mới.

### Các tiêu đề phần phụ tăng cấp h lên 1

Sử dụng tiêu đề h3 (`### Subsection Heading`) cho mỗi Phần phụ mới, và tiêu đề h4 (`#### Sub-Subsection Heading`) cho mỗi tiểu mục TC mới.

### Tiến trình h phần phụ: 2 > 3 > 4

Các tiêu đề phụ bị xáo trộn trong thanh bên nếu tiến trình h không được xử lý chính xác.

Đánh dấu tiêu đề nên tăng lên một hoặc không tăng.

h2 theo sau bởi h2 hoặc h3 là ổn. h3 theo sau bởi h3 hoặc h4 cũng ổn.

### Lỗi phần phụ
h2 theo sau bởi h4 gây ra vấn đề. Thanh bên đặt tiêu đề phụ ở đâu đó phía trên tiêu đề trong mục lục.

### Giảm cấp h

Điều này dường như không phải là vấn đề. ví dụ: h4 xuống h3 hoặc h2 là ổn.

---
## Các quy ước định dạng

Các phong cách sau đây là tiêu chuẩn cho các SRD _Imperative_ này ở định dạng Markdown.

### Đậm, Nghiêng và Đường kẻ

- Sử dụng dấu sao kép (`**Bold**`) cho văn bản **Đậm**.
- Sử dụng dấu gạch dưới (`_Italic_`) cho văn bản _Nghiêng_.
  - _lưu ý: Tránh sử dụng dấu sao đơn cho chữ Nghiêng!_
- Sử dụng dấu gạch chéo ngược (`\_`) để 'loại trừ' một ký tự: \_Không Nghiêng\_.
- Sử dụng dấu ngoặc nhọn góc (``` `code` ```) để tạo `code blocks`.
- Sử dụng ba dấu gạch nối (`---`) để chèn một đường kẻ ngang.

### Các quy ước cho Đậm & Nghiêng

Hãy cố gắng tuân thủ các kiểu sau...

#### Tiêu đề đậm

Sử dụng tiêu đề đậm khi mô tả các phép thuật, hiệu ứng, v.v.
- **Tiêu đề Phép thuật:** Mô tả.

#### Tiêu đề nghiêng

Sử dụng tiêu đề nghiêng cho các 'danh sách phụ' của các phép thuật biến thể, v.v.
- **Phép thuật:** Mô tả.
  - **_Biến thể Phép thuật A:_** Mô tả.
  - **_Biến thể Phép thuật B:_** Mô tả.

#### Tài liệu tham khảo Tiêu đề Nghiêng

Sử dụng tiêu đề nghiêng khi tham chiếu đến một cuốn sách như _Mythras Imperative_ hoặc bộ quy tắc cốt lõi _Mythras_.

---
## Định dạng danh sách

### Danh sách không thứ tự / Các dấu đầu dòng

- Danh sách không thứ tự được tạo bằng dấu gạch nối.
- Danh sách không thứ tự được tạo bằng dấu gạch nối.
  - Tăng mức thụt đầu dòng với 2 dấu cách hoặc một tab.

### Danh sách có thứ tự / Các điểm được đánh số

1. Danh sách được đánh số được tạo bằng chữ số và dấu chấm.
2. Danh sách được đánh số được tạo bằng chữ số và dấu chấm.
- Trộn lẫn với dấu đầu dòng
	- Và thụt đầu dòng
3. Trộn số trở lại
   - Và dấu đầu dòng

### Danh sách có tiêu đề

Đối với danh sách các tiêu đề phụ liên quan, hãy làm đậm tiêu đề và dấu hai chấm.
- **Ví dụ 1:** Bla, bla, bla...
- **Ví dụ 2:** Bla, bla, bla...

### Danh sách tiêu đề nghiêng

Đối với danh sách các tiêu đề phụ liên quan, hãy làm đậm và nghiêng tiêu đề và dấu hai chấm.
- **_Ví dụ 1:_** Bla, bla, bla...
- **_Ví dụ 2:_** Bla, bla, bla...

---
## Bảng

Cung cấp cho bảng một tiêu đề phụ để chúng xuất hiện dưới dạng dấu trang trong thanh bên, thụt vào một cấp so với phần SH của chúng.

~Làm cho hàng tiêu đề thành văn bản đậm.~
Việc làm cho hàng tiêu đề đậm thực tế sẽ hiển thị nó ở văn bản bình thường. CSS mặc định đã làm đậm hàng đó.

### Căn chỉnh văn bản bảng

Sử dụng hàng 2 để căn chỉnh nội dung: `:--`, `:-:`, hoặc `--:`.
Điều này sẽ ảnh hưởng đến toàn bộ cột.

#### Bố cục cơ bản của Bảng

| **Cột 1** | **Cột 2** |
| :-: | :-- |
| 1 | alpha |
| 2 | beta |
| 3 | gamma |

### Các quy ước căn chỉnh văn bản

- Sử dụng căn giữa cho số hoặc các danh sách giá trị tương tự.
- Sử dụng căn trái cho các câu văn bản.

#### Bảng Ví dụ Căn chỉnh

| **Số** | **Mô tả** |
| :-: | :-- |
| 1 | Văn bản mô tả |
| 2 | Văn bản mô tả |
| 3 | Văn bản mô tả |

#### Ví dụ: Bảng Cường độ Lửa

| **Cường độ** | **Ví dụ** | **Thời gian Bắt cháy** | **Sát Thương** |
| :-: | :-- | :-: | :-: |
| 1 | Nến | 1d4 | 1d2 |
| 2 | Đuốc | 1d3 | 1d4 |
| 3 | Lửa trại | 1d2 | 1d6 |
| 4 | Đám cháy đầy phòng | 1d2 | 2d6 |
| 5 | Dung nham núi lửa | Ngay lập tức | 3d6 |

---
## Liên kết

Có nhiều mục đích sử dụng liên kết trong SRD và chỉ một vài trường hợp chính được đề cập ở đây.

### Định dạng Liên kết

Định dạng một liên kết được thực hiện bằng văn bản trong ngoặc. Sử dụng dấu ngoặc vuông cho văn bản liên kết hiển thị, và dấu ngoặc nhọn cho URL đích: `[Link Text](URL)`.

Trong các tài liệu này, liên kết ngoài được sử dụng phổ biến nhất sẽ là [Mythras Encounter Generator](https://mythras.skoll.xyz).
```
[Mythras Encounter Generator](https://mythras.skoll.xyz)
```

### Liên kết ngoài so với liên kết nội bộ

Các liên kết ngoài đi đến các trang khác thông qua internet và sẽ cần một URL `http://example.com` và, theo mặc định, chúng sẽ _luôn luôn_ mở trong một tab trình duyệt mới.

Để tránh việc có nhiều tab làm lộn xộn tài liệu đang đọc, các liên kết nội bộ và dấu trang được hình thành bằng các URL tương đối tham chiếu đến các tệp markdown hiển thị trong kho lưu trữ GitHub. Thay vì một tab mới, các liên kết nội bộ này sẽ nhanh chóng cuộn đến phần được liên kết.

#### Ví dụ về liên kết nội bộ

- **Liên kết chương:** Chúng trỏ đến phần bắt đầu của một phần chính (h1). ví dụ: chương [Chiến Đấu](0005_Combat.md).

  - Định dạng liên kết: `[Combat](0005_Combat.md)`

- **Liên kết phần phụ:** Chúng trỏ đến một tiêu đề trong một chương tham chiếu tài liệu như trên nhưng thêm vào `?id=` ngay sau đó là tiêu đề đích. ví dụ: [Tấn Công Nhảy](0005_Combat.md?id=leaping-attacks)

  - Định dạng liên kết: `[Leaping Attacks](0005_Combat.md?id=leaping-attacks)`

#### Liên kết ngoài đến các phần phụ

Có thể có trường hợp cần tham chiếu đến một phần đã biết của tài liệu bên ngoài, ví dụ, một bảng cụ thể trong một SRD khác. Định dạng giống như các liên kết phần phụ, ở trên, chỉ sử dụng URL HTTP bên ngoài.

Ví dụ, đây là [Bảng chuyển đổi Imperial sang Metric](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion) từ [Classic Fantasy Imperative SRD](https://cfi-srd.mythras.net/).

```
[Imperial to Metric conversions table](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion)
```

---
## Danh sách Phép thuật và Năng lực

Bắt đầu một phần 'sạch' với tiêu đề h2 cho danh sách các phép thuật, năng lực khả dụng, v.v.; sau đó là h3 cho mỗi mục danh sách.

Các phép thuật và năng lực thường được trình bày trong một danh sách phẳng duy nhất theo loại phép thuật (Phép thuật Dân gian, Thần học, v.v.) nhưng nếu danh sách yêu cầu các phần phụ riêng, như trường phái hoặc chuyên môn giáo phái, hãy tăng cấp tiêu đề cho phù hợp. Ví dụ, h2 cho Danh sách Phép màu Thần học, h3 cho Giáo phái: Mithras, và h4 cho mỗi phép màu giáo phái Mithras.

Đặc biệt trong trường hợp các phép thuật, nhưng trong bất kỳ mô tả nào sử dụng các thuộc tính từ khóa, hãy liệt kê chúng bằng văn bản nghiêng.

Văn bản mô tả và các quy tắc đặc biệt sử dụng văn bản bình thường.

### Định dạng Danh sách Phép thuật

```
## h2 List name

### List item

_Attributes_

Description text.
```

<details>

<summary>Ví dụ: danh sách phép thuật đã định dạng (được trích dẫn khối) </summary>

---
> ## Mô tả phép thuật
>
> ### Ngăn Chặn
> _Tức thì, Tầm xa_
>
> Ngăn Chặn được sử dụng để bác bỏ một phép thuật khác trong tầm xa. Ngăn Chặn có thể được niệm theo phản ứng để vô hiệu hóa các phép thuật tấn công, bằng cách sử dụng Hành Động Phản Ứng Phản Phép.

</details>

---
## Các khối chỉ số phương tiện
Bắt đầu một phần 'sạch' với tiêu đề h2 cho các danh sách, sau đó tăng cấp h như thường lệ cho các danh mục và mục danh sách.

Mỗi ví dụ được liệt kê có các chỉ số và mô tả được trình bày dưới dạng danh sách dấu đầu dòng với các tiêu đề mục được in đậm.

### Định dạng Khối chỉ số Phương tiện

```
## h2 List name

### Category

#### List Item

- **Stat 1:**  [Value]

- **Stat 2:**  [Value]

- **Description:** Descriptive text.
```

<details>

<summary>Ví dụ: khối chỉ số phương tiện đã định dạng (được trích dẫn khối) </summary>

---
> ## Phương tiện mẫu
>
> ### Phương tiện Mặt đất
>
> #### Xe đánh chặn
>
> - **Thân tàu:** 6 (Quân sự Trung bình), 40 Cấu trúc
>
> - **Tốc độ:** Nhanh
>
> - **Hệ thống:** 3
>
> - **Đặc điểm:** Ghế phóng, Hiệu suất Tăng cường, Khả năng xử lý ưu việt, Bộ giám sát, Bền bỉ, Có vũ trang
>
> - **Vũ khí:** Bộ xả vệt dầu, bộ xả khói, súng máy trung bình liên kết đôi
>
> - **Mô tả:** Một chiếc xe hơi sang trọng, xe thể thao hoặc tương tự đã được độ lại, chiếc xe này được chế tạo để đi nhanh và chiến đấu ngang ngửa. Đây là loại phương tiện mà mọi người nghĩ đến khi ai đó nói, "xe gián điệp."

</details>

---
## Các khối chỉ số sinh vật
Bắt đầu một phần 'sạch' với tiêu đề h2 cho các danh sách. Các khối chỉ số sinh vật sử dụng các bảng và phức tạp hơn về mặt định dạng và yêu cầu không gian. Để rõ ràng, hãy tránh các phần phụ và thêm các đường kẻ giữa các mục danh sách.

Mỗi ví dụ được liệt kê phải có những thông tin sau...

- **Tiêu đề sinh vật:** Một đường kẻ theo sau bởi tiêu đề h3 cho tên sinh vật.

- **Mục MEG:** Một liên kết ngoài đến sinh vật được chỉ định trên [Mythras Encounter Generator](https://mythras.skoll.xyz/).

- **Chi tiết cốt lõi:** Tên/loại sinh vật, thuộc tính, kỹ năng và bất kỳ mô tả đặc biệt hoặc ghi chú nhân vật nào khi cần thiết.

- **Chi tiết Vũ khí:** Các mô tả tóm tắt với các cột cho tên vũ khí và các thuộc tính sau: Kích thước (bao gồm Kích thước (Siêu Năng Lực) ở đây), Tầm với (bao gồm Tầm bắn ở đây), Sát thương, AP/HP, và bất kỳ quy tắc đặc biệt nào.

- **Vị Trí Trúng Đòn & Giáp:** Các bảng vị trí sẽ thay đổi dựa trên giải phẫu sinh vật khác nhau nhưng nên được đưa vào ngay cả đối với các hình nhân truyền thống như một phương tiện để theo dõi giáp và sát thương.

### Định dạng Khối chỉ số Sinh vật

```
## Bestiary/List Name

Descriptive text. 

---
### Example Creature
[MEG Entry](https://mythras.skoll.xyz/enemy_template/8626/)

| Creature Name | Example Creature  |
| :-- | :-- |
| Key Thuộc Tính | SM 11, TC 14, KT 11, KL 11, TT 11, NL 11, SH 7 |
| Other Ghi Chú | Values and details | 
```

<details>

<summary>Ví dụ: các bảng khối chỉ số sinh vật đã định dạng (được trích dẫn khối) </summary>

> ---
> ### Goblin/Orc
> [Mục MEG](https://mythras.skoll.xyz/enemy_template/10891/)
>
> | Tên Sinh Vật | Goblin/Orc |
> | :-- | :-- |
> | Thuộc tính Chính | SM 11, TC 14, KT 11, KL 11, TT 11, NL 11, SH 7 |
> | Điểm Hành Động | 2 |
> | Hệ Số Sát Thương | - |
> | Tiên Cơ | +11 |
> | Di chuyển | 6m |
> | Khả năng | Tầm Nhìn Ban Đêm |
> | Kỹ năng | Điền Kinh 52%, Cơ Bắp 42%, Lừa Dối 57%, Sức Bền 48%, Né Tránh 62%, Nhận Thức 61%, Tay Không 52%, Ý Chí 42% |
> | Phong Cách Chiến Đấu | Chiến binh (Kiếm ngắn, Khiên, Giáo, Nỏ) 62% |
>
> #### Chi tiết Vũ khí
>
> | Vũ khí | Kích Thước | Tầm Với | Sát Thương | AP/HP | Đặc biệt |
> | :-- | :-: | :--: | :--: | :--: | :-- |
> | Kiếm ngắn | M | M | 1d6 | 6/8 | |
> | Giáo | M | L | 1d8+1 | 4/5 | |
> | Nỏ | L | 10/150/300 | 1d8 | 1/2 | |
> | Khiên | L | S | 1d4 | 4/9 | Bảo vệ 3 vị trí cho Chặn/Đỡ bị động |
>
> #### Vị Trí Trúng Đòn & Giáp
>
> | **1d20** | **Vị Trí** | **AP/HP** |
> | :-: | :-- | :-: |
> | 1-3 | Chân Phải | 1/5 |
> | 4-6 | Chân Trái | 1/5 |
> | 7-9 | Bụng | 1/6 |
> | 10-12 | Ngực | 1/7 |
> | 13-15 | Tay Phải | 1/4 |
> | 16-18 | Tay Trái | 1/4 |
> | 19-20 | Đầu | 1/5 |

</details>

---
## Đính chính Cộng đồng

### Lỗi đánh máy và nhầm lẫn

Các chỉnh sửa để 'dọn dẹp' văn bản của tác giả nên được giữ ở mức tối thiểu nhưng lỗi đánh máy và các sai sót khác nên được thay đổi trực tiếp mà không cần đánh dấu.

### Bảng thông tin Đính chính

Khi một quy tắc nhất định quá mơ hồ, không đầy đủ hoặc đơn giản là sai, hãy thêm ghi chú Đính chính Cộng đồng có thể thu gọn.

Giải thích vấn đề bằng chữ nghiêng chỉ sử dụng chữ đậm nghiêng cho tiêu đề của vấn đề - _không có tiêu đề h(x)!_ - để không tạo ra các mục thanh bên gây nhầm lẫn.

Nếu văn bản thay thế được thêm vào, hãy đặt nó trong dấu ngoặc kép bằng chữ đậm nghiêng, phía trước là "_Đính chính Cộng đồng:_" bằng chữ nghiêng trọng lượng bình thường.

Các quy tắc bổ sung, nếu cần, nên được trình bày bằng văn bản trọng lượng bình thường.

#### Mẫu định dạng Đính chính

```
<details>

<summary>* Community Errata</summary>

_**Issue Title**_

_Community Errata:_
_**"Replacement text if required."**_

_Explanation text stating how the rule as written causes problems._

</details>
```

#### Ví dụ Đính chính

<details>

<summary>* Đính chính Cộng đồng</summary>

_**Leo trèo**_

_Đính chính Cộng đồng:_
_**"Giáp mặc cản trở người leo trèo một lượng bằng trung bình của Điểm Giáp được mặc. Tìm điều này bằng cách tổng hợp điểm giáp được mặc ở mọi vị trí và chia số đó cho số lượng vị trí."**_

_Quy tắc được viết như vậy nhanh chóng gây ra vấn đề. Mặc một mảnh giáp 6AP duy nhất sẽ giảm TC người xuống Tốc độ 0 nghĩa là một người mặc mũ bảo hiểm thép và không có gì khác sẽ quá tải để leo trèo. Điều này có vẻ hạn chế quá mức do đó phiên bản chỉnh sửa được đề xuất ở trên. Điều này sẽ được cập nhật nếu các tác giả gốc sửa đổi quy tắc như đã viết._

</details>

<details>

<summary>* Đính chính Cộng đồng</summary>

_**Nhịp điệu: Đi bộ, Chạy, Nước rút**_

_Phiên bản xuất bản của _Mythras Imperative_ không có quy tắc rõ ràng cho việc di chuyển ở các Nhịp điệu khác nhau mặc dù chúng được đề cập trong sách quy tắc cốt lõi Mythras. Các hệ số Nhịp điệu ở trên đã được thêm vào như một phần của Đính chính Cộng đồng._

_Khi cần thiết, nên coi các Nhịp điệu như sau:_

- _Các Nhịp điệu nhanh hơn Đi bộ áp dụng hệ số nhân cho chỉ số Di chuyển: 3x cho Chạy, 5x cho Nước rút._

- _Trong khi ở Nhịp điệu Chạy hoặc Nước rút, nhân vật không thể thử hầu hết các hành động chủ động như tấn công hoặc niệm phép. Một số ngoại lệ bao gồm..._
  - _Tấn công khi sử dụng các quy tắc Xung phong._
  - _Bắn vũ khí tầm xa với đặc điểm Giao tranh._
- _Theo quy tắc chung, bất kỳ hành động được phép nào cũng nên được coi là khó hơn một Cấp độ để thực hiện khi ở Nhịp điệu Chạy, và khó hơn hai Cấp độ khi ở Nhịp điệu Nước rút._

</details>

---
## Các cảnh báo khác

### Dòng trống / Xuống dòng

Để lại một dòng trống giữa các loại mục nhập khác nhau. Tiêu đề, đường kẻ, bảng v.v. Những thứ này sẽ không hiển thị ở chế độ đọc nhưng sự vắng mặt của chúng có thể gây ra các vấn đề về định dạng.

### Văn bản đậm hoặc nghiêng nhiều đoạn

Mỗi đoạn phải được đánh dấu là văn bản đậm hoặc nghiêng. Dòng mới giữa các đoạn sẽ phá vỡ định dạng để lại các dấu định dạng bị mất kết nối.

### Cách viết quốc tế

Các thế lực thụt lùi và đáng trách đã thấy phù hợp để xóa bỏ tất cả các cách viết của Anh để ủng hộ các phiên bản Mỹ kém hơn một cách khách quan. Hãy chú ý đến các từ -OUR của Anh: _armour_, _favour_, v.v.