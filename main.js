const screen = document.querySelector(".screen");
const gen = document.querySelector(".gen");

const GenerateColor = () => {
    const randomColor = Math.random().toString(16).substring(2, 8)
    document.body.style.backgroundColor = "#" + randomColor
    screen.innerHTML = "#" + randomColor;
};
gen.addEventListener("click", GenerateColor);
