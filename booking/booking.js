document.addEventListener("DOMContentLoaded", function () {
    var swiperContainer = document.querySelector(".mySwiper");
    if (swiperContainer) {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 5,
            spaceBetween: 4,
            freeMode: true,
            cssMode: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    } else {
        console.error("Swiper container not found.");
    }
});


const selectedMovie = JSON.parse(localStorage.getItem('selectedMovie'));

const genres = selectedMovie.genre.split('/');

const genreListItems = genres.map(genre => `<li>${genre}</li>`).join('');


// const headingSection = document.querySelector(".headingSection .title a");

// function navigateToMoviePage() {
//     const href = "../movies/movie.html";
//     window.location.href = href;
// }

if (selectedMovie) {
    const headingSection = document.querySelector(".heading");

    headingSection.innerHTML = `    
        <div class="headingSection">    
            <div class="title"><a href="#" onclick="navigateToMoviePage()">${selectedMovie.title}</a></div>

            <div class="goner">
                <div class="rated"><span>${selectedMovie.ageRate}</span></div>
                <div class="gonerList">
                    <ul>
                        ${genreListItems}
                    </ul>
                </div>
            </div>
        </div>
    `;
}

const theaterName = document.querySelector(".parent");


document.addEventListener('DOMContentLoaded', function () {


    fetch('../Theater.json')
        .then(response => response.json())
        .then(data => {

            const theaters = data;

            function displayTheaters(theaters) {
                theaterName.innerHTML = '';
                theaters.forEach((theater, i) => {

                    theaterName.innerHTML += `
                        <div class="cinemaSection">
                            <div class="cinemaContainer">
                                <div class="cinemaName">
                                    <div class="heart">
                                        <svg id="heartSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="17" height="17">
                                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="none" stroke="#999999" stroke-width="1" />
                                        </svg>
                                    </div>
                                    <div class="aboutCinema">
                                        <div class="name">
                                            <div class="title">${theater.name}</div>
                                            <div class="info">
                                                <div class="icon">
                                                    <img src="https://in.bmscdn.com/moviemode/cinemaphotoshowcase/info.png" class="venue-info-icon lazy" onerror="this.src='https:/\/\in.bmscdn.com/m6/images/common/placeholder.png'; this.onerror='';" width="16" height="16">
                                                </div>
                                                <div class="text">INFO</div>
                                            </div>
                                        </div>
                                        <div class="facility">
                                            <div class="mTicket">
                                                <div class="icon">
                                                    <svg fill="#49ba8e" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22px" height="22px" viewBox="0 0 461.68 461.679" xml:space="preserve" stroke="#49ba8e" stroke-width="0.0046168">
                                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="4.6168000000000005"></g>
                                                        <g id="SVGRepo_iconCarrier">
                                                            <g>
                                                                
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <div class="text">M-Ticket</div>
                                            </div>
                                            <div class="foodSection">
                                                <div class="icon">
                                                    <svg fill="#ffa426" height="22px" width="22px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 210.011 210.011" xml:space="preserve">
                                                        <path d="M198.012,53.322h-5.833h-37.834V37.183c0-4.397,2.43-8.377,6.341-10.387l33.776-17.348c2.456-1.261,3.425-4.275,2.164-6.732 c-1.262-2.457-4.275-3.426-6.732-2.163l-33.777,17.348c-7.261,3.729-11.773,11.118-11.773,19.281v16.139h-37.834h-5.833 c-2.761,0-5,2.238-5,5v7.346c0,2.762,2.239,5,5,5h1.514l3.494,62.622c-1.986-0.345-4.024-0.535-6.107-0.535H42.61 c-19.636,0-35.611,15.975-35.611,35.61c0,4.004,2.646,7.402,6.28,8.537c-0.18,0.831-0.28,1.692-0.28,2.577 c0,0.908,0.108,1.79,0.297,2.641c-3.652,1.211-6.297,4.653-6.297,8.707v10.008c0,5.059,4.116,9.176,9.176,9.176h98.521h11.318 h57.979c2.653,0,4.844-2.072,4.992-4.722l7.512-134.622h1.514c2.761,0,5-2.238,5-5v-7.346 C203.012,55.56,200.773,53.322,198.012,53.322z M42.61,142.754h56.97c13.768,0,25.033,10.919,25.589,24.552h-8.151H25.172h-8.151 C17.578,153.673,28.843,142.754,42.61,142.754z M16.999,191.651h8.173h91.846h8.173v8.36H16.999V191.651z"></path>
                                                    </svg>
                                                </div>
                                                <div class="text">Food & Beverage</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="cinemaTime">
                                <div class="coupon">
                                    <div class="icon">
                                        <img src="../images/superstaroffer-3x.avif" alt width="16px" height="16px">
                                    </div>
                                    <div class="text">5% off for Superstars | use code:STAR5</div>
                                </div>
                                <div class="timeSection">
                                
                                    ${theater.timings.map(showTime => `
                                        
                                         <a href="../seats/seats.html"> 
                                            <div class="timeContainer">
                                                <div class="block">
                                                    <div class="blockSection">
                                                        <div class="rs">${parseFloat(showTime.price)}rs.</div>
                                                        <div class="chair">Gold</div>
                                                        <div class="avail">Available</div>
                                                    </div>
                                                    <div class="blockSection">
                                                        <div class="rs">${parseFloat(showTime.price) + 50}rs.</div>
                                                        <div class="chair">Platinium</div>
                                                        <div class="avail">Available</div>
                                                    </div>
                                                    <div class="blockSection">
                                                        <div class="rs">${parseFloat(showTime.price) + 100}rs.</div>
                                                        <div class="chair">Sofa</div>
                                                        <div class="avail">Available</div>
                                                    </div>
                                                    <div class="blockSection">
                                                        <div class="rs">${parseFloat(showTime.price) + 150}rs.</div>
                                                        <div class="chair">Recliner</div>
                                                        <div class="avail">Available</div>
                                                    </div>
                                                </div>
                                                <div class="time">
                                                    <div class="text">${showTime.time}</div>
                                                </div>
                                            </div>
                                        </a>
                                    `).join('')}
                                </div>
                                <div class="cancellation">
                                    <ul>
                                        <li><div class="bullet"></div>
                                            <span>Cancellation Available</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    `;


                });

                // Attach event listeners to heart SVGs
                const heartSvgs = document.querySelectorAll("#heartSvg");
                heartSvgs.forEach((item) => {
                    let toggle = false;
                    item.addEventListener("click", function () {
                        console.log("click to heart");
                        const path = item.querySelector("path");
                        if (path) {
                            if (toggle) {
                                gsap.to(path, { fill: "#f84464", stroke: "none", duration: 0.5, opacity: 1 });
                            } else {
                                gsap.to(path, { fill: "none", stroke: "#999999", duration: 0.5 });
                            }
                            toggle = !toggle;
                        } else {
                            console.error("Path element not found in the SVG.");
                        }
                    });
                });
            }
            displayTheaters(theaters);

            // const langFilter = document.querySelectorAll('.lang li');

            // console.log(langFilter);

            // langFilter.forEach(function (item) {
            //     item.addEventListener('click', function () {
            //         const langu = item.textContent.toLowerCase();
            //         const filteredTheaters = theaters.filter(theater => {
            //             return theater['lang-screen'].some(lang => lang.toLowerCase().includes(langu));

            //         });
            //         console.log("working");
            //         const choice = document.querySelector(".langChoice .text");


            //         if (filteredTheaters.length != 0) {
            //             choice.innerHTML = `${item.textContent}`;
            //             displayTheaters(filteredTheaters);
            //         } else {
            //             alert("No theaters found");
            //         }
            //     });
            // });

            // const regionFilter = document.querySelectorAll('.region li input[type="checkbox"]');

            // regionFilter.forEach((item) => {
            //     item.addEventListener('change', function () {
            //         const region = item.value.toLowerCase();
            //         console.log(region);
            //         const selectedRegions = Array.from(regionFilter)
            //             .filter(checkbox => checkbox.checked)
            //             .map(checkbox => checkbox.value.toLowerCase());

            //         let filteredTheatersR = theaters.filter(theater => {
            //             return selectedRegions.some(region => theater['regions'].toLowerCase().includes(region));
            //         });

            //         if (filteredTheatersR.length != 0) {
            //             choice.innerHTML = `${item.textContent}`;
            //             displayTheaters(filteredTheatersR);
            //         }
            //     });
            // });

            // const priceFilter = document.querySelectorAll('.price li input[type="checkbox"]');

            // priceFilter.forEach((item) => {
            //     item.addEventListener('change', function () {
            //         const prices = item.value;
            //         console.log(prices);

            //         const selectedPrices = theaters.map(theater => {
            //             return {
            //                 ...theater,
            //                 timings: theater.timings.filter(timing => timing.price <= prices)
            //             };
            //         }).filter(theater => theater.timings.length > 0);

            //         console.log(selectedPrices);



            //         if (selectedPrices.length != 0) {
            //             choice.innerHTML = `${item.textContent}`;
            //             displayTheaters(selectedPrices);
            //         }
            //         else {
            //             alert("No theaters found");
            //             item.checked = false;
            //         }

            //     });

            // });

            // const timeFilter = document.querySelectorAll('.time li input[type="checkbox"]');

            // console.log(timeFilter);
            // timeFilter.forEach((item) => {
            //     item.addEventListener('change', function () {
            //         const times = item.value;
            //         console.log(times);

            //         const selectedtimes = theaters.map(theater => {
            //             return {
            //                 ...theater,
            //                 timings: theater.timings.filter(timing => timing.myTime >= times)
            //             };
            //         }).filter(theater => theater.timings.length > 0);

            //         console.log(selectedtimes);

            //         if (selectedtimes.length != 0) {
            //             choice.innerHTML = `${item.textContent}`;
            //             displayTheaters(selectedtimes);
            //         }
            //         else {
            //             alert("No theaters found");
            //             item.checked = false;
            //         }

            //     });

            // });

            let selectedLang = '';
            let selectedRegions = [];
            let selectedPrices = [];
            let selectedTimes = [];


            const langFilter = document.querySelectorAll('.lang li');
            const regionFilter = document.querySelectorAll('.region li input[type="checkbox"]');
            const priceFilter = document.querySelectorAll('.price li input[type="checkbox"]');
            const timeFilter = document.querySelectorAll('.time li input[type="checkbox"]');

            function applyFilters() {
                let filteredTheaters = theaters;

                if (selectedLang) {
                    filteredTheaters = filteredTheaters.filter(theater => {
                        return theater['lang-screen'].some(lang => lang.toLowerCase().includes(selectedLang));
                    });
                }

                if (selectedRegions.length > 0) {
                    filteredTheaters = filteredTheaters.filter(theater => {
                        return selectedRegions.some(region => theater['regions'].toLowerCase().includes(region));
                    });
                }

                if (selectedPrices.length > 0) {
                    filteredTheaters = filteredTheaters.map(theater => {
                        return {
                            ...theater,
                            timings: theater.timings.filter(timing => {
                                const price = parseInt(timing.price.replace('Rs. ', ''));
                                return selectedPrices.some(priceRange => {
                                    if (priceRange === 100) return price <= 100;
                                    if (priceRange === 200) return price > 100 && price <= 200;
                                    if (priceRange === 300) return price > 200 && price <= 300;
                                    if (priceRange === 301) return price > 300;
                                });
                            })
                        };
                    }).filter(theater => theater.timings.length > 0);
                }

                if (selectedTimes.length > 0) {
                    filteredTheaters = filteredTheaters.map(theater => {
                        return {
                            ...theater,
                            timings: theater.timings.filter(timing => {
                                const time = parseInt(timing.myTime);
                                return selectedTimes.some(selectedTime => time >= selectedTime);
                            })
                        };
                    }).filter(theater => theater.timings.length > 0);
                }

                if (filteredTheaters.length != 0) {
                    displayTheaters(filteredTheaters);
                } else {
                    alert("No theaters found");
                    const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
                    allCheckboxes.forEach(checkbox => {
                        checkbox.checked = false;
                    });

                    selectedLang = '';
                    selectedRegions = [];
                    selectedPrices = [];
                    selectedTimes = [];

                }
            }

            langFilter.forEach(function (item) {
                item.addEventListener('click', function () {
                    selectedLang = item.textContent.toLowerCase();
                    const choice = document.querySelector(".langChoice .text");
                    choice.innerHTML = `${item.textContent}`;

                    applyFilters();
                });
            });

            regionFilter.forEach((item) => {
                item.addEventListener('change', function () {
                    selectedRegions = Array.from(regionFilter)
                        .filter(checkbox => checkbox.checked)
                        .map(checkbox => checkbox.value.toLowerCase());

                    const choice = document.querySelector(".regionChoice .text");

                    if (Array.from(regionFilter).some(checkbox => checkbox.checked)) {
                        choice.innerHTML = "";
                    }
                    else {
                        choice.innerHTML = "Filter sub Regions";
                    }

                    choice.innerHTML += Array.from(regionFilter)
                        .filter(checkbox => checkbox.checked)
                        .map(checkbox => checkbox.parentElement.textContent)
                        .join(' ,');

                    applyFilters();
                });
            });

            priceFilter.forEach((item) => {
                item.addEventListener('change', function () {
                    selectedPrices = Array.from(priceFilter)
                        .filter(checkbox => checkbox.checked)
                        .map(checkbox => parseInt(checkbox.value));

                    const choice = document.querySelector(".priceChoice .text");

                    if (Array.from(priceFilter).some(checkbox => checkbox.checked)) {
                        choice.innerHTML = "";
                    }
                    else {
                        choice.innerHTML = "Filter Price Range";
                    }

                    choice.innerHTML += Array.from(priceFilter)
                        .filter(checkbox => checkbox.checked)
                        .map(checkbox => checkbox.parentElement.textContent)
                        .join(' ,');
                    applyFilters();
                });
            });

            timeFilter.forEach((item) => {
                item.addEventListener('change', function () {
                    selectedTimes = Array.from(timeFilter)
                        .filter(checkbox => checkbox.checked)
                        .map(checkbox => parseInt(checkbox.value.replace(':', '')));

                    const choice = document.querySelector(".timeChoice .text");


                    if (Array.from(timeFilter).some(checkbox => checkbox.checked)) {
                        choice.innerHTML = "";
                    }
                    else {
                        choice.innerHTML = "Filter Show Timmings";
                    }

                    choice.innerHTML += Array.from(timeFilter)
                        .filter(checkbox => checkbox.checked)
                        .map(checkbox => checkbox.parentElement.textContent)
                        .join(' ,');
                    applyFilters();

                });
            });

            const search = document.querySelector("#searchIn");
            search.addEventListener("input", function () {
                const searchValue = search.value.toLowerCase();
                const filteredTheaters = theaters.filter(theater => theater.name.toLowerCase().includes(searchValue));
                displayTheaters(filteredTheaters);
            });

            const cinemaTime = document.querySelectorAll(".cinemaTime .timeSection .time");

            cinemaTime.forEach((item) => {
                item.addEventListener("click", function () {
                    const cinemaName = item.closest(".cinemaSection").querySelector(".cinemaName .title").textContent;
                    const cinemaTime = item.textContent;

                    localStorage.setItem('selectedTheater', JSON.stringify(cinemaName));
                    localStorage.setItem('selectedTime', JSON.stringify(cinemaTime));

                });
            });


            const ASections = document.querySelectorAll('.timeSection a');

            ASections.forEach(function (section) {

                section.addEventListener('click', function (e) {
                    console.log("click")

                    const selectedDate = document.querySelector(" .dateContainer .date").textContent;
                    const selectedDay = document.querySelector(" .dateContainer .day").textContent;
                    const selectedMonth = document.querySelector(" .dateContainer .month").textContent;

                    console.log(selectedDate, selectedDay, selectedMonth);

                    const bookingDate = {
                        date: selectedDate,
                        day: selectedDay,
                        month: selectedMonth
                    };

                    localStorage.setItem('selectedDate', JSON.stringify(bookingDate));


                });

            });

        })
});


let date = new Date();

let todayDate = date.getDate();
let todayDay = date.getDay();
let todayMonth = date.getMonth();

const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


const mySwiper = document.querySelector("#daySwiper");

console.log(mySwiper);

if (mySwiper) {
    mySwiper.innerHTML = `
        ${[...Array(7)].map((_, i) => `
            <div class="swiper-slide">
                <div class="dateSection ${i === 0 ? 'active' : ''}">
                    <div class="dateContainer">
                        <div class="day">${dayNames[(todayDay + i) % 7]}</div>
                        <div class="date">${todayDate + i}</div>
                        <div class="month">${monthNames[(todayMonth + Math.floor((todayDate + i) / 30)) % 12]}</div>
                    </div>
                </div>
            </div>
        `).join('')}
    `;
} else {
    console.error("Swiper wrapper not found.");
}


document.addEventListener("DOMContentLoaded", function () {
    var swiperContainer = document.querySelector(".mySwiper");
    if (swiperContainer) {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 5,
            spaceBetween: 4,
            freeMode: true,
            cssMode: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    } else {
        console.error("Swiper container not found.");
    }
});


const dateSections = document.querySelectorAll('.dateSection');

dateSections.forEach(function (section) {

    section.addEventListener('click', function (e) {
        console.log("click")

        const selectedDate = section.querySelector(" .dateContainer .date").textContent;
        const selectedDay = section.querySelector(".dateContainer .day").textContent;
        const selectedMonth = section.querySelector(" .dateContainer .month").textContent;

        console.log(selectedDate, selectedDay, selectedMonth);

        const bookingDate = {
            date: selectedDate,
            day: selectedDay,
            month: selectedMonth
        };

        localStorage.setItem('selectedDate', JSON.stringify(bookingDate));


    });

});


document.addEventListener("DOMContentLoaded", function () {
    var dateSections = document.querySelectorAll('.dateSection');

    dateSections.forEach(function (section) {
        section.addEventListener('click', function () {
            // Remove 'active' class from all sections
            dateSections.forEach(function (sec) {
                sec.classList.remove('active');
            });

            // Add 'active' class to the clicked section
            this.classList.add('active');
        });
    });
});



const search = document.querySelector(".booking .bookingSection .choices .search");
const close = document.querySelector(".booking .bookingSection .choices .search .cancelIcon");

const choice = document.querySelectorAll(".booking .bookingSection .choices .choice");

const list = document.querySelectorAll(".dropdown .list");

choice.forEach(function (item, index) {
    item.addEventListener("click", function () {
        gsap.to(list[index], {
            opacity: 1,
            duration: 0,
            ease: "power2.in",
            "z-index": 100,
        });

        gsap.to(item, {
            fontSize: "20px",
            opacity: 1,
            fontWeight: "600",
            ease: "power2.in",
            "--afterhigth": "3.5px",
        });

        gsap.to(item.querySelector("svg"), {
            rotate: 180,
            duration: 0.5,
            ease: "power2.in",
        });
    });

    let isMouseInside = false;

    const revertToOriginalState = () => {
        if (!isMouseInside) {
            gsap.to(list[index], {
                opacity: 0,
                duration: 0,
                ease: "power2.out",
                "z-index": 0,
            });

            gsap.to(item, {
                fontSize: "16px",
                opacity: 1,
                fontWeight: "500",

                ease: "power2.out",
                "--afterhigth": "0px",
            });

            gsap.to(item.querySelector("svg"), {
                rotate: 0,
                duration: 0.5,
                ease: "power2.out",
            });
        }
    };

    const handleMouseEnter = () => {
        isMouseInside = true;
    };

    const handleMouseLeave = () => {
        isMouseInside = false;
        setTimeout(revertToOriginalState, 0); // Delay to ensure both leave events are processed
    };

    list[index].addEventListener("mouseenter", handleMouseEnter);
    list[index].addEventListener("mouseleave", handleMouseLeave);
    item.addEventListener("mouseenter", handleMouseEnter);
    item.addEventListener("mouseleave", handleMouseLeave);
});

search.addEventListener("click", function () {
    gsap.to(".booking .bookingSection .choices .search", {
        duration: 0.7,
        width: "325px",
        ease: "power2.out",
        "border-left": "1px solid #00000010"
    });
});


search.addEventListener("click", function () {
    gsap.to(".booking .bookingSection .choices .search", {
        duration: 0.7,
        width: "325px",
        ease: "power2.out",
        "border-left": "1px solid #00000010"
    });
});

close.addEventListener("click", function (event) {
    event.stopPropagation();
    gsap.to(".booking .bookingSection .choices .search", {
        duration: 0.5,
        width: "54px", // Reset to initial width
        ease: "power2.out",
        "border-left": "0px solid #00000010"
    });
});

document.addEventListener("click", function (event) {

    if (!event.target.closest(".booking .bookingSection .choices .search")) {
        gsap.to(".booking .bookingSection .choices .search", {
            duration: 0.5,
            width: "54px", // Reset to initial width
            ease: "power2.out",
            "border-left": "0px solid #00000010"
        });
    }
});
gsap.to(".booking", {
    scrollTrigger: {
        trigger: ".booking",
        start: "top top",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
        scrub: 0.01,
    },
    top: 0,
    position: "fixed",
    ease: "power1.inOut",
    boxShadow: "0px 0px 10px 0px #00000030",
    onUpdate: function () {
        document.querySelector(".booking").style.pointerEvents = "auto";
    }
});

gsap.to(".dropdown", {
    scrollTrigger: {
        trigger: ".booking",
        start: "top top",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
        scrub: 0.01,
    },
    top: "64px",
    position: "fixed",
    ease: "power1.inOut",
    "z-index": 100,
    onUpdate: function () {
        document.querySelector(".dropdown").style.pointerEvents = "auto";
    }
});
document.addEventListener('DOMContentLoaded', function () {
    // Select all heart SVG elements
    const heartSvgs = document.querySelectorAll("#heartSvg");

    // Iterate over each heart SVG element
    heartSvgs.forEach((item) => {
        let toggle = false; // Move toggle inside the loop to make it specific to each item

        // Add click event listener to each heart SVG element
        item.addEventListener("click", function () {
            console.log("click to heart"); // Log to console to verify click event
            const path = item.querySelector("path");

            // Check if the path element exists
            if (path) {
                if (toggle) {
                    gsap.to(path, { fill: "#f84464", stroke: "none", duration: 0.5, opacity: 1 });
                } else {
                    gsap.to(path, { fill: "none", stroke: "#999999", duration: 0.5 });
                }
                toggle = !toggle;
            } else {
                console.error("Path element not found in the SVG.");
            }
        });
    });
});

