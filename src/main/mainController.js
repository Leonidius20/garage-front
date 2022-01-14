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
        this.page = 1;

        globalThis.onViewDetailsClicked = (id) => {
            window.location.hash = `detail/${id}`;
        }

        globalThis.onNextPageClicked = () => {
            this.page += 1;
            this.showPage();
        }

        globalThis.onPrevPageClicked = () => {
            if (this.page > 1) {
                this.page -= 1;
                this.showPage();
            }
        }
    }

    supplyData() {
        return getFromEndpoint(`details?page=${this.page}`).then(data => {
            if (!data.error) {
                this.data = data.results.slice(0, 20);
                this.view.render();
            } else {
                alert(data.error)
            }
        });
    }

    searchData(query, manufacturer, maxPrice, minPrice) {
        showLoader()

        let cachedEndpoint = `search-cached-details?query=${query}`
        let endpoint = `details/search?query=${query}`

        /*if (manufacturer.length !== 0)
            endpoint += `&manufacturer=${manufacturer}`
        if (maxPrice.length !== 0)
            endpoint += `&maxPrice=${maxPrice}`
        if (minPrice.length !== 0)
            endpoint += `&minPrice=${minPrice}`*/

        getFromEndpoint(cachedEndpoint).then(data => {
            if (!data.error) {
                this.data = data.results;
                this.view.render();
            } else {
                alert(data.error)
            }
            hideLoader()
        })

        getFromEndpoint(endpoint).then(data => {
            if (!data.error) {
                for (const result of data.results) {
                    if (this.data.filter(item => item.id === result.id && item.source === result.source).length <= 0) { // if not exists
                        this.data.push(result)
                    }
                }
                this.view.render();
            } else {
                alert(data.error)
            }
        })

        /*getFromEndpoint(endpoint).then(data => {
            if (!data.error) {
                this.data = data.results;
                this.view.render();
            } else {
                alert(data.error)
            }
            hideLoader()
        })*/
    }

}