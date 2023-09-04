const overlayElement = document.querySelector("#overlay");
var pageNum = 1;
var firstLoad = true;

function navBtn(pressedPage) {
    let pressedPageDataArray = pressedMenuData(pressedPage);
    let pageTitle = pressedPageDataArray[0];
    let pageLink = pressedPageDataArray[1];

    overlayElement.style.height = "100%";
    overlayElement.innerHTML = pageTitle;

    setTimeout(() => {
        overlayElement.style.height = "0%";
        setTimeout(() => {
            window.location.replace(pageLink);
        }, 1300);
    }, 1300);
}

function pressedMenuData(pressedPage) {
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
