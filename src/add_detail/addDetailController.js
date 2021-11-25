import BaseController from "../base/baseController";
import AddDetailView from "./addDetailView";
import {postToEndpoint} from "../dao/base";
import showErrorScreen from "../errorpage/errorController";

export default class AddDetailController extends BaseController {

    constructor() {
        super();
        this.view = new AddDetailView(this);
    }

    supplyData() {
        return new Promise(resolve => {
            this.view.render();
           resolve();
        });
    }

    addDetail(name, manufacturer, description, type, price) {
        postToEndpoint(`details?name=${name}
            &manufacturer=${manufacturer}
            &description=${description}
            &type=${type}
            &price=${price}
        `, null, false)
            .then(() => {
                alert('Success.');
                window.location.hash = '';
            }).catch(error => showErrorScreen(error));
    }

}