function checkPrime(){
    num=getUserInput();
    flag=true;
    
    if(num < 2){
        flag = false;
    }
    
    for(var i = 2; i <= Math.sqrt(num); i++){
        if(num % i == 0){
            flag = false;
            break;
        }
    }
    if(flag){
        showResult("Given number is : "+num+"  prime");
    }
    else{
        showResult("Given number is  : "+num+"  not a prime");
    }
}
function factorial(){
    num = getUserInput();
    var res = 1;
    for(var i = 2;i <= num;i++){
        res *= i;
    }
    showResult("Factorial of "+num+" is "+res);
}


function factors(){
     num = getUserInput();
     var output = " ";
    for(var i = 1;i <=num; i++){
       if(num % i == 0){
           output += i+" ";
       }
    }
    showResult("Factors of " +num+ " is :"+output);
}



function fibonacci(){
    var num=getUserInput();
    var output = "";
    if(num==1){
        output += "0";
    }else if(num == 2){
        output += "0 1";
    }else{
        var a = 0, b = 1;
        output += "0 1";
        for(var i=3;i<=num; i++){   
            c=a+b;
            output += " "+c;
            a=b;
            b=c;
        }
    }
    showResult("Fibonacci series of:"+num+"is"+output);
    
}

function reverse(){
    num=getUserInput();
    var rev=0;
    num1=num;
    while(num!=0){
        var r=num%10;
        rev= rev*10+r;
        num=Math.floor(num/10);
        
    }
   showResult("sum of reverse num is "+ num1 + " = " +rev); 
        
}

function palindrome(){
    num=getUserInput();
 var rev = 0;
    var num1 = num;
    while(num != 0)
    {
        rem = num % 10;
       num = Math.floor(num / 10);
         rev = rev * 10 + rem;
        
    }if(num1==rev){
         showResult("enter number is palindrome");
    }
    else{
        showResult("enter number is not a palindrome");
    }
}

function sumofDigits(){
    var sum = 0;
    num = getUserInput();
    num1 = num;
    
    while(num != 0){
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    
    showResult("sum of digits of num "+ num1 + " is " +sum);
}

function sumofSingleDigit(){
    num = getUserInput();
    
    sum = num;
    
    while(num > 9){
        sum = Math.floor(num/10) + num % 10;
        num = sum;
    }
    showResult("Sum of single digits is "+sum);
}





function getUserInput(){
    num = document.getElementById("num").value;
    return num;
    
}
function showResult(message){
    document.getElementById("result").innerHTML="<h4>"+message+"</h4>";
}