let red = 0
let green = 0
let blue = 0

setInterval(() => {
  if (red <= 255) {
    for (let i = 0; i <= 255; i++) {
      setTimeout(() => {
        red++
        document.querySelector("html").style.background = `rgb(${red},${green},${blue})`
      }, 50*i);
    }
  } else {
    for (let i = 0; i <= 255; i++) {
      
      setTimeout(() => {
        red--
        document.querySelector("html").style.background = `rgb(${red},${green},${blue})`
      }, 50*i);
    }
  }
  if (blue <= 255) {
    for (let i = 0; i <= 255; i++) {
      setTimeout(() => {
        blue++
        document.querySelector("html").style.background = `rgb(${blue},${green},${blue})`
      }, 50*i);
    }
  } else {
    for (let i = 0; i <= 255; i++) {
      
      setTimeout(() => {
        blue--
        document.querySelector("html").style.background = `rgb(${blue},${green},${blue})`
      }, 50*i);
    }
  }
  if (green <= 255) {
    for (let i = 0; i <= 255; i++) {
      setTimeout(() => {
        green++
        document.querySelector("html").style.background = `rgb(${green},${green},${blue})`
      }, 50*i);
    }
  } else {
    for (let i = 0; i <= 255; i++) {
      
      setTimeout(() => {
        green--
        document.querySelector("html").style.background = `rgb(${green},${green},${blue})`
      }, 50*i);
    }
  }
}, 15000)

let aButton = document.querySelector(".stepen_result")
aButton.addEventListener("click", (e) =>{
  let a = document.querySelector(".a_stepen").value 
  let b = document.querySelector(".b_stepen").value 
  let result = a ** b
  document.querySelector(".powers-answer").textContent =`= ${result} `
})
let bButton = document.querySelector(".p_s_result")
bButton.addEventListener("click", (e) =>{
  let a = document.querySelector(".a_p_s").value 
  let result = a * 4
  document.querySelector(".p_s_a").textContent =`= ${result}`
})
let cButton = document.querySelector(".p_r_result")
cButton.addEventListener("click", (e) =>{
  let a = document.querySelector(".a_p_r").value 
  let b = document.querySelector(".b_p_r").value
 
  let result =2 * (a * 1+b * 1)
  console.log(a) 
  console.log(b) 
  console.log(result)
  document.querySelector(".p_r_a").textContent =`= ${result} `
})