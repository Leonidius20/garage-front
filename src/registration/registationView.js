import registrationTemplate from "./registrationTemplate";

export default class RegistrationView {

    constructor(controller) {
        this.controller = controller;
    }

    render() {
        document.getElementById('container').innerHTML = registrationTemplate();
        document.getElementById('signup-button').onclick =
            this.onSignUpButtonClicked.bind(this);
    }

    onSignUpButtonClicked() {
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        this.controller.signUp(username, email, password);
    }

}