// Initializing variables and constants used for typing out sentences character by character.
const content = ["Gamed fsh5", "Gamed awy", "AI Engineer"];
const subtitleElement = document.querySelector("#home-subtitle");

var subtitle = 0;
var subtitleIndex = 0;
var typingInterval;

/**
 * Typing out a sentence one character at a time.
 *
 * @param {None} None
 * @returns {void}
 */
function type() {
    // Get the current sentence from the content array using the sentence index
    var currentSentence = content[subtitle];

    // Get the substring of the sentence from the beginning up to the current sentenceIndex position
    var text = currentSentence.substring(0, subtitleIndex + 1);

    // Set the innerHTML of the element to the current substring, effectively typing out the sentence character by character
    subtitleElement.innerHTML = text;

    // Increment the sentenceIndex by 1
    subtitleIndex++;

    // Check if the current substring is equal to the full sentence
    if (text === currentSentence) {
        // Clear the interval
        clearInterval(typingInterval);

        // Schedule the Delete function to start deleting the typed sentence after a delay of 1 second
        setTimeout(function () {
            typingInterval = setInterval(Delete, 50);
        }, 1000);
    }
}

/**
 * Deletes the typed sentence character by character and starts typing the next sentence in the `content` array.
 *
 * @param {None} None
 * @returns {void}
 */
function Delete() {
    // Get the current sentence from the `content` array using the `subtitle` index
    var currentSentence = content[subtitle];

    // Get the substring of the sentence from the beginning up to the current `subtitleIndex` position
    var text = currentSentence.substring(0, subtitleIndex - 1);

    // Set the `subtitleElement` innerHTML to the current substring, effectively deleting the sentence character by character
    subtitleElement.innerHTML = text;

    // Decrement the `subtitleIndex` by 1
    subtitleIndex--;

    // Check if the current substring is empty
    if (text === "") {
        // Clear the interval
        clearInterval(typingInterval);

        // Check if the `subtitle` index is equal to the last index of the `content` array
        if (subtitle == content.length - 1) {
            // If it is, set the `subtitle` index to 0
            subtitle = 0;
        } else {
            // Otherwise, increment the `subtitle` index by 1
            subtitle++;
        }

        // Reset the `subtitleIndex` to 0
        subtitleIndex = 0;

        // Set the `subtitleElement` innerHTML to an empty string
        subtitleElement.innerHTML = "‎";

        // After a delay of 200 milliseconds, start typing the next sentence by calling the `type` function
        setTimeout(function () {
            typingInterval = setInterval(type, 100);
        }, 200);
    }
}

/**
 * Executes the typing effect when the window loads.
 *
 * @param None
 * @returns None
 */
window.onload = function () {
    // Start the typing effect on load
    typingInterval = setInterval(type, 100);
};
