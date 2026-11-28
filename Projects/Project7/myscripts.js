// Logo rollover images
logo1 = new Image();
logo2 = new Image();

if (document.images) {
    logo1.src = "Images/logo1.jpg";
    logo2.src = "Images/logo2.jpg";
}

// Thumbnail / full-size swap arrays (from Project 6)
var imgArray = new Array(
    'image1lg.jpg',
    'image2lg.jpg',
    'image3lg.jpg',
    'image4lg.jpg'
);

var titleArray = new Array(
    'Couple Biking',
    'Together at Sunset',
    'Motorcycle Couple',
    'Skiing Together'
);

var imgPath = "Images/fullsize/";

function swapImage(imgID) {
    var theImage = document.getElementById('theImage');
    var textDiv = document.getElementById('bottomText');

    theImage.src = imgPath + imgArray[imgID];
    textDiv.innerHTML = titleArray[imgID];
}

function preloadImages() {
    for (var i = 0; i < imgArray.length; i++) {
        var tmpImg = new Image();
        tmpImg.src = imgPath + imgArray[i];
    }
}