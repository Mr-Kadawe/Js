
// body
document.getElementById("body").style.backgroundColor = "cyan";


// h1 first
document.getElementById("first").style.color = "Blue";
document.getElementById('first').style.fontFamily="Tahoma";
document.getElementById("first").style.backgroundColor="Yellow";
document.getElementById("first").style.padding= "20px";
document.getElementById("first").style.margin ='10px';


// btn
document.getElementById("btn").style.color = "white";
document.getElementById("btn").style.backgroundColor = "blue";
document.getElementById('btn').style.padding = "6px";
document.getElementById('btn').style.margin = "12px 0px 0px 15px";
document.getElementById("btn").style.fontSize = "23px";

//reset
document.getElementById("reset").style.color = "white";
document.getElementById("reset").style.backgroundColor = "red";
document.getElementById('reset').style.padding = "6px";
document.getElementById('reset').style.margin = "12px 0px 0px 15px";
document.getElementById("reset").style.fontSize = "23px";

// btn  on click 
// document.getElementById("btn").onclick = ()=>{
//     // alert("onclick");
//     document.getElementById("first").style.backgroundColor = "green";
//     document.getElementById("first").style.color = "black";
//     document.getElementById("body").style.backgroundColor = "red";
//     document.getElementById("btn").style.backgroundColor = "yellow";
//     document.getElementById("btn").style.color = "black";
//     document.getElementById('first').innerHTML = " Welcome New Course"
// }
document.getElementById("btn").onclick = ()=>{
    // alert("onclick");
  btnClick();
}

// reset
// document.getElementById("reset").onclick = function(){
//     document.getElementById("body").style.backgroundColor = 'grey';
//     document.getElementById("body").style.backgroundColor = 'purple';
//     document.getElementById("first").style.backgroundColor = "yellow";
//     document.getElementById("first").style.color = "blue";
//     document.getElementById("btn").style.color = "white";
//     document.getElementById("btn").style.backgroundColor = "blue";
    
//     document.getElementById("first").innerHTML ="Welcome JavaScript Course";
// }

document.getElementById("reset").onclick = function(){
   resetClick();
}


function btnClick()
{
    document.getElementById("first").style.backgroundColor = "green";
    document.getElementById("first").style.color = "black";
    document.getElementById("body").style.backgroundColor = "red";
    document.getElementById("btn").style.backgroundColor = "yellow";
    document.getElementById("btn").style.color = "black";
    document.getElementById('first').innerHTML = " Welcome New Course"
}

function resetClick()
{
    document.getElementById("body").style.backgroundColor = 'grey';
    document.getElementById("body").style.backgroundColor = 'purple';
    document.getElementById("first").style.backgroundColor = "yellow";
    document.getElementById("first").style.color = "blue";
    document.getElementById("btn").style.color = "white";
    document.getElementById("btn").style.backgroundColor = "blue";
    
    document.getElementById("first").innerHTML ="Welcome JavaScript Course";
}



 