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
input.addEventListener("click", function () {
    camera.style.display = "none";
    buttonMicrophone.style.display = "none";
    buttonChevron.style.display = "inline";
})

input.addEventListener("keypress", function (event) {



    if (event.key === "Enter") {
        event.preventDefault();
        let textMessageLi = document.createElement("li");
        textMessageLi.classList.add("textMessageLi")
        messageList.appendChild(textMessageLi);
        textMessageLi.classList.add("textMessageLiStyle");
        localStorage.setItem("input", input.value);
        textMessageLi.innerHTML = input.value;
        console.log(textMessageLi.innerHTML)
        messageList.classList.add("messageListStyle");
        input.value = "";
    }



    else if(event.key==="a"){ event.preventDefault();
      let youTextMessageLi = document.createElement("li");
      youTextMessageLi.classList.add("youTextMessageLi")
      youMessageList.appendChild(youTextMessageLi);
      youTextMessageLi.classList.add("youTextMessageLiStyle");
      localStorage.setItem("input", input.value);
      youTextMessageLi.innerHTML = input.value;
      console.log(youTextMessageLi.innerHTML)
      youMessageList.classList.add("youMessageListStyle");
      input.value = "";
    }
});
