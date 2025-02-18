const student = JSON.parse(localStorage.getItem("user"));
const infoStudentBox = document.querySelector(".student__wrapper")
const LogOut  = document.querySelector(".reset")
const studentShop  = document.querySelector("#shop")

if(student) {
    infoStudentBox.innerHTML =
    `
    <img src="./images/Frame 36614 (1).png" alt="">
    <h2 class="tittle">${student.name}</h2>
    <div class="darajabox"
        <p class="daraja">Darajalar</p>
        <img src="./images/Frame 35476 (1).png" alt="">
    </div>
    <p class="group">${student.group}  ${student.teacher}</p>
    <p class="coin"> <img src="./images/Rectangle 2162 (2).png" alt=""> ${student.coin} <img src="./images/Rectangle 2162 (3).png" alt=""> ${student.hp}</p>

    `
    LogOut.addEventListener("click", () => {
        localStorage.removeItem("user");
        window.location.href = "index.html"
    })
}
