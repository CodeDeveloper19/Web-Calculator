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
let callcountss = 0; // Number of times the negative sign is included;
let callcountsss = 0; // Number of times the decimal point is included;

let allKeyInputs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ".", "c", "equal-to", "add", "subtract", "divide", "multiply", "percentage", "square-root"];

for (let i = 0; i < allKeyInputs.length; i++){
    document.getElementById(allKeyInputs[i]).addEventListener("click", () => {
        if (i >= 0 && i <= 9) {
            console.log(output)
            if (operator_sign){
                second_input.push(allKeyInputs[i]);
                output2 = second_input.join("");
                result.value = output2;
            } else if (!operator_sign && !callcounts){
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
        if (i == 10){
            callcountsss++;
            if (!operator_sign && callcountsss == 1){
                first_input.push(".");
                output = first_input.join("");
                result.value = output;
            } else if (output.length > 0 && operator_sign && callcountsss == 1){
                second_input.push(".");
                output2 = second_input.join("");
                result.value = output2;
            }
        }
        switch (i){
            case 11:
                result.value = "";
                first_input = [];
                second_input = [];
                output = [];
                output2 = [];
                operator_sign = undefined;
                callcount = 0;
                callcounts = 0;
                callcountss = 0;
                callcountsss = 0;
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
        if (i == 13 || i == 15 || i == 16){
            callcount++;  
            callcountss = 0;
            callcountsss = 0;
            if (callcount > 1 && output2.length){
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
        
        if (i == 14){
            callcountss++;
            callcountsss = 0;
            if (output.length == 0 && !operator_sign && callcountss == 1){
                first_input.push("-");
                output = first_input.join("");
                result.value = output;
            } else if (output.length > 0 && operator_sign && callcountss == 1 && output2.length == 0){
                second_input.push("-");
                output2 = second_input.join("");
                result.value = output2;
            } else if (Number.isInteger(Number(output)) || (Number(output) * 10.0) % 10 != 0){
                callcount++;
                if (callcount > 1 && output2.length){
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
    })
}

function calculation() {

    callcounts = 1;
    callcount = 0;
    callcountss = 0;
    callcountsss = 0;

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
    output2 = [];
}

function calculation2() {
    if (operator_sign && output2 && output){
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
    } else {
        result.value = output;
    }

    operator_sign = undefined;
    first_input = [];
    second_input = [];
    output2 = [];
    callcountss = 0;
    callcountsss = 0;
}
