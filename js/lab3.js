var message = ""
var time = new Date()
var num1 = prompt("Nhập số thứ nhất: ")
var num2 = prompt("Nhập số thứ hai")
var sign = prompt("Phép toán bạn muốn thực hiên\n Cộng (+), Trừ (-), Nhân (*), Chia (/)")

window.onload = function () {
    if (time.getHours() > 12)
        message = "Xin chào buổi chiều!, "
    else message = "Xin chào buổi sáng!, "
    startExample1(sign, num1, num2)
    
}
function startExample1(sign, num1, num2) {
    var exam1Result
    var issueCheck = false
    if (!isNaN(num1) && !isNaN(num2)) {
        switch (sign) {
            case "+":
                exam1Result = Number(num1) + Number(num2)
                break;
            case "-":
                exam1Result = Number(num1) - Number(num2)
                break;
            case "*":
                exam1Result = Number(num1) * Number(num2)
                break;
            case "/":
                exam1Result = Number(num1) / Number(num2)
                break;
            default:
                issueCheck = true
                break;
        }
        if (issueCheck) document.getElementById("exam1").innerHTML = "Toán tử bạn nhập không phù hợp"
        else document.getElementById("exam1").innerHTML = num1 + " " + sign + " " + num2 + " = " + " " + exam1Result


    } else document.getElementById("exam1").innerHTML = "Chữ Số thứ nhất hoặc hai không phù hợp"

}


function startGenerateFiboArray() {
    var a = (document.getElementById("a").value)
    var b = (document.getElementById("b").value)
    var f0,f1
    if (isNaN(a) || a == "") {
            f0 = 1
            console.log("A true with value = " + a )
    } else {
        f0 = parseInt(a)
        console.log("A false with value = " + a)
    }
    if (isNaN(b) || b =="") {
        f1 = 2
        console.log("B true with value = " + b)
    } else {
        f1 = parseInt(b)
        console.log("B false with value = " + b)
    }
    console.log("f0 = "+f0 + " ,f1 = "+f1 )

    if (f0 > f1) {
        var c = f0;
        f0 = f1
        f1 = c
    }
    var exam2Result = f0 + " " + f1
    var nextNum = f1
    var preNum = f0
    for (i = 0; i < 10; i++) {
        var nextFiboNum = nextNum + preNum
        preNum = nextNum
        nextNum = nextFiboNum
        exam2Result = exam2Result + " " + nextFiboNum
    }

    document.getElementById("exam2").innerHTML = exam2Result
    
}

function fillInfo() {
    inputs_for = document.getElementById("selectBoxWithFor");
    inputs_while = document.getElementById("selectBoxWithWhile");
    inputs_doWhile = document.getElementById("selectBoxWithDoWhile");
    var selFor = document.createElement('select')
    var selWhile = document.createElement('select')
    var selDoWhile = document.createElement('select')
    var month = 1
    var year = 1970
    document.getElementById("selectBoxWithFor").select = "true";
    console.log("i'm here")
    for (i = 1; i<=31; i++){
        selFor.appendChild(new Option(i,'option'))
        selFor.setAttribute("class", "select-selected");
        
        selFor.selectedIndex = 7-1;
        inputs_for.appendChild(selFor)
    }

    while (month <= 12){
        selWhile.appendChild(new Option(month,'option'))
        selWhile.setAttribute("class", "select-selected");
        
        selWhile.selectedIndex = 10-1;
        inputs_while.appendChild(selWhile)
        month++
    }
   
    do {
        selDoWhile.appendChild(new Option(year,'option'))
        selDoWhile.setAttribute("class", "select-selected");
        selDoWhile.selectedIndex = 1998 - 1970
        inputs_doWhile.appendChild(selDoWhile)
        year++
    } while(year <= time.getFullYear()  )


}









