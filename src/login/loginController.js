import BaseController from "../base/baseController";
import LoginView from "./loginView";
import {API, refreshNavbar} from "../index";
import {hideLoader, showLoader} from "../loader/loader";
import {setAuthKey} from "../dao/authKey";

export default class LoginController extends BaseController {

    constructor() {
        super();
        this.view = new LoginView(this);
    }

    supplyData() {
        return new Promise(resolve => {
            this.view.render();
            resolve();
        });
    }

    sendLoginRequest(username, password) {
        showLoader();
        fetch(API + 'auth/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password}),
        }).then(response => {
            if (!response.ok || response.status !== 201) {
                console.log(response.json());
                throw new Error(response.statusText);
            }
            return response.json();
        }).then(data => {

            setAuthKey(data['accessToken']);
            refreshNavbar();
            window.location.hash = '';
        }).catch(error => {
            console.log(error);
        }).finally(hideLoader);
    }

}