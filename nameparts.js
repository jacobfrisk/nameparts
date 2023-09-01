// Her defineres det fulde navn
const personName = "Jacob Friis Strand";

// For at finde fornavnet dynamisk, bruger vi indexet af det første mellemrum, sådan at længden på navnet ikke betyder noget
const endOfFirstName = personName.indexOf(" ");

// Der laves en substring fra starten af strengen "0" og "endOfFirstName" for at trække fornavnet ud
firstName = personName.substring(0, endOfFirstName);

// Her skrives fornavnet i DOM'en
document.querySelector("#first-name").textContent = firstName;

// For at finde mellemnavnet bruger vi lastIndexOf til at finde det sidste mellemrum i navnet
const endOfMiddleName = personName.lastIndexOf(" ");

// Vi laver middleName med substring ud fra endOfMiddleName som er et mellemrum. For at undgå at få dette med plusser vi med 1
middleName = personName.substring(endOfFirstName, endOfMiddleName);

// Her skrives mellemnavnet i DOM'en
document.querySelector("#middle-name").textContent = middleName;

// For at finde starten af efternavnet skal vi bruge endOfMiddleName, som er det sidste mellemrum, og herefter tilføje 1 for at komme hen til det først bogstav i efternavnet
const endOfName = endOfMiddleName + 1;

// Her definerer vi efternavnet da vi kun bruger endOfName som parameter, hvor at den så tager resten af strengen.
lastName = personName.substring(endOfName);

// Her skrives efternavnet i DOM'en
document.querySelector("#last-name").textContent = lastName;
