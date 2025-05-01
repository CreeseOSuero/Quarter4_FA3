function create() {
    let input;
    do 
      {
        input = prompt("Enter a number: ");
      } 
    while (isNaN(input));
  
    let output = "Number inputted : " + input + "<br><br>";
  
    if (input % 2 !== 0) 
      {
        for (let i = input; i >= 1; i--) 
          {
            for (let j = 0; j < input; j++) 
              {
              output += i + " ";
              }
            output += "<br>";
          }
      } 
    else 
      {
        for (let i = input; i >= 1; i--) 
          {
            for (let j = 0; j < i; j++) 
              {
              output += i + " ";
              }
            output += "<br>";
          }
      }
  
    document.getElementById("output").innerHTML = output;
  }
  

  var contacts = [];

  function update() {
    document.getElementById("contactsDisplay").textContent = contacts.join(" ");
  }
  
  function addName() {
    var name = document.getElementById("name").value;
    if (contacts.length >= 7) 
      {
        contacts.shift();
      }
    contacts.push(name);
    update();
    document.getElementById("name").value = "";
  }
  
  function removeName() {
    contacts.pop();
    update();
  }
  

