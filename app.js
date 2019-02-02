function init() {

    // Select the iframe's document
    const editor = document.querySelector("#editor")

    // Make the iframe's document "editable"
    editor.contentDocument.designMode = "on"

    // "bold"
    const opt_bold = document.querySelector("#make_bold")
    opt_bold.addEventListener("click", () => {
        editor.contentDocument.execCommand("bold", false, null)
        editor.contentWindow.focus()
    })

    // "italic"
    const opt_italic = document.querySelector("#make_italic")
    opt_italic.addEventListener("click", () => {
        editor.contentDocument.execCommand("italic", false, null)
        editor.contentWindow.focus()
    })

    // "quote"
    const opt_quote = document.querySelector("#make_quote")
    opt_quote.addEventListener("click", () => {
        editor.contentDocument.execCommand("formatBlock", false, "blockquote")
        editor.contentWindow.focus()
    })

}