// Initialing the overlay element and the page number.
const overlayElement = document.querySelector("#overlay");
var pageNum = 1;

/**
 * Handles the navigation button click event.
 * Retrieves the page name and redirect link based on the pressed page number.
 * Updates the overlay element with the page name, animates the overlay to cover the screen,
 * and redirects the user to the specified page after a delay.
 * @param {number} pressedPage - The number of the pressed page button.
 * @returns {void}
 */
function navBtn(pressedPage) {
    // Retrieve the page title and page link based on the pressed page number
    const [pageTitle, pageLink] = pressedPageData(pressedPage);

    // Set the height of the overlay element to cover the screen
    overlayElement.style.height = "100%";

    // Update the overlay element with the page title
    overlayElement.innerHTML = pageTitle;

    // Set a timeout function to animate the overlay and redirect the user after a delay
    setTimeout(() => {
        // Animate the overlay by setting its height to 0%
        overlayElement.style.height = "0%";

        // Set another timeout function to redirect the user after the animation completes
        setTimeout(() => {
            // Redirect the user to the specified page
            window.location.replace(pageLink);
        }, 1000);
    }, 1300);
}

/**
 * Returns the page title and redirect link based on the pressed page number.
 * @param {number} pressedPage - The pressed page number.
 * @returns {Array} - An array containing the page title and redirect link.
 */
function pressedPageData(pressedPage) {
    let pageName;
    let redirectLink;

    switch (pressedPage) {
        case 1:
            pageName = "Home.";
            redirectLink = "index.html";
            break;
        case 2:
            pageName = "About Me.";
            redirectLink = "about.html";
            break;
        case 3:
            pageName = "Projects.";
            break;
        case 4:
            pageName = "Contact Me.";
            break;
    }

    return [pageName, redirectLink];
}
