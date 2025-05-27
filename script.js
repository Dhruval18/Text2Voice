function speakText() {
  const text = document.getElementById('textInput').value.trim();

  if (!text) {
    alert("Please enter some text.");
    return;
  }

  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = 'en-US'; // You can change language code here if needed
  window.speechSynthesis.speak(speech);
}
