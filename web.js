let operator="";
let firstNumber="";
let secondNumber="";

function append(number){
    if(operator==="")
    {
        firstNumber+=number;
        document.getElementById('results').value=firstNumber;
    }
    else
    {
    secondNumber+=number;
    document.getElementById('results').value=secondNumber;
    }
}
function operation(op){
    operator=op;
}
function calculate(){
    let result;
    switch(operator){
        case'+':
        result=parseInt(firstNumber)+parseInt(secondNumber);
        break;
        case'-':
        result=parseInt(firstNumber)-parseInt(secondNumber);
        break;
        case'*':
        result=parseInt(firstNumber)*parseInt(secondNumber);
        break;
        case'/':
        result=parseInt(firstNumber)/parseInt(secondNumber);
        break;
    }
    document.getElementById('results').value=result;
}
function clearresult()
{
    operator="";
    firstNumber="";
    secondNumber="";
    document.getElementById('results').value='';

}