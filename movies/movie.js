var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 6,
    spaceBetween: 32,
    freeMode: true,
    cssMode: true,
});

var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 4,
    spaceBetween: 32,
    freeMode: true,
    cssMode: true,
});

document.addEventListener('DOMContentLoaded', function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".navbar", {
        opacity: 1,
        scrollTrigger: {
            trigger: ".fixNav",
            start: "top -10%",
            end: "bottom 50%",
            toggleActions: "play none none reverse",
        }
    });
});


const selectedMovie = JSON.parse(localStorage.getItem('selectedMovie'));

if (selectedMovie) {

    const movieSection = document.querySelector(".movieSection");
    movieSection.innerHTML = `
                   <div class="movieContainer">
                    <div class="movieImage">
                        <img
                            src="../${selectedMovie.image}"
                            alt>
                    </div>
                    <div class="movieDetails">
                        <div class="title">
                            ${selectedMovie.title}
                        </div>
                        <div class="rating">
                            <div class="ratingContainer">
                                <div class="part1">
                                    <div class="star"><img
                                            src="../images/star-icon.png"
                                            alt></div>
                                    <div class="rate">${selectedMovie.rate}</div>
                                    <div class="vote">${selectedMovie.rateVotes}</div>
                                    <div class="arrow">></div>
                                </div>
                                <div class="part2">
                                    <div class="rateButton">Rate now</div>
                                </div>
                            </div>
                        </div>
                        <div class="genral">
                            <div class="watch">
                                ${selectedMovie.screen}
                            </div>
                            <div class="lang">
                                <ul>
                                    <li>${selectedMovie.lang}</li>
                                </ul>
                            </div>
                            <div class="duration">
                                <ul>
                                    <li>
                                        <div class="time">${selectedMovie.time}</div>
                                    </li>
                                    <li>
                                        ${selectedMovie.ageRate}
                                    </li>
                                    <li>
                                        ${selectedMovie.genre}
                                    </li>
                                    <li>
                                        ${selectedMovie.releaseDate}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="booking">
                            <a >
                             <div class="bookingButton">Book tickets</div>
                            </a>
                        </div>
                    </div>
                    <div class="share">
                        <div class="shareSection">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 227.216 227.216"
                                xml:space="preserve">
                                <path
                                    d="M175.897,141.476c-13.249,0-25.11,6.044-32.98,15.518l-51.194-29.066c1.592-4.48,2.467-9.297,2.467-14.317
                           c0-5.019-0.875-9.836-2.467-14.316l51.19-29.073c7.869,9.477,19.732,15.523,32.982,15.523c23.634,0,42.862-19.235,42.862-42.879
                           C218.759,19.229,199.531,0,175.897,0C152.26,0,133.03,19.229,133.03,42.865c0,5.02,0.874,9.838,2.467,14.319L84.304,86.258
                           c-7.869-9.472-19.729-15.514-32.975-15.514c-23.64,0-42.873,19.229-42.873,42.866c0,23.636,19.233,42.865,42.873,42.865
                           c13.246,0,25.105-6.042,32.974-15.513l51.194,29.067c-1.593,4.481-2.468,9.3-2.468,14.321c0,23.636,19.23,42.865,42.867,42.865
                           c23.634,0,42.862-19.23,42.862-42.865C218.759,160.71,199.531,141.476,175.897,141.476z M175.897,15
                           c15.363,0,27.862,12.5,27.862,27.865c0,15.373-12.499,27.879-27.862,27.879c-15.366,0-27.867-12.506-27.867-27.879
                           C148.03,27.5,160.531,15,175.897,15z M51.33,141.476c-15.369,0-27.873-12.501-27.873-27.865c0-15.366,12.504-27.866,27.873-27.866
                           c15.363,0,27.861,12.5,27.861,27.866C79.191,128.975,66.692,141.476,51.33,141.476z M175.897,212.216
                           c-15.366,0-27.867-12.501-27.867-27.865c0-15.37,12.501-27.875,27.867-27.875c15.363,0,27.862,12.505,27.862,27.875
                           C203.759,199.715,191.26,212.216,175.897,212.216z" />
                            </svg>
                            <div class="text">Share</div>
                        </div>
                    </div>
                </div>
                `;

    const descriptionSection = document.querySelector(".aboutMovieContainer .description");

    descriptionSection.innerHTML = `${selectedMovie.about} `;

    const fixtitle = document.querySelector(".fixNav .title");
    fixtitle.innerHTML = `${selectedMovie.title}`;

} else {

    document.getElementById('movie-details').innerHTML = '<p>No movie data found.</p>';
}

const booking = document.querySelector(".booking");

booking.addEventListener("click", () => {
    window.location.href = '../booking/booking.html';
});
