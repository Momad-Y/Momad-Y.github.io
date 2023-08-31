const content = ["Gamed fsh5", "Gamed awy", "AI Engineer"];
const subtitleElement = document.querySelector("#subtitle");
const overlayElement = document.querySelector("#overlay");

var sentence = 0;
var sentenceIndex = 0;
var intervalVal;
var currentMenu = "home";

/**
 * Typing out a sentence one character at a time.
 *
 * @returns {void}
 */
function type() {
    // Get the current sentence from the content array using the sentence index
    var currentSentence = content[sentence];

    // Get the substring of the sentence from the beginning up to the current sentenceIndex position
    var text = currentSentence.substring(0, sentenceIndex + 1);

    // Set the innerHTML of the element to the current substring, effectively typing out the sentence character by character
    subtitleElement.innerHTML = text;

    // Increment the sentenceIndex by 1
    sentenceIndex++;

    // Check if the current substring is equal to the full sentence
    if (text === currentSentence) {
        // Clear the interval
        clearInterval(intervalVal);

        // Schedule the Delete function to start deleting the typed sentence after a delay of 1 second
        setTimeout(function () {
            intervalVal = setInterval(Delete, 50);
        }, 1000);
    }
}

/**
 * Deletes the typed sentence character by character and starts typing the next sentence in the `content` array.
 *
 * @returns {void}
 */
function Delete() {
    var text = content[sentence].substring(0, sentenceIndex - 1);
    subtitleElement.innerHTML = text;
    sentenceIndex--;

    if (text === "") {
        clearInterval(intervalVal);

        if (sentence == content.length - 1) sentence = 0;
        else sentence++;

        sentenceIndex = 0;
        subtitleElement.innerHTML = "‎";

        setTimeout(function () {
            intervalVal = setInterval(type, 100);
        }, 200);
    }
}

// Start the typing effect on load
intervalVal = setInterval(type, 100);

function homeMenu() {
    overlayElement.style.height = "100%";
    if (currentMenu === "home") {
        setTimeout(() => {
            overlayElement.style.height = "0%";
        }, 1000);
        return;
    } else {
    }
}
