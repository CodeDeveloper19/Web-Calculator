// This is for making the buttons to display its values when clicked
result = document.getElementById('result');

result.disabled = true;

let first_input = [];
let main_first = [];
let operator_sign;
let second_input = [];
let output = [];
let output2 = [];
let output_final = [];

let callcount = 0;
let callcounts = 0;

let allKeyInputs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ".", "c", "equal-to", "add", "divide", "multiply", "subtract", "percentage", "square-root"];
let signs = ["+", "÷", "x", "-"]

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
                first_input.splice(0, first_input.length);
                second_input.splice(0, second_input.length);
                callcounts = 0;
                break;

            case 12:
                calculation();
                break;

            case 17:
                output_final = parseInt(output) * 0.01;
                result.value = output_final;
                break;
            
            case 18:
                output_final = Math.sqrt(parseInt(output));
                result.value = output_final;
                break;
        }
        if (i >= 13 && i <= 16){
            callcount++; 
            // callcounts = 1; 
            if (callcount > 1){
                operator_sign = allKeyInputs[i];
                calculation2();
            } else {
                operator_sign = allKeyInputs[i];
                for (let i = 0; i < signs.length; i++){
                    result.value = signs[i]; 
                }
            }
        }
    })
}
/************************************************/

function calculation() {
    callcounts = 1;
    callcount = 0;
        switch (operator_sign){
            case "add":
                output_final = parseInt(output) + parseInt(output2);
                break;
        
            case "subtract":
                output_final = parseInt(output) - parseInt(output2);
                break;
        
            case "multiply":
                output_final = parseInt(output) * parseInt(output2);
                break;
        
            case "divide":
                output_final = parseInt(output) / parseInt(output2);
                break;  
        }

    operator_sign = undefined;
    second_input = [];

    output = output_final;
    result.value = output;

    // if (callcounts){
    //     output = output_final;
    //     result.value = output;
    // } else {
    //     result.value = output_final;
    // }
    
    // console.log (output);
}

function calculation2() {
        switch (operator_sign){
            case "add":
                output_final = parseInt(output) + parseInt(output2);
                break;
        
            case "subtract":
                output_final = parseInt(output) - parseInt(output2);
                break;
        
            case "multiply":
                output_final = parseInt(output) * parseInt(output2);
                break;
        
            case "divide":
                output_final = parseInt(output) / parseInt(output2);
                break;  
}   

    // if (callcounts){
    //     output = output_final;
    //     result.value = output;
    // } else {
    //     result.value = output_final;
    // }

    result.value = output_final;

    operator_sign = undefined;

    second_input = [];
}
