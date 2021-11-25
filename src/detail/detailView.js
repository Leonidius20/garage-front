import detailTemplate from "./detailTemplate";
import {authKeyExists} from "../dao/authKey";

export default class DetailView {

    constructor(controller) {
        this.controller = controller;
    }

    render(detail) {
        document.getElementById('container').innerHTML = detailTemplate(detail);
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