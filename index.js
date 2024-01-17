const containerDiv = document.querySelector('.container');

function generateSquares(userInput) {
    for (let i=0; i<userInput**2; i++) {
        let calcValue = (976-userInput)/userInput-1;
        let calcValueString = calcValue.toString()+'px';
        let childDivs = document.createElement('div');
        childDivs.setAttribute('class', 'squares');
        childDivs.onmouseover = function() {
            childDivs.setAttribute('class', 'grey-squares');
        }
        childDivs.style.height = calcValueString;
        childDivs.style.width = calcValueString;
        containerDiv.appendChild(childDivs);
    }
}

const buttonData = document.querySelector('#Reset')

buttonData.onclick = function () {
    promptInput = prompt("How many squares per row/column would you like?");
    if (promptInput<=0) {
        alert("You can't have negative space, silly!");
    } else if (promptInput>50) {
        alert("Unfortunately we don't have the resources for that...");
    } else {
        function clearBoard() {
            while (containerDiv.firstChild) {
                containerDiv.removeChild(containerDiv.firstChild);
            }
        }
        clearBoard()
        generateSquares(promptInput);
    }
}