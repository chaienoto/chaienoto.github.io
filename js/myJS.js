// example 1

window.onload = function() {
    includeHTML()
    startClock()
    checkformNotVaild()
}
var exam1 = {}
exam1.timeCount = 0
exam1.isNotCompelete = true
exam1.showInput = function() {
    console.log(this.a + " " + this.b + " " + this.c)
}
function checkformNotVaild(){
    
        exam1.a = (document.getElementById("a").value)
        exam1.c = (document.getElementById("c").value)
        exam1.b = (document.getElementById("b").value)
        console.log("vaild: " + exam1.isCompelete + " " + typeof exam1.isCompelete)
        console.log("a: " + exam1.a + " " + typeof exam1.a)
        console.log("b: " + exam1.b + " " + typeof exam1.b)
        console.log("c: " + exam1.c + " " + typeof exam1.c)
        if (exam1.a == null || exam1.b == null || exam1.c == null || exam1.a == "" || exam1.b == "" || exam1.c == ""){
            exam1.isNotCompelete = true
        } else  exam1.isNotCompelete = false
           
    
     document.getElementById("startExample1Btn").disabled = exam1.isNotCompelete

}
function randomInput() {
    document.getElementById("a").value = parseInt(Math.random() * 10 + 1)
    document.getElementById("b").value = parseInt(Math.random() * 10 + 1)
    document.getElementById("c").value = parseInt(Math.random() * 10 + 1)
    document.getElementById("startExample1Btn").disabled = false

}

function startExample1() {
    exam1.a = (document.getElementById("a").value)
    exam1.c = (document.getElementById("c").value)
    exam1.b = (document.getElementById("b").value)
    exam1.showInput()
    if (exam1.a == null || exam1.a == "" || exam1.a == 0) {
        alert("Không được để trống hoặc bằng 0")
    } else {
        exam1.timeCount = exam1.timeCount + 1
        console.log("A fasle")
        exam1.delta = Math.pow(exam1.b, 2) - 4 * exam1.a * exam1.c;
        if ((exam1.delta) < 0) {
            exam1.resultCount = 0
            exam1.message = "phương trình vô nghiệm"
        } else {
            if (exam1.delta == 0) {
                exam1.resultCount = 1
                exam1.x1 = (-exam1.b / (2 * exam1.a))
                exam1.message = "phương trình có nghiệm kép"
            } else {
                exam1.resultCount = 2
                exam1.message = "phương trình có 2 nghiệm"
                exam1.x1 = (-exam1.b + Math.sqrt(exam1.delta)) / (2 * exam1.a)
                exam1.x2 = (-exam1.b - Math.sqrt(exam1.delta)) / (2 * exam1.a)
            }
        }
        showExample1Result()
    }
}

function showExample1Result() {
    
    console.log("delta: " + exam1.delta + typeof exam1.delta)
    console.log("x1: " + exam1.x1 + " " + typeof exam1.x1)
    console.log("timeCount: " + exam1.timeCount + " " + typeof exam1.timeCount)
    switch (exam1.resultCount) {
        case 0:
            hiddenView("none", "none")
            break;
        case 1:
            hiddenView("block", "none")
            break;
        default:
            hiddenView("block", "block")
            break;
    }
    exam1.isNotCompelete = true
    document.getElementById("myForm").reset()
    document.getElementById("startExample1Btn").disabled = exam1.isNotCompelete
}

function hiddenView(s1, s2) {
    document.getElementById("result").innerHTML = exam1.message
    if (s1 == "block") document.getElementById("x1").innerHTML = "x1 = " + exam1.x1
    if (s2 == "block") document.getElementById("x2").innerHTML = "x2 = " + exam1.x2
    document.getElementById("x1").style.display = s1;
    document.getElementById("x2").style.display = s2;
    document.getElementById("timeCount").innerHTML = "Số lần giải: " + exam1.timeCount;
    document.getElementById("example1Input").innerHTML = exam1.a+"x<sup>2</sup> + "+exam1.b+"x + "+exam1.c+" = 0"

}


// example 2
var clock = null

function startClock() {
    clock = setInterval("clockShow()", 1000)
}

function clockShow() {
    var time = new Date()
    document.getElementById("clock").innerHTML = "Bây giờ là : " + time.getDate() + "/" + time.getMonth() + "/" + time.getFullYear() + " - " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()
}

//example3
var student = {}
student.getInfo = function() {
    this.name = prompt("Nhập tên của bạn")
    this.point = prompt("nhập số điểm")
    if (isNaN(this.point) || this.point > 10) alert("Điểm nhập không hợp lệ")
    else student.showInfo()
}
student.showInfo = function() {
    if (this.point >= 5) student.result = "Đậu";
    else student.result = "Trượt mất tiu rồi"
    document.getElementById("name").innerHTML = this.name;
    document.getElementById("point").innerHTML = this.point;
    document.getElementById("exam3Result").innerHTML = this.result;
}

//example4
var myWindown = {}
myWindown.openWindown = function() {
    this.w = window.open("lab4_info.html", "Thông Tin Sinh Viên Thực hiện", "width = 800, height = 800, top = 50,  left = 60")
    this.w.focus()
}
myWindown.closeWindown = function() {
    this.w.close()
}
myWindown.autoMove = function() {
    this.w.focus()
    this.w.moveBy(20, 20)

}
myWindown.print = function() {
    this.w.focus()
    this.w.print()

}
myWindown.moveTo = function() {
    x = prompt("Nhập tọa độ 1")
    y = prompt("Nhập Tọa độ 2")
    this.w.focus()
    if (isNaN(x) || isNaN(y)) alert("Tọa độ không hợp lệ")
    else this.w.moveBy(x, y)

}

// example 5

function fover() {
    document.getElementById("img").src = "./img/img2.jpg";
}

function fout() {
    document.getElementById("img").src = "./img/img1.jpg";
}

function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}