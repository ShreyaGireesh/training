const first_number = document.querySelector('#number1')
const second_number = document.querySelector('#number2')
const result = document.querySelector('#result')

if (window.Worker) {
    const myWorker = new Worker("worker.js");
  
    [first_number, second_number].forEach(input => {
      input.onchange = function() {
        myWorker.postMessage([first_number.value, second_number.value]);
        console.log('Message posted to worker');
      }
    })
  
    myWorker.onmessage = function(e) {
      result.textContent = e.data;
      console.log('Message received from worker');
    }
  } else {
    console.log('Your browser doesn\'t support web workers.');
  }