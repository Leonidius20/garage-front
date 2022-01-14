import BaseController from "../base/baseController";
import {getFromEndpoint} from "../dao/base";
import {hideLoader, showLoader} from "../loader/loader";
import SearchResultsView from "./searchResultsView";

export default class SearchResultsController extends BaseController {

    constructor(query) {
        super();

        this.data = []
        this.query = query
        this.page = 0

        globalThis.onResultsNextPageClicked = () => {
            this.page += 1;
            this.view.render();
        }

        globalThis.onResultsPrevPageClicked = () => {
            if (this.page > 1) {
                this.page -= 1;
                this.view.render();
            }
        }

        this.view = new SearchResultsView(this)

        globalThis.onSearchResultDetailsClicked = (id) => {
            window.location.hash = `detail/${id}`;
        }
    }

    showPage() {
        showLoader()

        let cachedEndpoint = `search-cached-details?query=${this.query}`
        let endpoint = `details/search?query=${this.query}`

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
    }

}