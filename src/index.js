console.log('Welcome to Bsale!');
let welcome = 'Hola!.Les presento mi tienda virtual. Hecha con Javascript puro';
const voice =(welcome)=>
speechSynthesis.speak(new SpeechSynthesisUtterance(welcome));
voice(welcome);
const card = document.querySelector('card')