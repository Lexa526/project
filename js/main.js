let red = 0
let green = 0
let blue = 0
setInterval(()=>{
    document.querySelector("html").style.background=`rgb(${red},${green},${blue})`
    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
      }
    red = getRandomArbitrary(1,255)
    blue = getRandomArbitrary(1,255)
    green = getRandomArbitrary(1,255)
})