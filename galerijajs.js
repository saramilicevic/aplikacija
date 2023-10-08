var fullImgBox = document.getElementById("fullimgbox");
var fullImg = document.getElementById("fullimg");

function openFullImg(pic) {
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
}
function closeFullImg() {
    fullImgBox.style.display = "none";
}
