let inputButton = document.getElementById("input-button");
let outputs = document.getElementById("outputs");

function checkStorage () {
  if(localStorage.contacts) {
    let inputArray = JSON.parse (localStorage.contacts);
    return inputArray;
  } else {
    localStorage.setItem("contacts", "[]");
    return [];
  }
}

let callAddThenShow = function() {
  // add input
  let inputText = document.getElementById("input-text").value;
  if (inputText !== "") {
    let inputArray = checkStorage();
    inputArray.push({ input: inputText });
    localStorage.contacts = JSON.stringify(inputArray);
    document.getElementById("input-text").value = "";
  } else {
    alert("Input can't be empty");
  }

  // show output
  outputs.innerHTML = "";
  let contacts = checkStorage();
  contacts.map(output => {
    let list = document.createElement("li");
    let outputNode = document.createTextNode(output.input);
    list.appendChild(outputNode);
    outputs.append(list);
  });
};

inputButton.addEventListener("click", callAddThenShow);
