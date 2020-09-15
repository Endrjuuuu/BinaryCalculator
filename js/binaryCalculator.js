var operand1;
var operator;
var operand2;

document.getElementById("btn0").onclick = function (){
    document.getElementById("res").innerHTML += "0";
}

document.getElementById("btn1").onclick = function (){
    document.getElementById("res").innerHTML += "1";
}

document.getElementById("btnClr").onclick = function (){
    document.getElementById("res").innerHTML = "";
}

document.getElementById("btnSum").onclick = function (){
    document.getElementById("res").innerHTML += "+";
}
document.getElementById("btnSub").onclick = function (){
    document.getElementById("res").innerHTML += "-";
}

document.getElementById("btnMul").onclick = function (){
    document.getElementById("res").innerHTML += "*";
}

document.getElementById("btnDiv").onclick = function (){
    document.getElementById("res").innerHTML += "/";
}

document.getElementById("btnEql").onclick = function (){
    let tempStr = document.getElementById("res").innerHTML;
    let nums = tempStr.match(/([01]+)([+\-\*/])([01]+)/);
    operand1 = parseInt(nums[1],2);
    operator = nums[2];
    operand2 = parseInt(nums[3],2);

    let stringToEval = operand1+operator+operand2;
    console.log("stringToEval: " + stringToEval);

    document.getElementById("res").innerHTML = Math.floor(eval(stringToEval)).toString(2);
}