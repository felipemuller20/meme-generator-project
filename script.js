function insertText () {
  const textBox = document.getElementById('text-input');
  textBox.addEventListener('input', function (event) {
    const newText = document.getElementById('meme-text');
    newText.innerText = event.target.value;
  });
}

insertText();