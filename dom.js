
// body
document.getElementById("body").style.backgroundColor = "cyan";
document.getElementById('reset').disabled = true; 

// input_text style
document.getElementById("input_text").style.padding = "8px";
document.getElementById("input_text").style.margin= "12px";
document.getElementById('input_text').style.width = "450px";
document.getElementById('input_text').style.fontSize = "20px";
//  div_1(by name and By class Name) display is none
document.getElementById('div_1').style.display ='none';
document.getElementById('div_2').style.display ='none';


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

document.getElementById("btn_events").style.color = "white";
document.getElementById("btn_events").style.backgroundColor = "green";
document.getElementById('btn_events').style.padding = "6px";
document.getElementById('btn_events').style.margin = "12px 0px 0px 15px";
document.getElementById("btn_events").style.fontSize = "23px";

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
    byName();
    byClassName();

    // byName

  // let names =  document.getElementsByName('names');
  //   // alert(names[0].innerHTML);
  //   // alert(names[1].innerHTML);
  //   // alert(names[2].innerHTML);


  //   console.log(names[0].innerHTML);
  //   console.log(names[1].innerHTML);
  //   console.log(names[2].innerHTML);
  //   console.log("Names Array Length is : " + names.length);


  //   // display Names
  //   document.getElementById('display_names').innerHTML = names[0].innerHTML + '<br>' + names[1].innerHTML + '<br>' + names[2].innerHTML;

  //   let input_val = document.getElementById('input_text').value;
  //   document.getElementById("input_value_show").innerHTML += input_val + "<br>";
  
  //   document.getElementById("input_text").value = '';


  // byClassName
  // let className = document.getElementsByClassName('class_name');
  // alert(className.length);


  // document.getElementById("display_className").innerHTML = className[0].innerHTML+" . <br>";
  // document.getElementById("display_className").innerHTML += className[1].innerHTML; 


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

// 02-03-2023
function byName ()
{
  let names =  document.getElementsByName('names');
  // alert(names[0].innerHTML);
  // alert(names[1].innerHTML);
  // alert(names[2].innerHTML);


  console.log(names[0].innerHTML);
  console.log(names[1].innerHTML);
  console.log(names[2].innerHTML);
  console.log("Names Array Length is : " + names.length);


  // display Names
  document.getElementById('display_names').innerHTML = names[0].innerHTML + '<br>' + names[1].innerHTML + '<br>' + names[2].innerHTML;
  document.getElementById('display_names').style.color = "white";
  let input_val = document.getElementById('input_text').value;
  if(input_val == ''){
    // empty value 
  }else{
  document.getElementById("input_value_show").innerHTML += input_val + "<br>";
  document.getElementById('input_value_show').style.color = "white";
  document.getElementById("input_text").value = '';
  }
}

function byClassName()
{
  let className = document.getElementsByClassName('class_name');
  alert(className.length);
  
  document.getElementById('display_className').style.color = "white";
  
  document.getElementById("display_className").innerHTML = className[0].innerHTML+" . <br>";
  document.getElementById("display_className").innerHTML += className[1].innerHTML; 
  
}


// 03-03-2023

// Event Listner
// document.getElementById("btn_events").addEventListener('click', function(){
//   document.getElementById("body").style.backgroundColor = "grey";
//   byName();
//   byClassName();
// });

document.getElementById('btn_events').addEventListener('dblclick', () =>{
  btnClick();
})

// document.getElementById("btn_events").addEventListener('mousedown', ()=>{
//   alert("MouseDown");
// })

// document.getElementById("btn_events").addEventListener("mouseup", function(){
//   alert("MouseUp");
// })

document.getElementById("btn_events").addEventListener('mouseleave', function(){
  // alert("Mouse Leave");
  document.getElementById("event_list").innerHTML += " Mouse Leave (OUT) <br>";
  document.getElementById("btn_events").style.padding = "8px";
  document.getElementById("btn_events").style.width = "100px";
})

document.getElementById("btn_events").addEventListener("mouseover", function(){
  document.getElementById("event_list").innerHTML += "Mouser Over (IN) <br>";
  document.getElementById("btn_events").style.backgroundColor = "black";
  document.getElementById("btn_events").style.padding = "6px";
})

document.getElementById("btn_events").addEventListener("mouseout", function(){
  document.getElementById("event_list").innerHTML += "Mouse Out (OUT) <br>";
  document.getElementById("btn_events").style.backgroundColor = "blue";
})


document.getElementById("btn_events").addEventListener("mouseenter", function(){
  document.getElementById("event_list").innerHTML += "Mouse Enter (IN) <br>";
  document.getElementById("btn_events").style.width = "150px";
})

document.getElementById("btn_events").addEventListener("keydown", ()=>{
  alert("KeyDown");
})
document.getElementById("btn_events").addEventListener("keypress", ()=>{
  alert("KeyPress");
})
document.getElementById("btn_events").addEventListener("keyup", ()=>{
  alert("KeyUp");
})

document.getElementById("input_text").addEventListener("keyup",()=>{
  // alert("Keyup");
  let val = document.getElementById("input_text").value;
  document.getElementById("event_to_input").innerHTML = val;
})







 