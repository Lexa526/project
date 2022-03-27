let aButton = document.querySelector(".stepen_result");
aButton.addEventListener("click", (e) => {
  let a = document.querySelector(".a_stepen").value;
  let b = document.querySelector(".b_stepen").value;
  let result = a ** b;
  document.querySelector(".powers-answer").textContent = `= ${result} `;
});
/* Периметр .. */
let bButton = document.querySelector(".p_s_result");
bButton.addEventListener("click", (e) => {
  let a = document.querySelector(".a_p_s").value;
  let result = a * 4;
  document.querySelector(".p_s_a").textContent = `= ${result}`;
});
let cButton = document.querySelector(".p_r_result");
cButton.addEventListener("click", (e) => {
  let a = document.querySelector(".a_p_r").value;
  let b = document.querySelector(".b_p_r").value;

  let result = 2 * (a * 1 + b * 1);
  console.log(a);
  console.log(b);
  console.log(result);
  document.querySelector(".p_r_a").textContent = `= ${result} `;
});
