/**
 * Initialing the overlay element, the root class of the css file and an array called `themes`
 * that contains two objects representing different themes.
 * Each object contains CSS variable-value pairs that define the styling for the corresponding theme the page number.
 */
const overlayElement = document.querySelector("#overlay");
const themeToggler = document.querySelector("#toggler-input");
const rootClass = document.documentElement.style;
const themes = [
    {
        "--main-text-color": "#c8c4bd",
        "--card-border-color": "#7c7365",
        "--card-shadow-color": "#26292a",
        "--subtitle-text-color": "#b8b2a9",
        "--important-normal-text-color": "#bcb7ae",
        "--normal-text-color": "#a8a095",
        "--icons-color": "#c8c4bd",
        "--card-bg-color": "#313537",
        "--main-bg-color": "#004d4d",
        "--sec-bg-color": "#181a1b",
        "--third-bg-color": "#25282a",
        "--btn-bg-color": "#0c5bae",
        "--overlay-text-color": "#ffffff",
        "--glow-color": "#6caff5",
        "--footer-bg-color": "#313537d0",
    },
    {
        "--main-text-color": "#323232",
        "--card-border-color": "#323232",
        "--card-shadow-color": "#323232",
        "--subtitle-text-color": "#4c4c4c",
        "--important-normal-text-color": "#505050",
        "--normal-text-color": "#666666",
        "--icons-color": "#323232",
        "--card-bg-color": "#d3d3d3",
        "--main-bg-color": "#006060",
        "--sec-bg-color": "#ffffff",
        "--third-bg-color": "#e8e8e8",
        "--btn-bg-color": "#2d8cf0",
        "--overlay-text-color": "#d3d3d3",
        "--glow-color": "#1f62a8",
        "--footer-bg-color": "#d3d3d3d0",
    },
];

/**
 * Handles the navigation button click event.
 * Retrieves the page name and redirect link based on the pressed page number.
 * Updates the overlay element with the page name, animates the overlay to cover the screen,
 * and redirects the user to the specified page after a delay.
 * @param {number} pressedPage - The number of the pressed page button.
 * @returns {void}
 */
function navBtn(pressedPage) {
    console.log(pressedPage);
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
            redirectLink = "projects.html";
            break;
        case 4:
            pageName = "Contact Me.";
            break;
    }

    return [pageName, redirectLink];
}

/**
 * Toggles the theme of the web page.
 * @param {number} requestedTheme - The theme to be applied. 1 represents the light theme and 0 represents the dark theme.
 * @returns {void}
 */
function toggleTheme(requestedTheme) {
    Object.entries(themes[requestedTheme]).forEach(([property, value]) => {
        rootClass.setProperty(property, value);
    });
}

/**
 * Adds an event listener to the themeToggler element to listen for changes in its state.
 * When the state changes, retrieves the checked state of the themeToggler element and
 * calls the toggleTheme function with the requestedTheme as an argument.
 *
 * @param {Event} event - The event object from the change event.
 * @returns {void}
 */
themeToggler.addEventListener("change", (event) => {
    // Declare and initialize the requestedTheme variable based on the checked state of the themeToggler element
    let requestedTheme = event.target.checked ? 0 : 1;

    // Call the toggleTheme function with the requestedTheme as an argument
    toggleTheme(requestedTheme);
});
