// Get a reference to the button element with ID "remove-colors-button"
const removeColorsBtn = document.getElementById("remove-colors-button");

// Add a click event listener to the button that calls doDeTing function
removeColorsBtn.addEventListener("click", doDeTing);

// Define doDeTing function
function doDeTing() {
  // Log "Clickity Click!" to the console
  console.log("Clickity Click!");

  // Get an array of all tbody elements and convert it to a real array
  const tbodyArray = Array.from(document.getElementsByTagName("tbody"));

  // For each tbody element, get an array of its child tr elements and remove their class name
  tbodyArray.map((tbody) => {
    const trArray = Array.from(tbody.children);
    trArray.map((tr) => {
      tr.className = "";
    });
  });
}
