let ball = document.getElementById('ball');
document.addEventListener('mousemove', function (e) {
    let x = e.clientX;
    let y = e.clientY;
    ball.style.left = x + "px";
    ball.style.top = y + "px";

});

// 识别图像，鼠标监听到图像时，增加新的css
const img = document.getElementsByTagName('img');
document.addEventListener('mosemove', function () {
    let ball = document.getElementById('ball');
    console.log(ball);

});