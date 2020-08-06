var message = ""
var time = new Date()
var name = prompt("Bạn tên là gì ấy nhỉ")
var year = prompt("Không biết bạn sinh năm nào?")

    
window.onload = function(){
    if (time.getHours()>12)
    message = "Xin chào buổi chiều!, "
    else message = "Xin chào buổi sáng!, "
    if (isNaN(year)) {
        var yearIsNotOk = true
        while (yearIsNotOk){
            year = prompt("Vui lòng Nhập số <không lớn hơn 2020>")  
            if (!isNaN(year) && year <=2020) yearIsNotOk = false 
        }
    }
    document.getElementById("name").innerHTML = name;
    document.getElementById("sayHello").innerHTML = message + name
    document.getElementById("year").innerHTML = year;
    document.getElementById("age").innerHTML = ageToNow();
    function ageToNow() {
        return time.getFullYear() - year
    }
}

function startCallculation(){
    var a = document.getElementById("a").value
    var b = document.getElementById("b").value
    var c = document.getElementById("c").value
    console.log(a + " " + b + " " + c)
    var delta= Math.pow(b,2) - 4*a*c;
    if((delta)<0) {
        document.getElementById("result").innerHTML = "phương trình vô nghiệm"
        document.getElementById("x1").style.display  = "none";
        document.getElementById("x2").style.display  = "none";
    }else {
        if(delta==0) {
            document.getElementById("result").innerHTML = "phương trình có nghiệm kép là"
            document.getElementById("x1").innerHTML = "x =" + " " + (-b/(2*a)).toString()
            document.getElementById("x2").style.display  = "none";
        }
        else {
            var x1 = (-b + Math.sqrt(delta)) / (2*a)
            var x2 =(-b - Math.sqrt(delta)) / (2*a)
            document.getElementById("result").innerHTML = "phương trình có 2 nghiệm" 
            document.getElementById("x1").innerHTML = "x1 =" + " " + x1  
            document.getElementById("x2").innerHTML = "x2 =" + " " + x2
        }
    }
}



 
 





