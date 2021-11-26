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
                    this.controller.supplyData()
                } else {
                    const manufacturer = document.getElementById("manufacturer").value
                    const maxPrice = document.getElementById("max_price").value
                    const minPrice = document.getElementById("min_price").value

                    this.controller.searchData(query, manufacturer, maxPrice, minPrice)
                }
            }
        }
    }


}