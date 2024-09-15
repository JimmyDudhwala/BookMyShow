
const movieSection = document.getElementById("movieName");

const movieData = JSON.parse(localStorage.getItem('selectedMovie')) || {};

const cinemaName = JSON.parse(localStorage.getItem('selectedTheater')) || '';

const movieTime = JSON.parse(localStorage.getItem('selectedTime')) || '';

const selectedDate = JSON.parse(localStorage.getItem('selectedDate')) || {};

console.log(selectedDate);

const d = new Date();
const currentDate = d.getDate();
const currentMonth = d.getMonth() + 1;
const currentDay = d.getDay();

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const selectedMonthIndex = monthNames.indexOf(selectedDate.month) + 1;
const selectedDayIndex = dayNames.indexOf(selectedDate.day);

const isToday = currentDate == selectedDate.date && currentMonth == selectedMonthIndex && currentDay == selectedDayIndex;

const formattedDate = isToday ? `Today, ${currentDate} ${currentMonth}` : `${selectedDate.day}, ${selectedDate.date} ${selectedDate.month}`;

movieSection.innerHTML = `
                        <div class="name">
${movieData.title}<span>${movieData.ageRate}</span>
                        </div>
                        <div class="theaterInfo">
                            <div>
                               ${cinemaName}, Anand
                            </div>
                            <div>&nbsp;|&nbsp;</div>
                            <div>
                                ${formattedDate}, <span class="movieTime">${movieTime}</span>
                            </div>
                        </div>
                        `
const noOfTickets = document.querySelector('.noOfTicketsCount');

const noOf = localStorage.getItem('noOfTickets') || 0;

noOfTickets.innerHTML = noOf;

const seatDetail = document.querySelector('.seatDetail');

const selectedSeats = JSON.parse(localStorage.getItem('ticketInfo')) || [];


const seatInfo = document.querySelector('.seatInfo');

seatInfo.innerHTML = selectedSeats.filter((seat) => seat.section).map(seat => {
    return seat.section + ' ' + seat.row + seat.seatNo;
}).join(', ');  // A1, A2, A3

const seatPrice = JSON.parse(localStorage.getItem('total')) || 0;


document.querySelector('.seatDetail .seatPrice').innerHTML = `Rs. ${(seatPrice).toFixed(2)}`;

document.querySelector('.base .price').innerHTML = `Rs. ${(parseFloat(seatPrice) * 0.20).toFixed(2)}`;

document.querySelector('.gst .price').innerHTML = `Rs. ${(parseFloat(seatPrice) * 0.20 * 0.18).toFixed(2)}`;

document.querySelector('.feePrice').innerHTML = `Rs. ${(parseFloat(seatPrice) * 0.20 + parseFloat(seatPrice) * 0.20 * 0.18).toFixed(2)}`;

document.querySelector('.subtotal .price').innerHTML = `Rs. ${(parseFloat(seatPrice) + parseFloat(seatPrice) * 0.20 + parseFloat(seatPrice) * 0.20 * 0.18).toFixed(2)}`;

function addRs() {

    let currentPrice = parseFloat(document.querySelector('.contributionCartPrice .amt').innerHTML) || 0;
    document.querySelector('.contributionCartPrice .amt').innerHTML = (currentPrice + 2).toFixed(2);
}

document.querySelector('.contributionCartPrice .priceAdd').addEventListener('click', () => {
    addRs();
    total();
    maxTotal();
});

function total() {
    document.querySelector('.total .price').innerHTML = `Rs. ${(parseFloat(seatPrice) + parseFloat(seatPrice) * 0.20 + parseFloat(seatPrice) * 0.20 * 0.18 + (parseFloat(document.querySelector('.contributionCartPrice .amt').innerHTML) || 0)).toFixed(2)}`;
}

total();

function maxTotal() {
    document.querySelector('.payment .price span').innerHTML = `Rs. ${(parseFloat(seatPrice) + parseFloat(seatPrice) * 0.20 + parseFloat(seatPrice) * 0.20 * 0.18 + (parseFloat(document.querySelector('.contributionCartPrice .amt').innerHTML) || 0)).toFixed(2)}`;
}

maxTotal()

const choiceRadio = document.querySelectorAll('.choice input[type="radio"]');

choiceRadio.forEach((radio) => {
    radio.addEventListener('click', () => {
        if (radio.checked) {
            choiceRadio.forEach((otherRadio) => {
                if (otherRadio !== radio) {
                    otherRadio.checked = false;
                }
                else {
                    otherRadio.checked = true;
                }
            });

        }
    });
});

const dropdown = document.querySelector('.fee .dropdown');

const dropIcon = document.querySelector('.fee .feeBanner .icon');

