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

    searchData(query, manufacturer, maxPrice, minPrice) {
        showLoader()

        let endpoint = `details/search?query=${query}`
        if (manufacturer.length !== 0)
            endpoint += `&manufacturer=${manufacturer}`
        if (maxPrice.length !== 0)
            endpoint += `&maxPrice=${maxPrice}`
        if (minPrice.length !== 0)
            endpoint += `&minPrice=${minPrice}`

        getFromEndpoint(endpoint).then(data => {
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