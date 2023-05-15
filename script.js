let Enterbutton=document.getElementById('Enterbutton');
let againbutton=document.getElementById('againbutton');
let output=document.getElementById('outputtext');
let attempt=document.getElementById("counts");
let count=0;

let random = Math.ceil(Math.random()*100);
function checkNumber()
{
    var input=document.getElementById('userinput').value;
    if(input==random)
    {
        output.innerHTML=" Congratulations ! Number guess is Correct";
        output.style.color="green";
        Enterbutton.disabled="true";
        
    }
    else if(input>random && input<100)
    {
        output.innerHTML="Number guessed is high";
        output.style.color="red";
        count=count+1;
        
    }
    else if(isNaN(input))
    {
      output.innerHTML=" Oops Enter no only  !!!!!!! ";
      output.style.color="red";
      count=count+1;
    }
    else if(input<random && input>1 ){
        output.innerHTML="Number guesses too low";
        output.style.color="red";
        count=count+1;
    }
    else if(input<1 ){
        output.innerHTML="Higher , no should be from 0 to 100";
        output.style.color="red";
        count=count+1;
    }
    else if(input>100){
        output.innerHTML=" low number should be between 1 and 100";
        output.style.color="red";
        count=count+1;
    }
    attempt.innerHTML="No. of Attempt :"+count;
}
Enterbutton.addEventListener("click",checkNumber);
againbutton.addEventListener("click",function(){
    location.reload();
});

