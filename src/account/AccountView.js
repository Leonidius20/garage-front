import accountTemplate from "./accountTemplate";

export default class AccountView {

    constructor(controller) {
        this.controller = controller;
    }

    render(user) {
        document.getElementById('container').innerHTML = accountTemplate(user);
        document.getElementById('change-email').onclick =
            this.onChangeEmailClicked.bind(this);
        document.getElementById('delete-account').onclick =
            this.onDeleteAccountClicked.bind(this);
    }


    onChangeEmailClicked() {
        const user = this.controller.user;
        const newEmail = prompt('Input a new email address', user.email);
        this.controller.updateEmail(newEmail);
    }

    onDeleteAccountClicked() {
        this.controller.deleteAccount();
    }

}