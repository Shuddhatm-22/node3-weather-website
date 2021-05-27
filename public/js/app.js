


const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messgaeOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');




weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;

  messgaeOne.textContent = "Loading...";
  messageTwo.textContent = "";

  fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
    response.json().then(({ error, forecast, location } = {}) => {
      if (error) {
        messgaeOne.textContent = error;
      } else {
        
        messgaeOne.textContent = location;
        messageTwo.textContent = forecast;
      }
    });
  });
  


});
