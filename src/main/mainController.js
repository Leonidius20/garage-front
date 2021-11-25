import MainView from "./mainView";
import BaseController from "../base/baseController";
import $ from "jquery";
import {API} from "../index";
import {getFromEndpoint} from "../dao/base";
import {hideLoader, showLoader} from "../loader/loader";

export default class MainController extends BaseController {

    constructor() {
        super();
        this.view = new MainView(this);
        this.data = [];
    }

    supplyData() {
        return getFromEndpoint('details').then(data => {
            this.data = data.results;
            this.view.render();
        });
    }

    searchData(query) {
        showLoader()
        getFromEndpoint(`details/search?query=${query}`).then(data => {
            this.data = data.results;
            this.view.render();
            hideLoader()
        })
    }

}