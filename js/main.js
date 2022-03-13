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
