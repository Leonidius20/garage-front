import BaseController from "../base/baseController";
import MyWordsView from "./myWordsView";
import {deleteFromEndpoint, getFromEndpoint} from "../dao/base";
import showErrorScreen from "../errorpage/errorController";

export default class MyWordsController extends BaseController {

    constructor(pageNumber) {
        super();
        this.view = new MyWordsView(this);
        this.pageNumber = pageNumber;
        this.WORDS_ON_PAGE = 5;
    }

    supplyData() {
        return getFromEndpoint('countmywords')
            .then(countObj => {
                this.pagesCount = Math.ceil(countObj['count'] / this.WORDS_ON_PAGE);
                if (this.pagesCount === 0) this.pagesCount++;
                if (this.pagesCount < this.pageNumber) {
                    window.location.hash = 'mywords/1';
                } else {
                    getFromEndpoint(`mywords/${this.pageNumber}?wordsOnPage=${this.WORDS_ON_PAGE}`)
                        .then(words => {
                            this.words = words;
                            this.view.render(words)
                        });
                }
            });
    }

    removeWord(definitionId) {
        deleteFromEndpoint(`mywords/${definitionId}`)
            .then(() => {
                this.words.splice(this.words.findIndex(word => word['def_id'] === definitionId), 1);
                this.view.render(this.words);
            }).catch(error => showErrorScreen(error));
    }

}