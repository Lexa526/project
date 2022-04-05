let stepen = document.querySelector(".stepen_result");
stepen.addEventListener("click", (e) => {
  let a = document.querySelector(".a_stepen").value;
  let b = document.querySelector(".b_stepen").value;
  let c = document.querySelector(".c_stepen").value;
  let result = a ** b;
  if (a != 0 && b != 0) {
    document.querySelector(".c_stepen").value = result
  } else if (a != 0 && c != 0) {
    b = Math.log(c) / Math.log(a)
    document.querySelector(".b_stepen").value = b
  } else if (b!=0 && c!= 0){
    a = Math.pow(c,1/b)
    document.querySelector(".a_stepen").value = a
  }

});
let s_xButton = document.querySelector(".s_x_result")
s_xButton.addEventListener("click", (e) => {
  function x(x) {
    if (x != Math.trunc(x)) {
      return x.toFixed(3) + " (Округлено до 3 чисел после запятой)"
    } else return x
  }
  let a = document.querySelector(".s_x_a").value
  let b = document.querySelector(".s_x_b").value
  let c = document.querySelector(".s_x_c").value
  if (a != 0) {
    if (c == 0 && b != 0) {
      let x1 = 0
      let x2 = -(b / a)
      x1 = x(x1)
      x2 = x(x2)
      document.querySelector(".s_x_x").textContent = `x1 = ${x1}, x2 = ${x2}`
    }
    if (b == 0 && c != 0) {
      if (c < 0) {
        let x1 = Math.sqrt(-(c / a))
        let x2 = -x1
        x1 = x(x1)
        x2 = x(x2)
        document.querySelector(".s_x_x").textContent = `x1 = ${x1}, x2 = ${x2}`
      } else {
        document.querySelector(".s_x_x").textContent = "Нет решений(C > 0)"
      }
    }
    if (b == 0 && c == 0) {
      if (a < 0) {
        let x  = 0
        document.querySelector(".s_x_x").textContent = `x = ${x1}`
      } else {
        document.querySelector(".s_x_x").textContent = "Нет решений(a > 0)"
      }
    }
    if (b != 0 && c != 0) {
      let d = b ** 2 - 4 * a * c
      if (d > 0) {
        let x1 = (-b - Math.sqrt(d)) / (2 * a)
        let x2 = (-b + Math.sqrt(d)) / (2 * a)
        x1 = x(x1)
        x2 = x(x2)
        document.querySelector(".s_x_x").textContent = `D = ${d}, x1 = ${x1}, x2 = ${x2}`
      } else if (d == 0) {
        let x1 = -b / (2 * a)
        x1 = x(x1)
        document.querySelector(".s_x_x").textContent = `D = ${d}, x1 = ${x1}`
      } else {
        document.querySelector(".s_x_x").textContent = "Нет решений (D < 0)"
      }
    }
  } else {
    document.querySelector(".s_x_x").textContent = "Нет решений"
  }
});
let ne_x = document.querySelector(".ne_x_result");
ne_x.addEventListener("click", (e) => {
  let znak = document.querySelector(".ne_x_znak").value
  let a = document.querySelector(".ne_x_a").value
  let b = document.querySelector(".ne_x_b").value
  let c = document.querySelector(".ne_x_c").value
  function x(x) {
    if (x != Math.trunc(x)) {
      return x.toFixed(3) + " (Округлено до 3 чисел после запятой)"
    } else return x
  }
  function xx(x1, x2) {
    x1 = x(x1)
    x2 = x(x2)
    if (a > 0) {
      if (znak == ">") {
        document.querySelector(".ne_x_x").textContent = `x = (-∞;${x1}]U[${x2};+∞)`
      } else if (znak == "<") {
        document.querySelector(".ne_x_x").textContent = `x = (${x1};${x2})`
      } else if (znak == ">=") {
        document.querySelector(".ne_x_x").textContent = `x = (-∞;${x1}]U[${x2};+∞)`
      } else if (znak == "<=") {
        document.querySelector(".ne_x_x").textContent = `x = [${x1};${x2}]`
      }
    } else if (a < 0) {
      if (znak == ">") {
        document.querySelector(".ne_x_x").textContent = `x = (${x1};${x2})`
      } else if (znak == "<") {
        document.querySelector(".ne_x_x").textContent = `x = (-∞;${x1}]U[${x2};+∞)`
      } else if (znak == ">=") {
        document.querySelector(".ne_x_x").textContent = `x = [${x1};${x2}]`
      } else if (znak == "<=") {
        document.querySelector(".ne_x_x").textContent = `x = [-∞;${x1}]U[${x2};+∞]`
      }
    }
  }
  function noamwser() {
    if (znak == ">") {
      document.querySelector(".ne_x_x").textContent = `x = (-∞;+∞)`
    } else if (znak == "<") {
      document.querySelector(".ne_x_x").textContent = `x = ∅`
    } else if (znak == ">=") {
      document.querySelector(".ne_x_x").textContent = `x = (-∞;+∞)`
    } else if (znak == "<=") {
      document.querySelector(".ne_x_x").textContent = `x = ∅`
    }else if (a < 0) {
    if (znak == ">") {
      document.querySelector(".ne_x_x").textContent = `x = ∅`
    } else if (znak == "<") {
      document.querySelector(".ne_x_x").textContent = `x = (-∞;+∞)`
    } else if (znak == ">=") {
      document.querySelector(".ne_x_x").textContent = `x = ∅`
    } else if (znak == "<=") {
      document.querySelector(".ne_x_x").textContent = `x = (-∞;+∞)`
    }
  }
}
  if (a != 0) {
  if (c == 0 && b != 0) {
    let x1 = 0
    let x2 = -(b / a)
    xx(x1, x2)
  }
}
if (b == 0 && c != 0) {
  if (c < 0) {
    let x1 = Math.sqrt(-(c / a))
    let x2 = -x1
    xx(x1, x2)
  }
}
if (b == 0 && c == 0) {
  if (a < 0) {
    let x = 0
    if (a > 0) {
      if (znak == ">") {
        document.querySelector(".ne_x_x").textContent = `x = (-∞;${x1})U(${x1};+∞)`
      } else if (znak == "<") {
        document.querySelector(".ne_x_x").textContent = `x = ∅`
      } else if (znak == ">=") {
        document.querySelector(".ne_x_x").textContent = `x = (-∞;+∞)`
      } else if (znak == "<=") {
        document.querySelector(".ne_x_x").textContent = `x = {${x1}}`
      }
    } else if (a < 0) {
      if (znak == ">") {
        document.querySelector(".ne_x_x").textContent = `x = ∅`
      } else if (znak == "<") {
        document.querySelector(".ne_x_x").textContent = `x = (-∞;${x1})U(${x1};+∞)`
      } else if (znak == ">=") {
        document.querySelector(".ne_x_x").textContent = `x = {${x1}}`
      } else if (znak == "<=") {
        document.querySelector(".ne_x_x").textContent = `x = (-∞;+∞)`
      }
    }
  }
}
if (b != 0 && c != 0) {
  let d = b ** 2 - 4 * a * c
  if (d > 0) {
    let x1 = (-b - Math.sqrt(d)) / (2 * a)
    let x2 = (-b + Math.sqrt(d)) / (2 * a)
    xx(x1, x2)
  } else if (d == 0) {
    let x1 = -b / (2 * a)
    x1 = x(x1)
    if (a > 0) {
      if (znak == ">") {
        document.querySelector(".ne_x_x").textContent = `x = (-∞;${x1})U(${x1};+∞)`
      } else if (znak == "<") {
        document.querySelector(".ne_x_x").textContent = `x = ∅`
      } else if (znak == ">=") {
        document.querySelector(".ne_x_x").textContent = `x = (-∞;+∞)`
      } else if (znak == "<=") {
        document.querySelector(".ne_x_x").textContent = `x = {${x1}}`
      }
    } else if (a < 0) {
      if (znak == ">") {
        document.querySelector(".ne_x_x").textContent = `x = ∅`
      } else if (znak == "<") {
        document.querySelector(".ne_x_x").textContent = `x = (-∞;${x1})U(${x1};+∞)`
      } else if (znak == ">=") {
        document.querySelector(".ne_x_x").textContent = `x = {${x1}}`
      } else if (znak == "<=") {
        document.querySelector(".ne_x_x").textContent = `x = (-∞;+∞)`
      }
    }
  } else if (d < 0) {
    noamwser()
  }
}
});