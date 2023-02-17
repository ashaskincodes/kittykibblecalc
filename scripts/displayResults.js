function displayResults() {
    const newDiv = document.createElement("div");
    newDiv.setAttribute('id','answer');
    const newContent = document.createTextNode(`Your kitty should be eating around ${Math.round(calories)} calories each day.`);
    newDiv.appendChild(newContent);
    document.getElementById("grandparent").appendChild(newDiv);
}

function confirmResults() {
    if(document.getElementById("answer")){
        const element = document.getElementById('answer');
        element.remove();
        displayResults();
    } else {
        displayResults();
    }
}