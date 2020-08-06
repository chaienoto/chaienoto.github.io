const MAX_INDEX_IMAGE = 5
const MIN_INDEX_IMAGE = 0
var currentIndex = 0
var carouselIndicator = document.getElementsByClassName("carouselIndicator");
var imgList = []
for (let index = 0; index <= 5; index++) {
    imgList.push("img/wallpaper0" + index + ".jpg ")
    console.log(imgList[index]);
}
setInterval(function() { nextImg() }, 3000);

function prevImg() {
    carouselIndicator[currentIndex].classList.remove("active")
    currentIndex -= 1
    if (currentIndex < MIN_INDEX_IMAGE) currentIndex = MAX_INDEX_IMAGE
    carouselIndicator[currentIndex].classList.add("active")
    printIMG()
}

function nextImg() {
    carouselIndicator[currentIndex].classList.remove("active")
    currentIndex += 1
    if (currentIndex > MAX_INDEX_IMAGE) currentIndex = MIN_INDEX_IMAGE
    carouselIndicator[currentIndex].classList.add("active")
    printIMG()
}

function printIMG() {
    document.getElementById("img").src = imgList[currentIndex]
    document.getElementById("carouselIndex").innerHTML = currentIndex + 1 + "/" + (MAX_INDEX_IMAGE + 1)
}