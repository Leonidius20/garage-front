import BaseController from "../base/baseController";
import RegistrationView from "./registationView";
import {postToEndpoint} from "../dao/base";
import showErrorScreen from "../errorpage/errorController";

export default class RegistrationController extends BaseController {

    constructor() {
        super();
        this.view = new RegistrationView(this);
    }

    supplyData() {
        return new Promise(resolve => {
            this.view.render();
           resolve();
        });
    }

    signUp(username, email, password) {
        postToEndpoint('user', {username, email, password})
            .then(() => {
                alert('Registration was successful. Now you can log in with these credentials.');
                window.location.hash = 'login';
            }).catch(error => showErrorScreen(error));
    }

}