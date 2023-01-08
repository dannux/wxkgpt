// import assets
import bot from './assets/bot.svg';
import user from './assets/user.svg';

// define constants for elements form query selector and chat container
const form = document.querySelector('form');
const chatContainer = document.querySelector('#chat_container');

// declare loadInterval
let loadInterval;

// create function for thinking robot
function loader(element) {
  element.textContent = '';

  // create a dot in thinking chat every 300 ms
  loadInterval = setInterval(() => {
    element.textContent += '.';

    // reset after 3 dots
    if (element.textContent === '....') {
      element.textContent = '';
    }
  }, 300)
}


// define function for AI to display one line at the time. 
function typeText(element, text) {
  let index = 0

  let interval = setInterval(() => {
    // check if AI still typing
    if (index < text.length) {
      element.innerHTML += text.chartAt(index);
      index++;
    } else {
      clearInterval(interval);
    }
  }, 20)
}


// define function to generate unique id for every single message to be able to map over them
function generateUnqieId() {
  //using current date and time to generate a uniqueid plus more random add another number using randomNumber
  // and create a hex string
  const timestamp = Date.now();
  const randomNumber = Math.random();
  const hexadecimalString = randomNumber.toString(16);

  return `id-${timestamp}-${hexadecimalString}`;
}

// define function to create stripe in chat. Two color tones one for AI and one for user
function chatStripe(isAi, value, uniqueid) {
  return (
    `
      <div class="wrapper ${isAi && 'ai'}">
        <div class="chat">
          <div className="profile">
            <imgPP
              src="${isAi ? bot : user}"
              alt="${isAi ? 'bot' : 'user'}"
            />
          </div>
          <div class="message" id=${uniqueid}>${value}</div>
        </div>     
      </div> 
      `
  )
}

// define function to  handle submit function to trigger AI generation response
const handleSubmit = async (e) => {
  e.preventDefault();


}