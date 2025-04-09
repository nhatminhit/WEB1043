// có 3 loại hàm cơ bản
// 1. Hàm ko tham số ko có giá trị trả về
// 2. Hàm có tham số
// 3. Hàm có giá trị trả về
function tinhdiem(){ //khởi tạo function ko tham số
    let a = prompt("Nhập điểm của bạn");
    if(a>8) document.writeln("Bạn được loại giỏi");
    else if(a<8 && a>5) document.writeln("Bạn được loại khá");
    else document.writeln("Bạn được loại trung bình");
}
//tinhdiem(); //gọi hàm
function xinChaoCoThamSo(thamSo1){ // function truyền vào tham số
    document.writeln("Xin chào "+thamSo1);
}
//xinChaoCoThamSo("Poly") //gọi hàm
function kiemTraTuoi(namSinh){ //function truyền tham số và có giá trị trả về
    let namHienTai = new Date().getFullYear(); // lấy năm hiện tại
    console.log(namHienTai);
    if(isNaN(namSinh)) return false;
    else {
        console.log("Nhập đúng năm sinh");
        if(namHienTai-Number(namSinh)>=18){
            return true;
        }
        else {
            return false;
        }
    }
}
let namNhapVao = prompt("Mời nhập vào năm sinh");
let kiemTra= kiemTraTuoi(namNhapVao);
if(kiemTra) {
    console.log("Bạn đã đủ bóc lịch")
} else {
    console.log("Bạn còn non");
}
