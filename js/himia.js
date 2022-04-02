let nButton = document.querySelector(".n_result");
nButton.addEventListener("click", (e) => {
    let m = document.querySelector(".n_m").value;
    let M = document.querySelector(".n_M").value;
    let V = document.querySelector(".n_V").value;
    if (m != 0 && M != 0) {
        let n = m / M
        document.querySelector(".n_n").textContent = `= ${n} `;
    } else if (V != 0) {
        let n = V / 22.4
        document.querySelector(".n_n").textContent = `= ${n} `;
    }
});
let mButton = document.querySelector(".m_result");
mButton.addEventListener("click", (e) => {
    let n = document.querySelector(".m_n").value;
    let M = document.querySelector(".m_M").value;
    let m = n * M
    document.querySelector(".m_m").textContent = `= ${m} `;
});
let wButton = document.querySelector(".w_result");
wButton.addEventListener("click", (e) => {
    let A = document.querySelector(".w_A").value;
    let M = document.querySelector(".w_M").value;
    let N = document.querySelector(".w_N").value;
    let w = (A*M)/N
    document.querySelector(".w_w").textContent = `= ${w} `;
});
