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
window.addEventListener("scroll", (e) => {
    if(scrollY > 20){
        document.getElementById("header").style.backgroundColor = "rgba(75,0,130,70%)";
    }else{
        document.getElementById("header").style.backgroundColor = "rgba(75,0,130)";
    }
})