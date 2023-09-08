// Assigns the DOM element with the id "to-top-btn" to the variable `btn`.

var btn = document.querySelector("#to-top-btn");

/**
 * Attaches an event listener to the "scroll" event on the window object.
 * Toggles the "show" class on the `btn` element based on the scroll position.
 * If the scroll position is greater than 300, the "show" class is added, otherwise it is removed.
 *
 * @param {Event} event - The scroll event object.
 * @returns {void}
 */
window.addEventListener("scroll", () => {
    btn.classList.toggle("show", window.scrollY > 300);
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
 * Adds an event listener to the 'btn' element.
 * When the 'btn' element is clicked, it calls the 'scrollToTop' function.
 */
btn.addEventListener("click", scrollToTop);
