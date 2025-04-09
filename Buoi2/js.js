function kiemtraso(){
    let a = prompt("Nhập giá trị của bạn vào đây:");
    if(isNaN(a)==true){ // hàm isNaN là hàm kiểm tra có phải số hay ko
                    // Nếu là số trả ra False, ngược lại trả ra True
        document.writeln("Giá trị bạn nhập vào ko phải số");
    }else{
        document.writeln("Giá trị bạn nhập vào là số");
    }
}