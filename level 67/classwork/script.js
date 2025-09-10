const previous = document.getElementById("previous");
const next = document.getElementById("next");

let image = document.getElementById("img");

let index = 0

const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];

function showImage(currentIndex) {
    index = currentIndex;
    if(index >= images.length) {
        index = 0;
    }else if(index < 0) {
        index = images.length - 1;
    }
    image.src = images[index];
}


previous.addEventListener("click", function() {
    showImage(index - 1);
})

next.addEventListener("click", function() {
    showImage(index + 1);
})