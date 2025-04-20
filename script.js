function changeText() {
    document.getElementById("description").textContent = "The text has been changed using JavaScript!";
  }
  
  function changeStyle() {
    document.getElementById("title").style.color = "blue";
    document.getElementById("title").style.fontSize = "2.5rem";
  }
  
  function addElement() {
    const newDiv = document.createElement("div");
    newDiv.textContent = "A new element has been added!";
    newDiv.id = "newElement";
    document.getElementById("dynamic-area").appendChild(newDiv);
  }
  
  function removeElement() {
    const element = document.getElementById("newElement");
    if (element) {
      element.remove();
    }
  }
  