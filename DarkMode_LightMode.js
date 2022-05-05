const lala = document.getElementById("lala")
const calculator = document.getElementById("calculator")
const body = document.body

function changetheme(){
    
    if (lala.classList[1] == "fa-sun") {
        lala.classList.replace("fa-sun", "fa-moon")
        body.style.backgroundImage = "url(Argon.jpg)"
        calculator.style.backgroundColor = "blueviolet"
        document.getElementById("result").style.color = "black"
    } else {
        lala.classList.replace("fa-moon", "fa-sun")
        body.style.backgroundImage = "url(Telegram.jpg)"
        calculator.style.backgroundColor = "lightblue"
        document.getElementById("result").style.color = "white"
    }
}
                                                                                                                                                                                                                                                                                                                                       