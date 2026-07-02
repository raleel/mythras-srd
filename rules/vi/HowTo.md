# Các Yêu Cầu Tiên Quyết

1. Hiểu biết cơ bản về [ngôn ngữ markdown](https://www.markdownguide.org/basic-syntax/).

2. Bạn sẽ cần tạo một tài khoản [github](https://github.com/) miễn phí nếu chưa có. Khuyến nghị bạn nên dùng tên RPG của mình vì đây sẽ trở thành một phần của URL mà mọi người sẽ sử dụng để truy cập SRD của bạn.

3. Bạn có thể thực hiện toàn bộ quá trình này thông qua trình duyệt mà không cần biết git. Mặc dù vậy, việc học github desktop sẽ cho phép bạn kiểm tra bất kỳ thay đổi nào cục bộ trước khi triển khai chúng trực tiếp cho mọi người xem.

> Nếu bạn đã đăng ký tên miền, bạn có thể sử dụng quy trình này để tạo một SRD như tôi đã làm https://srd.7thextinctionrpg.com

# Quy Trình

## Tạo Kho Lưu Trữ (Repository) trên Github

1. Đăng nhập vào Github

2. Điều hướng đến mẫu công khai https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Nhấp vào "Use this template" (Sử dụng mẫu này)

![Step3](/_media/Step3.png)

4. Chọn "Create a new repository" (Tạo một kho lưu trữ mới)

5. Nhập tên kho lưu trữ

![Step5](/_media/Step5.png)

6. Chọn 'Private' (Riêng tư)

7. Chọn 'Create repository' (Tạo kho lưu trữ)

Sẽ mất 5-30 giây để sao chép mẫu, sau đó bạn sẽ có bản sao của riêng mình.

8. Đảm bảo rằng bạn có tệp ".nojekyll", đây là một tệp trống cần thiết khi lưu trữ một trang web trên Github, nếu không SRD sẽ không hiển thị đúng cách. *(Cho GitHub Pages biết không chạy các tệp đã xuất bản thông qua Jekyll).*

## Thêm Nội Dung Của Bạn

### Các Tệp *.md

Các tệp .md là tệp markdown, Markdown là một ngôn ngữ đánh dấu nhẹ mà bạn có thể sử dụng để thêm các yếu tố định dạng vào các tài liệu văn bản thuần túy. Tùy thuộc vào kích thước nội dung của bạn, bạn có thể đặt tất cả thông tin trò chơi của mình vào một tệp *.md duy nhất, hoặc như tôi đã làm tại [7thextinctionrpg.com](https://srd.7thextinctionrpg.com), tạo các tệp riêng cho mỗi chương. Tệp "sample.md" cung cấp một số ví dụ về định dạng.

Ngôn ngữ Markdown rất dễ học, hãy sử dụng liên kết được cung cấp ở mục 2 trong phần Các Yêu Cầu Tiên Quyết ở trên để xem danh sách đầy đủ cú pháp.

### _Sidebar.md

Đây là menu của bạn, bảng điều hướng ở phía bên trái của trang web. Sau khi bạn đã thêm một tệp markdown vào kho lưu trữ của mình, bạn cần thêm tệp đó vào đây để nội dung của nó được bao gồm. Hãy làm theo định dạng hiện có.

## Bật Github Pages để biến Kho Lưu Trữ thành một Trang Web

1. Trong kho lưu trữ của bạn, nhấp vào 'Settings' (Cài đặt)

![Website-Step1](/_media/Website-Step1.png)

2. Chọn 'Pages' (Trang) trong menu bên trái

![Website-Step2](/_media/Website-Step2.png)

3. Nếu bạn chưa đặt kho lưu trữ ở chế độ 'public' (công khai), bạn có hai lựa chọn
    a. Đặt kho lưu trữ ở chế độ công khai, điều này sẽ cho phép bạn sử dụng Github Pages để lưu trữ Trang web SRD của mình miễn phí
    b. Nâng cấp tài khoản Github của bạn (tại thời điểm viết bài này, chi phí là 4 đô la mỗi tháng hoặc 48 đô la phí hàng năm)

4. Dưới mục 'Branch' (Nhánh), chọn 'main' và nhấp lưu

5. Đợi 10-20 giây rồi làm mới trang

6. Bây giờ bạn sẽ thấy URL của mình như https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)

## Thay Đổi Phông Chữ

1. Chỉnh sửa tệp /_assets/style.css

2. Trong 'phần body' bạn sẽ tìm thấy siteFont & headingFont

3. Thay đổi các mục này thành phông chữ bạn muốn sử dụng

## Sử dụng plugin Fontawesome và/hoặc Material Icons để hiển thị các biểu tượng miễn phí trong SRD của bạn

### Fontawesome

Sử dụng Fontawesome để nhận các biểu tượng miễn phí và biểu tượng động. Người dùng đăng ký có thể sử dụng biểu tượng Pro.

1. Tìm biểu tượng trên [Fontawesome](https://fontawesome.com/icons)
2. Chọn biểu tượng
3. Trong cửa sổ bật lên, dưới tab HTML, sao chép mọi thứ nằm giữa " "

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Đặt văn bản đã sao chép giữa `:` không có khoảng trắng

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Sử dụng Material Icons để có thêm biểu tượng miễn phí

1. Tìm các biểu tượng trên [Material Icons](https://fonts.google.com/icons)
2. Sao chép và chèn liên kết web span trực tiếp vào các tệp markdown của bạn

```markup
<span class="material-icons">face</span>
```