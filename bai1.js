// Đây là code bài 1
// let a = +prompt("Nhập vào 1 số");
// if (Number(a*a)) {
//     alert("Bình phương là: "+a*a);
// }else {
//     alert("Nhập sai");
// }

// Đây là code bài 2
function tinhDT() {
    let cDai= +document.getElementById('dai').value;
    let cRong= +document.getElementById('rong').value;
    dt = cDai*cRong;
    document.getElementById('dienTich').innerHTML = "Diện tích là: "+ dt;
}

// Đây là code bài 3, phần a
function hinhVuong() {
    let canh = +document.getElementById('a').value;
    chuViHinhVuong = 4*canh;
    dienTichHinhVuong = canh*canh;
    document.getElementById('chuviHV').innerHTML = "Chu vi hình vuông là: " + chuViHinhVuong;
    document.getElementById('dientichHV').innerHTML = "Diện tích hình vuông là: "+dienTichHinhVuong;
}

// Đây là code bài 3, phần b
function tinhtoan() {
    let number1 = +document.getElementById('num1').value;
    let number2 = +document.getElementById('num2').value;
    binhPhuong = number1*number1;
    tich2so = number1*number2;
    document.getElementById('binhphuong').innerHTML = "Bình phương số thứ nhất là: "+binhPhuong;
    document.getElementById('tich2so').innerHTML = "Tích của hai số là: "+tich2so;
}

// Đây là code bài 3, phần c
function tinhTongDaySo() {
    let soDau = +document.getElementById('soDau').value;
    let soCuoi = +document.getElementById('soCuoi').value;
    if (soCuoi >= soDau) {
        soLuong = (soCuoi - soDau) + 1;
    } else {
        soLuong = (soDau - soCuoi) + 1;
    }
    tongDay = (soDau + soCuoi) * soLuong / 2;
    document.getElementById('tongDaySo').innerHTML = "Tổng dãy số là: " + tongDay;
}

// Đây là code bài 3, phần d
function tinhTheKy() {
    let year = +document.getElementById('year').value;
    theKy = (year - (year%100))/100 +1;
    document.getElementById('theKy').innerHTML = "Thế kỷ là: "+theKy;
}

// Đây là code bài 3, phần e
function ktTamGiac() {
    let canh1 = +document.getElementById('canh1').value;
    let canh2 = +document.getElementById('canh2').value;
    let canh3 = +document.getElementById('canh3').value;
    thongBao = document.getElementById('ktraTamGiac');
    if (canh1<=0 || canh2<=0 || canh3<=0){
        thongBao.innerHTML = "Cạnh phải lớn hơn 0";
    } else if ((canh1+canh2)>canh3 && (canh2+canh3)>canh1 && (canh1+canh3)>canh2){
        if (canh1==canh2 || canh1==canh3 || canh2==canh3) {
            if (canh1==canh2 && canh2==canh3 && canh3==canh1) {
                thongBao.innerHTML = "Đây là tam giác đều";
            } else {
                thongBao.innerHTML = "Đây là tam giác cân";
            }
        } else if (canh1*canh1+canh2*canh2 == canh3*canh3 || canh1*canh1+canh3*canh3==canh2*canh2 || canh2*canh2+canh3*canh3==canh1*canh1){
            thongBao.innerHTML = "Đây là tam giác vuông";
        } else {
            thongBao.innerHTML = "Đây là tam giác thường";
        }
    } else {
        thongBao.innerHTML = "Đây không phải ba cạnh của 1 tam giác";
    }
}