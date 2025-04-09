var a = null,b=null,tt = null;
function toanhang(x){
    if(a == null)
        a = x;
    else b = x;
}
function toantu(x){
    tt=x;
}
function thuchien(){
    let kq;
    switch(tt){
        case '+':
            kq = a+b;
            // document.writeln("Giá trị là "+kq);
            break;
        case '-':
            kq = a-b;
            // document.writeln("Giá trị là "+kq);
            break;
        case '*':
            kq = a*b;
            // document.writeln("Giá trị là "+kq);
            break;
        case '*':
            kq = a/b;
            // document.writeln("Giá trị là "+kq);
            break;
        default: 
            // document.writeln(tt+"Không hợp lệ");
            kq="Lỗi";
    }
    document.getElementById("ketqua").value = kq;
}
function lamlai(){
    a = null;
    b = null;
    tt = null;
    document.getElementById("ketqua").value = "";
}