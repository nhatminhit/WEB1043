var a = null, b = null, o = null
function toan_hang(x) {
    if (a === null) {
        a = x;
    } else {
        b = x;
    }
}
function toan_tu(x) {
    o = x;
}
function thuc_hien() {
    let kq;
    switch (o) {
        case '+':
            kq = a + b;
            break;
        case '-':
            kq = a - b;
            break;
        case '*':
            kq = a * b;
            break;
        case '/':
            kq = a / b;
            break;
        default:
            kq = "Toán tử không hợp lệ!";
    }
    alert("Kết quả: " + kq);
    lam_lai();
}
function lam_lai() {
    a = null;
    b = null;
    o = null;
}
