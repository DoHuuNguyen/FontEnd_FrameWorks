//lấy bằng tag name
let a = document.getElementsByTagName("h1");
console.log(a[0].innerHTML);
console.log(a[1].innerHTML);
// lấy bằng class name
let b = document.getElementsByClassName("test");
console.log(b);
b[0].style.color = "red";

let c = document.getElementsByTagName("h1");
for (let i = 0; i < c.length; i++) {
  if (c[i].innerHTML == "DDDD") {
    c[i].style.color = "blue";
  }
  if (c[i].innerHTML == "FFFF") {
    c[i].style.color = "red";
  }
}
// lấy bằng id
function clickNE() {
  let d = document.getElementById("test").value;
  alert(d);
}
