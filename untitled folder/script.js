var a =20;
b=20.20;
c=a+b;
console.log(`sum is ` + c);
console.log(`sum is ` +a);


function sum(){
    num1 = praseInt( prompt(`Enter the first number;`))
    num2 = praseInt(prompt('enter the second number' ));
    final_sum =num1+num2;
    document.getElementById(`sum`).innerHTML ="the sum of" + num1 +num2 +"is" ;

}

function pageExit(){
    result=confirm("are you sure you want to exit")
    if(result ==true){
        window.close();
    }
        else{
            alert(`close`);

        }
    }
}