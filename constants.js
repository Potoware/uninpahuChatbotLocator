// Options the user could type in
const prompts = [
  ["hola", "buenas", "buen dia", "buenos dias", "hl","buen día","buenos días","buenas tardes","buenas noches"],
  ["Como estas", "Como va tu vida?", "Como vas", "y tu?"],

  ["how old are you"],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  ["who created you", "who made you"],
  [
    "your name please",
    "your name",
    "may i know your name",
    "what is your name",
    "what call yourself"
  ],
  ["i love you"],
  ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
  ["bad", "bored", "tired"],
  ["help me", "tell me story", "tell me joke"],
  ["ah", "yes", "ok", "okay", "nice"],
  ["bye", "good bye", "goodbye", "see you later"],
  ["what should i eat today"],
  ["bro"],
  ["what", "why", "how", "where", "when"],
  ["no","not sure","maybe","no thanks"],
  [""],
  ["haha","ha","lol","hehe","funny","joke"]
]

// Possible responses, in corresponding order

const replies = [
  ["Hola!, como estas?","Buen día, Como te encuentras"],
  [
    "Bien, gracias por preguntar",
    "exelente y tu?",
    "muy bien y tu?"
  ],
  [
    "Nothing much",
    "About to go to sleep",
    "Can you guess?",
    "I don't know actually"
  ],
  ["I am infinite"],
  ["I am just a bot", "I am a bot. What are you?"],
  ["The one true God, JavaScript"],
  ["I am nameless", "I don't have a name"],
  ["I love you too", "Me too"],
  ["Have you ever felt bad?", "Glad to hear it"],
  ["Why?", "Why? You shouldn't!", "Try watching TV"],
  ["What about?", "Once upon a time..."],
  ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
  ["Bye", "Goodbye", "See you later"],
  ["Sushi", "Pizza"],
  ["Bro!"],
  ["Great question"],
  ["That's ok","I understand","What do you want to talk about?"],
  ["Please say something :("],
  ["Haha!","Good one!"]
]

// Random for any other user input

const alternative = [
  "Same",
  "Go on...",
  "Bro...",
  "Try again",
  "I'm listening...",
  "I don't understand :/"
]

// Whatever else you want :)

const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"]
const badResponse = ["Lamento saberlo... Dime que puedo hacer por ti?","Lo lamento... dime que puedo hacer por ti?","Que mal.. Dime que puedo hacer para que te sientas mejor"]
const goodResponse =["Me alegro!!, cuentame, en que te puedo colaborar","Que bueno!, cuentame que estas buscando","Estupendo!, dime que puedo hacer por ti"]
const localizarSalon ="Que salon buscas? recuerda buscar por sede-numeroSalon, ejemplo: 10-101"
const aleatorio = "te llevaremos a un lugar magico de la universidad, estas listo?<br>"
const irUlises = "<a href=\"https://oas1012.uninpahu.edu.co/ulises/\">Da click aqui e ingresa a Ulises</a>"
const irUninpahu = "<a href=\"https://uninpahu.edu.co/\">Da click aqui e ingresa a la pagina principal de uninpahu</a>"
const irMoodle = "<a href=\"http://tecnologias.uninpahu.edu.co/moodle/\">Da click aqui e ingresa a moodle</a>"
