var A= document.querySelector('.checkbox1');
var B=document.querySelector('.checkbox');
var historyDiv=document.querySelector('.history-div');
var answers=[];
var equations=[];
function btn(val)
{
     if(A.value==0)
    A.value=val;
    else
    A.value+=val ;
}

function reset()
{
    B.value=null;
    A.value=0;
}

function btnop()
{
    equation=A.value+"=";

  equations.push(equation)
  
  answers.push(eval(A.value));

   B.value  =equation;
    A.value=eval(A.value);
}
function backon()
{

    A.value=0;
}
 function showHistory()
  { 
    historyDiv.innerHTML = "";
      for(let i=0;i<answers.length;i++)
     {
      historyDiv.innerHTML += '<div class="new"><h6>'+ equations[i] +' '+ answers[i]+'</h6></div>'  
     }
  }


function reHistory()
{
  
  var status= confirm("Are You sure Want to delete Histort");
    if(status)
    {
      historyDiv.innerHTML="";
      answers = [];
      equations = [];
    }
  

}