import wordTemplate from "./wordTemplate";
import {authKeyExists} from "../dao/authKey";

export default class WordView {

    constructor(controller) {
        this.controller = controller;
    }

    render(word) {
        console.log(word);
        document.getElementById('container').innerHTML = wordTemplate(word);
        globalThis.onAddDefinitionClicked = this.onAddDefinitionClicked.bind(this);
    }

    onAddDefinitionClicked(element, definitionId) {
        if (!authKeyExists()) {
            window.location.hash = 'login';
            return;
        }

        const buttonParent = element.parentElement;

        buttonParent.removeChild(element);
        buttonParent.innerHTML = `
            <div class="spinner-border text-primary" role="status">
            </div>
        `;

        this.controller.addWord(definitionId, () => {
            buttonParent.innerHTML = `
                <button type="button" class="btn btn-outline-secondary" disabled>Added</button>
            `;
        });
    }

}