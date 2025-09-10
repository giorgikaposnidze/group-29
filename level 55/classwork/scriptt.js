document.getElementById('myForm').onsubmit = function(e) {
  e.preventDefault();
  const text = document.getElementById('textInput').value;
  const color = document.getElementById('colorInput').value;
  const output = document.getElementById('output');
  output.textContent = text;
  output.style.color = color;
};
