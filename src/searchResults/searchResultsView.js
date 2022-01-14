

export default class SearchResultsView {

    constructor(controller) {
        this.controller = controller
    }

    render() {
        document.getElementById('container').innerHTML
            = this.searchResultsTemplate(
                this.controller.data.slice(this.controller.page * 10, this.controller.page * 10 + 10)
        );
        const searchBox = document.getElementById("qq");
        searchBox.onkeypress = (event) => {
            if (event.keyCode === 13) {
                const query = searchBox.value
                if (query.length !== 0) {
                    window.location.hash = `search/${query}`
                }
            }
        }
    }

    searchResultsTemplate(searchResults) {
        return `
        <div class="container">
        <form>
            <input style="margin-bottom: 15px" class="form-control" type="text" id="qq" placeholder="Search for a car detail..." autocomplete="off">
            <div style="display: flex">
               <!-- <input style="margin-bottom: 15px; flex-grow: 2" class="form-control" type="text" id="manufacturer" placeholder="Filter by manufacturer (optional)" autocomplete="off">
                <input style="margin-bottom: 15px; margin-left: 10px; flex-grow: 1" class="form-control" type="number" id="min_price" placeholder="Min price" autocomplete="off">
                <input style="margin-bottom: 15px; margin-left: 10px; flex-grow: 1" class="form-control" type="number" id="max_price" placeholder="Max price" autocomplete="off">-->
                
            </div>
        </form>
            
            
            ${searchResults.length === 0 ? `<p>Type your search query and hit Enter.</p>` : ``}
            
            ${searchResults.map(detail => `
                <div class="definition">
                    
                    <div style="display: flex; justify-content: space-between">
                        <div>
                            <h3>${detail.name}</h3>
                            <small>Manufacturer: ${detail.manufacturer}</small>
                            <p style="margin-top: 16px;">${detail.description}</p>
                        </div>
                        
                        <div style="min-width: 112px; text-align: end; display: flex; flex-direction: column; justify-content: end">
                            Price: ${detail.price}$
                            <button class="btn btn-primary" onclick="globalThis.onSearchResultDetailsClicked('${detail.id}-${detail.source}')" style="width: fit-content; white-space: nowrap; margin-top: 10px">View Details</button>
                        </div>
                        
                        
                    </div>
                </div>
               
                        `
        ).join('<hr>')}
            
            <button class="btn btn-primary" onclick="globalThis.onResultsPrevPageClicked()">Previous page</button>
            <button class="btn btn-primary" onclick="globalThis.onResultsNextPageClicked()">Next page</button>
            
        </div>
    `;
    }

}