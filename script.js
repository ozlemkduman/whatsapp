const input = document.querySelector("#write");
const paperclip = document.querySelector(".paperclip");
const camera = document.querySelector(".camera");
const buttonMicrophone = document.querySelector(".buttonMicrophone");
const buttonChevron = document.querySelector(".buttonChevron");
const main = document.querySelector(".main");

const message = document.querySelector(".message");
const youMessage = document.querySelector(".youMessage");

const messageList=document.querySelector(".messageList");

input.addEventListener("click" ,function(){
    camera.style.display="none";
    buttonMicrophone.style.display="none";
    buttonChevron.style.display="inline";
})

input.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
        console.log("yapıldı");
        let textMessageLi=document.createElement("li");
        messageList.appendChild(textMessageLi);
        textMessageLi.classList.add("textMessageLiStyle");
        localStorage.setItem("input",input.value);
        textMessageLi.innerHTML=input.value;
        console.log(textMessageLi.innerHTML)
        messageList.classList.add("messageListStyle");
        input.value="";

    }
});