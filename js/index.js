var A= document.querySelector('.checkbox1');
var B=document.querySelector('.checkbox');
var historyDiv=document.querySelector('.history-div');
var back =document.querySelector('.back2');


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
    document.querySelector('.history-btn').style.visibility='visible';
    
    historyDiv.innerHTML = "";
      for(let i=0;i<answers.length;i++)
     {
      historyDiv.innerHTML += '<div class="new"><h6>'+ equations[i] +' '+ answers[i]+'</h6></div>'  
     }
     
  }

//  function backSpace()
//  {
 
//   var str =back.innerHTML;
//   var len = str.length;
  
//   var str =back.innerText;
//   if(count==len-1)
//   {
//    back.innerText=0;
  

//   }
//   else
//   {
//     back.innerText=str.slice(0,1);
//   }
 
//  } 


function reHistory()
{
  document.querySelector('.history-btn').style.visibility='hidden';
  var status= confirm("Are You sure Want to delete Histort");
    if(status)
    {
      historyDiv.innerHTML="";
      answers = [];
      equations = [];
    }
    

}
function removeDiv()
{
  document.querySelector('.history-btn').style.visibility='hidden';
}