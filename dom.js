
// body
document.getElementById("body").style.backgroundColor = "cyan";
document.getElementById('reset').disabled = true; 
// h1 first $ #
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

    // 24/02/20223

    let value = document.getElementById("first").innerHTML;
    // alert(value);
    document.getElementById("new_data").innerHTML = value;
    document.getElementById("new_data").style.color= "Purple";
    document.getElementById("new_data").style.backgroundColor="black";
    document.getElementById("new_data").style.fontSize ="38px";
    document.getElementById("new_data").style.fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    document.getElementById("new_data").style.padding ="7px";
    document.getElementById("new_data").style.margin ="12px";

    // += 
    // document.getElementById('first').innerHTML += " For JavaScript";
    // let v = "v8.1.9";
    // document.getElementById("first").innerHTML +=""+ v; 

    document.getElementById("first").innerHTML += " For JavaScript  v8.1.9";

    // disable btn
    document.getElementById('btn').disabled= true;
    
    // reset active and change background
    document.getElementById("reset").disabled = false;
    document.getElementById("reset").style.backgroundColor = "purple";

    // input text
    // input default hidden is assignment

    document.getElementById("input_text").style.padding = "8px";
    document.getElementById("input_text").style.margin= "12px";
    document.getElementById('input_text').style.width = "450px";
    document.getElementById('input_text').style.fontSize = "20px";
    

    value = document.getElementById("first").innerHTML;

    document.getElementById("input_text").value = value;

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

    // 24/02/20223

    document.getElementById("new_data").innerHTML ="";
    document.getElementById("new_data").style.backgroundColor=""

    // btn  active(enabled)
    document.getElementById("btn").disabled = false;

    // reset diactive (disabled)
    document.getElementById("reset").disabled = true;
    document.getElementById("reset").style.backgroundColor = "red";


     
}







 