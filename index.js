// Code your solutions in this file


function writeCards(names, event) {
    let thankYouMessages = [];
  
    for (let i = 0; i < names.length; i++) {
      let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      thankYouMessages.push(message);
    }
  
    return thankYouMessages;
  }
  
  
  let messages = writeCards(["Charlie", "Samip", "Ali"], "birthday");
  console.log(messages);
  
  function countDown(num){
    while(num >= 0)
    {console.log(num)
    num--}
  }
  countDown(10)