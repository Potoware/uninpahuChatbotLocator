// Options the user could type in
const prompts = [
  ["hola", "buenas", "buen dia", "buenos dias", "hl","buen día","buenos días","buenas tardes","buenas noches"],
  ["como estas", "como va tu vida?", "como vas", "y tu?"],
  ["cuantos a", "que edad tienes", "edad", "cuando te crearon", "fecha de creacion"],
  ["quien eres", "quien eres tu", "como te llamas", "eres robot o humano","eres robot","eres humano", "quien es usted", "cual es tu nombre", "dime quien eres"],
  ["te amo","te quiero"],
  ["adios", "hasta luego", "chao", "bye"],
  ["bro"],
  [""],
  ["haha","ha","lol","hehe","jaja","jaaj"]
]

// Possible responses, in corresponding order

const replies = [
  ["Hola!, como estas?","Buen día, Como te encuentras"],
  [
    "Bien, gracias por preguntar",
    "exelente y tu?",
    "muy bien y tu?"
  ],
  ["Segun mi acta de nacimiento, tengo ....um espera"],
  [
    "Hola, yo soy una porción de codigo fuente, me llamo Chatbot Locator, mucho gusto",
    "Yo me llamo Chatbot Locator, soy un conjunto de unos y ceros 1010100101001",
    "Yo soy cortan... que diga Chatbot Locator",
    "Yo soy sir... que diga Chatbot Locator"
  ],
  ["Yo tambien", "Yo mas"],
  ["Hasta luego", "Chao", "Adios"],
  ["Bro!"],
  ["Escribe algo.."],
  ["Haha!","Gracioso"]
]

// Random for any other user input

const alternative = [
  "Ammm",
  "No te entiendo...",
  "Ops, intenta de nuevo...",
  "No conozco eso",
  "Estoy escuchando...",
  "No logro entenderte"
]

// Whatever else you want :)

const coronavirus = ["Quedate en casa", "Usa tapabocas", "Yo no tengo COVID"]
const badResponse = ["Lamento saberlo... Dime que puedo hacer por ti?","Lo lamento... dime que puedo hacer por ti?","Que mal.. Dime que puedo hacer para que te sientas mejor"]
const goodResponse =["Me alegro!!, cuentame, en que te puedo colaborar","Que bueno!, cuentame que estas buscando","Estupendo!, dime que puedo hacer por ti"]
const localizarSalon ="Que salon buscas? recuerda buscar por sede-numeroSalon, ejemplo: 10-101"
const aleatorio = "te llevaremos a un lugar magico de la universidad, estas listo?<br>"
const irUlises = "<a href=\"https://oas1012.uninpahu.edu.co/ulises/\">Da click aqui e ingresa a Ulises</a>"
const irUninpahu = "<a href=\"https://uninpahu.edu.co/\">Da click aqui e ingresa a la pagina principal de uninpahu</a>"
const irMoodle = "<a href=\"http://tecnologias.uninpahu.edu.co/moodle/\">Da click aqui e ingresa a moodle</a>"
