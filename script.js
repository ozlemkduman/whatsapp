const input = document.querySelector("#write");
const paperclip = document.querySelector(".paperclip");
const camera = document.querySelector(".camera");
const buttonMicrophone = document.querySelector(".buttonMicrophone");
const buttonChevron = document.querySelector(".buttonChevron");
const main = document.querySelector(".main");

const message = document.querySelector(".message");
const youMessage = document.querySelector(".youMessage");

input.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
        console.log("yapıldı");
        document.createElement("li");
        const textMessage=document.getElementsByTagName("li");
        textMessage.innerHTML = input.value;
    }
});