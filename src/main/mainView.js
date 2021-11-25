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
                    this.controller.searchData(query)
                }
            }
        }
    }


}