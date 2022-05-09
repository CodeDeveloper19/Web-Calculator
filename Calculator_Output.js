// This is for making the buttons to display its values when clicked
result = document.getElementById('result');

result.disabled = true;

let first_input = [];
let operator_sign;
let second_input = [];
let output = [];
let output2 = [];
let output_final = [];

let callcount = 0; // Number of times operator signs was clicked
let callcounts = 0; // Number of times equal-to was clicked

let allKeyInputs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ".", "c", "equal-to", "add", "subtract", "divide", "multiply", "percentage", "square-root"];

for (let i = 0; i < allKeyInputs.length; i++){
    document.getElementById(allKeyInputs[i]).addEventListener("click", () => {
        if (i >= 0 && i <= 10) {
            if (operator_sign){
                second_input.push(allKeyInputs[i]);
                output2 = second_input.join("");
                result.value = output2;
            } else if (!operator_sign && !callcounts){
                first_input.push(allKeyInputs[i]);
                output = first_input.join("");
                result.value = output;
            }
        }
        switch (i){
            case 11:
                result.value = "";
                first_input = [];
                second_input = [];
                output = null;
                output2 = null;
                operator_sign = undefined;
                callcount = 0;
                callcounts = 0;
                break;

            case 12:
                calculation();
                break;

            case 17:
                output_final = Number(output) * 0.01;
                second_input = [];
                output = output_final;
                if (output.toString().length > 6 && !Number.isInteger(Number(output))) {
                    result.value = Number(output).toPrecision(5); // round-off decimal numbers to fit screen
                } else {
                    result.value = output;
                }
                break;
            
            case 18:
                output_final = Math.sqrt(Number(output));
                output = output_final;
                if (output.toString().length > 6 && !Number.isInteger(Number(output))) {
                    result.value = Number(output).toPrecision(5); // round-off decimal numbers to fit screen
                } else {
                    result.value = output;
                }
                break;
        }
        if (i == 15 || i == 16){
            callcount++; 
            if (callcount > 1 && output2.length){
                calculation2();
                operator_sign = allKeyInputs[i];
            } else {
                operator_sign = allKeyInputs[i];
                switch (allKeyInputs[i]){  
                    case "multiply":
                        result.value = "x";
                        break;
                
                    case "divide":
                        result.value = "÷";
                        break;  
                }
            }
        }
        if (i == 13 || i == 14){
            callcount++; 
            if (callcount > 1 && output2.length){
                calculation2();
                operator_sign = allKeyInputs[i];
            } else {
                operator_sign = allKeyInputs[i];
                switch (allKeyInputs[i]){  
                    case "add":
                        result.value = "+";
                        break;
                
                    case "subtract":
                        result.value = "-";
                        break;
                }
            }
        }
    })
}

function calculation() {

    callcounts = 1;
    callcount = 0;

    if (operator_sign && output2){
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
    if (output.toString().length > 6 && !Number.isInteger(Number(output))) {
        result.value = Number(output).toPrecision(5); // round-off decimal numbers to fit screen
    } else {
        result.value = output;
    }
    } 
    else {
        if (output.toString().length > 6 && !Number.isInteger(Number(output))) {
            result.value = Number(output).toPrecision(5); // round-off decimal numbers to fit screen
        } else {
            result.value = output;
        }
    }

    operator_sign = undefined;
    first_input = [];
    second_input = [];
}

function calculation2() {
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
    result.value = output;

    operator_sign = undefined;
    first_input = [];
    second_input = [];
}
