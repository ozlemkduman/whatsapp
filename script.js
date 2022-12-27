const input = document.querySelector("#write");
const paperclip = document.querySelector(".paperclip");
const camera = document.querySelector(".camera");
const buttonMicrophone = document.querySelector(".buttonMicrophone");
const buttonChevron = document.querySelector(".buttonChevron");
const main = document.querySelector(".main");

const message = document.querySelector(".message");
let youMessage = document.querySelector(".youMessage");

let messageList = document.querySelector(".messageList");
let youMessageList = document.querySelector(".youMessageList");


let textLeft=document.querySelector(".textLeft");
let textRight=document.querySelector(".textRight");




input.addEventListener("click", function () {
    camera.style.display = "none";
    buttonMicrophone.style.display = "none";
    buttonChevron.style.display = "inline";
})

let isLastMessageOnLeft = true;

input.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
        send()

    }
});

buttonChevron.addEventListener("click", send);




function send() {
    if (isLastMessageOnLeft == true) {
        addMessageOnLeft();

    } else {

        addMessageOnRight();
    }
};

function itemRight(){
    let itemR= localStorage.setItem("input",input.value);
     
    return itemR;
}

function itemLeft(){
    let itemL= localStorage.setItem("input",input.value);

    return itemL;
    
}
let infoOfPageLeft=localStorage.getItem("input");
let infoOfPageRight=localStorage.getItem("input");;


console.log(infoOfPageLeft)
console.log(infoOfPageRight)

textLeft.innerHTML=infoOfPageLeft;
textRight.innerHTML=infoOfPageRight;

function addMessageOnLeft() {
    itemRight()
    let messageList = document.createElement("ul");
    main.appendChild(messageList);
    messageList.classList.add("messageListStyle");
    let textMessageLi = document.createElement("li");
    textMessageLi.classList.add("textMessageLi")
    messageList.appendChild(textMessageLi);
    textMessageLi.classList.add("textMessageLiStyle");
    textMessageLi.innerHTML = input.value;
    console.log(itemRight())
    messageList.classList.add("messageListStyle");
    input.value = "";
    isLastMessageOnLeft = false;

    


}


function addMessageOnRight() {
    itemLeft()
    let youMessageList = document.createElement("ul");
    main.appendChild(youMessageList);
    youMessageList.classList.add("youMessageListStyle");
    let youTextMessageLi = document.createElement("li");
    youTextMessageLi.classList.add("youTextMessageLi")
    youMessageList.appendChild(youTextMessageLi);
    youTextMessageLi.classList.add("youTextMessageLiStyle");
    youTextMessageLi.innerHTML = input.value;
    youMessageList.classList.add("youMessageListStyle");
    input.value = "";
    isLastMessageOnLeft = true;
}
