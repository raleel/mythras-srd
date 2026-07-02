# Tiêu đề Hướng dẫn Phong cách (h1)

Sử dụng tiêu đề h1 (`# Heading Title`) cho tiêu đề chương chính. Tất cả các tiêu đề hx sẽ xuất hiện trong thanh bên dưới dạng dấu trang.

Nếu tiêu đề không phải là tiêu đề h1, thanh bên sẽ có lỗi trùng lặp hiển thị trang và sau đó là tiêu đề h2 'tiêu đề'.

---
## Tiêu đề phần (h2)

Sử dụng tiêu đề h2 (`## Section Heading`) đứng trước bởi một đường phân cách (`---`) cho mỗi phần chính mới.

### Tiêu đề tiểu mục tăng cấp h lên 1

Sử dụng tiêu đề h3 (`### Subsection Heading`) cho mỗi Tiểu mục mới, và tiêu đề h4 (`#### Sub-Subsection Heading`) cho mỗi tiểu-tiểu mục mới.

### Tiến trình h của tiểu mục: 2 > 3 > 4

Các tiêu đề phụ bị lẫn lộn trong thanh bên nếu tiến trình h không được xử lý chính xác.

Dấu hiệu tiêu đề nên tăng lên một hoặc không tăng.

h2 theo sau bởi h2 hoặc h3 là tốt. h3 theo sau bởi h3 hoặc h4 cũng tốt.

### Lỗi tiểu mục
h2 theo sau bởi h4 gây ra vấn đề. Thanh bên đặt tiêu đề phụ ở đâu đó phía trên tiêu đề trong mục lục.

### Giảm cấp h

Điều này dường như không phải là vấn đề. ví dụ: h4 thành h3 hoặc h2 là tốt.

---
## Quy ước định dạng

Các kiểu sau là chuẩn cho các SRD _Imperative_ này ở định dạng Markdown.

### In đậm, In nghiêng và Đường phân cách

- Sử dụng hai dấu hoa thị (`**Bold**`) cho văn bản **In đậm**.
- Sử dụng dấu gạch dưới (`_Italic_`) cho văn bản _In nghiêng_.
  - _nb: Tránh sử dụng một dấu hoa thị cho In nghiêng!_
- Sử dụng dấu gạch chéo ngược (`\_`) để 'thoát' một ký tự: \_Không In nghiêng\_.
- Sử dụng dấu ngoặc nhọn (``` `code` ```) để tạo `code blocks`.
- Sử dụng ba dấu gạch ngang (`---`) để chèn một đường phân cách ngang.

### Quy ước cho In đậm & In nghiêng

Hãy cố gắng tuân thủ các mẫu sau...

#### Tiêu đề in đậm

Sử dụng tiêu đề in đậm khi mô tả phép thuật, hiệu ứng, v.v.
- **Tiêu đề Phép thuật:** Mô tả.

#### Tiêu đề in nghiêng

Sử dụng tiêu đề in nghiêng cho 'danh sách con' của các biến thể phép thuật, v.v.
- **Phép thuật:** Mô tả.
  - **_Biến thể Phép thuật-A:_** Mô tả.
  - **_Biến thể Phép thuật-B:_** Mô tả.

#### Tham chiếu Tiêu đề In nghiêng

Sử dụng tiêu đề in nghiêng khi tham chiếu một cuốn sách như _Mythras Imperative_ hoặc sách quy tắc cốt lõi _Mythras_.

---
## Định dạng danh sách

### Danh sách không có thứ tự / Dấu đầu dòng

- Danh sách không có thứ tự được tạo bằng dấu gạch ngang.
- Danh sách không có thứ tự được tạo bằng dấu gạch ngang.
  - Tăng mức thụt lề bằng 2 dấu cách hoặc một tab.

### Danh sách có thứ tự / Dấu số

1. Danh sách được đánh số được tạo bằng chữ số và dấu chấm/dấu chấm câu.
2. Danh sách được đánh số được tạo bằng chữ số và dấu chấm/dấu chấm câu.
- Trộn lẫn với dấu đầu dòng
	- Và thụt lề
3. Trộn lẫn số trở lại
   - Và dấu đầu dòng

### Danh sách có tiêu đề

Đối với danh sách các tiêu đề phụ liên quan, in đậm tiêu đề và dấu hai chấm.
- **Ví dụ 1:** Bla, bla, bla...
- **Ví dụ 2:** Bla, bla, bla...

### Danh sách có tiêu đề in nghiêng

Đối với danh sách các tiêu đề phụ liên quan, in đậm & in nghiêng tiêu đề và dấu hai chấm.
- **_Ví dụ 1:_** Bla, bla, bla...
- **_Ví dụ 2:_** Bla, bla, bla...

---
## Bảng

Đặt cho các bảng một tiêu đề phụ để chúng xuất hiện dưới dạng dấu trang trong thanh bên, thụt lề một cấp so với phần cha của chúng.

~Đặt hàng tiêu đề là văn bản in đậm.~
Việc in đậm hàng tiêu đề thực sự hiển thị nó dưới dạng văn bản bình thường. CSS mặc định đã in đậm hàng đó.

### Căn chỉnh văn bản trong bảng

Sử dụng hàng 2 để căn chỉnh nội dung: `:--`, `:-:`, hoặc `--:`.
Điều này sẽ ảnh hưởng đến toàn bộ cột.

#### Bố cục cơ bản của bảng

| **Cột 1** | **Cột 2** |
| :-: | :-- |
| 1 | alpha |
| 2 | beta |
| 3 | gamma |

### Quy ước căn chỉnh văn bản

- Sử dụng căn giữa cho số hoặc danh sách giá trị tương tự.
- Sử dụng căn trái cho các câu văn bản.

#### Bảng ví dụ căn chỉnh

| **Số** | **Mô tả** |
| :-: | :-- |
| 1 | Văn bản mô tả |
| 2 | Văn bản mô tả |
| 3 | Văn bản mô tả |

#### Ví dụ: Bảng cường độ lửa

| **Cường độ** | **Ví dụ** | **Thời gian bốc cháy** | **Sát thương** |
| :-: | :-- | :-: | :-: |
| 1 | Nến | 1d4 | 1d2 |
| 2 | Đuốc | 1d3 | 1d4 |
| 3 | Lửa trại | 1d2 | 1d6 |
| 4 | Đám cháy lớn lan khắp phòng | 1d2 | 2d6 |
| 5 | Dung nham núi lửa | Tức thì | 3d6 |

---
## Liên kết

Có nhiều cách sử dụng liên kết trong SRD và chỉ một vài trường hợp chính được đề cập ở đây.

### Định dạng liên kết

Định dạng một liên kết được thực hiện bằng văn bản trong dấu ngoặc. Sử dụng dấu ngoặc vuông cho văn bản liên kết hiển thị, và dấu ngoặc cong cho URL đích: `[Link Text](URL)`.

Trong các tài liệu này, liên kết ngoài được sử dụng phổ biến nhất sẽ là [Công cụ tạo trận chiến Mythras](https://mythras.skoll.xyz).
```
[Mythras Encounter Generator](https://mythras.skoll.xyz)
```

### Liên kết ngoài và nội bộ

Liên kết ngoài dẫn đến các trang khác thông qua internet và sẽ cần một URL `http://example.com` và, theo mặc định, chúng sẽ _luôn_ mở trong một tab trình duyệt mới.

Để tránh có nhiều tab làm lộn xộn tài liệu đang đọc, các liên kết nội bộ và dấu trang được hình thành với các URL tương đối tham chiếu đến các tệp markdown hiển thị trong kho lưu trữ GitHub. Thay vì một tab mới, các liên kết nội bộ này sẽ nhanh chóng cuộn đến phần được liên kết.

#### Ví dụ liên kết nội bộ

- **Liên kết chương:** Những liên kết này trỏ đến đầu một phần chính (h1). ví dụ: chương [Chiến đấu](0005_Combat.md).

  - Định dạng liên kết: `[Combat](0005_Combat.md)`

- **Liên kết tiểu mục:** Những liên kết này trỏ đến một tiêu đề trong một chương tham chiếu tài liệu như trên nhưng nối thêm `?id=` ngay sau đó là tiêu đề đích. ví dụ: [Tấn công nhảy vọt](0005_Combat.md?id=leaping-attacks)

  - Định dạng liên kết: `[Leaping Attacks](0005_Combat.md?id=leaping-attacks)`

#### Liên kết ngoài đến các tiểu mục

Có thể có trường hợp cần tham chiếu đến một phần đã biết của một tài liệu bên ngoài, ví dụ, một bảng cụ thể trong một SRD khác. Định dạng giống như với liên kết tiểu mục, ở trên, chỉ sử dụng URL HTTP bên ngoài.

Ví dụ, đây là [bảng chuyển đổi hệ đo lường Anh sang hệ mét](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion) từ [SRD Classic Fantasy Imperative](https://cfi-srd.mythras.net/).

```
[Imperial to Metric conversions table](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion)
```

---
## Danh sách phép thuật và sức mạnh

Bắt đầu một phần 'sạch' với tiêu đề h2 cho danh sách các phép thuật, sức mạnh, v.v.; sau đó h3 cho mỗi mục danh sách.

Phép thuật và sức mạnh thường được trình bày trong một danh sách phẳng duy nhất theo loại phép thuật (Phép thuật Dân gian, Thần học, v.v.) nhưng nếu danh sách yêu cầu các tiểu mục riêng, như chuyên môn trường phái hoặc giáo phái, hãy tăng cấp tiêu đề một cách thích hợp. Ví dụ, h2 cho Danh sách phép màu Thần học, h3 cho Giáo phái: Mithras, và h4 cho mỗi phép màu của giáo phái Mithras.

Đặc biệt trong trường hợp phép thuật, nhưng trong bất kỳ mô tả nào sử dụng thuộc tính từ khóa, hãy liệt kê chúng bằng văn bản in nghiêng.

Văn bản mô tả và các quy tắc đặc biệt sử dụng văn bản bình thường.

### Định dạng danh sách phép thuật

```
## h2 List name

### List item

_Attributes_

Description text.
```

<details>

<summary>Ví dụ: danh sách phép thuật được định dạng (trích dẫn khối) </summary>

---
> ## Mô tả phép thuật
>
> ### Ngăn chặn
> _Tức thì, Tầm xa_
>
> Ngăn chặn được sử dụng để hóa giải một phép thuật khác trong tầm. Ngăn chặn có thể được niệm phản ứng để vô hiệu hóa các phép thuật tấn công, bằng cách sử dụng Hành động Phản ứng Phản phép.

</details>

---
## Khối chỉ số phương tiện
Bắt đầu một phần 'sạch' với tiêu đề h2 cho danh sách, sau đó tăng cấp h như thường lệ cho các danh mục và các mục danh sách.

Mỗi ví dụ được liệt kê có các chỉ số và mô tả được trình bày dưới dạng danh sách dấu đầu dòng với tiêu đề điểm in đậm.

### Định dạng khối chỉ số phương tiện

```
## h2 List name

### Category

#### List Item

- **Stat 1:**  [Value]

- **Stat 2:**  [Value]

- **Description:** Descriptive text.
```

<details>

<summary>Ví dụ: khối chỉ số phương tiện được định dạng (trích dẫn khối) </summary>

---
> ## Phương tiện mẫu
>
> ### Phương tiện trên mặt đất
>
> #### Xe chặn
>
> - **Vỏ bọc:** 6 (Quân sự hạng trung), Cấu trúc 40
>
> - **Tốc độ:** Nhanh
>
> - **Hệ thống:** 3
>
> - **Đặc điểm:** Ghế phóng, Hiệu suất nâng cao, Xử lý vượt trội, Bộ giám sát, Bền bỉ, Vũ trang
>
> - **Vũ khí:** Thiết bị rải dầu trơn, thiết bị rải khói, súng máy hạng trung liên kết đôi
>
> - **Mô tả:** Một chiếc xe sang trọng, xe thể thao hoặc tương tự đã được nâng cấp, chiếc xe này được chế tạo để chạy nhanh và phản công tốt trong trận chiến. Đây là loại phương tiện mà mọi người nghĩ đến khi ai đó nói "xe gián điệp".

</details>

---
## Khối chỉ số sinh vật
Bắt đầu một phần 'sạch' với tiêu đề h2 cho danh sách. Khối chỉ số sinh vật sử dụng bảng và phức tạp hơn về định dạng và yêu cầu không gian. Để rõ ràng, tránh các tiểu mục và thêm đường phân cách giữa các mục danh sách.

Mỗi ví dụ được liệt kê nên có những điều sau...

- **Tiêu đề sinh vật:** Một đường phân cách theo sau bởi tiêu đề h3 cho tên sinh vật.

- **Mục nhập MEG:** Một liên kết ngoài đến sinh vật được chỉ định trên [Công cụ tạo trận chiến Mythras](https://mythras.skoll.xyz/).

- **Chi tiết cốt lõi:** Tên/loại sinh vật, thuộc tính, kỹ năng và bất kỳ mô tả đặc biệt hoặc ghi chú nhân vật nào theo yêu cầu.

- **Chi tiết vũ khí:** Mô tả rút gọn với các cột cho tên vũ khí và các thuộc tính sau: Kích thước (bao gồm Lực ở đây), Tầm với (bao gồm Tầm xa ở đây), Sát thương, AP/HP, và bất kỳ quy tắc đặc biệt nào.

- **Vị trí bị đánh & Giáp:** Bảng vị trí sẽ thay đổi tùy theo giải phẫu sinh vật khác nhau nhưng nên được bao gồm ngay cả đối với người hình người truyền thống như một phương tiện để theo dõi giáp và sát thương.

### Định dạng khối chỉ số sinh vật

```
## Bestiary/List Name

Descriptive text. 

---
### Example Creature
[MEG Entry](https://mythras.skoll.xyz/enemy_template/8626/)

| Creature Name | Example Creature  |
| :-- | :-- |
| Key Attributes | STR 11, CON 14, SIZ 11, DEX 11, INT 11, POW 11, CHA 7 |
| Other notes | Values and details | 
```

<details>

<summary>Ví dụ: bảng khối chỉ số sinh vật được định dạng (trích dẫn khối) </summary>

> ---
> ### Goblin/Orc
> [Mục nhập MEG](https://mythras.skoll.xyz/enemy_template/10891/)
>
> | Tên sinh vật | Goblin/Orc |
> | :-- | :-- |
> | Thuộc tính chính | STR 11, CON 14, SIZ 11, DEX 11, INT 11, POW 11, CHA 7 |
> | Điểm Hành động | 2 |
> | Bộ điều chỉnh sát thương | - |
> | Sáng kiến | +11 |
> | Di chuyển | 6m |
> | Khả năng | Thị giác ban đêm |
> | Kỹ năng | Điền kinh 52%, Sức mạnh cơ bắp 42%, Lừa dối 57%, Sức bền 48%, Né tránh 62%, Nhận thức 61%, Không vũ khí 52%, Ý chí 42% |
> | Phong cách chiến đấu | Chiến binh (Kiếm ngắn, Khiên, Giáo, Nỏ) 62% |
>
> #### Chi tiết vũ khí
>
> | Vũ khí | Kích thước | Tầm với | Sát thương | AP/HP | Đặc biệt |
> | :-- | :-: | :--: | :--: | :--: | :-- |
> | Kiếm ngắn | M | M | 1d6 | 6/8 | |
> | Giáo | M | L | 1d8+1 | 4/5 | |
> | Nỏ | L | 10/150/300 | 1d8 | 1/2 | |
> | Khiên | L | S | 1d4 | 4/9 | Bảo vệ 3 vị trí cho Chặn/Phòng thủ Thụ động |
>
> #### Vị trí bị đánh & Giáp
>
> | **1d20** | **Vị trí** | **AP/HP** |
> | :-: | :-- | :-: |
> | 1-3 | Chân phải | 1/5 |
> | 4-6 | Chân trái | 1/5 |
> | 7-9 | Bụng | 1/6 |
> | 10-12 | Ngực | 1/7 |
> | 13-15 | Tay phải | 1/4 |
> | 16-18 | Tay trái | 1/4 |
> | 19-20 | Đầu | 1/5 |

</details>

---
## Chỉnh sửa của cộng đồng

### Lỗi chính tả và nhầm lẫn

Các chỉnh sửa để 'làm sạch' văn bản của tác giả nên được giữ ở mức tối thiểu nhưng các lỗi chính tả và các lỗi khác chỉ nên được thay đổi trực tiếp mà không cần báo hiệu.

### Bảng thông tin chỉnh sửa

Trong trường hợp một quy tắc nào đó quá mơ hồ, không đầy đủ hoặc đơn giản là sai, hãy thêm ghi chú Chỉnh sửa Cộng đồng có thể thu gọn.

Giải thích vấn đề bằng chữ in nghiêng chỉ sử dụng chữ in đậm nghiêng cho tiêu đề của vấn đề - _không có tiêu đề h(x)!_ - để không tạo ra các mục thanh bên gây nhầm lẫn.

Nếu văn bản thay thế được thêm vào, hãy đặt nó trong dấu ngoặc kép bằng chữ in đậm nghiêng, đứng trước bởi "_Chỉnh sửa Cộng đồng:_" bằng chữ in nghiêng trọng lượng bình thường.

Các quy tắc bổ sung, nếu cần, nên được trình bày bằng văn bản trọng lượng bình thường.

#### Mẫu định dạng chỉnh sửa

```
<details>

<summary>* Community Errata</summary>

_**Issue Title**_

_Community Errata:_
_**"Replacement text if required."**_

_Explanation text stating how the rule as written causes problems._

</details>
```

#### Ví dụ chỉnh sửa

<details>

<summary>* Chỉnh sửa Cộng đồng</summary>

_**Leo trèo**_

_Chỉnh sửa Cộng đồng:_
_**"Giáp mặc cản trở người leo trèo một lượng bằng mức trung bình của Điểm giáp đã mặc. Tìm điều này bằng cách tổng hợp điểm giáp đã mặc của mọi vị trí và chia con số đó cho số lượng vị trí."**_

_Quy tắc như được viết nhanh chóng gây ra vấn đề. Mặc một mảnh giáp 6AP sẽ giảm Tốc độ di chuyển của một người xuống 0, có nghĩa là một người chỉ đội mũ sắt mà không mặc gì khác sẽ quá nặng để leo trèo. Điều này có vẻ hạn chế một cách vô lý, do đó phiên bản đã chỉnh sửa được đề xuất ở trên. Điều này sẽ được cập nhật nếu các tác giả gốc sửa đổi quy tắc như đã viết._

</details>

<details>

<summary>* Chỉnh sửa Cộng đồng</summary>

_**Tốc độ di chuyển: Đi bộ, Chạy, Nước rút**_

_Phiên bản đã xuất bản của _Mythras Imperative_ không có quy tắc rõ ràng cho việc di chuyển ở các Tốc độ di chuyển khác nhau mặc dù chúng được đề cập trong sách quy tắc cốt lõi của Mythras._

_Các hệ số Tốc độ di chuyển ở trên đã được thêm vào như một phần của Chỉnh sửa Cộng đồng._

_Khi cần thiết, nên coi Tốc độ di chuyển như sau: _

- _Các Tốc độ di chuyển nhanh hơn Đi bộ áp dụng một hệ số nhân cho xếp hạng Di chuyển: 3x cho Chạy, 5x cho Nước rút._

- _Khi ở Tốc độ di chuyển Chạy hoặc Nước rút, nhân vật không thể thực hiện hầu hết các hành động chủ động như tấn công hoặc niệm phép. Một số ngoại lệ bao gồm..._
  - _Các đòn tấn công khi sử dụng quy tắc Tấn công lao vào._
  - _Bắn vũ khí tầm xa với đặc điểm Tấn công quấy rối._
- _Theo quy tắc chung, bất kỳ hành động nào được phép nên được coi là khó thực hiện hơn một Cấp khi Chạy, và khó hơn hai Cấp khi Nước rút._

</details>

---
## Các cảnh báo khác

### Dòng trống / Ký tự xuống dòng

Để một dòng trống giữa các loại mục khác nhau. Tiêu đề, đường phân cách, bảng, v.v. Những điều này sẽ không hiển thị trong chế độ đọc nhưng việc thiếu chúng có thể gây ra lỗi định dạng.

### Văn bản nhiều đoạn in đậm hoặc in nghiêng

Mỗi đoạn văn phải được đánh dấu là văn bản in đậm hoặc in nghiêng. Dòng mới giữa các đoạn văn sẽ làm hỏng định dạng, để lại các dấu định dạng không còn tác dụng.

### Chính tả quốc tế

Các thế lực lạc hậu và đáng chê trách đã quyết định xóa bỏ tất cả các cách viết tiếng Anh-Anh để ủng hộ các phiên bản tiếng Anh-Mỹ yếu hơn một cách khách quan. Hãy chú ý đến các từ tiếng Anh-Anh kết thúc bằng -OUR: _armour_ (giáp), _favour_ (ủng hộ), v.v.