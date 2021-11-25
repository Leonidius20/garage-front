import errorPageTemplate from "./errorTemplate";

export default function render(text) {
    document.getElementById('container').innerHTML
        = errorPageTemplate(text);
}