var exam1 = {}
exam1.timeCount = 0
exam1.isNotCompelete = true
exam1.showInput = function() {
    console.log(this.a + " " + this.b + " " + this.c)
}
window.onload = function(){
    startClock()
}
function startClock() {
    exam1.clock = setInterval("clockShow()", 1000)
}

function clockShow() {
    var time = new Date()
    document.getElementById("clock").innerHTML = "Bây giờ là : " + time.getDate() + "/" + time.getMonth() + "/" + time.getFullYear() + " - " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()
}

function checkformNotVaild() {
    exam1.a = (document.getElementById("a").value)
    exam1.c = (document.getElementById("c").value)
    exam1.b = (document.getElementById("b").value)
    console.log("vaild: " + exam1.isCompelete + " " + typeof exam1.isCompelete)
    console.log("a: " + exam1.a + " " + typeof exam1.a)
    console.log("b: " + exam1.b + " " + typeof exam1.b)
    console.log("c: " + exam1.c + " " + typeof exam1.c)
    if (exam1.a == null || exam1.b == null || exam1.c == null || exam1.a == "" || exam1.b == "" || exam1.c == "") {
        exam1.isNotCompelete = true
    } else exam1.isNotCompelete = false
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
    document.getElementById("example1Input").innerHTML = exam1.a + "x<sup>2</sup> + " + exam1.b + "x + " + exam1.c + " = 0"

}