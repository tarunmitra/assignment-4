calculateTotal();
function counter(inputForm, count) {
    const seatsCount = document.getElementById(inputForm);
    let seats = 0;
    if (seatsCount.value != '') {
        seats = parseInt(seatsCount.value);
        seats = seats + count;
        if (seats < 0) {
            seats = 0;
        }
    }
    else {
        if (count == 1) {
            seats = 1;
        }
        else if (count == -1) {
            seats = 0;
        }
    }
    seatsCount.value = seats;
    calculateTotal();
}

function calculateTotal() {
    const firstClassTickets = totalTickets('first-class-count');
    const economyClassTickets = totalTickets('economy-class-count');
    const subtotal = firstClassTickets * 150 + economyClassTickets * 100;
    const vat = Math.round(subtotal * .1);
    const grandtotal = subtotal + vat;
    document.getElementById('subtotal').innerText = '$' + subtotal;
    document.getElementById('vat').innerText = '$' + vat;
    document.getElementById('grand-total').innerText = '$' + grandtotal;
}

function totalTickets(inputForm) {
    const ticketString = document.getElementById(inputForm).value;
    if (ticketString == '') {
        return 0;
    }
    else {
        return parseInt(ticketString);
    }
}

function confirmation() {
    const firstClassTickets = totalTickets('first-class-count');
    const economyClassTickets = totalTickets('economy-class-count');

    if (firstClassTickets + economyClassTickets) {
        document.getElementById('first-class-seats').innerText = firstClassTickets;
        document.getElementById('economy-class-seats').innerText = economyClassTickets;
        document.getElementById('total-cost').innerText = document.getElementById('grand-total').innerText;
        document.getElementsByClassName('booking-form')[0].style.display = 'none';
        document.getElementsByClassName('booking-confirmation')[0].style.display = 'block';
    }
    else {
        alert('Please Select your ticket first and submit');
    }

}