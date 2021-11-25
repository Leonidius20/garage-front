import myWordsTemplate from "./myWordsTemplate";

export default class MyWordsView {

    constructor(controller) {
        this.controller = controller;
    }

    render(myWords) {
        document.getElementById('container').innerHTML
            = myWordsTemplate(myWords, this.controller.pagesCount, this.controller.pageNumber);
        globalThis.onRemoveWordClicked = this.onRemoveWordClicked.bind(this);
    }

    onRemoveWordClicked(definitionId) {
        this.controller.removeWord(definitionId);
    }

}