# Phương Tiện

Phương tiện trong _Mythras Imperative_ được xử lý theo cách bán trừu tượng. Về cơ bản, chúng là những công cụ nền, được sử dụng để đưa nhân vật từ điểm A đến điểm B mà không cần mô tả hay thông số chi tiết. Tuy nhiên, đôi khi các Quản Trò sẽ cần thông tin chi tiết về phương tiện khi cần thể hiện chúng trong các cuộc rượt đuổi hoặc tình huống chiến đấu.

Các quy tắc trong phần này cho phép thể hiện hầu hết các loại phương tiện nhưng theo một cách trừu tượng nhằm tạo sự linh hoạt và tăng cường khả năng kể chuyện. Tàu vũ trụ và phi thuyền có phần khác biệt đôi chút, mặc dù chúng dựa trên các nguyên tắc tương tự.

---
## Chỉ Số

Tất cả các phương tiện được mô tả dựa trên Cấu Trúc (Structure), Vỏ (Hull), Tốc Độ (Speed), Hệ Thống (Systems), Đặc Điểm (Traits) và Lá Chắn (Shields) (nếu có trong bối cảnh).

- **[Kích Thước](0006_Vehicles.md?id=vehicle-size-table):** Tất cả các phương tiện đều có một trong sáu mức Kích Thước, quyết định giá trị hoặc phạm vi của các chỉ số còn lại. Do kích thước nội tại lớn hơn và môi trường khắc nghiệt trong không gian, tàu vũ trụ có thang giá trị riêng.
- **[Vỏ](0006_Vehicles.md?id=terrestrial-hulls):** Đại diện cho điểm Giáp.
- **[Cấu Trúc](0006_Vehicles.md?id=terrestrial-hulls):** Đại diện cho điểm Máu của phương tiện.
- **[Lá Chắn](0006_Vehicles.md?id=shields):** Trong các bối cảnh có công nghệ thao túng năng lượng tiên tiến, có thể có các lá chắn bảo vệ phương tiện, nhưng chúng có thể bị bào mòn dưới làn hỏa lực liên tục.
- **[Hệ Thống](0006_Vehicles.md?id=systems):** Đại diện cho các thành phần quan trọng của phương tiện, bao gồm nhà máy năng lượng, khoang thủy thủ đoàn, v.v.
- **[Tốc Độ](0006_Vehicles.md?id=speed):** Mọi phương tiện đều có mức Tốc Độ cơ bản.
- **[Đặc Điểm](0006_Vehicles.md?id=traits):** Một phương tiện có thể có một hoặc nhiều Đặc Điểm. Giống như các Khả Năng được gán cho Sinh Vật trong quy tắc _Mythras Imperative_ hoặc các Đặc Điểm Phong Cách Chiến Đấu, chúng mang lại mô tả trò chơi và lợi thế bổ sung, phản ánh bản chất của phương tiện.
- **[Vũ Khí](0006_Vehicles.md?id=weapons):** Giống như Đặc Điểm, phương tiện có thể được trang bị vũ khí nếu bối cảnh cho phép. Một số ví dụ và giá trị gợi ý được trình bày chi tiết bên dưới.


---
### Kích Thước Vỏ, Loại và Cấu Trúc

Kích thước và mục đích của phương tiện ảnh hưởng đến độ dày của vỏ và khả năng phục hồi của cấu trúc bên trong. Ví dụ, một chiếc xe máy có vỏ tối giản, được chế tạo vì tốc độ và sự nhanh nhẹn. Một chiếc Land Ironclad (một TC quái vật bọc thép khổng lồ chạy bằng bánh xích hoặc bánh xe, được cung cấp năng lượng bởi động cơ hơi nước hoặc diesel), là một phương tiện lớn hơn nhiều được thiết kế cho chiến trường, có lớp vỏ lớn hơn nhiều. Kích thước tương đối của các loại vỏ (và khả năng chống chịu các cú đánh từ vũ khí) được tóm tắt trong các bảng Kích Thước Phương Tiện và Vỏ bên dưới.

Bất cứ khi nào phương tiện chịu tổn hại, sát thương nhận vào sẽ bị giảm bởi giá trị Vỏ của nó. Bất kỳ sát thương còn lại nào đều được trừ vào điểm Cấu Trúc của phương tiện và có cơ hội phần trăm, bằng với lượng sát thương xuyên phá, ảnh hưởng đến một Hệ Thống. Nếu phương tiện bị giảm xuống 0 Cấu Trúc, nó sẽ bị phá hủy hoàn toàn hoặc bị hư hỏng nặng đến mức phải loại bỏ.

##### Vỏ Phương Tiện Mặt Đất

| Kích Thước | Cấu Trúc | Giá Trị Vỏ Dân Sự | Giá Trị Vỏ Quân Sự | Ví dụ |
| :-- | :-: | :-: | :-: | :-- |
| Nhỏ | 1-20 | 1-3 | 4-6 | Xe máy, xe máy có thùng xe, xe hơi cỡ nhỏ hoặc siêu nhỏ, ca nô, thuyền kayak, thuyền chèo |
| Trung Bình | 21-40 | 1-6 | 7-9 | Xe sedan, xe tải thùng, xe bán tải, xe sang, xe thể thao sang trọng, xe cơ bắp, xe limousine, thuyền cứu hộ, thuyền cao tốc, tàu lượn, trực thăng tự quay |
| Lớn | 41-60 | 4-9 | 10-12 | Xe tải, xe limo kéo dài, xe SUV, xe buýt, xe chở khách, máy bay cá nhân, tàu lượn, du thuyền giải trí, xe tăng, trực thăng, tàu ngầm |
| Khổng Lồ | 61-80 | 7-12 | 13-15 | Xe đầu kéo, máy bay thương mại, máy bay phản lực, tàu tuần duyên, du thuyền |
| To Lớn | 81-100 | 10-15 | 16-18 | Tàu hỏa, tàu du lịch, tàu hải quân |

##### Vỏ Tàu Vũ Trụ

| Kích Thước | Cấu Trúc | Giá Trị Vỏ Dân Sự | Giá Trị Vỏ Quân Sự | Ví dụ |
| :-- | :-: | :-: | :-: | :-- |
| Nhỏ | 10-50 | 4-9 | 10-12 | Chiến đấu cơ đơn chỗ |
| Trung Bình | 51-150 | 7-12 | 13-15 | Tàu chở hàng nhẹ, Tàu TC thoi |
| Lớn | 151-450 | 10-15 | 16-18 | Tàu chở hàng nặng, Tàu tuần dương |
| Khổng Lồ | 451-1350 | 13-18 | 19-21 | Tàu hộ tống, Tàu chiến hạng nhẹ |
| To Lớn | 1351-4050 | 16-21 | 21-24 | Tàu thế hệ, Tàu chiến hạng nặng |
| Cực Lớn | 4050-12110 | 19-24 | 24-30 | Trạm định cư quỹ đạo, Trạm chiến đấu hủy diệt hành tinh |


---
### Lá Chắn

Lá chắn lệch hướng cung cấp thêm một lớp bảo vệ cho những phương tiện có thể trang bị chúng. Lá chắn hoạt động hơi khác so với Vỏ do tính chất bào mòn của chúng. Nếu sát thương nhận vào bằng hoặc nhỏ hơn giá trị lá chắn, nó sẽ bị chặn hoàn toàn. Nếu sát thương vượt quá giá trị lá chắn, phần dư thừa sẽ làm giảm sức mạnh lá chắn theo lượng đó.

_Ví dụ, một xe chở quân có sức mạnh lá chắn năng lượng là 12 điểm. Nếu chiếc xe bị bắn trúng bởi laser gây 11 sát thương, nó sẽ không xuyên qua và không gây thêm hiệu ứng nào. Ngược lại, nếu chiếc xe bị bắn trúng bởi một vụ nổ gây 15 sát thương, ba điểm dư thừa sẽ làm giảm sức mạnh lá chắn xuống còn 9._

Khi sức mạnh của lá chắn lệch hướng giảm xuống bằng không, nó sẽ sụp đổ. Bất kỳ sát thương nào còn lại sẽ tác động lên vỏ.

---
### Hệ Thống

Mỗi khi một phương tiện chịu sát thương xuyên thủng vỏ, sẽ có một cơ hội, bằng với sát thương xuyên phá, khiến một Hệ Thống quan trọng bị ảnh hưởng.

_Ví dụ, 10 sát thương áp dụng cho một chiếc Thuyền cao tốc - một phương tiện có 3 Vỏ và 24 Cấu Trúc. Vỏ được tính là giáp giảm sát thương xuống còn 7. Lượng này được trừ khỏi 24 điểm Cấu Trúc và có 7% cơ hội gây hư hỏng cho một trong các Hệ Thống của phương tiện._

Sát thương mà một Hệ Thống có thể chịu đựng dựa hoàn toàn vào kích thước của phương tiện. Điều này được mô hình hóa bằng số lần trúng mà một Hệ Thống có thể chịu, thay vì lượng sát thương thực tế. Một lần trúng Hệ Thống duy nhất trên phương tiện Nhỏ sẽ ngay lập tức phá hủy Hệ Thống đó. Cần hai lần trúng để phá hủy các Hệ Thống của phương tiện cỡ Trung Bình, ba lần cho phương tiện cỡ Lớn, v.v. Xem [Bảng Sát Thương Hệ Thống](0006_Vehicles.md?id=system-damage-table) bên dưới.

Các Hệ Thống bị hư hỏng nhưng chưa bị phá hủy sẽ bị suy giảm chức năng tương ứng với số lần trúng - hoặc giảm theo phần trăm hoặc bị phạt Cấp Độ đối với các nhiệm vụ của Hệ Thống. Hiệu ứng cụ thể dựa trên những gì hệ thống TC kiểm soát, như chi tiết trong [Bảng Sát Thương Thành Phần Hệ Thống](0006_Vehicles.md?id=system-component-damage-table) bên dưới. Tùy thuộc vào Hệ Thống nào bị trúng đòn, hiệu ứng có thể rất thảm khốc.

_Ví dụ, một chiếc Land Ironclad - phương tiện cỡ To Lớn với 5 Lần Trúng Hệ Thống - bị trúng hai lần vào Hệ Thống Động Cơ (Lái Xe) sẽ mất 40% sức mạnh và làm giảm Tốc Độ Chậm hai Cấp Độ xuống mức Lề Mề. Tương tự, một tàu chở hàng Lớn - với 3 Lần Trúng Hệ Thống - bị trúng hai lần vào Hệ Thống Động Cơ/Nhiên Liệu sẽ bị phạt hai Cấp Độ về Tốc Độ cũng như sử dụng các hệ thống điện tử. Lần trúng thứ ba sẽ phá hủy Hệ Thống Động Cơ/Nhiên Liệu và cả TC tàu cùng với nó._


<details>

<summary>* Đính chính từ cộng đồng</summary>

---

#### Sát Thương


_Văn bản gốc ở đây ban đầu nằm xa hơn. Khi đặt trực tiếp sau phần Hệ Thống, nó lặp lại một cách không cần thiết đoạn văn trước đó._

- _"Sát thương vượt quá Vỏ sẽ xuyên qua phương tiện, làm hư hại Cấu Trúc và có thể tác động đến một hoặc nhiều hệ thống. Tùy thuộc vào kích thước của phương tiện, sát thương có thể nhỏ hoặc thảm khốc._
- _Ví dụ, một phương tiện Lớn có thể chịu tới hai lần trúng vào một Hệ Thống như Động Cơ của nó. Lần trúng thứ ba sẽ phá hủy hoàn toàn Hệ Thống Động Cơ. Mỗi khi hệ thống bị trúng, nó sẽ mất một phần trăm chức năng như mô tả trong cột Mất theo Lần trúng của Bảng Sát Thương Hệ Thống bên dưới hoặc một chức năng cốt lõi (như Động Cơ, Lái, Liên lạc, v.v.) sẽ trở nên khó hơn một Cấp Độ Khó mỗi lần trúng."_

_Các đoạn trên đã bị xóa và một bản chỉnh sửa rút gọn được thay thế để nêu tên một hiệu ứng Hệ Thống ví dụ khác._

---

</details>

##### Bảng Sát Thương Hệ Thống

| Kích Thước | Lần Trúng Hệ Thống | Mất theo Lần trúng |
| :-- | :-: | :-- |
| Nhỏ | 1 | 100% - Phá hủy |
| Trung Bình | 2 | 1 Cấp Độ hoặc 50% |
| Lớn | 3 | 1 Cấp Độ hoặc 33% |
| Khổng Lồ | 4 | 1 Cấp Độ hoặc 25% |
| To Lớn | 5 | 1 Cấp Độ hoặc 20% |
| Cực Lớn | 6 | 1 Cấp Độ hoặc 16% |


<details>

<summary>* Đính chính từ cộng đồng</summary>

---

##### Bảng Sát Thương Hệ Thống (Bản Gốc)

| Kích Thước | Lần Trúng Hệ Thống | Mất theo Lần trúng |
| :-- | :-: | :-- |
| Nhỏ | 1 | 1 Cấp Độ hoặc 50% |
| Trung Bình | 2 | 1 Cấp Độ hoặc 33% |
| Lớn | 3 | 1 Cấp Độ hoặc 25% |
| Khổng Lồ | 4 | 1 Cấp Độ hoặc 20% |
| To Lớn | 5 | 1 Cấp Độ hoặc 16% |
| Cực Lớn | 6 | 1 Cấp Độ hoặc 10% |

##### Bảng Kích Thước Phương Tiện (từ [Kích Thước Vỏ, Loại và Cấu Trúc](0006_Vehicles.md?id=hull-size-type-and-structure))

| Kích Thước | Lần Trúng Hệ Thống |
| :-- | :-: |
| Nhỏ | 1 |
| Trung Bình | 2 |
| Lớn | 3 |
| Khổng Lồ | 4 |
| To Lớn | 5 |
| Cực Lớn | 6 |

_Các quy tắc và ví dụ gốc không nhất quán:_
- _"Các hệ thống bị hư hỏng nhưng chưa bị phá hủy sẽ bị suy giảm chức năng. Điều này bằng với tỷ lệ lần trúng hiện tại so với khả năng tổng thể của nó. Do đó, một phương tiện To Lớn bị trúng hai lần vào Động Cơ sẽ mất 40% sức mạnh (2 lần trúng trên tổng số 5)"._ 
   - _Điều này cho thấy phương tiện To Lớn hiển thị với 5 Lần Trúng Hệ Thống nên mất 20% mỗi lần trúng - nhưng bảng ghi 16%._
- _"Ví dụ, một phương tiện Lớn có thể chịu tới ba lần trúng vào một hệ thống như Động Cơ. Lần trúng thứ tư sẽ phá hủy Hệ Thống Động Cơ."_ 
  - _"Điều này cho thấy - giống như bảng - 25% sát thương mỗi lần Trúng Hệ Thống nhưng các phương tiện Lớn chỉ có thể chịu 3 Lần Trúng Hệ Thống theo cùng bảng đó._
- _Mặc dù không mâu thuẫn, Bảng Kích Thước Phương Tiện bị dư thừa; xuất hiện lại đầy đủ hơn (thêm cột Mất theo Lần trúng) chỉ vài dòng sau._

_Điều này gây khó khăn cho việc có một quy tắc nhất quán. Để giải quyết các vấn đề này, các giá trị và ví dụ đã được thay đổi để khớp với nhau và Bảng Kích Thước Phương Tiện đã bị xóa._

---

</details>


##### Bảng Sát Thương Thành Phần Hệ Thống

| 1d10 | Hệ Thống | Kết Quả Hư Hỏng | Kết Quả Phá Hủy |
| :-: | :-- | :-- | :-- |
| 1 | Hàng Hóa | Một lượng tài sản hoặc thiết bị được lưu trữ trong khoang, tương ứng với sát thương, bị phá hủy. | Tất cả hàng hóa bị phá hủy. |
| 2 | Liên lạc | Các lần đổ xúc xắc Liên lạc bị phạt thêm một Cấp Độ Khó mỗi lần bị hư hại. | Phương tiện không thể giao tiếp hoặc đánh lừa cảm biến của kẻ thù. |
| 3 | Điều khiển | Các lần đổ xúc xắc Chèo Thuyền, Lái Xe hoặc Phi Công bị phạt thêm một Cấp Độ Khó mỗi lần bị hư hại; yêu cầu đổ xúc xắc Điều Khiển ngay lập tức. | Phương tiện không thể lái hoặc thay đổi hướng đi. |
| 4 | Động Cơ | Tốc Độ giảm một lượng tương ứng với sát thương. | Phương tiện dừng chết máy; máy bay rơi. |
| 5 | Thủy Thủ Đoàn | Một số hành khách tương ứng với sát thương trở thành thương vong. Những người bị ảnh hưởng chịu một Vết Thương Nghiêm Trọng và phải thành công trong lần đổ xúc xắc Sức Bền hoặc bị giết ngay lập tức. | Người trong phương tiện chết. |
| 6 | Động Cơ / Nhiên Liệu | Tốc Độ giảm một lượng tương ứng với sát thương. Các hệ thống điện tử khó sử dụng hơn một Cấp Độ Khó. | Phương tiện bị phá hủy trong một vụ nổ thảm khốc. |
| 7 | Cảm Biến | Các lần đổ xúc xắc Cảm Biến, Định vị và tấn công bằng Vũ khí bị phạt thêm một Cấp Độ Khó mỗi lần bị hư hại. | Phương tiện bị mù. |
| 8 | Vũ Khí | Một số hệ thống vũ khí tương ứng với sát thương trở nên không thể hoạt động. | Phương tiện không thể bắn vũ khí. |
| 9-0 | Không | Không có hệ thống nào bị trúng; chỉ có sát thương Cấu Trúc. | N/A |

<details>

<summary>* Đính chính từ cộng đồng</summary>

---

##### Bảng Sát Thương Thành Phần Hệ Thống (Động Cơ/Nhiên Liệu)

_Kết quả gốc như sau: "Tốc Độ Tối Đa bị giảm một nửa..." Điều này mâu thuẫn với quy tắc chung về phạt sát thương tương ứng với sát thương Hệ Thống: 25% sát thương = 25% phạt. Hơn nữa, các quy tắc đầy đủ trong Mythras Companion không đề cập đến việc giảm một nửa Tốc Độ này._

_Kết quả là văn bản được thay thế bằng mục tương tự từ các Hệ Thống Động Cơ: "Tốc Độ giảm một lượng tương ứng với sát thương."_

---

</details>


---
### Tốc Độ

Vì vật lý về vận tốc, gia tốc, lực cản và quán tính là những vấn đề phức tạp, cần có một số đơn giản hóa nên phương tiện được cấp một mức tốc độ trừu tượng. Chỉ số Tốc Độ chỉ nên được sử dụng để đánh giá một cách tương đối xem một phương tiện có thể vượt hoặc bắt kịp phương tiện khác hay không.

Mức tốc độ đại diện cho tỷ lệ vận hành danh nghĩa của phương tiện. Trong các tình huống khẩn cấp, hiệu suất này có thể tăng thêm một bậc, với nguy cơ mài mòn hoặc hư hỏng động cơ. Mặc dù cùng một bảng được sử dụng cho tất cả các loại phương tiện, nhưng nên áp dụng lẽ thường để chỉ so sánh các phương tiện cùng giai cấp. Ví dụ, nếu một TC tàu vũ trụ và một chiếc xe thể thao cùng có mức gia tốc Nhanh, thì rõ ràng TC tàu vũ trụ nhanh hơn về mặt so sánh.

Việc tăng Tốc Độ của phương tiện vượt quá giá trị tiêu chuẩn là có thể nếu đổ xúc xắc Lái Xe thành công. Thông thường, tốc độ tăng thêm này chỉ duy trì được trong một thời gian ngắn - không quá 1d6 phút trước khi phương tiện phải giảm xuống tốc độ tiêu chuẩn hoặc có nguy cơ làm hỏng nhà máy năng lượng. Một cú đổ xúc xắc Lái Xe thành công Thất bại Thảm hại cho phép kéo dài thời gian tốc độ cao lên 1d12 phút.

Người lái có thể cố gắng đẩy tốc độ phương tiện tăng 2 bậc, nhưng điều này đòi hỏi một lần đổ xúc xắc Lái Xe Phi Thường và thời gian tối đa phương tiện có thể duy trì tốc độ này là 1d3 phút: một Thành Công Trọng Yếu sẽ không kéo dài thời gian tốc độ tăng thêm.

##### Bảng Mức Tốc Độ

| Mức Tốc Độ | Tốc Độ Tối Đa Cho |
| :-- | :-: |
| Lề Mề | To Lớn |
| Chậm Chạp | |
| Chậm | Khổng Lồ |
| Trung Bình | |
| Nhẹ Nhàng | Lớn |
| Vừa Phải | |
| Nhanh | Trung Bình |
| Nhanh Chóng | |
| Cấp Tốc | Nhỏ |


---
### Đặc Điểm

Số lượng đặc điểm tối đa mà một phương tiện có thể có phụ thuộc vào kích thước vỏ và loại.

Mọi phương tiện đều có một đặc điểm vốn có: chế độ di chuyển mà nó được thiết kế chủ yếu. Do đó, máy bay vốn có đặc điểm Bay, thuyền có đặc điểm Chèo Thuyền, v.v. Đặc điểm vốn có này không tính vào số lượng đặc điểm khả dụng. Tuy nhiên, nếu một phương tiện bao gồm chế độ di chuyển thứ hai - ví dụ như tàu ngầm bay, thì đặc điểm Bay sẽ cần được chọn là một trong các đặc điểm khả dụng của nó.

Một số đặc điểm có thể không khả dụng, tùy thuộc vào cấp độ công nghệ của bối cảnh; Quản Trò phải đưa ra các quyết định của riêng mình về những đặc điểm nào có thể được áp dụng.

##### Bảng Phân Bổ Đặc Điểm Phương Tiện

| Kích Thước | Đặc Điểm Tối Đa |
| :-- | :-: |
| Nhỏ | 1 |
| Trung Bình | 2 |
| Lớn | 3 |
| Khổng Lồ | 4 |
| To Lớn | 5 |
| Cực Lớn | 6 |

#### Bay
Phương tiện có khả năng bay trong bầu khí quyển.

#### Địa Hình
Đặc điểm này phải được sử dụng với các phương tiện Mặt Đất. Phương tiện có thể đi qua địa hình khắc nghiệt, khó khăn và dốc, sử dụng bánh xích, hệ thống treo và truyền động tiên tiến, hoặc bộ vi sai truyền động mạnh mẽ.

#### Đào Hang
Phương tiện được thiết kế để đào hang và chui qua lòng đất. Nó có thể đạt độ sâu tối đa bằng Giá trị Vỏ x 5 mét.

#### Ngụy Trang
Phương tiện sở hữu sơn ngụy trang hoặc cảm biến bắt chước cho phép nó hòa lẫn vào môi trường. Các nỗ lực phát hiện phương tiện bằng mắt thường khó hơn một cấp độ.

#### Hàng Hóa
Phương tiện được thiết kế đặc biệt để vận chuyển hàng hóa thay vì hành khách. Các khoang hành khách được giữ ở mức tối thiểu với phần không gian sử dụng còn lại của phương tiện dành cho việc chứa hàng với các phần, công cụ và thậm chí cả điều hòa môi trường (như ngăn đông lạnh để vận chuyển hàng dễ hỏng) thích hợp. Khi chất đầy hàng hóa, tốc độ của phương tiện thấp hơn hai bậc so với kích thước vỏ của nó thường cho phép.

#### Tàu Sân Bay
Phương tiện được thiết kế đặc biệt để mang theo các phương tiện nhỏ hơn, có ít phi hành đoàn hoặc có thể được điều khiển từ xa thuộc loại dân sự hoặc quân sự. Bất kỳ phương tiện nào sở hữu đặc điểm này phải có kích thước ít nhất là To Lớn. Số lượng phương tiện nhỏ được mang theo có thể thay đổi theo loại nhiệm vụ và mục đích nhưng có thể ít nhất là 10 và nhiều nhất bằng giá trị Cấu Trúc của phương tiện.

#### Xây Dựng
Phương tiện được trang bị cho công việc xây dựng hạng nặng. Tất cả các phương tiện có đặc điểm này cũng có đặc điểm Địa Hình, nhưng tốc độ thấp hơn hai bậc so với kích thước vỏ của nó thường cho phép. Phương tiện được trang bị các công cụ phù hợp với nhiệm vụ như cần trục, gầu xúc, xe đổ đất, v.v.

#### Kháng EMP
Phương tiện được che chắn chống lại các cuộc tấn công bằng xung điện từ.

#### Hiệu Suất Tăng Cường
Mức Tốc Độ của phương tiện cao hơn một bậc so với mức tối đa cho kích thước của nó.

#### Ghế Nhảy Dù
Trong trường hợp khẩn cấp, ghế nhảy dù sẽ đẩy người ngồi lên cao vài trăm mét, sau đó bung dù để hạ cánh an toàn. Dù là tùy chọn. Không khuyến khích cho trực thăng (trừ trường hợp ngoại lệ Kamov Ka-52 Alligator).

#### FTL (Tốc độ vượt ánh sáng)
Chỉ dành cho Tàu vũ trụ. Phi thuyền được trang bị động cơ nhanh hơn ánh sáng (có thể là hyperdrive, warp Lái Xe, máy tạo lỗ sâu hoặc tương tự). Động cơ FTL có mức Tốc Độ riêng, về cơ bản đo tốc độ mà một TC tàu vũ trụ có thể đi qua một parsec (3,26 năm ánh sáng, hoặc 31 nghìn tỷ km, hoặc 19 nghìn tỷ dặm), như sau:

##### Bảng Tốc Độ FTL

| Mức Tốc Độ | Hệ số để đi qua 1 Parsec |
| :-- | :-: |
| Lề Mề | 10 |
| Chậm Chạp | 8 |
| Chậm | 7 |
| Trung Bình | 6 |
| Nhẹ Nhàng | 5 |
| Vừa Phải | 4 |
| Nhanh | 3 |
| Nhanh Chóng | 2 |
| Cấp Tốc | 1 |

Thời gian hệ số là do Quản Trò quyết định, tùy thuộc vào mức độ tiên tiến của sự phát triển FTL trong bối cảnh. Ví dụ, hệ số cơ bản có thể là 1 ngày, nghĩa là một TC tàu với động cơ FTL Lề Mề mất 10 ngày để hoàn thành hành trình, trong khi một TC tàu với động cơ FTL Cấp Tốc hoàn thành chuyến đi trong 1 ngày. Ở những nơi khác, nơi công nghệ FTL kém hiệu quả hơn đáng kể, thời gian hệ số có thể được tính bằng tháng thay vì ngày.

Giả định rằng TC tàu có dự trữ nhiên liệu để thực hiện hành trình trở về, hoặc một phương tiện để tiếp nhiên liệu tại điểm đến.

Giả định rằng bất kỳ kích thước tàu vũ trụ nào cũng có thể được trang bị động cơ FTL, mặc dù, một lần nữa, điều này phụ thuộc vào bối cảnh.

Động cơ FTL không thể được kích hoạt trong phạm vi 1,5 Đơn vị Thiên văn của một ngôi sao (khoảng 225 triệu km, hoặc 270 triệu dặm). Điều này có nghĩa là các TC tàu phải sử dụng động cơ dưới ánh sáng để di chuyển đến khoảng cách gần bằng Sao Hỏa trước khi kích hoạt hệ thống FTL.

#### Phương Tiện Mặt Đất
Phương tiện có khả năng di chuyển trên mặt đất.

#### Bay Lơ Lửng
Phương tiện bay lơ lửng trên mặt đất bằng cách sử dụng đệm khí hoặc bộ đẩy phản trọng lực.

#### Sang Trọng
Phương tiện được thiết kế đặc biệt để chở hành khách ở một mức độ sang trọng nhất định. Không gian hàng hóa dư thừa được dành cho các chỗ ở sang trọng cho hành khách, hồ bơi, bồn tắm nước nóng, thêm thủy thủ đoàn để phục vụ nhu cầu của hành khách, v.v.

#### Đường Ray
Phương tiện dựa vào hệ thống đường ray. Các phương tiện có đặc điểm này có thể tự nhiên đạt được mức Tốc Độ cao hơn ba bậc so với kích thước vỏ của chúng thường cho phép, nhưng rõ ràng là chỉ giới hạn di chuyển trên hệ thống đường ray.

#### Kiên Cường
Tất cả các hệ thống có thể chịu được thêm một lần trúng nữa so với mức xác định bình thường theo Kích Thước. Đặc điểm này có thể cộng dồn - vì vậy Kiên Cường 2 cho biết các hệ thống có thể chịu được thêm 2 lần trúng so với bình thường với chi phí hai điểm Đặc Điểm.

#### Chèo Thuyền
Phương tiện có khả năng nổi trên mặt nước.

#### Tàu Vũ Trụ
Phương tiện được bịt kín chống chân không và che chắn chống bức xạ vũ trụ, và tùy thuộc vào thiết kế, có thể có khả năng rời và quay lại bầu khí quyển, và duy trì chuyến bay trong bầu khí quyển.

#### Tàng Hình
Chỉ dành cho Máy bay. Phương tiện được thiết kế để tránh bị phát hiện bởi radar và các hệ thống cảm biến tầm xa khác. Các nỗ lực phát hiện phương tiện bằng cảm biến điện tử khó hơn một cấp độ.

#### Tàu Ngầm
Phương tiện có khả năng chìm dưới bề mặt đại dương đến độ sâu vận hành bằng Giá trị Vỏ x 10 mét. Độ sâu sụp đổ - mức tối đa tuyệt đối mà tàu ngầm có thể đạt tới mà không bị nghiền nát - là 1,5 lần độ sâu vận hành của nó.

#### Xử Lý Ưu Việt
Khả năng xử lý của phương tiện được xếp hạng là Dễ.

#### Bộ Giám Sát
Phương tiện có máy tính trên tàu, trạm gốc liên lạc, bộ thu tín hiệu thiết bị nghe lén và thiết bị để chặn các tín hiệu điện thoại thông minh gần đó trong phạm vi 100 mét.#### Tough

Một phương tiện dân sự có đặc điểm này sẽ lấy chỉ số Hull từ cột Military và tự động có chỉ số Structure tối đa. Một phương tiện quân sự có đặc điểm này sẽ lấy chỉ số Hull và Structure từ hàng bên dưới.

#### Tractor Beam

Chỉ dành cho tàu vũ trụ. TC tàu được trang bị một chùm tia kéo có thể bắt giữ và kéo về phía mình các phương tiện có định mức hull thấp hơn tối đa hai bậc. Do đó, một tàu vũ trụ Huge có thể thu hút và giữ một vỏ tàu có kích thước tối đa là Medium.

#### VTOL

Cất cánh/hạ cánh thẳng đứng. Đặc điểm này vốn có ở máy bay trực thăng và các phương tiện tương tự sử dụng kết hợp các cánh quạt để tạo lực nâng. Khi áp dụng cho máy bay cánh cố định, nó biểu thị việc sử dụng các động cơ đẩy cố định hoặc có thể điều chỉnh để kiểm soát thái độ, độ cao, và việc hạ cánh trên không.

#### Waterborne

Phương tiện tự đẩy bằng cách sử dụng các chân khớp nối. Các phương tiện Walker bị giới hạn ở Tốc độ Gentle, bất kể Kích thước của chúng là bao nhiêu. Tuy nhiên, Walker có thể được chế tạo với chiều cao mà nếu là phương tiện trang bị các phương thức di chuyển khác thì sẽ rất thiếu ổn định.

Phương tiện này có khả năng di chuyển dưới nước.

#### Weaponized

Phương tiện đã được điều chỉnh để lắp đặt vũ khí. Các hệ thống vũ khí được thảo luận bên dưới trong phần [Vũ Khí](0006_Vehicles.md?id=weapons).


---
## Vũ Khí

Thông thường, chỉ các vỏ tàu quân sự mới được thiết kế để chứa vũ khí (điểm cứng, kho đạn, hệ thống điều khiển). Đặc điểm 'Weaponized' có thể được chọn cho các phương tiện dân sự có thể có yêu cầu về vũ khí.

Số lượng hệ thống vũ khí tối đa mà một phương tiện có thể hỗ trợ bằng 1/10 Điểm Structure của nó (ví dụ, một phương tiện có 40 Structure có thể hỗ trợ 4 hệ thống vũ khí, nếu là phương tiện quân sự, hoặc phương tiện dân sự đã được Weaponized).

Các hệ thống vũ khí phụ thuộc vào Kích thước của phương tiện. Loại hệ thống vũ khí tối đa cho các Kích thước khác nhau được hiển thị trong các bảng dưới đây.


##### Bảng Vũ Khí theo Kích thước 

| Kích thước | Trên đất liền | Tàu vũ trụ |
| :-- | :-- | :-- |
| Small | Vũ khí nhẹ (ví dụ: Súng trường tấn công) | Vũ khí trung bình (ví dụ: Súng máy, Bệ phóng tên lửa) |
| Medium | Vũ khí trung bình (ví dụ: Súng máy, Bệ phóng tên lửa) | Vũ khí tháp pháo/Hạng nặng (ví dụ: Súng máy hạng nặng liên kết, Súng mini) |
| Large | Vũ khí tháp pháo/Hạng nặng (ví dụ: Súng máy hạng nặng liên kết, Súng mini) | Bệ vũ khí (ví dụ: Pháo binh chiến trường) |
| Huge | Bệ vũ khí (ví dụ: Pháo binh chiến trường) | Vũ khí tiên tiến (ví dụ: Hệ thống tên lửa) |
| Enormous | Vũ khí tiên tiến (ví dụ: Hệ thống tên lửa) | Vũ khí gắn trên sống tàu (chỉ một) |
| Colossal | Không áp dụng | Vũ khí gắn trên sống tàu (tối đa 3) |

##### Ví dụ Chỉ số Vũ Khí 
 
| Vũ Khí | Sát Thương | Tầm Bắn | Tốc Độ Bắn | Đạn/Nạp |
| :-- | :-: | :-: | :-: | :-: |
| Pháo 50 inch | 3d6+3 | 1000/2000/6500 | 1/10/50 | 1/5 |
| Súng mini/Súng Gatling | 3d6 | 300/1000/2000 | -/20/100 | 200/4 |
| Tên lửa | 5d6 | 5000/20km/60km | 1 | 1/5 |
| Tên lửa/Ngư lôi trung bình | 6d10 | Tầm bắn tối đa 200km | 1 | 1/5 |
| Tên lửa lớn/Hành trình | 6d10+10 | Tầm bắn tối đa 1000km | 1 | 1/10 |
| Pháo Laser/Plasma | 4d6 | 300/1000/2000 | -/5/25 | 500/5 |
| Pháo Laser/Plasma hạng nặng | 5d6 | 1000/3000/6000 | -/5/25 | 300/5 |
| Bệ Pháo binh | 5d6+6 | Tầm bắn tối đa 50km | 1 | 1/5 |
| Bệ vũ khí gắn sống tàu | 10d6+6 | Tầm bắn tối đa 20000km | 1 | 1/10 |

_Tầm bắn được tính bằng mét và kilomet._

_Tốc độ bắn dành cho phát đơn, bán tự động và tự động toàn phần._

_Đạn là khả năng bắn trước khi cần nạp lại. Nạp là thời gian nạp đạn tính bằng Hiệp Chiến Đấu, giả định có đầy đủ phi hành đoàn._

---
## Điều Khiển và Cơ Động

Các thao tác né tránh hoặc đột ngột đòi hỏi một lần đổ xúc xắc Kỹ năng Lái Xe/Phi Công thành công để đảm bảo tài xế hoặc phi công giữ được quyền kiểm soát phương tiện. Hầu hết các phương tiện được thiết kế và chế tạo để chịu được những áp lực và căng thẳng không thường xuyên, nhưng Quản Trò có thể quyết định rằng một thao tác cụ thể đòi hỏi một lần đổ xúc xắc ở cấp độ Khó cao hơn, tùy thuộc vào độ phức tạp của nó. Thất bại có nghĩa là quyền kiểm soát phương tiện bị mất: hãy đổ xúc xắc trên bảng Mất Kiểm Soát.

Lưu ý rằng Bảng Mất Kiểm Soát chỉ áp dụng cho các phương tiện trên đất liền. Các hiệu ứng tương tự có thể được áp dụng cho phương tiện bay và không gian, nhưng Quản Trò sẽ cần điều chỉnh lý do cho hiệu ứng cụ thể đó. Ví dụ, một chiếc máy bay, thay vì trượt, có thể rơi vào trạng thái xoáy.

Ngoài ra, khả năng điều khiển vốn có của một phương tiện có thể có tác động thêm đến lần đổ xúc xắc Lái Xe. Khả năng điều khiển là Rất Dễ, Tiêu Chuẩn, Khó, Ghê Gớm hoặc Phi Thường và xác định điểm xuất phát cho lần đổ xúc xắc Lái Xe khi thực hiện thao tác. Cấp độ Khó cho thao tác sau đó được áp dụng vào khả năng điều khiển để xác định độ khó cuối cùng.

Ví dụ, một chiếc mô tô hiệu suất cao có bộ ổn định TC quay hồi chuyển tích hợp mang lại cho nó khả năng Điều khiển là Rất Dễ. Người lái muốn thực hiện cú quay xe 180 độ để trốn thoát kẻ bám đuổi, một thao tác mà Quản Trò đánh giá là có thêm một cấp độ Khó. Do đó, người lái phải thực hiện lần đổ xúc xắc Lái Xe của mình ở mức Tiêu Chuẩn thay vì Rất Dễ. Nếu anh ta cố gắng thực hiện cùng một thao tác trên một chiếc mô tô không có bộ ổn định, lần đổ xúc xắc Lái Xe sẽ ở mức Khó.

Điều khiển Ưu việt là một Đặc điểm. Nếu một phương tiện không có đặc điểm này trong phần mô tả của nó, thì mặc định là điều khiển Tiêu Chuẩn cho bất kỳ phương tiện nào có kích thước Large trở xuống. Các phương tiện Huge và Enormous vốn có đặc điểm Điều khiển là Ghê Gớm và Phi Thường, và Quản Trò có quyền quyết định rằng một số thao tác đơn giản là không thể thực hiện được do kích thước của phương tiện.

##### Bảng Mất Kiểm Soát 

| 1d100 | Kết quả |
| :-: | :-- |
| 01-25 | Lạng lách. Mất kiểm soát chỉ là tạm thời. Phương tiện giảm tốc độ 1 bậc trong 5 giây. |
| 26-40 | Trượt. Tài xế phải chiến đấu để giữ phương tiện trong tầm kiểm soát. Phương tiện giảm tốc độ 2 bậc trong 10 giây. |
| 41-50 | Trượt nghiêm trọng. Phương tiện kết thúc ở hướng ngược lại và dừng lại trong 15 giây. |
| 51-60 | Lăn. Phương tiện trượt và lăn, gây ra 3d10 sát thương lên Structure của nó. Những người ngồi trong phải thực hiện thành công các lần đổ xúc xắc Sức Bền hoặc chịu 1d10 sát thương vào 1d3 Vị Trí Trúng Đòn. |
| 61-70 | Lăn nghiêm trọng. Như trên, nhưng phương tiện chịu 3d10+10 sát thương và người ngồi trong nhận 1d10 sát thương ngay cả khi lần đổ xúc xắc Sức Bền thành công, và 2d10 nếu thất bại. |
| 71-80 | Hỏng hóc hoàn toàn. Như trên nhưng phương tiện bị giảm xuống còn 0 Structure. Người ngồi trong chịu sát thương tương tự như đối với Lăn nghiêm trọng. |
| 81-90 | Nổ. Như trên nhưng hệ thống nhiên liệu của phương tiện bắt lửa và phát nổ trong vòng 1d20+10 giây. Nếu không thể thoát ra ngoài, những người ngồi trong phải chịu thêm 1d6 sát thương bỏng vào 1d6 vị trí. |
| 91-98 | Nổ ngay lập tức. Như trên nhưng vụ nổ xảy ra ngay lập tức. |
| 99-00 | Tai nạn thảm khốc. Những người ngồi trong phải đổ xúc xắc Sức Bền thành công hoặc chết ngay lập tức. Sát thương tương tự như Hỏng hóc hoàn toàn được duy trì bất kể kết quả. |


---
## Phương Tiện Mẫu

---

### Phương Tiện Mặt Đất

#### Interceptor

Một chiếc xe sang trọng, xe thể thao hoặc tương tự được độ lại, chiếc xe này được chế tạo để chạy nhanh và đáp trả tốt trong chiến đấu. Đây là loại phương tiện mà mọi người nghĩ đến khi ai đó nói "xe gián điệp".

| Interceptor | |
| :- | :- |
| **Kích thước / Loại** | Medium Quân sự |
| **Hull** | 6 |
| **Structure** | 40 |
| **Hệ thống** | 2 |
| **Tốc độ** | Nhanh |
| **Điều khiển** | Rất Dễ |
| **Đặc điểm** | [Ghế phóng](0006_Vehicles.md?id=ejector-seat), [Hiệu suất tăng cường](0006_Vehicles.md?id=enhanced-performance), [Điều khiển ưu việt](0006_Vehicles.md?id=superior-handling), [Bộ giám sát](0006_Vehicles.md?id=surveillance-suite), [Vũ khí hóa](0006_Vehicles.md?id=weaponized) |
| **Vũ khí** | Bộ rải vết dầu, Bộ rải khói, Súng máy trung bình liên kết đôi (2d6+3) |

<br>

---

#### Mô tô Truy đuổi

Một chiếc mô tô nhẹ, nhanh để phục vụ việc truy đuổi nhanh, Mô tô Truy đuổi mang đến một sự bất ngờ – hoặc một cặp súng máy liên kết hoặc hai tên lửa.

| Mô tô Truy đuổi | |
| :- | :- |
| **Kích thước / Loại** | Small Dân sự |
| **Hull** | 2 |
| **Structure** | 12 |
| **Hệ thống** | 1 |
| **Tốc độ** | Nhanh |
| **Điều khiển** | Rất Dễ |
| **Đặc điểm** | [Điều khiển ưu việt](0006_Vehicles.md?id=superior-handling), [Vũ khí hóa](0006_Vehicles.md?id=weaponized) |
| **Vũ khí** | Hai tên lửa (4d6) hoặc Súng máy nhẹ liên kết đôi (2d6) |

<br>

---

#### Xe Sedan

Một chiếc sedan 4 cửa tiêu chuẩn có đủ không gian để chỗ ngồi thoải mái cho tài xế và ba hành khách. Hy sinh không gian chứa hàng để tích hợp bộ giám sát.

| Xe Sedan | |
| :- | :- |
| **Kích thước / Loại** | Medium Dân sự |
| **Hull** | 4 |
| **Structure** | 25 |
| **Hệ thống** | 2 |
| **Tốc độ** | Rất Nhanh |
| **Điều khiển** | Tiêu Chuẩn |
| **Đặc điểm** | [Không gây chú ý](0006_Vehicles.md?id=unobtrusive), [Bộ giám sát](0006_Vehicles.md?id=surveillance-suite) |
| **Vũ khí** | Không có |

<br>

---

#### Xe hơi Lặn

Một chiếc xe hai người có thể chuyển sang chế độ di chuyển trên nước hoặc lặn để đi trên hoặc dưới nước. Đi kèm với một ngư lôi gắn phía trước và tên lửa đất đối không gắn trên nóc.

| Xe hơi Lặn | |
| :- | :- |
| **Kích thước / Loại** | Medium Dân sự |
| **Hull** | 6 |
| **Structure** | 25 |
| **Hệ thống** | 2 |
| **Tốc độ** | Nhanh |
| **Điều khiển** | Tiêu Chuẩn |
| **Đặc điểm** | [Hiệu suất tăng cường](0006_Vehicles.md?id=enhanced-performance), [Lặn](0006_Vehicles.md?id=submersible), [Thủy hành](0006_Vehicles.md?id=waterborne), [Vũ khí hóa](0006_Vehicles.md?id=weaponized) |
| **Vũ khí** | Tên lửa (5d6), Ngư lôi (4d10) |

<br>

---

#### Xe tải Giám sát

Một chiếc xe tải bình thường, không nhãn hiệu chứa một nhóm đặc vụ và bộ thiết bị ghi âm thanh-hình ảnh.

| Xe tải Giám sát | |
| :- | :- |
| **Kích thước / Loại** | Large Dân sự |
| **Hull** | 9 |
| **Structure** | 60 |
| **Hệ thống** | 3 |
| **Tốc độ** | Chậm rãi |
| **Điều khiển** | Tiêu Chuẩn |
| **Đặc điểm** | [Bộ giám sát](0006_Vehicles.md?id=surveillance-suite), [Bền bỉ](0006_Vehicles.md?id=tough) |
| **Vũ khí** | Không có |

<br>

---

#### Phương tiện Hỗ trợ Chiến thuật

Một chiếc bán tải hoặc xe jeep với không gian cho phi hành đoàn hai người trong cabin và một pháo thủ đứng ở thùng sau điều khiển súng máy trung bình gắn trên giá xoay.

| Phương tiện Hỗ trợ Chiến thuật | |
| :- | :- |
| **Kích thước / Loại** | Medium Dân sự |
| **Hull** | 6 |
| **Structure** | 30 |
| **Hệ thống** | 2 |
| **Tốc độ** | Rất Nhanh |
| **Điều khiển** | Tiêu Chuẩn |
| **Đặc điểm** | [Mọi địa hình](0006_Vehicles.md?id=all-terrain), [Vũ khí hóa](0006_Vehicles.md?id=weaponized) |
| **Vũ khí** | Súng máy trung bình gắn trên giá (2d6) |


<br>

---

### Phương tiện Thủy

#### Thuyền tốc độ

Một chiếc thuyền tốc độ điển hình, được trang bị bộ rải mìn gắn phía sau.

| Thuyền tốc độ | |
| :- | :- |
| **Kích thước / Loại** | Medium Dân sự |
| **Hull** | 3 |
| **Structure** | 24 |
| **Hệ thống** | 2 |
| **Tốc độ** | Nhanh |
| **Điều khiển** | Tiêu Chuẩn |
| **Đặc điểm** | [Hiệu suất tăng cường](0006_Vehicles.md?id=enhanced-performance), [Thủy hành](0006_Vehicles.md?id=waterborne), [Vũ khí hóa](0006_Vehicles.md?id=weaponized) |
| **Vũ khí** | Bộ rải mìn (5d6) |

<br>

#### Du thuyền

Loại du thuyền sang trọng mà một nhà tài phiệt có thể sở hữu. Có khả năng được trang bị bộ giám sát để bảo vệ chống lại kẻ thù cố gắng làm điều xấu.

| Du thuyền | |
| :- | :- |
| **Kích thước / Loại** | Huge Dân sự |
| **Hull** | 10 |
| **Structure** | 75 |
| **Hệ thống** | 4 |
| **Tốc độ** | Chậm |
| **Điều khiển** | Ghê Gớm |
| **Đặc điểm** | [Sang trọng](0006_Vehicles.md?id=luxurious), [Bộ giám sát](0006_Vehicles.md?id=surveillance-suite), [Thủy hành](0006_Vehicles.md?id=waterborne) |
| **Vũ khí** | Không có |


<br>

---

### Phương tiện bay/Tàu vũ trụ

#### Khí cầu (Tàu bay Dân sự)

Tương tự như Hindenburg, lớp khí cầu xuyên lục địa này (và những chiếc khác cùng loại) có chiều dài 245 mét và yêu cầu phi hành đoàn từ 40 đến 61 người. Nó thường có thể chở từ 50 đến 72 hành khách trong các tiện nghi sang trọng.

| Khí cầu | |
| :- | :- |
| **Kích thước / Loại** | Enormous Dân sự |
| **Hull** | 10 |
| **Structure** | 85 |
| **Hệ thống** | 5 |
| **Tốc độ** | Lặng lẽ |
| **Điều khiển** | Phi Thường |
| **Đặc điểm** | [Trên không](0006_Vehicles.md?id=airborne), [Sang trọng](0006_Vehicles.md?id=luxurious), [VTOL](0006_Vehicles.md?id=vtol) |
| **Lá chắn** | Không có |
| **Vũ khí** | Không có |

<br>

#### Trực thăng Tấn công

Trực thăng Tấn công truyền thống sử dụng công nghệ giám sát tiên tiến để chặn tín hiệu điện thoại và internet không dây, theo dõi cá nhân và phương tiện ngay cả trong bóng tối, thông qua FLIR. Những nỗ lực trốn tránh thiết bị theo dõi thông qua Ẩn Nấp đều ở mức Ghê Gớm.

| Trực thăng Tấn công | |
| :- | :- |
| **Kích thước / Loại** | Large Quân sự |
| **Hull** | 11 |
| **Structure** | 50 |
| **Hệ thống** | 3 |
| **Tốc độ** | Vừa phải |
| **Điều khiển** | Rất Dễ |
| **Đặc điểm** | [Trên không](0006_Vehicles.md?id=airborne), [Hiệu suất tăng cường](0006_Vehicles.md?id=enhanced-performance), [Ẩn nấp](0006_Vehicles.md?id=stealth), [Điều khiển ưu việt](0006_Vehicles.md?id=superior-handling), [Bộ giám sát](0006_Vehicles.md?id=surveillance-suite), [VTOL](0006_Vehicles.md?id=vtol) |
| **Lá chắn** | Không có |
| **Vũ khí** | 1 Súng Gatling (3d6), 4 Tên lửa (5d6) |

<br>

#### Máy bay chiến đấu Đa năng

Chiếc máy bay chiến đấu hai chỗ ngồi trên đất liền này (loại tương tự De Havilland Mosquito) nổi tiếng với hiệu suất và tính linh hoạt. Khoang bom của nó có thể mang hai quả bom 250 lb. (tính là tên lửa trung bình với tầm bắn 0) hoặc một quả ngư lôi đơn.

| Máy bay chiến đấu Đa năng | |
| :- | :- |
| **Kích thước / Loại** | Large Quân sự |
| **Hull** | 10 |
| **Structure** | 45 |
| **Hệ thống** | 3 |
| **Tốc độ** | Vừa phải |
| **Điều khiển** | Tiêu Chuẩn |
| **Đặc điểm** | [Trên không](0006_Vehicles.md?id=airborne), [Hiệu suất tăng cường](0006_Vehicles.md?id=enhanced-performance) |
| **Lá chắn** | Không có |
| **Vũ khí** | 4 Súng Gatling gắn mũi (4d6+3), 1 khoang bom (6d10 - xem mô tả) |

<br>

#### Tàu vận tải Liên sao (Vận tải công nghệ cao nhẹ)

Chiếc vận tải nhẹ này đòi hỏi phi hành đoàn tối thiểu chỉ hai người, với không gian cho tối đa bốn hành khách bổ sung. Phiên bản hàng tiêu chuẩn được ghi chú ở đây, tuy nhiên nhiều chủ sở hữu sẽ áp dụng các "sửa đổi đặc biệt" của riêng họ như không gian chở hàng ẩn, Hiệu suất tăng cường, Điều khiển ưu việt, Kháng EMP, Ẩn nấp, v.v.

| Tàu vận tải Liên sao | |
| :- | :- |
| **Kích thước / Loại** | Medium Tàu vũ trụ Dân sự |
| **Hull** | 10 |
| **Structure** | 80 |
| **Hệ thống** | 2 |
| **Tốc độ** | Rất Nhanh (Hệ số Parsec là 3) |
| **Điều khiển** | Tiêu Chuẩn |
| **Đặc điểm** | [Trên không](0006_Vehicles.md?id=airborne), [Hàng hóa](0006_Vehicles.md?id=cargo), [FTL](0006_Vehicles.md?id=ftl), [Tàu vũ trụ](0006_Vehicles.md?id=spacecraft), [VTOL](0006_Vehicles.md?id=vtol) |
| **Lá chắn** | 8 |
| **Vũ khí** | 2x Tháp pháo Laser bốn nòng (5d6) |


<br>

#### Đơn vị Liên lạc Chung (Tàu vũ trụ công nghệ siêu cao)

Tàu vũ trụ cực kỳ công nghệ cao này là biểu hiện vật lý của một Trí tuệ nhân tạo cực kỳ tiên tiến, có hình dạng là một chuỗi các mô-đun kết nối trường dài hai km. Các mô-đun được phân mục đích riêng biệt và bao gồm môi trường sống, cơ sở xây dựng, khu vực hàng hóa, chế biến thực phẩm, khu phức hợp giải trí, khoang chứa máy bay, và thậm chí cả một số đơn vị bí mật mà trí tuệ của TC tàu hiếm khi, hoặc không bao giờ, thảo luận. Nó không cần phi hành đoàn là TC người, nhưng có thể hỗ trợ một lượng hành khách lên đến 100.000 người một cách dễ dàng. Nhiều hành khách được sinh ra và chết đi trên Đơn vị Liên lạc: nhiều người chỉ là tạm thời, đến và đi khi họ muốn.

| Đơn vị Liên lạc Chung | |
| :- | :- |
| **Kích thước / Loại** | Colossal Tàu vũ trụ Dân sự |
| **Hull** | 20 |
| **Structure** | 10,000 |
| **Hệ thống** | 6 |
| **Tốc độ** | Vừa phải (Hệ số Parsec là 4. Ở cấp độ công nghệ này, một Hệ số bằng 1 giờ) |
| **Điều khiển** | Ghê Gớm |
| **Đặc điểm** | [Trên không](0006_Vehicles.md?id=airborne), [Hàng hóa](0006_Vehicles.md?id=cargo), [Tàu sân bay](0006_Vehicles.md?id=carrier), [Xây dựng](0006_Vehicles.md?id=construction), [FTL](0006_Vehicles.md?id=ftl), [Sang trọng](0006_Vehicles.md?id=luxurious), [Tàu vũ trụ](0006_Vehicles.md?id=spacecraft), [Điều khiển ưu việt](0006_Vehicles.md?id=superior-handling), [Tractor Beam](0006_Vehicles.md?id=tractor-beam) |
| **Lá chắn** | 30 |
| **Vũ khí** | Không có loại nào mà nó muốn thảo luận |

<br>