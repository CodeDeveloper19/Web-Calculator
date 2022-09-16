let result = document.getElementById('result');

result.disabled = true;

let first_input = [], secondInput = [];
let output, output2, calculationPressed, answer, newAnswer;

let allKeyInputs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ".", "c", "equal-to", "+", "-", "/", "*", "%", "back"];

for (let i = 0; i < allKeyInputs.length; i++){
    document.getElementById(allKeyInputs[i]).addEventListener("click", () => {
        if (i >= 0 && i <= 10) {
            addingValuesIntoArray(allKeyInputs[i], allKeyInputs[i]);
        }
        switch (i){
            case 11:
                clearKeyPressed();
                break;
            case 12:
                calculation();
                break;
            case 15:
                addingValuesIntoArray("÷", "/");
                break;
            case 16:
                addingValuesIntoArray("x", "*");
                break;
            case 13:
            case 14:
                addingValuesIntoArray(allKeyInputs[i], allKeyInputs[i]);
                break;
            case 17:
                percentageKeyPressed();
                break;
            case 18:
                remove();
                break;
        }
    })
}

const remove = () => {
    console.log(first_input)
    console.log(secondInput)
    console.log(output)
    console.log(output2)
    console.log(" ")
    reuseCaclulatedValuesForRemoval();
    removeValuesForDisplay();
    removeValuesForCalculation();
    calculationPressed = false;
    console.log(first_input)
    console.log(secondInput)
    console.log(output)
    console.log(output2)
}

const removeValuesForDisplay = () => {
    first_input.pop();
    output = first_input.join("");
    result.value = output;
    console.log("D")
    console.log(first_input)
    console.log(output)
    console.log("D")
}

const removeValuesForCalculation = () => {
    secondInput.pop();
    output2 = secondInput.join("");
}

const reuseCaclulatedValuesForRemoval = () => {
    if (calculationPressed){
        answer = answer.toString();
        newAnswer = answer.split("");
        first_input = newAnswer;
        secondInput = newAnswer;
        console.log("S")
        console.log(first_input)
        console.log(secondInput)
        console.log(output)
        console.log(output2)
        console.log("S")
    }
}

const percentageKeyPressed = () => {
    answer = Number(output2) * 0.01;
    output2 = answer;
    result.value = answer;
    calculationPressed = true;
}

const addingValuesIntoArray = (a, b) => {
    console.log("W")
    console.log(first_input)
    console.log("W")
    reuseCaclulatedValues();
    addingValuesForCalculation(b);
    addingValuesForDisplay(a);
    result.value = output;
}

const reuseCaclulatedValues = () => {
    if (calculationPressed){
        clearKeyPressed();
        first_input.push(answer);
        secondInput.push(answer);
    }
}

const addingValuesForDisplay = (a) => {
    first_input.push(a);
    output = first_input.join("");
}

const addingValuesForCalculation = (b) => {
    secondInput.push(b);
    output2 = secondInput.join("");
}

const clearKeyPressed = () => {
    result.value = "";
    first_input = [];
    secondInput = [];
    calculationPressed = false;
}

window.onerror = (() => result.value = "ERROR")

const calculation = () => {
    clearKeyPressed()
    answer = eval(output2);
    output2 = answer;
    output = answer
    result.value = answer; 
    calculationPressed = true;
}
