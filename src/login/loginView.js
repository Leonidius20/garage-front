import loginTemplate from "./loginTemplate";

export default class LoginView {

    constructor(controller) {
        this.controller = controller;
    }

    render() {
        document.getElementById('container').innerHTML = loginTemplate();
        const button = document.getElementById('login-button');
        button.onclick = this.onSubmitLoginFormClicked.bind(this);
    }

    onSubmitLoginFormClicked() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        this.controller.sendLoginRequest(username, password);
    }


}