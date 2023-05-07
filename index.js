
// let x = window.prompt("Enter something")
// document.getElementById('first_div').innerHTML="You Entered: " + x;
let userColor=window.prompt("Which color do you like to set");
// if (userColor.toLocaleLowerCase()=='blue'){
//     document.getElementById('first_div').innerHTML="The background color is Blue";
//     document.querySelector('body').style.backgroundColor="blue";

// }
// else if(userColor.toLowerCase()=='red'){
//     document.getElementById('first_div').innerHTML="The background color is Red";
//     document.querySelector('body').style.backgroundColor="red";
// }
// else if(userColor.toLocaleLowerCase()=='pink'){
//     document.getElementById('first_div').innerHTML="The background color is Pink";
//     document.querySelector('body').style.backgroundColor="pink";
// }
// else{

document.querySelector('body').style.backgroundColor=`${userColor}`

document.getElementsByClassName('demo')[1].innerHTML="This is the second paragraph of this demo div, so it is always black";
document.getElementsByClassName('demo')[1].style.backgroundColor='black';
document.getElementsByClassName('demo')[1].style.color='white';
color = window.getComputedStyle(document.querySelector('body')).backgroundColor;

if (color == "rgba(0, 0, 0, 0)"){
    document.getElementById('first_div').innerHTML="Background Color: White";
    document.querySelector('body').style.backgroundColor="white";
}
else {
    document.getElementById('first_div').innerHTML=`Background Color: ${userColor}`;
}