// This is for making the buttons to display its values when clicked
result = document.getElementById('result');

result.disabled = true;

let first_input = [];
let operator_sign;
let second_input = [];
let output = [];
let output2 = [];
let output_final = [];

let numOfOperatorSignClicked = 0; // Number of times operator signs was clicked
let numOfEqualToClicked = 0; // Number of times equal-to was clicked
let numOfNegativeSignClicked = 0; // Number of times the negative sign is included;
let numOfDecimalSignClicked = 0; // Number of times the decimal point is included;

let allKeyInputs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ".", "c", "equal-to", "add", "subtract", "divide", "multiply", "percentage", "square-root"];

for (let i = 0; i < allKeyInputs.length; i++){
    document.getElementById(allKeyInputs[i]).addEventListener("click", () => {
        if (i >= 0 && i <= 9) {
            numericKeysPressed(i);
        }
        if (i == 10){
            decimalKeyPressed();
        }
        switch (i){
            case 11:
                clearKeyPressed();
                break;

            case 12:
                calculation();
                break;

            case 17:
                percentageKeyPressed();
                break;
            
            case 18:
                squareRootKeyPressed();
                break;
        }
        if (i == 13 || i == 15 || i == 16){
            addMultiplyDivideKeysPressed(i);
        }
        
        if (i == 14){
            subtractKeyPressed();
        }
    })
}

const numericKeysPressed = (i) => {
    console.log(output)
    if (operator_sign){
        second_input.push(allKeyInputs[i]);
        output2 = second_input.join("");
        result.value = output2;
    } else if (!operator_sign && !numOfEqualToClicked){
        first_input.push(allKeyInputs[i]);
        output = first_input.join("");
        result.value = output;
    } else if ((output.toString).length > 0 || output == 5){
        console.log("G")
        first_input.push(allKeyInputs[i]);
        output = first_input.join("");
        result.value = output;
    }
}

const decimalKeyPressed = () => {
    numOfDecimalSignClicked++;
    if (!operator_sign && numOfDecimalSignClicked == 1){
        first_input.push(".");
        output = first_input.join("");
        result.value = output;
    } else if (output.length > 0 && operator_sign && numOfDecimalSignClicked == 1){
        second_input.push(".");
        output2 = second_input.join("");
        result.value = output2;
    }
}

const clearKeyPressed = () => {
    result.value = "";
    operator_sign = undefined;
    numOfOperatorSignClicked = 0; 
    numOfEqualToClicked = 0;
    numOfNegativeSignClicked = 0; 
    numOfDecimalSignClicked = 0;
    first_input = []; 
    second_input = []; 
    output = [];
    output2 = [];
}

const percentageKeyPressed = () => {
    output_final = Number(output) * 0.01;
    second_input = [];
    output = output_final;
    if (output.toString().length > 6 && !Number.isInteger(Number(output))) {
        result.value = Number(output).toPrecision(5); // round-off decimal numbers to fit screen
    } else {
        result.value = output;
    }
}

const squareRootKeyPressed = () => {
    output_final = Math.sqrt(Number(output));
    output = output_final;
    if (output.toString().length > 6 && !Number.isInteger(Number(output))) {
        result.value = Number(output).toPrecision(5); // round-off decimal numbers to fit screen
    } else {
        result.value = output;
    }
}

const addMultiplyDivideKeysPressed = (i) => {
    numOfOperatorSignClicked++;  
    numOfNegativeSignClicked = 0;
    numOfDecimalSignClicked = 0;
    if (numOfOperatorSignClicked > 1 && output2.length){
        calculation2();
        operator_sign = allKeyInputs[i];
    } else if ((output.length == 0)){
        return null;
    } else {
        operator_sign = allKeyInputs[i];
        switch (allKeyInputs[i]){  
            case "multiply":
                if (output.length){
                    result.value = "x";
                }
                break;
        
            case "divide":
                if (output.length){
                    result.value = "÷";
                }
                break;  
            
            case "add":
                if (output.length){
                    result.value = "+";
                }
                break;
        }
    }
}

const subtractKeyPressed = () => {
    numOfNegativeSignClicked++;
    numOfDecimalSignClicked = 0;
    if (output.length == 0 && !operator_sign && numOfNegativeSignClicked == 1){
        first_input.push("-");
        output = first_input.join("");
        result.value = output;
    } else if (output.length > 0 && operator_sign && numOfNegativeSignClicked == 1 && output2.length == 0){
        second_input.push("-");
        output2 = second_input.join("");
        result.value = output2;
    } else if (Number.isInteger(Number(output)) || (Number(output) * 10.0) % 10 != 0){
        numOfOperatorSignClicked++;
        if (numOfOperatorSignClicked > 1 && output2.length){
            calculation2();
            operator_sign = allKeyInputs[i];
        } else {
            operator_sign = allKeyInputs[i];
            switch (allKeyInputs[i]){             
                case "subtract":
                    result.value = "-";
                    break;
            }
        }
    }
}

const reduceLengthOfOutputOnScreen = () => {
    if (output.toString().length > 6 && !Number.isInteger(Number(output))) {
        result.value = Number(output).toPrecision(5); // round-off decimal numbers to fit screen
    } else {
        result.value = output;
    }
}

const perfomCalculation = () => {
    switch (operator_sign){
        case "add":
            output_final = Number(output) + Number(output2);
            break;
    
        case "subtract":
            output_final = Number(output) - Number(output2);
            break;
    
        case "multiply":
            output_final = Number(output) * Number(output2);
            break;
    
        case "divide":
            output_final = Number(output) / Number(output2);
            break;  
    }
    output = output_final;
}

const calculation = () => {
    if (operator_sign && output2){
        perfomCalculation();
        reduceLengthOfOutputOnScreen();
    } 
    else {
        reduceLengthOfOutputOnScreen();
    }
    numOfEqualToClicked = 0;
    numOfNegativeSignClicked = 0;
    numOfDecimalSignClicked = 0;
    first_input = [];
    second_input = []; 
    output2 = [];
    operator_sign = undefined;
    numOfEqualToClicked = 1;
}

const calculation2 = () => {
    if (operator_sign && output2 && output){
        perfomCalculation();
        result.value = output;
    } else {
        result.value = output;
    }
    operator_sign = undefined;
    first_input = [];
    second_input = [];
    output2 = [];
    numOfNegativeSignClicked = 0;
    numOfDecimalSignClicked = 0;
}
