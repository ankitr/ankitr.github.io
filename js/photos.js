// TODO(ankitr): make this fully es6 instead of "i tried" es6
//               also stop the ugly modulo stuff and do a good job

const range = (start, end) => Array(end - start + 1).fill().map((_, idx) => start + idx);
const makeSource = (imageNumber) => `ph/${imageNumber}.jpg`;

const preloadImages = (array) => {
    if (!preloadImages.list) {
        preloadImages.list = [];
    }
    var list = preloadImages.list;
    for (var i = 0; i < array.length; i++) {
        var img = new Image();
        img.onload = () => {
            var index = list.indexOf(this);
            if (index !== -1) {
                // remove image from the array once it's loaded
                // for memory consumption reasons
                list.splice(index, 1);
            }
        }
        list.push(img);
        img.src = array[i];
    }
};

const cacheAround = (imageNumber, buffer) => {
   preloadImages(range(imageNumber - buffer, imageNumber + buffer)
           .map((number) => makeSource((number + COUNT) % COUNT)));
};

let currentImage = window.location.hash
                    ? (parseInt(window.location.hash.substring(1)) || 0)
                    : 0;

const changeImage = (index) => {
    currentImage = (currentImage + index + COUNT) % COUNT;
    document.querySelector('img').src = makeSource(currentImage);
    window.history.replaceState(undefined, undefined, `#${currentImage}`);
    cacheAround(currentImage, BUFFER);
};

document.onkeydown = (e) => {
    e = e || window.event;

    if (e.keyCode === 37) {
        changeImage(-1);
        e.preventDefault();
    }
    else if (e.keyCode === 39) {
        changeImage(1);
        e.preventDefault();
    }
};

document.querySelector('.left').onclick = () => changeImage(-1);
document.querySelector('.right').onclick = () => changeImage(1);

changeImage(0);

