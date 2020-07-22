// example 1
var exam1 = {}
exam1.showInput = function(){
    console.log(this.a + " " + this.b + " " + this.c)
}
function startExample1() {
    exam1.a = (document.getElementById("a").value)
    exam1.c = (document.getElementById("c").value)
    exam1.b = (document.getElementById("b").value)
    exam1.showInput()
    if (exam1.a == null || exam1.a == "" || exam1.a == 0){
        alert("Không được để trống hoặc bằng 0")
    } else{
        console.log("A fasle")
        exam1.delta = Math.pow(exam1.b,2) - 4*exam1.a*exam1.c;
        if((exam1.delta)<0) {
            exam1.resultCount = 0
            exam1.message = "phương trình vô nghiệm"
        }else {
            if(exam1.delta==0) {
                exam1.resultCount = 1
                exam1.x1 = (-exam1.b/(2*exam1.a))
                exam1.message = "phương trình có nghiệm kép"
            }
            else {
                exam1.resultCount = 2
                exam1.message = "phương trình có 2 nghiệm" 
                exam1.x1 = (-exam1.b + Math.sqrt(exam1.delta)) / (2*exam1.a)
                exam1.x2 =(-exam1.b - Math.sqrt(exam1.delta)) / (2*exam1.a)
            }
        }
        showExample1Result()
    }
}
function showExample1Result() {
    console.log("delta: "+ exam1.delta + typeof exam1.delta)
    console.log("x1: "+ exam1.x1 + " " + typeof exam1.x1)
    switch (exam1.resultCount) {
        case 0:
            hiddenView( "none",  "none")
            break;
        case 1:
            hiddenView("block", "none")
            break;
        default:
            hiddenView("block", "block")
            break;
    }
}
function hiddenView(s1, s2){
    document.getElementById("result").innerHTML = exam1.message
    if (s1 == "block") document.getElementById("x1").innerHTML = "x1 = " + exam1.x1
    if (s2 == "block") document.getElementById("x2").innerHTML = "x2 = " + exam1.x2
    document.getElementById("x1").style.display  = s1;
    document.getElementById("x2").style.display  = s2;
}


// example 2
var clock = null
function startClock(){
    clock = setInterval("clockShow()",1000)
}

function clockWork(){
    if (clock != null){
        clearInterval(clock)
        clock = null
        if (confirm("Đồng hồ đã dừng, bạn có muốn khởi động lại không \nBạn có thể tự khởi động lại bằng cách bấm vào nó một lần nữa")) startClock()
    } else startClock()
}

function clockShow(){
    var time = new Date()
    document.getElementById("clock").innerHTML ="Bây giờ là : " + time.getHours() + " : " + time.getMinutes() + " : " + time.getSeconds()
}

//example3
var student = {}
student.getInfo = function(){
    this.name = prompt("Nhập tên của bạn")
    this.point = prompt("nhập số điểm")
    if (isNaN(this.point) || this.point>10  ) alert("Điểm nhập không hợp lệ") 
    else student.showInfo()
}
student.showInfo = function () {
    if (this.point >=5) student.result = "Đậu"; else student.result = "Trượt mất tiu rồi"
    document.getElementById("name").innerHTML = this.name;
    document.getElementById("point").innerHTML = this.point;
    document.getElementById("exam3Result").innerHTML = this.result;
}

//example4
var myWindown = {}
myWindown.openWindown = function(){
    this.w = window.open("lab4_info.html", "Thông Tin Sinh Viên Thực hiện", "width = 800, height = 800, top = 50,  left = 60")
    this.w.focus()
}
myWindown.closeWindown = function(){
    this.w.close()
}
myWindown.autoMove = function(){
    this.w.focus()
    this.w.moveBy(20, 20)
    
}
myWindown.print = function(){
    this.w.focus()
    this.w.print()
    
}
myWindown.moveTo = function(){
    x = prompt("Nhập tọa độ 1")
    y = prompt("Nhập Tọa độ 2") 
    this.w.focus()
    if (isNaN(x) || isNaN(y)) alert("Tọa độ không hợp lệ")
    else this.w.moveBy(x,y)
   
}






 
 





