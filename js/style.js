// BT1: Tính thuế thu nhập cá nhân
document.getElementById('btnTienThue').onclick = function () {
    // input
    let hoTen = document.getElementById('hoTen').value;
    let tongThuNhapNam = +document.getElementById('tongThuNhap').value;
    let soNguoiPhuthuoc = +document.getElementById('soNguoiPhuThuoc').value;
    let thueSuat = 0;

    let thuNhapChiuThue = tongThuNhapNam - 4e+6 - soNguoiPhuthuoc * 16e+5;
    // Progress
    if (tongThuNhapNam <= 4e+6 + soNguoiPhuthuoc * 16e+5) {
        thuNhapChiuThue = 0;
        alert('Số tiền thu nhập không hợp lệ');
    } else if (thuNhapChiuThue <= 60e+6) {
        thueSuat = 0.05;
    } else if (thuNhapChiuThue > 60e+6 && thuNhapChiuThue <= 120e+6) {
        thueSuat = 0.1;
    } else if (thuNhapChiuThue > 120e+6 && thuNhapChiuThue <= 210e+6) {
        thueSuat = 0.15;
    } else if (thuNhapChiuThue > 210e+6 && thuNhapChiuThue <= 384e+6) {
        thueSuat = 0.2;
    } else if (thuNhapChiuThue > 384e+6 && thuNhapChiuThue <= 624e+6) {
        thueSuat = 0.25;
    } else if (thuNhapChiuThue > 624e+6 && thuNhapChiuThue <= 960e+6) {
        thueSuat = 0.3;
    } else {
        thueSuat = 0.35;
    }


    let thueThuNhapCaNhan = thuNhapChiuThue * thueSuat;
    // Output
    document.getElementById('kqBt1').innerHTML = 'Họ và tên :' + " " + hoTen + " " + ";" + 'Tiền thuế thu nhập cá nhân :' + " " + thueThuNhapCaNhan.toLocaleString() + " " + 'VND';
}
// BT2: TÍNH TIỀN CÁP
function myFunction(){
    let x = document.getElementById('styleService').value;
    
    if(x === "Nha Dan" || x === "X" ){
        
        document.getElementById('soKetNoi').classList.add("d-none");
    } else{
        document.getElementById('soKetNoi').classList.remove("d-none");

    }

}


document.getElementById('btnTienCap').onclick = function () {
    // input

    let loaiDichVu = document.getElementById('styleService').value;
    let maKhachHang = +document.getElementById('maKhachHang').value;
    let soKenhCaoCap = +document.getElementById('soKenhCaoCap').value;
    let soKetNoi = +document.getElementById('soKetNoi').value;
    let sumTienCap = 0;
    
    // Progress
    if (loaiDichVu === "Nha Dan") {
        sumTienCap = 4.5 + 20.5 + 7.5 * soKenhCaoCap;
    }
    if (loaiDichVu === "Doanh nghiep") {

        if (soKetNoi <= 10) {

            sumTienCap = 15 + 75 + 50 * soKenhCaoCap;
        } else {

            sumTienCap = 15 + 75 + (soKetNoi - 10) * 5 + 50 * soKenhCaoCap;

        }






    }
    // output
    document.getElementById('kqBt2').innerHTML = 'Mã khách hàng:' + " " + maKhachHang + ";" + " " + "Tiền cáp:" + " " + sumTienCap.toLocaleString() + "$";




}