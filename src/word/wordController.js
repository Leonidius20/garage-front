import BaseController from "../base/baseController";
import WordView from "./wordView";
import {getWord} from "../dao/word";
import {postToEndpoint} from "../dao/base";
import {API} from "../index";
import showErrorScreen from "../errorpage/errorController";

export default class WordController extends BaseController {

    constructor(wordId) {
        super();
        this.wordId = wordId;
        this.view = new WordView(this);
    }

    supplyData() {
        return getWord(this.wordId).then(word => {
            this.view.render(word);
        });
    }

    addWord(definitionId, onSuccess) {
        postToEndpoint( `mywords/${definitionId}`)
            .then(onSuccess).catch(error => {
                showErrorScreen(error);
                console.log(error);
        });
    }

}