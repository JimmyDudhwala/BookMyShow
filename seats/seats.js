document.addEventListener("DOMContentLoaded", function () {

    if (!localStorage.getItem('pageRefreshed')) {

        localStorage.setItem('pageRefreshed', 'true');

        location.reload();
    } else {

        localStorage.removeItem('pageRefreshed');
    }

    let noOf = parseInt(localStorage.getItem('noOfTickets'), 10) || 0; // Initialize noOf from local storage
    let ticketInfoArray = JSON.parse(localStorage.getItem('ticketInfo')) || []; // Initialize ticketInfoArray from local storage

    const priceSections = document.querySelectorAll('.priceSection');
    const checkboxes = document.querySelectorAll('.seatBox input[type="checkbox"]');
    const totalPriceElement = document.querySelector('.totalPriceSection .total');
    const totalPriceSection = document.querySelector('.totalPriceSection');
    const totalPriceContainer = document.querySelector('.totalPriceSection');
    const noOfTicketsElement = document.querySelector('.noOfTicketsCount');



    const updateTotalPrice = () => {
        let total = 0;
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                const group = checkbox.closest(".group");
                const priceSection = group.querySelector('.priceSection');
                const priceText = priceSection.textContent.match(/\d+/)[0];
                total += parseFloat(priceText);
            }
        });
        totalPriceElement.textContent = `Rs. ${total.toFixed(2)}`;
        localStorage.setItem('total', total.toFixed(2)); // Store total in local storage

        console.log(`Total price: ${total}`); // Debugging log
    };

    checkboxes.forEach(cb => {
        cb.addEventListener('change', () => {
            const priceSection = cb.closest(".group");
            const rowContainer = cb.closest(".seat").querySelector(".seatRow");

            const price = priceSection.querySelector('.priceSection').textContent;
            const priceText = price.match(/\d+/)[0];

            let total = parseFloat(totalPriceElement.textContent.replace('Rs. ', '')) || 0;
            const row = rowContainer.textContent;
            const seatNo = cb.getAttribute("no");
            const section = priceSection.querySelector('.priceSection span').textContent;

            if (cb.checked) {
                noOf++;
                total += parseFloat(priceText);

                const ticketInfo = {
                    row: row,
                    seatNo: seatNo,
                    section: section
                };

                if (!ticketInfoArray.some(info => info.row === row && info.seatNo === seatNo && info.section === section)) {
                    ticketInfoArray.push(ticketInfo);
                    localStorage.setItem('ticketInfo', JSON.stringify(ticketInfoArray));
                }

                localStorage.setItem('total', JSON.stringify(total));

            } else {
                noOf--;
                total -= parseFloat(priceText);
                ticketInfoArray = ticketInfoArray.filter(info => !(info.row === row && info.seatNo === seatNo && info.section === section));
                localStorage.setItem('ticketInfo', JSON.stringify(ticketInfoArray));
                console.log(ticketInfoArray);
            }

            totalPriceElement.textContent = `Rs. ${total.toFixed(2)}`;
            localStorage.setItem('noOfTickets', noOf); // Store noOf in local storage
            console.log(total);

            // Check if there are no checkboxes checked
            const anyChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
            if (!anyChecked) {
                totalPriceContainer.style.display = 'none';
            } else {
                totalPriceContainer.style.display = 'flex';
            }

            noOfTicketsElement.textContent = noOf;

            if (noOf > 0) {
                totalPriceContainer.style.display = 'flex';
                console.log('Displaying totalPriceContainer'); // Debugging log
            } else {
                totalPriceContainer.style.display = 'none';
                console.log('Hiding totalPriceContainer'); // Debugging log
            }
        });
    });

    updateTotalPrice(); // Initial calculation


    ticketInfoArray.forEach(ticketInfo => {
        const checkbox = document.querySelector(`.seatBox input[no="${ticketInfo.seatNo}"]`);
        if (checkbox) {
            checkbox.checked = true;
        }
    });

    // Update the UI based on remaining localStorage data
    const savedTotal = parseFloat(localStorage.getItem('total')) || 0;
    totalPriceElement.textContent = `Rs. ${savedTotal.toFixed(2)}`;

    const noOfTickets = JSON.parse(localStorage.getItem('noOfTickets')) || 0;
    noOfTicketsElement.textContent = noOfTickets;

    const anyChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
    if (!anyChecked) {
        totalPriceContainer.style.display = 'none';
    } else {
        totalPriceContainer.style.display = 'flex';
    }
});

// Flag to determine if navigating away using a link
let isNavigatingAway = false;

// Set the flag when navigating away using a link
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        isNavigatingAway = true;
    });
});

// Clear data on page reload or close
window.addEventListener('beforeunload', (event) => {
    if (!isNavigatingAway) {
        localStorage.removeItem('ticketInfo');
        localStorage.removeItem('noOfTickets');

    }

});

// Clear data on page unload
window.addEventListener('unload', (event) => {

    const checkboxe = document.querySelectorAll('.seatBox input[type="checkbox"]');
    checkboxe.forEach(checkbo => {
        checkbo.checked = false;
    });

});

// Additional code for movie and theater information
const movieSection = document.getElementById("movieName");

const movieData = JSON.parse(localStorage.getItem('selectedMovie'));
const cinemaName = JSON.parse(localStorage.getItem('selectedTheater'));
const movieTime = JSON.parse(localStorage.getItem('selectedTime'));
const selectedDate = JSON.parse(localStorage.getItem('selectedDate'));

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
`;

fetch('../Theater.json').then(response => response.json()).then(data => {
    const dates = data;
    localStorage.setItem('theaterData', JSON.stringify(dates));

    const showTime = dates.filter(names => names.name == cinemaName)
        .map(times => times.timings.map(times => times.time));

    const showTimming = document.querySelector('.showTimming .showSection');

    showTime.map(time => {
        return showTimming.innerHTML = time.map(time => {
            return `<div class="time">
                        <div class="text">${time}</div>
                    </div>`;
        }).join('');
    });

    const priceChanger = () => {
        const showPrice = dates.map(names => names.timings)
            .flat()
            .find(times => times.time == movieTime.trim());

        const priceSection = document.querySelectorAll('.priceSection');

        priceSection.forEach((price, i) => {
            let newPrice;
            if (i === 3) {
                newPrice = `${parseInt(showPrice.price)} <span>Gold</span>`;
            }
            if (i === 2) {
                newPrice = `${parseInt(showPrice.price) + 50} <span>platinium</span>`;
            }
            if (i === 1) {
                newPrice = `${parseInt(showPrice.price) + 100} <span>Sofa</span>`;
            }
            if (i === 0) {
                newPrice = `${(parseInt(showPrice.price) + 150)} <span>Recliner</span>`;
            }

            price.innerHTML = ` 
                <div class="price"> 
                    <div class="text">Rs.${newPrice}</div>
                </div>
            `;
        });
    };

    priceChanger();

    const timeContainer = document.querySelectorAll('.showTimming .time');

    timeContainer.forEach(time => {
        time.addEventListener('click', e => {
            const totalPriceContainer = document.querySelector('.totalPriceSection');
            totalPriceContainer.style.display = 'none';

            const checkboxe = document.querySelectorAll('.seatBox input[type="checkbox"]');
            checkboxe.forEach(checkbo => {
                checkbo.checked = false;
            });

            const clickedTime = e.target.closest('.time');

            clickedTime.classList.add('active');

            timeContainer.forEach(otherTime => {
                if (otherTime !== clickedTime) {
                    otherTime.classList.remove('active');
                }
            });

            const movieTime = document.querySelector(".movieName .movieTime");

            movieTime.innerHTML = clickedTime.querySelector('.text').textContent;

            const selectedTime = clickedTime.querySelector('.text').textContent;
            const customPrice = dates
                .map(date => date.timings)
                .flat()
                .filter(times => times.time.trim().toLowerCase() === selectedTime.trim().toLowerCase())
                .find(prices => prices.price);

            const priceSection = document.querySelectorAll('.priceSection');

            priceSection.forEach((price, i) => {
                let newPrice;
                if (i === 3) {
                    newPrice = `${parseInt(customPrice.price)} <span>Gold</span>`;
                }
                if (i === 2) {
                    newPrice = `${parseFloat(customPrice.price) + 50} <span>platinium</span>`;
                }
                if (i === 1) {
                    newPrice = `${parseFloat(customPrice.price) + 100} <span>Sofa</span>`;
                }
                if (i === 0) {
                    newPrice = `${parseFloat(customPrice.price) + 150}  <span>Recliner</span>`;
                }
                price.innerHTML = `
                    <div class="price"> 
                        <div class="text">Rs.${newPrice}</div>
                    </div>
                `;
            });
        });
    });

    const active = () => {
        const timeContainer = document.querySelectorAll('.showTimming .time');
        const movieTime = document.querySelector('.movieTime');

        timeContainer.forEach(timeContainer => {
            const timeText = timeContainer.textContent.trim();
            const movieTimeText = movieTime.textContent.trim();

            if (timeText === movieTimeText) {
                timeContainer.classList.add('active');
            }
        });
    };

    active();
});