let responseText;

async function getReply(message) {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyAb_OXuGDMjmmSKWkTZv7f6NphAkkp8K_Y");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify({
  "contents": [{
  "parts":[{"text": `${message} in 50 words without markdown`}]
}]
}))
  xhr.onload = function() {
      var response = JSON.parse(xhr.responseText);
      responseText = (response.candidates[0].content.parts[0].text);
      
  }
  
  return(responseText);
}


/*
sendButton.addEventListener("click", () => {
  let message = inputBox.value;
  let output = getReply(message);
  console.log(output);
  answerBox.innerHTML = output;

});
*/