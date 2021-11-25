import MainView from "./mainView";
import BaseController from "../base/baseController";
import $ from "jquery";
import {API} from "../index";

export default class MainController extends BaseController {

    constructor() {
        super();
        this.view = new MainView(this);
        this.searchSuggestionsRequest = null;
    }

    supplyData() {
        return new Promise(resolve => {
            this.view.render();
            resolve();
        });
    }

    abortSearchSuggestionsRequest() {
        try {
            this.searchSuggestionsRequest.abort();
        } catch (e) {}
    }

    requestSearchSuggestions(searchTerm, callback) {
        // TODO: maybe move to model
        $.getJSON(API + 'search', {q: searchTerm}, (data) => {
            callback(data);
        });
    }


}