# Phương tiện

Các phương tiện trong _Mythras Imperative_ được xử lý theo cách bán trừu tượng. Về cơ bản, chúng là công cụ nền, được dùng để đưa nhân vật từ A đến B, ít cần mô tả chi tiết hay thống kê. Tuy nhiên, đôi khi, Người quản trò sẽ yêu cầu chi tiết về phương tiện khi cần thể hiện chúng trong các cuộc rượt đuổi hoặc tình huống chiến đấu.

Các quy tắc trong phần này cho phép thể hiện hầu hết các loại phương tiện nhưng theo cách trừu tượng nhằm tạo sự linh hoạt và nâng cao khả năng kể chuyện. Tàu vũ trụ và phi thuyền hơi khác một chút, mặc dù chúng dựa trên các nguyên tắc tương tự.

---
## Thống kê

Tất cả các phương tiện được mô tả bằng Cấu trúc, Vỏ, Tốc độ, Hệ thống, Đặc điểm và Lá chắn (nếu có trong bối cảnh).

-   **[Kích thước](0006_Vehicles.md?id=vehicle-size-table):** Tất cả phương tiện có một trong sáu xếp hạng Kích thước, quyết định giá trị hoặc phạm vi của các đặc điểm còn lại. Do kích thước nội tại lớn hơn và môi trường khắc nghiệt của không gian, tàu vũ trụ có phạm vi giá trị riêng.
-   **[Vỏ](0006_Vehicles.md?id=terrestrial-hulls):** Đại diện cho Điểm Giáp
-   **[Cấu trúc](0006_Vehicles.md?id=terrestrial-hulls):** Đại diện cho Điểm Máu của phương tiện
-   **[Lá chắn](0006_Vehicles.md?id=shields):** Trong các bối cảnh có công nghệ thao túng năng lượng tiên tiến, lá chắn có thể hiện diện để bảo vệ phương tiện, nhưng có thể bị bào mòn dưới hỏa lực liên tục.
-   **[Hệ thống](0006_Vehicles.md?id=systems):** Đại diện cho các bộ phận quan trọng của phương tiện, bao gồm nhà máy điện, khoang phi hành đoàn, v.v.
-   **[Tốc độ](0006_Vehicles.md?id=speed):** Mỗi phương tiện có một xếp hạng Tốc độ cơ bản
-   **[Đặc điểm](0006_Vehicles.md?id=traits):** Một phương tiện cũng có thể có một hoặc nhiều Đặc điểm. Đặc điểm, giống như Năng lực được gán cho Sinh vật trong các quy tắc _Mythras Imperative_, hoặc Đặc điểm Phong cách Chiến đấu, cung cấp một mô tả và lợi thế bổ sung trong trò chơi, phản ánh bản chất của phương tiện.
-   **[Vũ khí](0006_Vehicles.md?id=weapons):** Tương tự như Đặc điểm, một phương tiện có thể được trang bị vũ khí tùy theo bối cảnh cho phép. Một số ví dụ và giá trị gợi ý được trình bày chi tiết bên dưới.

---
### Kích thước, Loại Vỏ và Cấu trúc

Kích thước và mục đích của một phương tiện ảnh hưởng đến độ dày của vỏ và khả năng phục hồi của cấu trúc bên trong. Ví dụ, một chiếc xe máy có vỏ tối thiểu, được chế tạo cho tốc độ và sự nhanh nhẹn. Một chiếc Thiết giáp sắt mặt đất (một con quái vật bọc thép lớn, bánh xích hoặc bánh lốp, được cung cấp năng lượng bằng động cơ hơi nước hoặc diesel), là một phương tiện lớn hơn nhiều được thiết kế cho chiến trường, có vỏ lớn hơn nhiều. Kích thước so sánh của vỏ (và số lần chịu đòn từ vũ khí mà chúng thường có thể chịu được) được tóm tắt trong các bảng Kích thước và Vỏ Phương tiện bên dưới.

Bất cứ khi nào một phương tiện bị hư hại, sát thương nhận vào sẽ được giảm đi bởi giá trị Vỏ của nó. Bất kỳ sát thương còn lại nào sẽ được trừ vào điểm Cấu trúc của phương tiện và có một cơ hội phần trăm, bằng với sát thương xuyên thủng, ảnh hưởng đến một Hệ thống. Nếu phương tiện bị giảm xuống 0 Cấu trúc, nó sẽ bị phá hủy hoàn toàn hoặc bị hư hại nghiêm trọng đến mức phải bỏ đi.

##### Vỏ Phương tiện mặt đất

| Kích thước | Cấu trúc | Giá trị Vỏ dân sự | Giá trị Vỏ quân sự | Ví dụ |
| :-- | :-: | :-: | :-: | :-- |
| Nhỏ | 1-20 | 1-3 | 4-6 | Xe máy, xe máy có thùng, ô tô nhỏ gọn hoặc phân khúc B, ca nô, thuyền kayak, thuyền chèo |
| Trung bình | 21-40 | 1-6 | 7-9 | Xe Sedan, xe tải thùng, xe bán tải, ô tô hạng sang, ô tô thể thao hạng sang, ô tô cơ bắp, limousine, thuyền cứu sinh, thuyền máy, dù lượn, trực thăng tự quay |
| Lớn | 41-60 | 4-9 | 10-12 | Xe tải/xe tải lớn, limousine kéo dài, SUV, xe buýt, xe chở khách, máy bay cá nhân, tàu lượn, du thuyền giải trí, xe tăng, trực thăng, tàu ngầm |
| Khổng lồ | 61-80 | 7-12 | 13-15 | Xe đầu kéo, máy bay chở khách, máy bay phản lực, tàu tuần duyên, du thuyền lớn |
| Cực lớn | 81-100 | 10-15 | 16-18 | Tàu hỏa, tàu du lịch, tàu hải quân |

##### Vỏ Tàu vũ trụ

| Kích thước | Cấu trúc | Giá trị Vỏ dân sự | Giá trị Vỏ quân sự | Ví dụ |
| :-- | :-: | :-: | :-: | :-- |
| Nhỏ | 10-50 | 4-9 | 10-12 | Tiêm kích một chỗ ngồi |
| Trung bình | 51-150 | 7-12 | 13-15 | Tàu vận tải hạng nhẹ, Tàu con thoi |
| Lớn | 151-450 | 10-15 | 16-18 | Tàu vận tải hạng nặng, Tàu tuần dương |
| Khổng lồ | 451-1350 | 13-18 | 19-21 | Tàu hộ tống khu trục, Tuần dương hạm hạng nhẹ |
| Cực lớn | 1351-4050 | 16-21 | 21-24 | Tàu thế hệ, Tuần dương hạm hạng nặng |
| Khổng lồ tối cao | 4050-12110 | 19-24 | 24-30 | Trạm không gian, Trạm chiến đấu hủy diệt hành tinh |

---
### Lá chắn

Lá chắn năng lượng cung cấp một lớp bảo vệ bổ sung cho những phương tiện có thể trang bị chúng. Lá chắn hoạt động hơi khác so với Vỏ, do tính chất bào mòn của chúng. Nếu sát thương nhận vào bằng hoặc ít hơn giá trị của lá chắn, thì tất cả đều bị chặn. Nếu sát thương vượt quá giá trị lá chắn, thì bất kỳ phần dư thừa nào sẽ làm giảm sức mạnh lá chắn theo lượng đó.

_Ví dụ, một tàu vận tải quân sự có sức mạnh lá chắn năng lượng là 12 điểm. Nếu tàu vận tải bị một tia laser bắn trúng gây 11 sát thương, nó sẽ không xuyên thủng và không có hiệu ứng bổ sung nào. Mặt khác, nếu tàu vận tải bị một vụ nổ gây 15 sát thương, ba điểm dư thừa sẽ làm giảm sức mạnh lá chắn xuống 9._

Khi sức mạnh của lá chắn năng lượng giảm xuống 0, nó sẽ sụp đổ. Bất kỳ sát thương còn lại nào sẽ tác động lên vỏ.

---
### Hệ thống

Mỗi khi một phương tiện bị hư hại xuyên thủng vỏ, có một cơ hội, bằng với sát thương xuyên thủng, rằng một Hệ thống quan trọng đã bị ảnh hưởng.

_Ví dụ, 10 sát thương được gây ra cho một Tàu cao tốc - một phương tiện có 3 Vỏ và 24 Cấu trúc. Vỏ được tính là giáp, giảm sát thương xuống còn 7. Lượng này được trừ khỏi 24 điểm Cấu trúc và có 7% cơ hội gây hư hại một trong các Hệ thống của phương tiện._

Sát thương mà một Hệ thống có thể chịu được hoàn toàn dựa trên kích thước của phương tiện. Điều này được mô hình hóa bằng số lần một Hệ thống có thể chịu đòn, thay vì lượng sát thương thực tế. Một Hệ thống bị đánh trúng một lần trên phương tiện Nhỏ sẽ ngay lập tức phá hủy Hệ thống đó. Mất hai lần đánh để phá hủy Hệ thống của phương tiện kích thước Trung bình, ba lần đối với phương tiện Lớn, v.v. Xem [Bảng Sát thương Hệ thống](0006_Vehicles.md?id=system-damage-table) bên dưới.

Các Hệ thống bị hư hại, nhưng chưa bị phá hủy, sẽ bị mất chức năng tương ứng với số lần bị đánh trúng - hoặc giảm phần trăm hoặc bị hình phạt Cấp độ đối với các nhiệm vụ Hệ thống. Hiệu ứng cụ thể dựa trên những gì hệ thống con kiểm soát, như chi tiết trong [Bảng Sát thương Thành phần Hệ thống](0006_Vehicles.md?id=system-component-damage-table) bên dưới. Tùy thuộc vào Hệ thống nào bị trúng, các hiệu ứng có thể là thảm khốc.

_Ví dụ, một chiếc Thiết giáp sắt mặt đất - một phương tiện Cực lớn với 5 Điểm Hệ thống - bị đánh trúng hai lần vào Hệ thống Động lực sẽ mất 40% công suất và giảm Tốc độ Chậm của nó hai Cấp độ xuống Chậm chạp. Tương tự, một tàu vận tải Lớn - với 3 Điểm Hệ thống - nhận hai đòn đánh vào Hệ thống Động cơ/Nhiên liệu sẽ bị hình phạt hai Cấp độ về Tốc độ cũng như việc sử dụng các hệ thống điện tử. Đòn đánh thứ ba sẽ phá hủy Hệ thống Động cơ/Nhiên liệu và con tàu._

<details>

<summary>* Sửa lỗi từ Cộng đồng</summary>

---

#### Sát thương

_Văn bản gốc ở đây ban đầu nằm xa hơn. Đặt ngay sau phần Hệ thống, nó lặp lại không cần thiết đoạn văn trước._

-   _"Sát thương vượt quá Vỏ sẽ xuyên thủng phương tiện, làm hỏng Cấu trúc và có thể ảnh hưởng đến một hoặc nhiều hệ thống. Tùy thuộc vào kích thước của phương tiện, sát thương có thể nhẹ hoặc thảm khốc._
-   _Ví dụ, một phương tiện Lớn có thể chịu tới hai đòn đánh vào một Hệ thống như Động lực của nó. Đòn đánh thứ ba sẽ phá hủy hoàn toàn Động lực. Mỗi khi hệ thống bị đánh, nó sẽ mất một phần trăm chức năng như mô tả trong cột Mức mất chức năng mỗi đòn đánh của Bảng Sát thương Hệ thống bên dưới hoặc một chức năng cốt lõi (như Động lực, Điều khiển, Truyền thông, v.v.) trở nên khó hơn một Cấp độ Khó khăn mỗi khi bị đánh."_

_Các đoạn văn trên được loại bỏ và một bản chỉnh sửa rút gọn được thay thế, gọi ra một ví dụ khác về hiệu ứng Hệ thống._

---

</details>

##### Bảng Sát thương Hệ thống

| Kích thước | Điểm Hệ thống | Mất chức năng mỗi đòn đánh |
| :-- | :-: | :-- |
| Nhỏ | 1 | 100% - Bị phá hủy |
| Trung bình | 2 | 1 Cấp độ hoặc 50% |
| Lớn | 3 | 1 Cấp độ hoặc 33% |
| Khổng lồ | 4 | 1 Cấp độ hoặc 25% |
| Cực lớn | 5 | 1 Cấp độ hoặc 20% |
| Khổng lồ tối cao | 6 | 1 Cấp độ hoặc 16% |

<details>

<summary>* Sửa lỗi từ Cộng đồng</summary>

---

##### Bảng Sát thương Hệ thống (Bản gốc)

| Kích thước | Điểm Hệ thống | Mất chức năng mỗi đòn đánh |
| :-- | :-: | :-- |
| Nhỏ | 1 | 1 Cấp độ hoặc 50% |
| Trung bình | 2 | 1 Cấp độ hoặc 33% |
| Lớn | 3 | 1 Cấp độ hoặc 25% |
| Khổng lồ | 4 | 1 Cấp độ hoặc 20% |
| Cực lớn | 5 | 1 Cấp độ hoặc 16% |
| Khổng lồ tối cao | 6 | 1 Cấp độ hoặc 10% |

##### Bảng Kích thước Phương tiện (từ [Kích thước, Loại Vỏ và Cấu trúc](0006_Vehicles.md?id=hull-size-type-and-structure))

| Kích thước | Điểm Hệ thống |
| :-- | :-: |
| Nhỏ | 1 |
| Trung bình | 2 |
| Lớn | 3 |
| Khổng lồ | 4 |
| Cực lớn | 5 |
| Khổng lồ tối cao | 6 |

_Các quy tắc và ví dụ gốc không nhất quán:_
-   _"Các Hệ thống bị hư hại, nhưng chưa bị phá hủy, sẽ bị mất chức năng. Điều này bằng với tỷ lệ giữa số lần bị đánh trúng hiện tại với tổng khả năng của nó. Do đó, một phương tiện Cực lớn bị đánh trúng hai lần vào Hệ thống Động lực sẽ mất 40% công suất của nó (2 lần đánh trong số tối đa 5 lần)."_
    -   _Điều này cho thấy phương tiện Cực lớn được hiển thị với 5 Điểm Hệ thống nên mất 20% với mỗi lần đánh - nhưng bảng lại ghi 16%._
-   _"Ví dụ, một phương tiện Lớn có thể chịu tối đa ba lần đánh vào một hệ thống như Động lực của nó. Lần đánh thứ tư sẽ phá hủy hoàn toàn Động lực."_
    -   _Điều này cho thấy - cũng như bảng - 25% sát thương mỗi Điểm Hệ thống nhưng các Phương tiện Lớn chỉ có thể chịu 3 Điểm Hệ thống theo cùng một bảng._
-   _Mặc dù không không nhất quán, Bảng Kích thước Phương tiện bị dư thừa; xuất hiện lại dưới dạng đầy đủ hơn (thêm cột Mất chức năng mỗi đòn đánh) chỉ vài dòng sau._

_Điều này làm cho việc có một quy tắc nhất quán trở nên khó khăn. Để giải quyết các vấn đề này, các giá trị và ví dụ được thay đổi để khớp và Bảng Kích thước Phương tiện đã bị loại bỏ._

---

</details>

##### Bảng Sát thương Thành phần Hệ thống

| 1d10 | Hệ thống | Kết quả bị hư hại | Kết quả bị phá hủy |
| :-: | :-- | :-- | :-- |
| 1 | Hàng hóa | Một lượng đồ đạc hoặc thiết bị được cất giữ trong khoang, tỉ lệ với sát thương, bị phá hủy. | Toàn bộ hàng hóa bị phá hủy. |
| 2 | Truyền thông | Các lần kiểm tra Truyền thông chịu thêm một Cấp độ Khó khăn mỗi khi chúng bị hư hại. | Phương tiện không thể giao tiếp hoặc đánh lừa cảm biến địch. |
| 3 | Điều khiển | Các lần kiểm tra Điều khiển thuyền, Lái xe hoặc Phi công chịu thêm một Cấp độ Khó khăn mỗi khi chúng bị hư hại; yêu cầu kiểm tra Điều khiển ngay lập tức. | Phương tiện không thể được lái hoặc thay đổi hướng. |
| 4 | Động lực | Tốc độ giảm một lượng tỉ lệ với sát thương. | Phương tiện dừng chết máy; máy bay rơi. |
| 5 | Phi hành đoàn | Một số lượng hành khách tỉ lệ với sát thương trở thành thương vong. Những người bị ảnh hưởng chịu một Vết thương Nặng và phải thành công trong lần kiểm tra Sức bền hoặc bị giết ngay lập tức. | Người ngồi trong phương tiện tử vong. |
| 6 | Động cơ / Nhiên liệu | Tốc độ giảm một lượng tỉ lệ với sát thương. Các hệ thống điện tử khó sử dụng hơn một Cấp độ Khó khăn. | Phương tiện bị phá hủy trong một vụ nổ thảm khốc. |
| 7 | Cảm biến | Các lần kiểm tra Cảm biến, Điều hướng và Tấn công vũ khí chịu thêm một Cấp độ Khó khăn mỗi khi chúng bị hư hại. | Phương tiện bị mù. |
| 8 | Vũ khí | Một số hệ thống vũ khí tỉ lệ với sát thương trở nên không hoạt động. | Phương tiện không thể khai hỏa vũ khí. |
| 9-0 | Không có | Không có hệ thống nào bị trúng; chỉ sát thương Cấu trúc. | N/A |

<details>

<summary>* Sửa lỗi từ Cộng đồng</summary>

---

##### Bảng Sát thương Thành phần Hệ thống (Động cơ/Nhiên liệu)

_Kết quả gốc như sau: "Tốc độ Tối đa bị giảm một nửa..." Điều này mâu thuẫn với quy tắc chung về hình phạt sát thương tỉ lệ với sát thương Hệ thống: 25% sát thương = 25% hình phạt. Hơn nữa, các quy tắc đầy đủ trong Mythras Companion không đề cập đến việc giảm một nửa Tốc độ này._

_Kết quả là văn bản được thay thế bằng mục tương tự từ Hệ thống Động lực: "Tốc độ giảm một lượng tỉ lệ với sát thương."_

---

</details>

---
### Tốc độ

Vì vật lý của vận tốc, gia tốc, lực cản và quán tính (chỉ kể một vài) là những vấn đề phức tạp, cần có một số đơn giản hóa và do đó các phương tiện được gán một xếp hạng tốc độ trừu tượng. Đặc tính Tốc độ chỉ nên được sử dụng để ước tính một cách đại khái xem một phương tiện có thể vượt hoặc bắt kịp một phương tiện khác hay không.

Xếp hạng tốc độ đại diện cho tốc độ hoạt động danh nghĩa của phương tiện. Trong tình huống khẩn cấp, hiệu suất này có thể được tăng lên một bậc, với rủi ro hao mòn hoặc hư hỏng động cơ. Mặc dù cùng một bảng được sử dụng cho tất cả các loại phương tiện, cần áp dụng lẽ thường để chỉ so sánh các phương tiện cùng loại. Ví dụ, nếu một Tàu vũ trụ và một chiếc xe thể thao đều có cùng tốc độ tăng tốc là Nhanh, thì rõ ràng tàu vũ trụ nhanh hơn một cách tương đối.

Việc tăng Tốc độ của phương tiện vượt quá giá trị tiêu chuẩn của nó là có thể nếu kiểm tra Lái thành công. Thông thường, tốc độ tăng thêm này chỉ có thể duy trì trong một khoảng thời gian ngắn – không quá 1d6 phút trước khi phương tiện phải giảm xuống tốc độ tiêu chuẩn hoặc có nguy cơ hư hỏng động cơ. Một lần kiểm tra Lái thành công quan trọng cho phép thời gian duy trì tốc độ cao hơn được tăng lên 1d12 phút.

Một người lái có thể cố gắng đẩy tốc độ của phương tiện lên 2 bậc, nhưng điều này yêu cầu một lần kiểm tra Lái Khó khăn tối đa và thời gian tối đa mà phương tiện có thể duy trì tốc độ này là 1d3 phút: Thành công Quan trọng sẽ không kéo dài thời gian tăng tốc.

##### Bảng Xếp hạng Tốc độ

| Xếp hạng Tốc độ | Tốc độ tối đa cho |
| :-- | :-: |
| Chậm chạp | Cực lớn |
| Ì ạch | |
| Chậm | Khổng lồ |
| Trung bình | |
| Nhẹ nhàng | Lớn |
| Vừa phải | |
| Nhanh | Trung bình |
| Rất nhanh | |
| Nhanh như gió | Nhỏ |

---
### Đặc điểm

Số lượng đặc điểm tối đa mà một phương tiện có thể có phụ thuộc vào kích thước vỏ và loại.

Mỗi phương tiện có một đặc điểm cố hữu: chế độ di chuyển mà nó được thiết kế chủ yếu. Do đó, máy bay vốn dĩ có đặc điểm Bay lượn, thuyền có đặc điểm Chạy trên biển, v.v. Đặc điểm cố hữu này không được tính vào số lượng đặc điểm có sẵn. Tuy nhiên, nếu một phương tiện bao gồm chế độ di chuyển thứ hai — ví dụ như một tàu ngầm bay, thì đặc điểm Bay lượn sẽ cần được coi là một trong những đặc điểm có sẵn của nó.

Một số đặc điểm có thể không khả dụng, tùy thuộc vào cấp độ công nghệ của bối cảnh; Người quản trò phải tự đưa ra phán đoán về những đặc điểm nào có thể được áp dụng.

##### Bảng Phân bổ Đặc điểm Phương tiện

| Kích thước | Số đặc điểm tối đa |
| :-- | :-: |
| Nhỏ | 1 |
| Trung bình | 2 |
| Lớn | 3 |
| Khổng lồ | 4 |
| Cực lớn | 5 |
| Khổng lồ tối cao | 6 |

#### Bay lượn

Phương tiện có khả năng bay trong khí quyển.

#### Mọi địa hình

Đặc điểm này phải được sử dụng với các phương tiện mặt đất. Phương tiện có thể vượt qua địa hình khắc nghiệt, khó khăn và dốc, sử dụng bánh xích, hệ thống treo và truyền động tiên tiến, hoặc hệ thống vi sai mạnh mẽ.

#### Đào hầm

Phương tiện được thiết kế để đào hầm xuyên qua mặt đất. Nó có thể đạt độ sâu tối đa bằng Xếp hạng Vỏ x 5 mét.

#### Ngụy trang

Phương tiện có sơn ngụy trang hoặc cảm biến mô phỏng cho phép nó hòa nhập với môi trường. Các nỗ lực phát hiện phương tiện bằng mắt thường khó hơn một cấp độ.

#### Hàng hóa

Phương tiện được thiết kế đặc biệt để vận chuyển hàng hóa thay vì hành khách. Khoang hành khách được giữ ở mức tối thiểu với phần còn lại của không gian sử dụng của phương tiện được dành cho việc chứa hàng hóa với các bộ phận, công cụ thích hợp và thậm chí điều hòa môi trường (như các khoang đông lạnh để vận chuyển hàng hóa dễ hỏng). Khi chở hàng hóa, tốc độ của phương tiện thấp hơn hai bậc so với kích thước vỏ bình thường cho phép.

#### Tàu mẹ

Phương tiện được thiết kế đặc biệt để mang theo các phương tiện nhỏ hơn, ít phi hành đoàn hơn, hoặc có thể điều khiển từ xa, thuộc loại dân sự hoặc quân sự. Bất kỳ phương tiện nào có đặc điểm này phải có kích thước ít nhất là Cực lớn. Số lượng phi cơ nhỏ được mang có thể thay đổi tùy theo loại nhiệm vụ và mục đích nhưng có thể ít nhất là 10 đến bằng xếp hạng Cấu trúc của phương tiện.

#### Xây dựng

Phương tiện được trang bị cho công việc xây dựng nặng. Tất cả các phương tiện có đặc điểm này cũng có đặc điểm Mọi địa hình, nhưng tốc độ thấp hơn hai bậc so với kích thước vỏ bình thường cho phép. Phương tiện được trang bị các công cụ phù hợp với nhiệm vụ như cần cẩu, xẻng xúc, xe ben, v.v.

#### Chống EMP

Phương tiện được che chắn chống lại các cuộc tấn công xung điện từ.

#### Hiệu suất nâng cao

Xếp hạng Tốc độ của phương tiện cao hơn một bậc so với mức tối đa cho kích thước của nó.

#### Ghế phóng

Trong trường hợp khẩn cấp, ghế phóng đẩy người ngồi lên cao vài trăm mét trong không khí, sau đó triển khai dù để hạ cánh an toàn. Dù là tùy chọn. Không khuyến nghị cho máy bay trực thăng (trực thăng Kamov Ka-52 Alligator là một ngoại lệ đáng chú ý).

#### FTL

Chỉ dành cho Tàu vũ trụ. Phi thuyền được trang bị động cơ vận tốc siêu ánh sáng (có thể là hyperdrive, warp drive, bộ tạo lỗ sâu hoặc tương tự). Ổ đĩa FTL có xếp hạng Tốc độ riêng, về cơ bản đo tốc độ mà một tàu vũ trụ có thể vượt qua một parsec (3,26 năm ánh sáng, hoặc 31 nghìn tỷ kilomet hoặc 19 nghìn tỷ dặm), như sau:

##### Bảng Xếp hạng Tốc độ FTL

| Xếp hạng Tốc độ | Hệ số để vượt 1 Parsec |
| :-- | :-: |
| Chậm chạp | 10 |
| Ì ạch | 8 |
| Chậm | 7 |
| Trung bình | 6 |
| Nhẹ nhàng | 5 |
| Vừa phải | 4 |
| Nhanh | 3 |
| Rất nhanh | 2 |
| Nhanh như gió | 1 |

Thời gian hệ số do Người quản trò quyết định, tùy thuộc vào mức độ phát triển FTL của bối cảnh. Ví dụ, hệ số cơ bản có thể là 1 Ngày, có nghĩa là một con tàu có ổ đĩa FTL Chậm chạp mất 10 ngày để hoàn thành hành trình, trong khi một con tàu có ổ đĩa FTL Nhanh như gió hoàn thành chuyến đi trong 1 ngày. Ở những nơi khác, nơi công nghệ FTL kém hiệu quả đáng kể, thì thời gian hệ số có thể được tính bằng tháng, thay vì ngày.

Giả định rằng con tàu có đủ nhiên liệu để thực hiện chuyến đi trở về, hoặc có phương tiện để tiếp nhiên liệu tại điểm đến.

Giả sử rằng bất kỳ kích thước tàu vũ trụ nào cũng có thể được trang bị ổ đĩa FTL, mặc dù điều này lại phụ thuộc vào bối cảnh.

Các ổ đĩa FTL không thể được kích hoạt trong vòng 1,5 Đơn vị Thiên văn của một ngôi sao (khoảng 225 triệu kilomet, hoặc 270 triệu dặm). Điều này có nghĩa là các con tàu phải sử dụng ổ đĩa dưới ánh sáng để di chuyển đến khoảng cách của Sao Hỏa trước khi kích hoạt hệ thống FTL.

#### Phương tiện mặt đất

Phương tiện có khả năng di chuyển trên mặt đất.

#### Bay lơ lửng

Phương tiện bay lơ lửng trên mặt đất bằng đệm khí hoặc bộ đẩy phản trọng lực.

#### Sang trọng

Phương tiện được thiết kế đặc biệt để chở hành khách ở một cấp độ sang trọng nhất định. Không gian chứa hàng dư thừa được dành cho các phòng nghỉ sang trọng cho hành khách, hồ bơi, bồn tắm nước nóng, phi hành đoàn bổ sung để phục vụ mọi yêu cầu của hành khách, v.v.

#### Đường ray

Phương tiện dựa vào hệ thống đường ray. Các phương tiện có đặc điểm này có thể tự nhiên đạt xếp hạng Tốc độ cao hơn ba bậc so với kích thước vỏ bình thường cho phép, nhưng rõ ràng bị hạn chế di chuyển trên hệ thống đường ray.

#### Kiên cường

Tất cả các hệ thống có thể chịu thêm một đòn đánh nữa so với bình thường được xác định theo Kích thước. Đặc điểm này có thể được cộng dồn — vì vậy Kiên cường 2 cho thấy các hệ thống có thể chịu thêm 2 đòn đánh so với bình thường với chi phí hai điểm Đặc điểm.

#### Chạy trên biển

Phương tiện nổi trên mặt nước.

#### Tàu vũ trụ

Phương tiện được bịt kín chống chân không và che chắn chống bức xạ vũ trụ và có thể, tùy theo thiết kế, có khả năng rời và tái nhập khí quyển, và duy trì bay trong khí quyển.

#### Tàng hình

Chỉ dành cho Máy bay. Phương tiện được thiết kế để tránh bị phát hiện bởi radar và các hệ thống cảm biến tầm xa khác. Các nỗ lực phát hiện phương tiện bằng cảm biến điện tử khó hơn một cấp độ.

#### Lặn

Phương tiện có khả năng lặn dưới bề mặt đại dương đến độ sâu hoạt động bằng Xếp hạng Vỏ x 10 mét. Độ sâu sụp đổ — độ sâu tối đa tuyệt đối mà tàu lặn có thể đạt được mà không bị nghiền nát — là 1,5 lần độ sâu hoạt động của nó.

#### Điều khiển vượt trội

Khả năng điều khiển của phương tiện được đánh giá là Dễ.

#### Bộ thiết bị giám sát

Phương tiện có một máy tính tích hợp, trạm cơ sở truyền thông, bộ thu tín hiệu thiết bị nghe lén và thiết bị để chặn tín hiệu điện thoại thông minh gần đó trong vòng 100 mét.

#### Bền bỉ

Một phương tiện dân sự có đặc điểm này lấy giá trị Vỏ từ cột Quân sự và tự động có Cấu trúc tối đa. Một phương tiện Quân sự có đặc điểm này lấy giá trị Vỏ và Cấu trúc từ hàng kế tiếp bên dưới.

#### Tia kéo

Chỉ dành cho Tàu vũ trụ. Con tàu được trang bị tia kéo có thể bắt giữ và kéo về phía mình các phương tiện có xếp hạng vỏ thấp hơn hai bậc so với của nó. Do đó, một tàu vũ trụ Khổng lồ có thể thu hút và giữ một vỏ có kích thước tối đa là Trung bình.

#### VTOL

Cất hạ cánh thẳng đứng. Đặc điểm này vốn có ở máy bay trực thăng và các phương tiện tương tự sử dụng sự kết hợp của các cánh quạt để tạo lực nâng. Khi áp dụng cho máy bay cánh cố định, nó chỉ ra việc sử dụng các động cơ đẩy cố định hoặc có thể căn chỉnh để kiểm soát thái độ trên không, cất cánh và hạ cánh.

#### Chạy trên mặt nước

Phương tiện tự đẩy bằng chân khớp nối. Các phương tiện chân đốt bị giới hạn ở Tốc độ Nhẹ nhàng, bất kể Kích thước. Tuy nhiên, các phương tiện chân đốt có thể được chế tạo với chiều cao mà các phương tiện được trang bị các phương tiện di chuyển khác sẽ không ổn định.

Phương tiện này có khả năng di chuyển dưới nước.

#### Vũ trang

Phương tiện đã được điều chỉnh để chứa vũ khí. Các hệ thống vũ khí được thảo luận dưới đây trong phần [Vũ khí](0006_Vehicles.md?id=weapons).

---
## Vũ khí

Thông thường, chỉ các vỏ quân sự mới được thiết kế để chứa vũ khí (điểm gắn vũ khí, kho chứa đạn, hệ thống điều khiển). Đặc điểm 'Vũ trang' có thể được sử dụng cho các phương tiện dân sự có thể có yêu cầu về vũ khí.

Số lượng hệ thống vũ khí tối đa mà một phương tiện có thể hỗ trợ bằng 1/10 Điểm Cấu trúc của nó (ví dụ: một phương tiện có 40 Cấu trúc có thể hỗ trợ 4 hệ thống vũ khí, nếu là phương tiện quân sự, hoặc phương tiện dân sự có đặc điểm Vũ trang).

Các hệ thống vũ khí phụ thuộc vào Kích thước của phương tiện. Loại hệ thống vũ khí tối đa cho các Kích thước khác nhau được hiển thị trong các bảng dưới đây.

##### Bảng Vũ khí theo Kích thước

| Kích thước | Mặt đất | Tàu vũ trụ |
| :-- | :-- | :-- |
| Nhỏ | Vũ khí nhẹ (ví dụ: Súng trường tấn công) | Vũ khí trung bình (ví dụ: Súng máy, Súng phóng rocket) |
| Trung bình | Vũ khí trung bình (ví dụ: Súng máy, Súng phóng rocket) | Vũ khí lắp tháp/Hạng nặng (ví dụ: Súng máy hạng nặng liên kết, Súng Minigun) |
| Lớn | Vũ khí lắp tháp/Hạng nặng (ví dụ: Súng máy hạng nặng liên kết, Súng Minigun) | Tổ hợp vũ khí (ví dụ: Pháo binh chiến trường) |
| Khổng lồ | Tổ hợp vũ khí (ví dụ: Pháo binh chiến trường) | Vũ khí tiên tiến (ví dụ: Hệ thống tên lửa) |
| Cực lớn | Vũ khí tiên tiến (ví dụ: Hệ thống tên lửa) | Vũ khí gắn dọc thân (chỉ một) |
| Khổng lồ tối cao | N/A | Vũ khí gắn dọc thân (tối đa 3) |

##### Thống kê Vũ khí Mẫu

| Vũ khí | Sát thương | Tầm bắn | Tốc độ bắn | Đạn/Tải |
| :-- | :-: | :-: | :-: | :-: |
| Pháo 50 inch | 3d6+3 | 1000/2000/6500 | 1/10/50 | 1/5 |
| Súng Minigun/Gatling | 3d6 | 300/1000/2000 | -/20/100 | 200/4 |
| Rocket | 5d6 | 5000/20km/60km | 1 | 1/5 |
| Tên lửa/Ngư lôi trung bình | 6d10 | Tầm bắn tối đa 200km | 1 | 1/5 |
| Tên lửa lớn/Hành trình | 6d10+10 | Tầm bắn tối đa 1000km | 1 | 1/10 |
| Pháo Laser/Plasma | 4d6 | 300/1000/2000 | -/5/25 | 500/5 |
| Pháo Laser/Plasma hạng nặng | 5d6 | 1000/3000/6000 | -/5/25 | 300/5 |
| Pháo binh | 5d6+6 | Tầm bắn tối đa 50km | 1 | 1/5 |
| Pháo gắn dọc thân | 10d6+6 | Tầm bắn tối đa 20000km | 1 | 1/10 |

_Tầm bắn được tính bằng mét và kilomet._

_Tốc độ bắn dành cho bắn đơn, bán tự động và tự động hoàn toàn._

_Đạn là khả năng bắn trước khi cần nạp lại. Tải là thời gian nạp lại tính bằng Vòng đấu, giả sử có đủ phi hành đoàn._

---
## Điều khiển và Cơ động

Các thao tác né tránh hoặc đột ngột yêu cầu một lần kiểm tra Lái/Phi công thành công để đảm bảo người lái hoặc phi công duy trì kiểm soát phương tiện. Hầu hết các phương tiện được thiết kế và chế tạo để chịu được những căng thẳng và áp lực không thường xuyên, nhưng Người quản trò có thể quyết định rằng một thao tác cụ thể yêu cầu kiểm tra ở cấp độ khó cao hơn, tùy thuộc vào mức độ tham vọng của thao tác đó. Thất bại có nghĩa là mất kiểm soát phương tiện: hãy lăn xúc xắc trên bảng Mất Kiểm Soát.

Lưu ý rằng Bảng Mất Kiểm Soát chỉ áp dụng cho các phương tiện mặt đất. Các hiệu ứng tương tự có thể áp dụng cho các phương tiện trên không và trong không gian, nhưng Người quản trò sẽ cần điều chỉnh lý do cho hiệu ứng cụ thể. Ví dụ, một máy bay, thay vì bị trượt, có thể xoay tròn.

Ngoài ra, khả năng điều khiển vốn có của phương tiện có thể có tác động bổ sung đến lần kiểm tra Lái. Khả năng điều khiển có thể là Dễ, Tiêu chuẩn, Khó, Đáng gờm hoặc Khó khăn tối đa và xác định điểm xuất phát cho lần kiểm tra Lái khi thực hiện một thao tác. Cấp độ khó cho thao tác sau đó được áp dụng cho khả năng điều khiển để xác định độ khó cuối cùng.

Ví dụ, một chiếc mô tô hiệu suất cao có hệ thống ổn định con quay tích hợp, mang lại khả năng điều khiển Dễ. Người lái muốn thực hiện một cú trượt quay 180 độ để tránh người truy đuổi, một thao tác mà Người quản trò đánh giá là khó hơn một cấp độ. Do đó, người lái phải thực hiện lần kiểm tra Lái ở mức Tiêu chuẩn thay vì Dễ. Nếu anh ta cố gắng thực hiện cùng thao tác trên một chiếc mô tô không ổn định, lần kiểm tra Lái sẽ ở mức Khó.

Điều khiển vượt trội là một Đặc điểm. Nếu một phương tiện không có đặc điểm này trong mô tả của nó, thì mặc định là điều khiển Tiêu chuẩn cho bất kỳ phương tiện nào có kích thước Lớn trở xuống. Các phương tiện Khổng lồ và Cực lớn vốn dĩ có đặc điểm Điều khiển là Đáng gờm và Khó khăn tối đa, tương ứng, và Người quản trò có quyền quyết định rằng một số thao tác đơn giản là không thể thực hiện được do kích thước của phương tiện.

##### Bảng Mất Kiểm Soát

| 1d100 | Kết quả |
| :-: | :-- |
| 01-25 | Lạng lách. Mất kiểm soát tạm thời. Phương tiện giảm tốc độ 1 bậc trong 5 giây. |
| 26-40 | Trượt. Người lái phải cố gắng giữ phương tiện trong tầm kiểm soát. Phương tiện giảm tốc độ 2 bậc trong 10 giây. |
| 41-50 | Trượt nghiêm trọng. Phương tiện quay ngược hướng và dừng lại trong 15 giây. |
| 51-60 | Lật. Phương tiện trượt và lật, chịu 3d10 sát thương Cấu trúc. Người ngồi trong xe phải thực hiện lần kiểm tra Sức bền thành công hoặc chịu 1d10 sát thương vào 1d3 Vị trí trúng đòn. |
| 61-70 | Lật nghiêm trọng. Như trên, nhưng phương tiện chịu 3d10+10 sát thương và Người ngồi trong xe nhận 1d10 sát thương ngay cả khi kiểm tra Sức bền thành công, và 2d10 nếu thất bại. |
| 71-80 | Hư hại toàn phần. Như trên nhưng phương tiện bị giảm xuống 0 Cấu trúc. Người ngồi trong xe chịu sát thương tương tự như Lật nghiêm trọng. |
| 81-90 | Nổ. Như trên nhưng hệ thống nhiên liệu của phương tiện bốc cháy và nổ trong vòng 1d20+10 giây. Nếu không thể thoát ra, người ngồi trong xe chịu thêm 1d6 sát thương bỏng vào 1d6 vị trí. |
| 91-98 | Nổ tức thì. Như trên nhưng vụ nổ xảy ra ngay lập tức. |
| 99-00 | Va chạm thảm khốc. Người ngồi trong xe phải thành công trong lần kiểm tra Sức bền hoặc bị giết ngay lập tức. Sát thương như Hư hại toàn phần được gây ra bất kể. |

---
## Phương tiện mẫu

---

### Phương tiện mặt đất

#### Xe đánh chặn

Một chiếc xe hạng sang, xe thể thao hoặc tương tự, được nâng cấp, chiếc xe này được chế tạo để chạy nhanh và đáp trả tốt trong trận chiến. Đây là loại xe mà mọi người nghĩ đến khi ai đó nói "xe gián điệp".

| Xe đánh chặn | |
| :- | :- |
| **Kích thước / Loại** | Quân sự Trung bình |
| **Vỏ** | 6 |
| **Cấu trúc** | 40 |
| **Hệ thống** | 2 |
| **Tốc độ** | Rất nhanh |
| **Điều khiển** | Dễ |
| **Đặc điểm** | [Ghế phóng](0006_Vehicles.md?id=ejector-seat), [Hiệu suất nâng cao](0006_Vehicles.md?id=enhanced-performance), [Điều khiển vượt trội](0006_Vehicles.md?id=superior-handling), [Bộ thiết bị giám sát](0006_Vehicles.md?id=surveillance-suite), [Vũ trang](0006_Vehicles.md?id=weaponized) |
| **Vũ khí** | Bộ phun dầu trơn, Bộ phun khói, Súng máy hạng trung nòng đôi (2d6+3) |

<br>

---

#### Xe mô tô truy đuổi

Một chiếc mô tô nhẹ, tốc độ cao dành cho các cuộc truy đuổi nhanh, Xe mô tô truy đuổi mang một bất ngờ – một cặp súng máy liên kết hoặc hai tên lửa.

| Xe mô tô truy đuổi | |
| :- | :- |
| **Kích thước / Loại** | Dân sự Nhỏ |
| **Vỏ** | 2 |
| **Cấu trúc** | 12 |
| **Hệ thống** | 1 |
| **Tốc độ** | Rất nhanh |
| **Điều khiển** | Dễ |
| **Đặc điểm** | [Điều khiển vượt trội](0006_Vehicles.md?id=superior-handling), [Vũ trang](0006_Vehicles.md?id=weaponized) |
| **Vũ khí** | Hai tên lửa (4d6) hoặc Súng máy hạng nhẹ nòng đôi (2d6) |

<br>

---

#### Xe Sedan

Một chiếc sedan 4 cửa tiêu chuẩn có đủ không gian để chở thoải mái một người lái và ba hành khách. Hy sinh không gian chứa hàng để tích hợp bộ thiết bị giám sát.

| Xe Sedan | |
| :- | :- |
| **Kích thước / Loại** | Dân sự Trung bình |
| **Vỏ** | 4 |
| **Cấu trúc** | 25 |
| **Hệ thống** | 2 |
| **Tốc độ** | Nhanh |
| **Điều khiển** | Tiêu chuẩn |
| **Đặc điểm** | [Không gây chú ý](0006_Vehicles.md?id=unobtrusive), [Bộ thiết bị giám sát](0006_Vehicles.md?id=surveillance-suite) |
| **Vũ khí** | Không có |

<br>

---

#### Xe ô tô lặn

Một chiếc xe hai người có thể chuyển sang chế độ chạy trên mặt nước hoặc lặn để di chuyển trên hoặc dưới nước. Đi kèm với một ngư lôi gắn phía trước và một tên lửa đất đối không gắn phía trên.

| Xe ô tô lặn | |
| :- | :- |
| **Kích thước / Loại** | Dân sự Trung bình |
| **Vỏ** | 6 |
| **Cấu trúc** | 25 |
| **Hệ thống** | 2 |
| **Tốc độ** | Rất nhanh |
| **Điều khiển** | Tiêu chuẩn |
| **Đặc điểm** | [Hiệu suất nâng cao](0006_Vehicles.md?id=enhanced-performance), [Lặn](0006_Vehicles.md?id=submersible), [Chạy trên mặt nước](0006_Vehicles.md?id=waterborne), [Vũ trang](0006_Vehicles.md?id=weaponized) |
| **Vũ khí** | Rocket (5d6), Ngư lôi (4d10) |

<br>

---

#### Xe tải giám sát

Một chiếc xe tải trơn, không dấu hiệu, chứa một đội đặc vụ và bộ thiết bị ghi hình âm thanh-hình ảnh.

| Xe tải giám sát | |
| :- | :- |
| **Kích thước / Loại** | Dân sự Lớn |
| **Vỏ** | 9 |
| **Cấu trúc** | 60 |
| **Hệ thống** | 3 |
| **Tốc độ** | Nhẹ nhàng |
| **Điều khiển** | Tiêu chuẩn |
| **Đặc điểm** | [Bộ thiết bị giám sát](0006_Vehicles.md?id=surveillance-suite), [Bền bỉ](0006_Vehicles.md?id=tough) |
| **Vũ khí** | Không có |

<br>

---

#### Xe hỗ trợ chiến thuật

Một chiếc bán tải hoặc xe jeep có chỗ cho hai người trong cabin và một xạ thủ đứng ở thùng xe phía sau vận hành một khẩu súng máy hạng trung gắn xoay.

| Xe hỗ trợ chiến thuật | |
| :- | :- |
| **Kích thước / Loại** | Dân sự Trung bình |
| **Vỏ** | 6 |
| **Cấu trúc** | 30 |
| **Hệ thống** | 2 |
| **Tốc độ** | Nhanh |
| **Điều khiển** | Tiêu chuẩn |
| **Đặc điểm** | [Mọi địa hình](0006_Vehicles.md?id=all-terrain), [Vũ trang](0006_Vehicles.md?id=weaponized) |
| **Vũ khí** | Súng máy hạng trung gắn kết (2d6) |

<br>

---

### Phương tiện dưới nước

#### Tàu cao tốc

Một chiếc tàu cao tốc điển hình, trang bị bộ thả mìn gắn phía sau.

| Tàu cao tốc | |
| :- | :- |
| **Kích thước / Loại** | Dân sự Trung bình |
| **Vỏ** | 3 |
| **Cấu trúc** | 24 |
| **Hệ thống** | 2 |
| **Tốc độ** | Rất nhanh |
| **Điều khiển** | Tiêu chuẩn |
| **Đặc điểm** | [Hiệu suất nâng cao](0006_Vehicles.md?id=enhanced-performance), [Chạy trên mặt nước](0006_Vehicles.md?id=waterborne), [Vũ trang](0006_Vehicles.md?id=weaponized) |
| **Vũ khí** | Bộ thả mìn (5d6) |

<br>

---

#### Du thuyền

Loại du thuyền sang trọng mà một nhà tài phiệt có thể sở hữu. Khả năng cao được trang bị bộ thiết bị giám sát để bảo vệ khỏi kẻ thù cố gắng gây rối.

| Du thuyền | |
| :- | :- |
| **Kích thước / Loại** | Dân sự Khổng lồ |
| **Vỏ** | 10 |
| **Cấu trúc** | 75 |
| **Hệ thống** | 4 |
| **Tốc độ** | Chậm |
| **Điều khiển** | Đáng gờm |
| **Đặc điểm** | [Sang trọng](0006_Vehicles.md?id=luxurious), [Bộ thiết bị giám sát](0006_Vehicles.md?id=surveillance-suite), [Chạy trên mặt nước](0006_Vehicles.md?id=waterborne) |
| **Vũ khí** | Không có |

<br>

---

### Máy bay/Tàu vũ trụ

#### Khí cầu (Tàu bay dân dụng)

Tương tự như Hindenburg, loại khí cầu xuyên lục địa này (và các loại khác cùng loại) dài 245 mét và yêu cầu phi hành đoàn từ 40 đến 61 người. Nó có thể chở từ 50 đến 72 hành khách trong các phòng nghỉ sang trọng.

| Khí cầu | |
| :- | :- |
| **Kích thước / Loại** | Dân sự Cực lớn |
| **Vỏ** | 10 |
| **Cấu trúc** | 85 |
| **Hệ thống** | 5 |
| **Tốc độ** | Chậm chạp |
| **Điều khiển** | Khó khăn tối đa |
| **Đặc điểm** | [Bay lượn](0006_Vehicles.md?id=airborne), [Sang trọng](0006_Vehicles.md?id=luxurious), [VTOL](0006_Vehicles.md?id=vtol) |
| **Lá chắn** | Không có |
| **Vũ khí** | Không có |

<br>

---

#### Trực thăng tấn công

Trực thăng tấn công truyền thống sử dụng công nghệ giám sát tiên tiến của chúng để chặn tín hiệu điện thoại và internet không dây, và theo dõi cá nhân và phương tiện ngay cả trong bóng tối, thông qua FLIR. Các nỗ lực trốn tránh thiết bị theo dõi thông qua Tàng hình là Đáng gờm.

| Trực thăng tấn công | |
| :- | :- |
| **Kích thước / Loại** | Quân sự Lớn |
| **Vỏ** | 11 |
| **Cấu trúc** | 50 |
| **Hệ thống** | 3 |
| **Tốc độ** | Vừa phải |
| **Điều khiển** | Dễ |
| **Đặc điểm** | [Bay lượn](0006_Vehicles.md?id=airborne), [Hiệu suất nâng cao](0006_Vehicles.md?id=enhanced-performance), [Tàng hình](0006_Vehicles.md?id=stealth), [Điều khiển vượt trội](0006_Vehicles.md?id=superior-handling), [Bộ thiết bị giám sát](0006_Vehicles.md?id=surveillance-suite), [VTOL](0006_Vehicles.md?id=vtol) |
| **Lá chắn** | Không có |
| **Vũ khí** | 1 Súng Gatling (3d6), 4 Tên lửa (5d6) |

<br>

---

#### Tiêm kích đa nhiệm

Chiếc tiêm kích hai chỗ ngồi trên cạn này (tương tự loại De Havilland Mosquito) nổi tiếng về hiệu suất và tính linh hoạt. Khoang chứa bom của nó có thể mang hai quả bom 250 lb. (xem như tên lửa hạng trung với tầm bắn 0) hoặc một ngư lôi.

| Tiêm kích đa nhiệm | |
| :- | :- |
| **Kích thước / Loại** | Quân sự Lớn |
| **Vỏ** | 10 |
| **Cấu trúc** | 45 |
| **Hệ thống** | 3 |
| **Tốc độ** | Vừa phải |
| **Điều khiển** | Tiêu chuẩn |
| **Đặc điểm** | [Bay lượn](0006_Vehicles.md?id=airborne), [Hiệu suất nâng cao](0006_Vehicles.md?id=enhanced-performance) |
| **Lá chắn** | Không có |
| **Vũ khí** | 4 Súng Gatling gắn mũi (4d6+3), 1 khoang chứa bom (6d10 - xem mô tả) |

<br>

---

#### Tàu vận tải liên sao (Vận tải công nghệ cao hạng nhẹ)

Chiếc tàu vận tải hạng nhẹ này yêu cầu phi hành đoàn tối thiểu chỉ hai người, với không gian cho tối đa bốn hành khách bổ sung. Phiên bản tiêu chuẩn được ghi chú ở đây, tuy nhiên nhiều chủ sở hữu sẽ áp dụng các "sửa đổi đặc biệt" của riêng họ như không gian chứa hàng bí mật, Hiệu suất nâng cao, Điều khiển vượt trội, Chống EMP, Tàng hình, v.v.

| Tàu vận tải liên sao | |
| :- | :- |
| **Kích thước / Loại** | Tàu vũ trụ dân sự Trung bình |
| **Vỏ** | 10 |
| **Cấu trúc** | 80 |
| **Hệ thống** | 2 |
| **Tốc độ** | Nhanh (Hệ số Parsec là 3) |
| **Điều khiển** | Tiêu chuẩn |
| **Đặc điểm** | [Bay lượn](0006_Vehicles.md?id=airborne), [Hàng hóa](0006_Vehicles.md?id=cargo), [FTL](0006_Vehicles.md?id=ftl), [Tàu vũ trụ](0006_Vehicles.md?id=space-craft), [VTOL](0006_Vehicles.md?id=vtol) |
| **Lá chắn** | 8 |
| **Vũ khí** | 2x Tháp pháo Laser bốn nòng (5d6) |

<br>

---

#### Đơn vị Liên lạc Tổng hợp (Tàu vũ trụ công nghệ cực cao)

Chiếc tàu vũ trụ công nghệ cực cao này là sự thể hiện vật lý của một Trí tuệ nhân tạo cực kỳ tiên tiến, có dạng một chuỗi các mô-đun được kết nối trường dài hai kilomet. Các mô-đun được dành cho các mục đích riêng biệt và bao gồm các khu dân cư, cơ sở xây dựng, khu vực chứa hàng hóa, chế biến thực phẩm, khu phức hợp giải trí, khoang chứa máy bay, và thậm chí một số đơn vị bí mật mà trí thông minh của tàu hiếm khi, nếu có, thảo luận. Nó không cần phi hành đoàn con người, nhưng có thể hỗ trợ dân số hành khách lên đến 100.000 người một cách dễ dàng. Nhiều hành khách được sinh ra và chết trên Đơn vị Liên lạc: nhiều người là khách tạm thời, đến và đi theo ý muốn.

| Đơn vị Liên lạc Tổng hợp | |
| :- | :- |
| **Kích thước / Loại** | Tàu vũ trụ dân sự Khổng lồ tối cao |
| **Vỏ** | 20 |
| **Cấu trúc** | 10.000 |
| **Hệ thống** | 6 |
| **Tốc độ** | Vừa phải (Hệ số Parsec là 4. Ở cấp độ công nghệ này, một Hệ số bằng 1 giờ) |
| **Điều khiển** | Đáng gờm |
| **Đặc điểm** | [Bay lượn](0006_Vehicles.md?id=airborne), [Hàng hóa](0006_Vehicles.md?id=cargo), [Tàu mẹ](0006_Vehicles.md?id=carrier), [Xây dựng](0006_Vehicles.md?id=construction), [FTL](0006_Vehicles.md?id=ftl), [Sang trọng](0006_Vehicles.md?id=luxurious), [Tàu vũ trụ](0006_Vehicles.md?id=space-craft),[Điều khiển vượt trội](0006_Vehicles.md?id=superior-handling), [Tia kéo](0006_Vehicles.md?id=tractor-beam) |
| **Lá chắn** | 30 |
| **Vũ khí** | Không có gì nó muốn thảo luận |

<br>