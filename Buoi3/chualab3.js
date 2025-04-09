// bài 1
function tinhTong() {
  let x = parseInt(prompt("Nhập vào một số nguyên dương x:")); // Nhập số x từ người dùng
  let sum = 0; // Khởi tạo biến sum để lưu tổng các số chia hết cho 3

  // Duyệt qua các số từ 3 đến x, bước nhảy là 3
  for (let i = 3; i <= x; i += 3) {
      sum += i; // Cộng dồn các số chia hết cho 3 vào biến sum
  }

  alert("Tổng các số chia hết cho 3 là: " + sum); // Hiển thị tổng ra màn hình
}
tinhTong();

//bai2
function soRandom() {
  let userNumber = parseInt(prompt("Nhập vào một số ngẫu nhiên:")); // Nhập số từ người dùng
  let randomNumber = Math.round(Math.random() * 100); // Sinh số ngẫu nhiên từ 0 đến 100 và làm tròn

  // Kiểm tra nếu 2 số trùng nhau
  if (userNumber === randomNumber) {
      alert("Hai số trùng nhau: " + userNumber + " và " + randomNumber); // Thông báo nếu trùng
  } else {
      alert("Hai số không trùng nhau."); // Thông báo nếu không trùng
      let retry = confirm("Bạn có muốn nhập lại không?"); // Hỏi người dùng có muốn nhập lại không
      if (retry) {
          soRandom(); // Nếu chọn "OK", gọi lại hàm để nhập số mới
      }
  }
}

soRandom();
// bài 3
function addNumbers() {
  let num1 = parseInt(prompt("Nhập số thứ nhất:")); // Nhập số thứ nhất từ người dùng
  let num2 = parseInt(prompt("Nhập số thứ hai:")); // Nhập số thứ hai từ người dùng
  
  let confirmCalc = confirm("Bạn có chắc chắn muốn thực hiện phép tính không?"); // Xác nhận hành động
  if (confirmCalc) {
      let result = num1 + num2; // Thực hiện phép cộng
      alert("Kết quả: " + result); // Hiển thị kết quả phép tính
  } else {
      alert("Bạn đã hủy thao tác tính toán."); // Thông báo nếu hủy phép tính
  }
}

addNumbers();



