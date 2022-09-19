const lala = document.getElementById("lala")
const calculator = document.getElementById("calculator")
const body = document.body

const changetheme = () => {
    if (lala.classList[1] == "fa-sun") {
        changeBackgroundColorAndImage("fa-sun", "fa-moon", "url(/Background-Images/Argon.png)", "blueviolet", "black");
    } else {
        changeBackgroundColorAndImage("fa-moon", "fa-sun", "url(/Background-Images/Telegram.png)", "lightblue", "white");
    }
}

const changeBackgroundColorAndImage = (a, b, c, d, e) => {
    lala.classList.replace(a, b)
    body.style.backgroundImage = c;
    calculator.style.backgroundColor = d;
    document.getElementById("result").style.color = e;
}
                                                                                                                                                                                                                                                                                                                                       