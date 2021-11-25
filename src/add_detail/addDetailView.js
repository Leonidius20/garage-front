import addDetailTemplate from "./addDetailTemplate";

export default class AddDetailView {

    constructor(controller) {
        this.controller = controller;
    }

    render() {
        document.getElementById('container').innerHTML = addDetailTemplate();
        document.getElementById('save-button').onclick =
            this.onSignUpButtonClicked.bind(this);
    }

    onSignUpButtonClicked() {
        const name = document.getElementById('name').value;
        const manufacturer = document.getElementById('manufacturer').value;
        const description = document.getElementById('description').value;
        const type = document.getElementById('type').value;
        const price = document.getElementById('price').value;

        this.controller.addDetail(name, manufacturer, description, type, price);
    }

}