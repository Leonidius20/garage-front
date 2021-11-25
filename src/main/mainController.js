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

        globalThis.onViewDetailsClicked = (id) => {
            window.location.hash = `detail/${id}`;
        }
    }

    supplyData() {
        return getFromEndpoint('details').then(data => {
            if (!data.error) {
                this.data = data.results;
                this.view.render();
            } else {
                alert(data.error)
            }
        });
    }

    searchData(query) {
        showLoader()
        getFromEndpoint(`details/search?query=${query}`).then(data => {
            if (!data.error) {
                this.data = data.results;
                this.view.render();
            } else {
                alert(data.error)
            }
            hideLoader()
        })
    }

}