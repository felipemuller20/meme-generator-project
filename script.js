function insertText () {
  const textBox = document.getElementById('text-input');
  textBox.addEventListener('oninput', function () {
    console.log(event.input)
    let memeText = document.getElementById('meme-text');
    memeText.innerText = document.getElementById('text-input').value;
  });
}