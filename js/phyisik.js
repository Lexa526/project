let QButton = document.querySelector(".Q_result");
QButton.addEventListener("click", (e) => {
    let c = document.querySelector(".Q_c").value;
    let m = document.querySelector(".Q_m").value;
    let t2 = document.querySelector(".Q_t2").value;
    let t1 = document.querySelector(".Q_t1").value;
    let Q = c * m * (t2 - t1)
    document.querySelector(".Q_Q").textContent = `= ${Q} `;
});
let AButton = document.querySelector(".A_result");
AButton.addEventListener("click", (e) => {
    let U = document.querySelector(".A_U").value;
    let I = document.querySelector(".A_I").value;
    let t = document.querySelector(".A_t").value;
    let A = U * I * t
    document.querySelector(".A_A").textContent = `= ${A} `;
});
let PButton = document.querySelector(".P_result");
PButton.addEventListener("click", (e) => {
    let U = document.querySelector(".P_U").value;
    let I = document.querySelector(".P_I").value;
    let P = U * I
    document.querySelector(".P_P").textContent = `= ${P} `;
});