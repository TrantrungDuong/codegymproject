// code ma javascript
// var x = +prompt("nhap vao gia tri x:")
// var y = +prompt("nhap vao gia tri y:")
// var z = x * y;
// document.write(z)
// alert("Ket qua= " + z);
// alert("xin chao")
// var number = +prompt("enter a number: ");
// cac cau lenh lay input dau vao
// 1 dung ham prompt
// 2 thong qua value cua phan tu html input

// let number = document.getElementById("numberNumber");
// console.log("xin chao cac ban");

    /* cac cau lenh output
    1 alert
    2 console.log()
    3 document.write()
    4 thay doi noi dung phan tu html qua innerHTML
     */


//document.write("xin chao cac ban");
//document.getElementById("message").innerHTML = "<h2>xin chao cac ban</h2>";
function result() {
    var x = +document.getElementById("x").value;
    var y = +document.getElementById("y").value;
    var z = x + y;
    document.getElementById("message").innerHTML = "ket qua: " + z
}