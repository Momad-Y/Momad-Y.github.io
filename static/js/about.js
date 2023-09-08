// Initializes variables for the to-top button, progress bars, and progress bar values.
const toTopBtn = document.querySelector("#to-top-btn");
const progressBars = document.querySelectorAll(".progress-bar-progress");
const progressBarsValues = [
    { skill: "HTML", value: 95 },
    { skill: "JS", value: 50 },
    { skill: "Team Work", value: 90 },
    { skill: "Time Management", value: 85 },
];

/**
 * Attaches an event listener to the "scroll" event on the window object.
 * Toggles the "show" class on the `btn` element based on the scroll position.
 * If the scroll position is greater than 300, the "show" class is added, otherwise it is removed.
 *
 * @param {Event} event - The scroll event object.
 * @returns {void}
 */
window.addEventListener("scroll", () => {
    toTopBtn.classList.toggle("show", window.scrollY > 300);
});

/**
 * Adds an event listener to the `btn` element, which is a button with the id `to-top-btn`.
 * When the button is clicked, it prevents the default behavior of the event (in this case, preventing the page from scrolling to the top),
 * and instead smoothly scrolls the window to the top position.
 *
 * @param {Event} event - The event object that is passed to the event listener function.
 * @returns {void}
 */
function scrollToTop(event) {
    event.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

/**
 * Animates the progress bars on the page by gradually increasing their width based on the maximum percentage values provided.
 *
 * @param {None} None
 * @returns {void}
 */
function loadBar() {
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
    loadBar();
};

/**
 * Adds an event listener to the 'btn' element.
 * When the 'btn' element is clicked, it calls the 'scrollToTop' function.
 */
toTopBtn.addEventListener("click", scrollToTop);
