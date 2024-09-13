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
                        `
fetch('../../theater.json').then(response => response.json()).then(data => {

    const dates = data

    localStorage.setItem('theaterData', JSON.stringify(dates));

    const showTime = dates.filter((names) => {
        return names.name == cinemaName
    }).map((times) => {
        return times.timings.map((times) => {
            return times.time
        })
    })


    const showTimming = document.querySelector('.showTimming .showSection');


    showTime.map((time) => {
        return showTimming.innerHTML = time.map((time) => {
            return `<div class="time">
                        <div class="text">${time}</div>
                    </div>`
        }).join('')
    })

    const priceChanger = () => {

        const showPrice = dates.map((names) => {
            return names.timings
        }).flat().find((times) => {
            return times.time == movieTime.trim()
        })

        const priceSection = document.querySelectorAll('.priceSection');

        priceSection.forEach((price, i) => {

            if (i === 3) {
                newPrice = parseInt(showPrice.price) + " " + "Gold";
            }
            if (i === 2) {
                newPrice = parseInt(showPrice.price) + 50 + " " + "platinium";
            }
            if (i === 1) {
                newPrice = parseInt(showPrice.price) + 100 + " " + "Sofa";
            }
            if (i === 0) {
                newPrice = parseInt(showPrice.price) + 150 + " " + "Recliner";
            }

            price.innerHTML = ` 
        <div class="price"> 
        <div class="text">Rs.${newPrice}</div>
        
        </div>
        `
        })

    }

    priceChanger();

    const timeContainer = document.querySelectorAll('.showTimming .time');

    timeContainer.forEach((time) => {

        time.addEventListener('click', (e) => {
            // Find the closest .time element
            const clickedTime = e.target.closest('.time');

            clickedTime.classList.add('active');

            timeContainer.forEach((otherTime) => {
                if (otherTime !== clickedTime) {
                    otherTime.classList.remove('active');
                }
            });

            const movieTime = document.querySelector(".movieName .movieTime");

            movieTime.innerHTML = clickedTime.querySelector('.text').textContent;


            const selectedTime = clickedTime.querySelector('.text').textContent;
            const customPrice = dates
                .map((date) => date.timings)
                .flat()
                .filter((times) => {

                    return times.time.trim().toLowerCase() === selectedTime.trim().toLowerCase();
                }).find((prices) => {
                    return prices.price;
                });

            const priceSection = document.querySelectorAll('.priceSection');

            priceSection.forEach((price, i) => {

                if (i === 3) {
                    newPrice = parseInt(customPrice.price) + " " + "Gold";
                }
                if (i === 2) {
                    newPrice = parseInt(customPrice.price) + 50 + " " + "platinium";
                }
                if (i === 1) {
                    newPrice = parseInt(customPrice.price) + 100 + " " + "Sofa";
                }
                if (i === 0) {
                    newPrice = parseInt(customPrice.price) + 150 + " " + "Recliner";
                }
                price.innerHTML = `
                <div class="price"> 
                    <div class="text">Rs.${newPrice}</div>
                </div>
                    `
            })

        });
    });

    const active = () => {
        const timeContainer = document.querySelectorAll('.showTimming .time');
        const movieTime = document.querySelector('.movieTime');

        timeContainer.forEach((timeContainer) => {
            const timeText = timeContainer.textContent.trim();
            const movieTimeText = movieTime.textContent.trim();


            if (timeText === movieTimeText) {
                timeContainer.classList.add('active');
            }
        });

    };

    active();
})




