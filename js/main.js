let bomb = document.querySelector(".bomb");
bomb.addEventListener("click", (e) => {
    document.body.innerHTML = " ";
});
let clear = document.querySelector(".clear");
clear.addEventListener("click", (e) => {
    for (let i = 0; i < document.getElementsByTagName('input').length; i++) {
        document.getElementsByTagName('input')[i].value = " ";
    }
});
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").style.backgroundColor = "rgba(0,0,0,0.9)";
        if (document.documentElement.scrollTop > 90) {
            document.getElementById("header").style.backgroundColor = "rgba(0,0,0,0.7)";
        }
        if (document.documentElement.scrollTop > 130) {
            document.getElementById("header").style.backgroundColor = "rgba(0,0,0,0.5)";
        }
        if (document.documentElement.scrollTop > 170) {
            document.getElementById("header").style.backgroundColor = "rgba(0,0,0,0.3)";
        }
        if (document.documentElement.scrollTop > 210) {
            document.getElementById("header").style.backgroundColor = "rgba(0,0,0,0.1)";
        }
        if (document.documentElement.scrollTop > 250) {
            document.getElementById("header").style.backgroundColor = "rgba(0,0,0,0)";
        }
    } else {
        document.getElementById("header").style.backgroundColor = "rgba(0,0,0,100)";
    }
}