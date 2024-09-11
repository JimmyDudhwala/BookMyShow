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


const selectedMovie = JSON.parse(localStorage.getItem('selectedMovie'));

const genres = selectedMovie.genre.split('/');

const genreListItems = genres.map(genre => `<li>${genre}</li>`).join('');

console.log(genreListItems);

if (selectedMovie) {
    const headingSection = document.querySelector(".heading");

    headingSection.innerHTML =
        `<div class="headingSection">
    <div class="title"><a href>${selectedMovie.title}</a></div>
    <div class="goner">
        <div class="rated"><span>${selectedMovie.ageRate}</span></div>
        <div class="gonerList">
           <ul>
                ${genreListItems}
            </ul>
        </div>
    </div>
</div>
`

}







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


let heartSvg = document.querySelectorAll(".heart svg"); // Corrected selector

heartSvg.forEach((item) => {
    let toggle = false; // Move toggle inside the loop to make it specific to each item

    item.addEventListener("click", function () {
        const path = item.querySelector("path");

        if (toggle) {
            gsap.to(path, { fill: "#f84464", stroke: "none", duration: 0.5, opacity: 1 });
        } else {
            gsap.to(path, { fill: "none", stroke: "#999999", duration: 0.5 });
        }
        toggle = !toggle;
    });
});