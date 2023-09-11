const toTopBtn = document.querySelector("#to-top-btn");
const ageValue = document.querySelector("#about-age-value");
const progressBars = document.querySelectorAll(".progress-bar-progress");
const progressBarsValues = [
    { skill: "HTML", value: 95 },
    { skill: "JS", value: 50 },
    { skill: "Team Work", value: 90 },
    { skill: "Time Management", value: 85 },
];

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
};

/**
 * Scrolls the window to the top with a smooth animation.
 *
 * @param {Event} event - The event object that triggered the function.
 * @returns {void}
 */
toTopBtn.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
});

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

    // Define the birthday
    const birthday = new Date("Oct 28, 2003");

    // Calculate the age in milliseconds
    const ageInMilliseconds = currentDate - birthday;

    // Convert milliseconds to years
    const ageInYears = Math.floor(
        ageInMilliseconds / (1000 * 60 * 60 * 24 * 365)
    );

    // Update the HTML element with the calculated age
    ageValue.innerHTML = `<span class='about-personal-info-a'>Age: </span>${ageInYears}`;
}
