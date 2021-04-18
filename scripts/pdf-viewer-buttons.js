const viewButton = document.getElementById("view-inline");
const downloadButton = document.getElementById("download");
const pdfFrame = document.getElementById("pdf-frame");
const pdfURL = document.getElementById("pdf-url").href;

viewButton.addEventListener("click", viewButtonAction);
downloadButton.addEventListener("click", downloadButtonAction);

/**
 * Causes PDF to be displayed inline (if it is currently hidden)
 * or hidden (if it is currently displayed)
 */
function viewButtonAction() {
    if (pdfFrame.hidden === true) {
        pdfFrame.hidden = false;
        viewButton.textContent = "Hide Documentation";
    } else {
        pdfFrame.hidden = true;
        viewButton.textContent = "Show Documentation Below";
    }
}

/**
 * Causes PDF to be downloaded.
 */
function downloadButtonAction() {
    window.open(pdfURL);
}
