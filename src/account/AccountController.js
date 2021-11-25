import BaseController from "../base/baseController";
import {deleteFromEndpoint, getFromEndpoint, patchEndpoint} from "../dao/base";
import AccountView from "./AccountView";
import showErrorScreen from "../errorpage/errorController";
import {clearAuthKey} from "../dao/authKey";

export default class AccountController extends BaseController {

    constructor() {
        super();
        this.view = new AccountView(this);
    }

    supplyData() {
        return getFromEndpoint('account').then(user => {
            this.user = user;
            this.view.render(user)
        });
    }

    updateEmail(newEmail) {
        patchEndpoint('account', {newEmail})
            .then(user => this.view.render(user))
            .catch(error => showErrorScreen(error));
    }

    deleteAccount() {
        deleteFromEndpoint('account').then(() => {
            clearAuthKey();
            window.location.hash = '';
        }).catch(error => showErrorScreen(error));
    }

}