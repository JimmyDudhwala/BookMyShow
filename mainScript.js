const swiperWrapper = document.querySelector("#swiper-wrapper1");

fetch("Movie.json")
    .then(response => response.json())
    .then(data => {

        data.forEach((movie, index) => {
            let movieDiv = document.createElement("div");
            movieDiv.classList.add("swiper-slide");
            movieDiv.innerHTML = `
                <div class="showImage">
                    <a href="${movie.link}" data-index="${index}">
                        <img src="${movie.image}" alt="${movie.title}">
                    </a>
                </div>
                <div class="showText">
                    <div class="showName">${movie.title}</div>  
                    <div class="showGoner">${movie.genre}</div>
                </div>
            `;

            movieDiv.querySelector("a").addEventListener("click", (event) => {

                const movieIndex = event.currentTarget.getAttribute("data-index");
                const selectedMovie = data[movieIndex];

                localStorage.setItem('selectedMovie', JSON.stringify(selectedMovie));


            });

            swiperWrapper.appendChild(movieDiv);
        });

        // Initialize Swiper instance
        new Swiper(".mySwiper1", {
            slidesPerView: 5,
            spaceBetween: 32,
            freeMode: true,
            cssMode: true,
        });
    });