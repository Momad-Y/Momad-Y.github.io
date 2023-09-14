const ageValue = document.querySelector("#about-age-value");
const progressBars = document.querySelectorAll(".progress-bar-progress");
const birthday = new Date("Oct 28, 2003");
const progressBarsValues = [
    { skill: "HTML", value: 95 },
    { skill: "JS", value: 50 },
    { skill: "Team Work", value: 90 },
    { skill: "Time Management", value: 85 },
];
var currentSlide = 1;

/**
 * Animates the progress bars on the page by gradually increasing their width based on the maximum percentage values provided.
 *
 * @param {None} None
 * @returns {void}
 */
function loadBars() {
    for (let i = 0; i < progressBars.length; i++) {
        const bar = progressBars[i];
        let percentage = 1;
        const maxPercentage = progressBarsValues[i].value;
        const loadSpeed = getRandomNumberByValue(maxPercentage);
        const frameInterval = setInterval(loadFrame, loadSpeed);

        /**
         * Updates the width of the progress bar element.
         * @returns {void}
         */
        function loadFrame() {
            if (percentage >= maxPercentage) {
                clearInterval(frameInterval);
            } else {
                percentage++;
                bar.style.width = `${percentage}%`;
            }
        }
    }
}

/**
 * Generates a random number based on the input value.
 *
 * @param {number} value - The input value used to determine the range of the random number.
 * @returns {number} - A random number within the specified range based on the input value.
 */
function getRandomNumberByValue(value) {
    const min = value > 50 ? 5 : 10;
    const max = value > 50 ? 10 : 20;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Event handler triggered when the window finishes loading.
 * Calls the `loadBar` function to load progress bars.
 *
 * @param {None} None
 * @returns {void}
 */
window.onload = function () {
    calculateAge();
    loadBars();
    showSlides(currentSlide);
};

/**
 * Scrolls the window to the top with a smooth animation.
 *
 * @param {Event} event - The event object that triggered the function.
 * @returns {void}
 */

/**
 * Calculates the age in years based on the current date and a predefined birthday.
 * Updates the HTML element with the calculated age.
 *
 * @param {None} None
 * @returns {void} This function does not return anything.
 */
function calculateAge() {
    // Get the current date
    const currentDate = new Date();

    // Calculate the age in milliseconds
    const ageInMilliseconds = currentDate - birthday;

    // Convert milliseconds to years
    const ageInYears = Math.floor(
        ageInMilliseconds / (1000 * 60 * 60 * 24 * 365)
    );

    // Update the HTML element with the calculated age
    ageValue.innerHTML = `<span class='about-personal-info-a'>Age: </span>${ageInYears}`;
}

/**
 * Moves to the next or previous slide in a slideshow.
 * @param {number} n - The number of slides to move. Positive value moves to the next slide, negative value moves to the previous slide.
 * @returns {void}
 */
function moveToSlide(n) {
    // Update the value of currentSlide by adding n to it
    currentSlide += n;

    // Call the showSlides function with the updated value of currentSlide
    showSlides(currentSlide);
}

/**
 * Updates the current slide based on the button tag that is clicked.
 *
 * @param {HTMLElement} btnTag - The button tag that is clicked.
 * @returns {void}
 */
function goToSlide(btnTag) {
    const slideNumber = btnTag.innerHTML;
    showSlides((currentSlide = slideNumber));
}

/**
 * Displays the correct slide based on the given slide number.
 * Updates the slide number indicator and the active state of the slide buttons.
 *
 * @param {number} slideNumber - The number of the slide to be displayed.
 * @returns {void}
 */
function showSlides(slideNumber) {
    const imgSlides = document.querySelectorAll(".about-slides");
    const slideBtns = document.querySelectorAll(".about-slideshow-navbar-btn");
    const slideNumberShown = document.querySelectorAll(".about-slide-number");
    const totalNumberOfSlides = imgSlides.length;

    // Check if the given slide number is greater than the total number of slides
    // If it is, set the currentSlide variable to 1
    if (slideNumber > totalNumberOfSlides) {
        slideNumber = 1;
    }

    // Check if the given slide number is less than 1
    // If it is, set the currentSlide variable to the total number of slides
    if (slideNumber < 1) {
        slideNumber = totalNumberOfSlides;
    }

    // Loop through all the slide images and hide them by setting their display style to "none"
    for (let i = 0; i < totalNumberOfSlides; i++) {
        imgSlides[i].style.display = "none";
    }

    // Loop through all the slide number indicators and update their HTML content
    // to show the current slide number and the total number of slides
    for (let i = 0; i < totalNumberOfSlides; i++) {
        slideNumberShown[
            i
        ].innerHTML = `${slideNumber} / ${totalNumberOfSlides}`;
    }

    // Loop through all the slide buttons and remove the "active" class from their className
    for (let i = 0; i < slideBtns.length; i++) {
        slideBtns[i].className = slideBtns[i].className.replace(" active", "");
    }

    // Display the slide image corresponding to the current slide number
    // by setting its display style to "block"
    imgSlides[slideNumber - 1].style.display = "block";

    // Add the "active" class to the slide button corresponding to the current slide number
    // by appending it to the className
    slideBtns[slideNumber - 1].className += " active";

    // Updating the current slide number
    currentSlide = slideNumber;
}
