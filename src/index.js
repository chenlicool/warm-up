const div = document.querySelector('textAnimation');

//  console.log([...div.textContent]); 将div里的内容转化为数组

([...textAnimation.textContent]).reduce(function (pre, cur, index) {
    pre == index && (textAnimation.innerHTML = "");
    let span = document.createElement('span');
    span.innerHTML = cur;
    textAnimation.appendChild(span);
    span.addEventListener('mouseover', function () {
        this.classList.add('color');
    });
    span.addEventListener('animationend', function () {
        this.classList.remove('color');
    });
}, 0);