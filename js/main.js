let red = 0
let green = 0
let blue = 0
setInterval(()=>{
    document.querySelector("html").style.background=`rgb(${red},${green},${blue})`
    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
      }
})