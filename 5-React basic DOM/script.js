function addDiv(id) {
  let rootDiv = document.getElementById(id);
  let div = document.createElement('div');
  div.classList.add('simple');
  let input = document.createElement('input');
  input.classList.add('inputClass');
  div.appendChild(input);

  rootDiv.appendChild(div);
}
