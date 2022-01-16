import mainTemplate from "./mainTemplate";

export default class MainView {

    constructor(controller) {
        this.controller = controller;
    }

    render() {
        document.getElementById('container').innerHTML = mainTemplate(this.controller.data);

        const searchBox = document.getElementById("q");

        searchBox.onkeypress = (event) => {
            if (event.keyCode === 13) {
                const query = searchBox.value
                if (query.length === 0) {
                    // this.controller.supplyData()
                } else {
                    const manufacturer = document.getElementById("manufacturer").value
                    const maxPrice = document.getElementById("max_price").value
                    const minPrice = document.getElementById("min_price").value

                    let hash = `search/${query}?`

                    if (manufacturer.length !== 0) {
                        hash += `manufacturer=${manufacturer}&`
                    }
                    if (maxPrice.length !== 0) {
                        hash += `maxPrice=${maxPrice}&`
                    }
                    if (minPrice.length !== 0) {
                        hash += `minPrice=${minPrice}&`
                    }

                    // this.controller.searchData(query) //, manufacturer, maxPrice, minPrice)
                    window.location.hash = hash
                }
            }
        }
    }


}