// let  i = 10;
// let f = 20.5;
// let b = true;
// let s = "Ha Noi";
// document.write("i =" + i);
// document.write('</br>');
// document.write("f =" + f);
// document.write("</br>")
// document.write("b =" + b);
// document.write("</br>");
// document.write("s =" + s);
//
// let width = 20;
// let height = 10;
// let area = width*height;
// document.write("</br>")
// document.write("Area ="+ area);

inputWidth = prompt("Enter the width")
inputHeight = prompt("Enter the height")
// dùng parseInt chuyển String sang number
let width = parseInt(inputWidth);
let height = parseInt(inputHeight);
let are = width*height;
document.write("The area is: "+ are);
