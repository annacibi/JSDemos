
function calculateArea() {
   const length = parseFloat(document.getElementById('length').value);
   const width = parseFloat(document.getElementById('width').value);
    let area = length * width;
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

function calculateGroceryTotal() {

    const groc1 = parseFloat(document.getElementById('groc1').value);
    const groc2 = parseFloat(document.getElementById('groc2').value);
    const groc3 = parseFloat(document.getElementById('groc3').value);
    const total = groc1 + groc2 + groc3;
    document.getElementById('groceryTotal').innerText = `The total cost of groceries is: ${total}`;
}