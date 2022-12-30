const mainDiv = document.querySelector(".mainDiv");
const inputArea = document.querySelector(".input-area");
const input = document.querySelector(".input");
const camera = document.querySelector(".camera");
const buttonMicrophone = document.querySelector(".buttonMicrophone");
const buttonSend = document.querySelector(".buttonSend");

const buttonDelete = document.querySelector(".delete");
const buttonInfo = document.querySelector(".info");

//infoya tıklarsa delete butonu aktifleştir
buttonInfo.addEventListener("click", function () {
  buttonDelete.style.display = "inline";
});

//delete butonuna tıklarsa ekranı ve locali sil
buttonDelete.addEventListener("click", function () {
  mainDiv.innerHTML = "";
  localStorage.clear();
  buttonDelete.style.display = "none";
});

//dizi
let messages = [];

//mesaj nerede kontrolü
let wasOnLeft = false;

//enter basıldığında aksiyon
function prepareInput() {
  input.addEventListener("keydown", function (e) {
    buttonMicrophone.style.display = "none";
    buttonSend.style.display = "inline";
    camera.style.display = "none";

    if (e.key === "Enter") {
      send();
    }
  });

  buttonSend.addEventListener("click", send);
}

//mesajları localde kaydet
function saveInput() {
  const jsonSet = JSON.stringify(messages);
  localStorage.setItem("messages", jsonSet);
}

//enter ve send aksiyonları
function send() {
  const isOnleft = wasOnLeft ? false : true;

  //mesaj objesi oluştur
  let message = {
    content: input.value,
    isOnleft,
  };

  //oluşturulan mesajları mesaj dizisine aktar
  messages.push(message);

  wasOnLeft = isOnleft;
  saveInput();
  createAllMessages();
  //inputu temizle
  input.value = "";
  buttonMicrophone.style.display = "inline";
  buttonSend.style.display = "none";
  camera.style.display = "inline";
}

//localden kayıtlı mesajları al
function loadInput() {
  const messageGet = localStorage.getItem("messages");
  const jsonGet = JSON.parse(messageGet);

  if (Array.isArray(jsonGet)) {
    messages = jsonGet;
  } else {
    messages = [];
  }
}
//yeni mesaj oluştur
function createAllMessages() {
  clearAllMessages();
  //dizinin elemanı kadar obje üret
  for (let message of messages) {
    const el = createNewDiv(message.content);

    let className = "";
    if (message.isOnleft) {
      className = "textMessageLiStyle";
    } else {
      className = "youTextMessageLiStyle";
    }

    el.classList.add(className);

    mainDiv.appendChild(el);
  }
}
// tüm mesajları temizle
function clearAllMessages() {
  mainDiv.innerHTML = "";
}
//yeni div oluştur
function createNewDiv(content) {
  const newDiv = document.createElement("div");
  mainDiv.appendChild(newDiv);
  newDiv.textContent = content;
  return newDiv;
}

function main() {
  prepareInput();
  loadInput();
  createAllMessages();
}

main();
