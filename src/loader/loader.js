import './loader.css';

let loader = null;

export function showLoader() {
    if (loader === null) {
        loader = new DOMParser().parseFromString(loaderTemplate(), 'text/html').body.firstChild;
    }
    document.body.appendChild(loader);
    document.body.style.overflow = 'hidden';
}

export function hideLoader() {
    document.body.removeChild(loader);
    document.body.style.removeProperty('overflow');
}

function loaderTemplate() {
    return `
        <div class="blurry">
            <div id="spinner" class="spinner-border text-primary" role="status">
               
            </div>
        </div>
    `;
}