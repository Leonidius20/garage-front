import BaseController from "../base/baseController";
import {getFromEndpoint} from "../dao/base";
import {hideLoader, showLoader} from "../loader/loader";
import SearchResultsView from "./searchResultsView";

export default class SearchResultsController extends BaseController {

    constructor(input) {
        super();

        this.data = []

        this.previousHash = window.location.hash // needed for checking whether to render after long fetch ends

        const queryAndParams = input.split('?')
        this.query = queryAndParams[0]

        const urlParams = new URLSearchParams('?' + queryAndParams[1]);

        this.maxPrice =  urlParams.get('maxPrice');
        this.minPrice =  urlParams.get('minPrice');
        this.manufacturer = urlParams.get('manufacturer');

        this.page = 0
        this.isLoadingAdditionalData = true

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

        if (this.manufacturer && this.manufacturer.length !== 0) {
            endpoint += `&manufacturer=${this.manufacturer}`
            cachedEndpoint += `&manufacturer=${this.manufacturer}`
        }
        if (this.maxPrice && this.maxPrice.length !== 0) {
            endpoint += `&maxPrice=${this.maxPrice}`
            cachedEndpoint += `&maxPrice=${this.maxPrice}`
        }
        if (this.minPrice && this.minPrice.length !== 0) {
            endpoint += `&minPrice=${this.minPrice}`
            cachedEndpoint += `&minPrice=${this.minPrice}`
        }

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
                this.isLoadingAdditionalData = false
                if (window.location.hash === this.previousHash)
                    this.view.render();
            } else {
                alert(data.error)
            }
        })
    }

}