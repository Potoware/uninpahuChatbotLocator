document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("input");
  inputField.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
      let input = inputField.value;
      inputField.value = "";
      output(input);
    }
  });
});

function agregar(){
    var txt = document.getElementById("text").value;
    document.getElementById("result").innerHTML = txt;
}
function output(input) {
  let product;
  let ofrecerServicios;
  let opcionSeleccionada;
  var mensajeUnico=false;
  let hablar = false;

  let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
  text = text
    .replace(/ a /g, " ")
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .replace(/r u/g, "are you");

  text=text==""?input.toLowerCase():text;
  if (compare(prompts, replies, text)) {
    product = compare(prompts, replies, text);
  } else if (text.match(/gracias/gi)) {
    product = "Con gusto!!"
  } else if (text.match(/(corona|covid|virus)/gi)) {
    product = coronavirus[Math.floor(Math.random() * coronavirus.length)];
  } else if (text.match(/(mal|muy mal|molesto|muy molesto|enojado|triste|demasiado molesto)/gi)) {
    product = badResponse[Math.floor(Math.random() * badResponse.length)];
    ofrecerServicios=true;
  }else if (text.match(/(bien|muy bien|excelente)/gi)) {
    product = goodResponse[Math.floor(Math.random() * goodResponse.length)];
    ofrecerServicios=true;
  }else if (text.match(/(ayuda|help|menu|inicio|empezar)/gi)) {
    product = "Puedes intentar";
    ofrecerServicios=true;
  }else if(text.match(/(salon|Localizar un salon)/gi)||text=="1" || text=="1." ){
    product = localizarSalon;
    opcionSeleccionada = "1";
  } else if(text.match(/(aleatorio|Lugar aleatorio en uninpahu)/gi)||text=="2" || text=="2." ){
    product = aleatorio;
    opcionSeleccionada = "2";
  } else if(text.match(/(ulises|Ir a ulises)/gi)||text=="3" || text=="3." ){
    product = irUlises;
    opcionSeleccionada = "3";
  }else if(text.match(/(principal|Ir a la pagina principal)/gi)||text=="4" || text=="4." ){
    product = irUninpahu;
    opcionSeleccionada = "4";
  }else if(text.match(/(moodle|Ir a moodle)/gi)||text=="5" || text=="5." ){
    product = irMoodle;
    opcionSeleccionada = "5";
  }else if(text=="activar sonido" || text=="habla" ){
    product = "estoy hablando";
    document.getElementById('hablar').value="SI";
  }else if(text=="desactivar sonido" || text=="callate" || text=="apagar sonido" ){
    product = "Bueno, ya no hablo";
    document.getElementById('hablar').value="NO";
  }else if(text.includes('-') ){
    mensajeUnico=true;
      encontrarAjax(text);
  }else {
    product = alternative[Math.floor(Math.random() * alternative.length)];

  }



  if(!mensajeUnico){
    addChat(input, product);
  }else{
    mensajeUnico=false;
  }

  if(opcionSeleccionada=="2"){
    encontrarAjax("ALEATORIO");
  }
  if(ofrecerServicios){
    addChat("---", "1. Localizar un salon");
    addChat("---", "2. Lugar aleatorio en uninpahu");
    addChat("---", "3. Ir a ulises");
    addChat("---", "4. Ir a la pagina principal");
    addChat("---", "5. Ir a moodle");
  }

}

function compare(promptsArray, repliesArray, string) {
  let reply;
  let replyFound = false;
  for (let x = 0; x < promptsArray.length; x++) {
    for (let y = 0; y < promptsArray[x].length; y++) {
      if (promptsArray[x][y] === string) {
        let replies = repliesArray[x];
        reply = replies[Math.floor(Math.random() * replies.length)];
        replyFound = true;
        break;
      }
    }
    if (replyFound) {

      break;
    }
  }
  return reply;
}

function addChat(input, product) {
  const messagesContainer = document.getElementById("messages");
  if(input !="---"){
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.className = "user response";
    userDiv.innerHTML = `<img src="user.png" class="avatar"><span>${input}</span>`;
    messagesContainer.appendChild(userDiv);
  }

  let botDiv = document.createElement("div");
  let botImg = document.createElement("img");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  botImg.src = "bot-mini.png";
  botImg.className = "avatar";
  botDiv.className = "bot response";
  if(input !="---"){
    botText.innerText = "escribiendo...";
    botDiv.appendChild(botImg);
    }
  botDiv.appendChild(botText);


  messagesContainer.appendChild(botDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  setTimeout(() => {
    botText.innerHTML = `${product}`;
    if(document.getElementById('hablar').value=="SI"){
    textToSpeech(botText.innerText);
    }
  }, 2000
  )

}

function encontrarAjax(salon){
 var urlSalon;
 var headers = new Headers();

 headers.append('Content-Type', 'application/json');
 headers.append('Accept', 'application/json');

  if(salon.includes('-') || salon.includes('ALEATORIO')){
    $.ajax({
          type: 'POST',
          url: 'https://uninpahu-app-locator.herokuapp.com/api/ajax/search',
          //url: 'http://localhost:8080/api/ajax/search',
          data: {
              arr: salon
          },
          headers: headers,
          success: function (data) {
            if(data["encontrado"]){
              //Local
              salon=salon.replaceAll("ALEATORIO","---");
              console.log(data["salon"]);
              console.log(salon);
              if(salon=="---"){
                addChat(salon,'<a href=\"https://uninpahu-app-locator.herokuapp.com/locator/'+data["salon"]+"\">Ir a lugar misterioso</a>");
              }else{
                addChat(salon,'Encontrado!! <a href=\"https://uninpahu-app-locator.herokuapp.com/locator/'+data["salon"]+"\">Ir al salon</a>");
              }
            }else{
              addChat(salon,'Umm.... el salon '+ salon+' aun no se encuentra registrado en la base de datos');
            }
          }
      });
  }
  console.log(urlSalon);
  return urlSalon;

}
