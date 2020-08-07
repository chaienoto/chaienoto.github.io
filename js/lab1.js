function fillInfo() {
    var name = "To Xuan Cuong";
    var code = "PS07744";
    var dob = "07 - 10 - 1998";
    document.getElementById("name").innerHTML = name;
    document.getElementById("code").innerHTML = code;
    document.getElementById("dob").innerHTML = dob;
}
function calculation(){
    var h = 3 ;
    var w = 4 ;
    var v = 2*(h+w) ;
    var s = h*w
    document.getElementById("h").innerHTML = h;
    document.getElementById("w").innerHTML = w;
    document.getElementById("v").innerHTML = v;
    document.getElementById("s").innerHTML = s;
    console.log(h)
    console.log(w)
    console.log(v)
    console.log(s)
}
