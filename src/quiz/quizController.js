import QuizView from "./quizView";
import BaseController from "../base/baseController";
import {getFromEndpoint, postToEndpoint} from "../dao/base";

export default class QuizController extends BaseController {

    constructor() {
        super();
        this.view = new QuizView(this);
        this.NUMBER_OF_PRACTICE_WORDS = 5;
        this.NUMBER_OF_DEFINITIONS = 4;
    }

    supplyData() {
        return getFromEndpoint('mywords')
            .then(words => {
                this.words = words;
                this.NUMBER_OF_PRACTICE_WORDS = Math.min(this.NUMBER_OF_PRACTICE_WORDS, words.length);
                this.practiceWords =
                    QuizController.getRandomN(words, this.NUMBER_OF_PRACTICE_WORDS);
                this.currentWord = 0;
                this.score = 0;
                this.view.render();
            });
    }

    getRandomDefinitions(withDefId) {
        return getFromEndpoint(
            `randomdef/${withDefId}?numberOfRows=${this.NUMBER_OF_DEFINITIONS}`)
            .then(rows => {
                rows.forEach(definition => {
                    definition['correct'] = (definition['definition_id'] === withDefId);
                    return rows;
                });
                return rows;
            }).then(rows => QuizController.shuffleArray(rows));
    }

    sendGuessAttempt(definitionId, is_correct) {
        const data = {
            'definition_id': definitionId,
            is_correct
        };

        postToEndpoint('saveattempt', data)
            .catch(error => console.log(error));
    }

    // get random N elements from array
    // https://stackoverflow.com/a/19270021
    static getRandomN(arr, n) {
        var result = new Array(n),
            len = arr.length,
            taken = new Array(len);
        if (n > len)
            throw new RangeError("getRandom: more elements taken than available");
        while (n--) {
            var x = Math.floor(Math.random() * len);
            result[n] = arr[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
    }

    // shuffling array in place
    // https://stackoverflow.com/a/12646864
    static shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    nextWord() {
        this.currentWord++;

        if (this.currentWord === this.practiceWords.length) {
            this.view.renderScore();
        } else this.view.render();
    }

}