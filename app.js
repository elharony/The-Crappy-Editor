function init() {

    // Select the iframe's document
    const editor = document.querySelector("#editor")

    // Make the iframe's document "editable"
    editor.contentDocument.designMode = "on"
}