const emailjsData = {
    publicKey: "WfIEIpeMHAnYX89ad",
    serviceId: "service_mqew1n6",
    templateId: "template_roxjeng",
};

const form = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-submit-status");
const copyPhoneToolTip = document.querySelector("#contact-phone-tooltip");
const formInputs = form.children;
const validEmailLength = 6;
const phoneNumber = "00201067810849";

/**
 * Initializes the emailjs library, verifies form validity, updates submit button status, and resets the form when the window loads.
 *
 * @param {void}
 * @returns {void}
 */
window.onload = () => {
    // Initialize emailjs library
    emailjs.init(emailjsData.publicKey);

    // Verify form validity and get current button state
    let currentBtnState = verifyFormValidity();

    // Update submit button status based on current button state
    submitBtnState(currentBtnState);

    // Reset form inputs
    form.reset();
};

/**
 * Resets the values of a contact form.
 *
 * @param {void}
 * @returns {void}
 */
function emptyForm() {
    form.reset();
}

/**
 * Adds an event listener to the form submission event.
 * Prevents the default form submission behavior.
 * Checks the validity of the form inputs and handles the form submission accordingly.
 * If the form submission is successful, the form is reset and the form status message is cleared.
 * If there is an error, the error message is displayed in the form status element.
 *
 * @param {Event} event - The event object representing the form submission event.
 * @returns {void}
 */
form.addEventListener("submit", function (event) {
    event.preventDefault();
    let currentBtnState = verifyFormValidity();
    if (currentBtnState < 0) {
        submitBtnState(currentBtnState);
        return;
    }
    emailjs
        .sendForm(emailjsData.serviceId, emailjsData.templateId, this)
        .then(() => {
            form.reset();
            formStatus.value = "";
        })
        .catch((error) => {
            formStatus.value = error;
        });
});

/**
 * Updates the status of a form based on its current state.
 *
 * @param {number} currentBtnState - The current state of the submit button. It can be -1, -2, or 1.
 * @returns {void}
 */
function submitBtnState(currentBtnState) {
    switch (currentBtnState) {
        case -1:
            formStatus.value = "Enter all required information";
            break;
        case -2:
            formStatus.value = "Invalid Email Address";
            break;
        case 1:
            formStatus.value = "Submit";
            break;
        default:
            formStatus.value = "Submit";
            break;
    }
}

/**
 * Checks the validity of a form by verifying the email address and required information.
 *
 * @param {void}
 * @returns {number} - An integer representing the button state. -1 indicates missing required information, -2 indicates an invalid email address, and 1 indicates that the form is valid and can be submitted.
 */
function verifyFormValidity() {
    const email = formInputs[1].value;
    let currentBtnState = 1;

    if (!emailValidity(email)) currentBtnState = -2;

    if (email.length < validEmailLength) currentBtnState = -2;

    if (inputsValidity(formInputs)) currentBtnState = -1;

    return currentBtnState;
}

/**
 * Checks if the email address is valid.
 *
 * @param {string} email - The email address to be validated.
 * @returns {boolean} - True if the email address is valid, false otherwise.
 */
function emailValidity(email) {
    const hasAtSymbol = email.includes("@");
    const hasDotSymbol = email.includes(".");

    return hasAtSymbol && hasDotSymbol;
}

/**
 * Checks if any of the required input fields are empty.
 *
 * @param {Array} formInputs - An array-like object containing the form inputs.
 * @returns {boolean} - True if any of the required input fields are empty, false otherwise.
 */
function inputsValidity(formInputs) {
    return formInputs[1].value === "" || formInputs[3].value === "";
}

/**
 * Copies my phone number to the clipboard and updates the tooltip text when clicked.
 *
 * @param {void}
 * @returns {void}
 */
function copyPhoneNumber() {
    navigator.clipboard.writeText(phoneNumber);
    copyPhoneToolTip.innerHTML = "Copied";
}

/**
 * Updates the the tooltip text when hovered over.
 *
 * @param {void}
 * @returns {void}
 */
function hoverPhoneNumber() {
    copyPhoneToolTip.innerHTML = "Click To Copy";
}
