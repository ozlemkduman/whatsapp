let input=document.querySelector("#write");
let paperclip=document.querySelector(".paperclip");
let camera= document.querySelector(".camera");
let btnm=document.querySelector(".btnm");
let btnc=document.querySelector(".btnc");
let mains=document.querySelector(".mains");

let msg=document.querySelector(".msg");
let umsg=document.querySelector(".umsg");



input.addEventListener("click",hiddenfunc);


function hiddenfunc(){
    btnm.style.display="none";
    btnc.style.display="inline";

    
}

btnc.addEventListener("click", gonder);

function gonder(){
    localStorage.setItem("submit",input.value);
    
    textmsg.innerHTML=input.value;
    input.value="";
    btnm.style.display="inline";
    btnc.style.display="none";
    newmsg();
    
}

let textmsg=document.querySelector(".textmsg")
function newmsg(){
    let li= document.createElement(li);
    msg.appendChild(li);
    text.innerHTML=input.value;
}