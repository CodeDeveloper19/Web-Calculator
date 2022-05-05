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


function displaybuttons4(){
    if (operator_sign == "add" || operator_sign == "subtract" || operator_sign == "multiply" || operator_sign == "divide" || operator_sign == "percent" || operator_sign == "square-root"){
        second_input.push("7");
        output2 = second_input.join("");
        result.value = output2;
    } else {
        first_input.push("7");
        output = first_input.join("");
        result.value = output;
    }
}
function displaybuttons5(){
    if (operator_sign == "add" || operator_sign == "subtract" || operator_sign == "multiply" || operator_sign == "divide" || operator_sign == "percent" || operator_sign == "square-root"){
        second_input.push("8");
        output2 = second_input.join("");
        result.value = output2;
    } else {
        first_input.push("8");
        output = first_input.join("");
        result.value = output;
    }
}
function displaybuttons6(){
    if (operator_sign == "add" || operator_sign == "subtract" || operator_sign == "multiply" || operator_sign == "divide" || operator_sign == "percent" || operator_sign == "square-root"){
        second_input.push("9");
        output2 = second_input.join("");
        result.value = output2;
    } else {
        first_input.push("9");
        output = first_input.join("");
        result.value = output;
    }
}
function displaybuttons8(){
    if (operator_sign == "add" || operator_sign == "subtract" || operator_sign == "multiply" || operator_sign == "divide" || operator_sign == "percent" || operator_sign == "square-root"){
        second_input.push("4");
        output2 = second_input.join("");
        result.value = output2;
    } else {
        first_input.push("4");
        output = first_input.join("");
        result.value = output;
    }
}
function displaybuttons9(){
    if (operator_sign == "add" || operator_sign == "subtract" || operator_sign == "multiply" || operator_sign == "divide" || operator_sign == "percent" || operator_sign == "square-root"){
        second_input.push("5");
        output2 = second_input.join("");
        result.value = output2;
    } else {
        first_input.push("5");
        output = first_input.join("");
        result.value = output;
    }
}
function displaybuttons10(){
    if (operator_sign == "add" || operator_sign == "subtract" || operator_sign == "multiply" || operator_sign == "divide" || operator_sign == "percent" || operator_sign == "square-root"){
        second_input.push("6");
        output2 = second_input.join("");
        result.value = output2;
    } else {
        first_input.push("6");
        output = first_input.join("");
        result.value = output;
    }
}
function displaybuttons12(){
    if (operator_sign == "add" || operator_sign == "subtract" || operator_sign == "multiply" || operator_sign == "divide" || operator_sign == "percent" || operator_sign == "square-root"){
        second_input.push("1");
        output2 = second_input.join("");
        result.value = output2;
    } else {
        first_input.push("1");
        output = first_input.join("");
        result.value = output;
    }
}
function displaybuttons13(){
    if (operator_sign == "add" || operator_sign == "subtract" || operator_sign == "multiply" || operator_sign == "divide" || operator_sign == "percent" || operator_sign == "square-root"){
        second_input.push("2");
        output2 = second_input.join("");
        result.value = output2;
    } else {
        first_input.push("2");
        output = first_input.join("");
        result.value = output;
    }
}
function displaybuttons14(){
    if (operator_sign == "add" || operator_sign == "subtract" || operator_sign == "multiply" || operator_sign == "divide" || operator_sign == "percent" || operator_sign == "square-root"){
        second_input.push("3");
        output2 = second_input.join("");
        result.value = output2;
    } else {
        first_input.push("3");
        output = first_input.join("");
        result.value = output;
    }
}
function displaybuttons15(){
    if (operator_sign == "add" || operator_sign == "subtract" || operator_sign == "multiply" || operator_sign == "divide" || operator_sign == "percent" || operator_sign == "square-root"){
        second_input.push(".");
        output2 = second_input.join("");
        result.value = output2;
    } else {
        first_input.push(".");
        output = first_input.join("");
        result.value = output;
    }
}
function displaybuttons16(){
    if (operator_sign == "add" || operator_sign == "subtract" || operator_sign == "multiply" || operator_sign == "divide" || operator_sign == "percent" || operator_sign == "square-root"){
        second_input.push("0");
        output2 = second_input.join("");
        result.value = output2;
    } else {
        first_input.push("0");
        output = first_input.join("");
        result.value = output;
    }
}



// This is where the operators will go to
function displaybuttons17(){
    callcount += 1;
    if (callcount > 1){
        calculation2();
        operator_sign = "add";
    } else {
        operator_sign = "add";
        result.value = "+";
    }
}
function displaybuttons1(){
    callcount += 1;  
    if (callcount > 1){
        calculation2();
        operator_sign = "divide";
    } else {
        operator_sign = "divide";
        result.value = "÷"; 
    }


}
function displaybuttons11(){
    callcount += 1;
    if (callcount > 1){
        calculation2();
        operator_sign = "subtract";
    } else {
        operator_sign = "subtract";
        result.value = "-";
    }
 
}
function displaybuttons3(){
    callcount += 1;
    if (callcount > 1){
        calculation2();
        operator_sign = "multiply";
    } else {
        operator_sign = "multiply";
        result.value = "x";
    }

}
function displaybuttons2(){
    callcount += 1;
    if (callcount > 1){
        calculation2();
        operator_sign = "percent";
    } else {
        operator_sign = "percent";
        result.value = "%";
        percentage();
    }

}
/************************************************/

function calculation() {

    callcounts += 1;
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
    console.log (output);
    console.log (callcounts);

    if (callcounts >=1){
        output = output_final;
        result.value = output;
    } else {
        result.value = output_final;
    }
    
    console.log (output);
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
    operator_sign = undefined;
    console.log (output);

    second_input = [];
    console.log (output2);
}

function percentage(){
    output_final = parseInt(output) * 0.01;
    result.value = output_final;
}

function squareRoot(){
    output_final = Math.sqrt(parseInt(output));
    result.value = output_final;
}

function clearscreen(){
    result.value = "";
    first_input.splice(0, first_input.length);
    second_input.splice(0, second_input.length);
}
