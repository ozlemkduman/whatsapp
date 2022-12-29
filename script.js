const paperclip = document.querySelector(".paperclip");
const camera = document.querySelector(".camera");
const buttonMicrophone = document.querySelector(".buttonMicrophone");
const buttonChevron = document.querySelector(".buttonChevron");
const mainDiv = document.querySelector(".mainDiv");

const footInput = document.querySelector(".foot-input");

//yeni div oluşturma
function creatDivElement(content) {
  let span = document.createElement("span");
  span.textContent = content;
  return span;
}
//dizi
let messages;

//sağda mı?
let wasOnLeft = true;

function buttonHidden() {
  camera.style.display = "none";
  buttonMicrophone.style.display = "none";
  buttonChevron.style.display = "inline";
}

function buttonLook() {
  camera.style.display = "inline";
  buttonMicrophone.style.display = "inline";
  buttonChevron.style.display = "none";
}

function prepareInput() {
  const input = document.createElement("input");
  document.querySelector(".foot-input").appendChild(input);
  footInput.insertBefore(input, footInput.children[1]);
  input.classList.add("foot-input");

  buttonChevron.addEventListener("click", buttonsend);
  input.addEventListener("keydown", function (e) {
    buttonHidden();

    if (e.key === "Enter") {
      buttonsend();
    }
  });
}

function buttonsend(e) {
  const input = document.createElement("input");
  e.preventDefault();
  const isOnLeft = wasOnLeft ? false : true;
  const message = {
    content: e.target.value,
    isOnLeft,
  };
  input.value = "";
  wasOnLeft = isOnLeft;
  messages.push(message);
  saveInput();
  createAllMessages();
  buttonLook();
}

function clearAllMessages() {
  const mainDiv = document.querySelector(".mainDiv");
  mainDiv.innerHTML = "";
}

function createAllMessages() {
  clearAllMessages();

  for (let message of messages) {
    const el = creatDivElement(message.content);

    let className = "";
    if (message.isOnLeft) {
      className = "textMessageLiStyle";
    } else {
      className = "youTextMessageLiStyle";
    }

    el.classList.add(className);

    const mainDiv = document.querySelector(".mainDiv");
    mainDiv.appendChild(el);
  }
}

function saveInput() {
  const setJson = JSON.stringify(messages);
  localStorage.setItem("messages", setJson);
}

function loadInput() {
  const getLoad = localStorage.getItem("messages");

  const getJson = JSON.parse(getLoad);

  if (Array.isArray(getJson)) {
    messages = getJson;
  } else {
    messages = [];
  }
}

function main() {
  prepareInput();
  loadInput();
  createAllMessages();
}
main();
