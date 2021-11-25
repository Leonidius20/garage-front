export default function errorPageTemplate(text) {
    return `
        <div class="container">
            <h1>Error</h1>
            <p>${text}</p>
        </div>
    `;
}