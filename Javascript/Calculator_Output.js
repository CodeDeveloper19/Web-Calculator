window.onerror = (() => result.value = "ERROR");

let result = document.getElementById('result');

result.disabled = true;

let first_input = [], secondInput = [];
let output, output2, calculationPressed, answer, newAnswer, isSubtractPressed, isAddPressed, isDecimalPressed, isOperatorPressed;

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
    resetsIsPressedConditions();
    reuseCaclulatedValuesForRemoval();
    removeValuesForDisplay();
    removeValuesForCalculation();
    calculationPressed = false;
}

const resetsIsPressedConditions = () => {
    let length = first_input.length;
    if (first_input[length- 1] == "+"){
        isAddPressed = false;
    } else if (first_input[length- 1] == "-"){
        isSubtractPressed = false;
    } else if (first_input[length- 1] == "."){
        isDecimalPressed = false;
    } else if (first_input[length- 1] == "x"){
        isOperatorPressed = false;
    } else if (first_input[length- 1] == "÷"){
        isOperatorPressed = false;
    }
}

const removeValuesForDisplay = () => {
    first_input.pop();
    output = first_input.join("");
    result.value = output;
}

const removeValuesForCalculation = () => {
    secondInput.pop();
    output2 = secondInput.join("");
}

const reuseCaclulatedValuesForRemoval = () => {
    if (calculationPressed){
        answer = answer.toString();
        newAnswer = answer.split("");
        for (let i = 0, x = newAnswer.length; i < x; i++){
            first_input.push(newAnswer[i]);
            secondInput.push(newAnswer[i]);
        }
    }
}

const reuseCaclulatedValues = () => {
    if (calculationPressed){
        first_input.push(answer);
        secondInput.push(answer);
    }
}

const percentageKeyPressed = () => {
    let tempHold;
    tempHold = output2;
    tempHold = tempHold.toString();
    if (first_input.length > 0 || tempHold.length > 0){
        preventPercentageCalculationWithIncompleteStatement();
    }
}

const preventPercentageCalculationWithIncompleteStatement = () => {
    if ((first_input.includes("x") || first_input.includes("÷") || first_input.includes("-") || first_input.includes("+")) && !isOperatorPressed){
        calculation();
        percentageCalculation();
    } else if ((first_input.includes("x") || first_input.includes("÷") || first_input.includes("-") || first_input.includes("+")) && isOperatorPressed){
        return;
    } else {
        percentageCalculation();
    }
}

const percentageCalculation = () => {
    answer = Number(output2) * 0.01;
    computeResults(answer);
    first_input = [];
    secondInput = [];
}

const addingValuesIntoArray = (a, b) => {
    reuseCaclulatedValues();
    preventOperatorStartingInput(a, b);
}

const preventOperatorStartingInput = (a, b) => {
    if(b == "*" || b == "/"){
        if (first_input.length > 0){
            addValuesIntoArrayAndDisplay(a, b);
            isOperatorPressed = true;
            isDecimalPressed = false;
        } else {
            result.value = "";
        }
    } else if (b == "-" || b == "+" || b == "."){
        preventAddAndSubtractOccurMultiple(a, b);
    } else {
        addValuesIntoArrayAndDisplay(a, b);
        isSubtractPressed = false;
        isAddPressed = false;
        isOperatorPressed = false;
    }
}

const preventAddAndSubtractOccurMultiple = (a, b) => {
    if (b == "-" && !isSubtractPressed && !isAddPressed){
        addValuesIntoArrayAndDisplay(a, b);
        isSubtractPressed = true;
        isOperatorPressed = true;
        isDecimalPressed = false;
    } else if (b == "+" && !isAddPressed && !isSubtractPressed){
        addValuesIntoArrayAndDisplay(a, b);
        isAddPressed = true;
        isOperatorPressed = true;
        isDecimalPressed = false;
<<<<<<< HEAD:Javascript/Calculator_Output.js
    } else if ((b == "." && !isDecimalPressed && !first_input.includes(".")) || (b == "." && !isDecimalPressed && isOperatorPressed) || (b == "." && !isDecimalPressed && !isOperatorPressed)){
=======
    } else if ((b == "." && !isDecimalPressed && !first_input.includes(".")) || (b == "." && !isDecimalPressed && (!isOperatorPressed || isOperatorPressed))){
>>>>>>> 62659ce61946179ad027d41a2f5f738c8d837e99:Calculator_Output.js
        addValuesIntoArrayAndDisplay(a, b);
        isDecimalPressed = true;
    }
}

const addValuesIntoArrayAndDisplay = (a, b) => {
    if (b == "*" && isOperatorPressed){
        return;
    } else if (b == "/" && isOperatorPressed){
        return;
    } else {
        addingValuesForCalculation(b);
        addingValuesForDisplay(a);
        result.value = output;
        calculationPressed = false;
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
    isSubtractPressed = false;
    isAddPressed = false;
    isDecimalPressed = false;
    isOperatorPressed = false;
    calculationPressed = false;
}

const calculation = () => {
    let length = first_input.length;
    if (first_input[length - 1] == "+"){
        return;
    } else if (first_input[length - 1] == "-"){
        return;
    } else if (first_input[length - 1] == "."){
        return;
    } else if (first_input[length - 1] == "x"){
        return;
    } else if (first_input[length - 1] == "÷"){
        return;
    } else {
        clearKeyPressed();
        answer = eval(output2);
        computeResults(answer);
    }
}

const computeResults = (m) => {
    output2 = m;
    output = m;
    result.value = output; 
    calculationPressed = true;
}