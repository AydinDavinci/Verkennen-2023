var overallCounter = document.getElementById('overallCounter');
var grandTotalCounter = document.getElementById('grandTotalCounter');
var bestelKnop = document.getElementById('bestelKnop');

function bestelTosti(counterId) {
    updateCounter(counterId, 1);
}

function bestelAlles() {
    var totalOrders = parseInt(overallCounter.innerHTML);

    if (totalOrders > 12) {
        alert('Sorry, u mag maar maximaal 12 items bestellen per keer! Verwijder a.u.b wat items');
    } else if (totalOrders < 6) {
        alert('Sorry, U moet minimaal 6 items bestellen per keer!');
    } else {
        updateGrandTotal();
        resetCounters();
        updateRoundCounter(); // Add this line to update the round counter

        var grandTotal = parseInt(grandTotalCounter.innerHTML);

        if (grandTotal >= 60) {
            disableOrderButtons();
            bestelKnop.disabled = true; // Disable the "bestelKnop" button
            bestelKnop.id = 'knopDisabled'; // Optionally change the ID for styling purposes
            alert("De tosti's komen uw kant op! Eet smakelijk!");
        } else {
            bestelKnop.disabled = false; // Enable the "bestelKnop" button
            alert("De tosti's komen uw kant op! Eet smakelijk!");
        }
    }
}

function disableOrderButtons() {
    // Assuming you have buttons with the class 'orderButton' that you want to disable
    var orderButtons = document.getElementsByClassName('orderButton');

    for (var i = 0; i < orderButtons.length; i++) {
        orderButtons[i].disabled = true;
    }

    console.log('Order buttons disabled');
}


function updateRoundCounter() {
    var roundCounter = document.getElementById("rondeCounter");
    var currentRounds = parseInt(roundCounter.innerHTML);

    if (currentRounds > 1) {
        roundCounter.innerHTML = currentRounds - 1;
    } else {
        roundCounter.innerHTML = 0;
        console.log('disabled');
        document.getElementById("bestelKnop").disabled = true;
        document.getElementById('bestelKnop').id = 'knopDisabled';
        alert('Je bent door je rondes heen!')
    }
}   


function verwijder(counterID) {
    var counterElement = document.getElementById(counterID);
    var currentCount = parseInt(counterElement.innerHTML);

    if (currentCount > 0) {
        updateCounter(counterID, -1);
    }
}

function updateCounter(counterId, value) {
    var counterElement = document.getElementById(counterId);
    var currentCount = parseInt(counterElement.innerHTML);
    var newCount = Math.max(currentCount + value, 0); // Ensure count doesn't go below zero
    counterElement.innerHTML = newCount;

    var totalOrders = parseInt(overallCounter.innerHTML);
    overallCounter.innerHTML = totalOrders + value;
}

function resetCounters() {
    var counterElements = document.getElementsByClassName("counter");
    for (var i = 0; i < counterElements.length; i++) {
        counterElements[i].innerHTML = '0';
    }
    overallCounter.innerHTML = '0';
}

function updateGrandTotal() {
    var currentGrandTotal = parseInt(grandTotalCounter.innerHTML);
    grandTotalCounter.innerHTML = currentGrandTotal + parseInt(overallCounter.innerHTML);
}
