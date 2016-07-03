FastClick.attach(document.body);


~function () {
    var winW = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = winW / 320 * 100 + "px";
}();

//初始化Swiper
new Swiper(".swiper-container", {
    loop: 'true',
    direction: 'vertical',
    onSlidePrevEnd: changeEnd,
    onSlideNextEnd: changeEnd
})

function changeEnd(swiper) {
    var n = swiper.activeIndex,
        slideAry = swiper.slides;//->获取当前所有的活动块(获取的结果是一个数组)
    [].forEach.call(slideAry, function (slide, index) {
        console.log(n)
        if (n == 0 || n == 7) {
            slide.id = "page7";
            return
        } else if (n == 1 || n == 8) {
            slide.id = "page1";
            return;
        } else {
            slide.id = "page" + n;
            return;
        }
        slide.id = null;

    });
}

var music = document.getElementById("music"),
    musicAudio = document.getElementById("musicAudio");
window.setTimeout(function () {
    musicAudio.play();
    musicAudio.addEventListener("canplay", function () {

        music.style.display = "block";
        music.className = "music move";
    }, false);
}, 1000);
music.addEventListener("click", function () {

    if (musicAudio.paused) {
        musicAudio.play();
        music.className = "music move";
        return;
    }
    musicAudio.pause();
    music.className = "music";
}, false);


