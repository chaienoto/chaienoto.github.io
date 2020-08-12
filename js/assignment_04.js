var nameIsValid = false
var stuCodeIsValid = false
var emailIsValid = false
var favarIsvalid = false
var genderIsValid = false
var checkbox = []
var re = /\S+@\S+\.\S+/;

function validationForm() {
    nameIsValid = false
    stuCodeIsValid = false
    emailIsValid = false
    favarIsvalid = false
    genderIsValid = false
    var genderRadio = document.getElementsByName("genderRadio");
    for (let index = 0; index <= genderRadio.length - 1; index++) {
        if (genderRadio[index].checked) genderIsValid = true
    }
    if (isValid("validationName")) nameIsValid = true
    if (isValid("validationStudenCode")) stuCodeIsValid = true
    if (isValid("emailValidation", true)) emailIsValid = true
    var inlineCheckbox = document.getElementsByClassName("inlineCheckbox");
    for (let index = 0; index <= inlineCheckbox.length - 1; index++) {
        if (inlineCheckbox[index].checked) favarIsvalid = true
    }
    if (nameIsValid && stuCodeIsValid && emailIsValid && favarIsvalid && genderIsValid) {
        document.getElementById("genderRadio-feedback").style.display = "none"
        document.getElementById("inlineCheckbox-feedback").style.display = "none"
        alert("Hoàn thành Validation")
    } else {
        if (!genderIsValid) document.getElementById("genderRadio-feedback").style.display = "block"
        if (!favarIsvalid) document.getElementById("inlineCheckbox-feedback").style.display = "block"

    }
}

function isValid(id, email = false) {
    var x = document.getElementById(id)
    var y = document.getElementById(id + "-feedback")
    if (email)
        if (re.test(x.value)) return setValidState(x, y, true)
        else return setValidState(x, y)
    if (x.value == "") return setValidState(x, y)
    else return setValidState(x, y, true)
}

function setValidState(x, y, valid = false) {
    if (valid) {
        y.style.display = "none"
        x.classList.remove("invalid")
        console.log(x.value);
        return true
    }
    x.classList.add("invalid")
    y.style.display = "block"
    console.log(x.value);
    return false
}