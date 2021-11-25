import quizTemplate from "./quizTemplate";
import QuizController from "./quizController";
import quizResultTemplate from "./quizResultTemplate";

export default class QuizView {

    constructor(controller) {
        this.controller = controller;
    }

    async render() {
        const word = this.controller.practiceWords[this.controller.currentWord];

        this.definitions = await this.controller.getRandomDefinitions(word['def_id']);

        globalThis.onDefinitionClicked = this.onDefinitionClicked.bind(this);

        document.getElementById('container').innerHTML = quizTemplate(word, this.definitions);
    }

    onDefinitionClicked(element, definitionId) {
        const definition = this.definitions
            .find(word => word['definition_id'] === definitionId);

        let correctDefId;
        if (definition['correct']) {
            this.controller.score++;
            element.classList.add('list-group-item-success');
            correctDefId = definitionId;
        } else {
            element.classList.add('list-group-item-danger');
            const correctDef = this.definitions.find(def => def['correct']);
            correctDefId = correctDef['definition_id'];
            const correctItem =
                document.querySelector(`[data-id='${correctDef['definition_id']}']`);
            correctItem.classList.add('list-group-item-success');
        }

        this.controller.sendGuessAttempt(correctDefId, definition['correct']);

        setTimeout(() => this.controller.nextWord(), 1000);
    }

    renderScore() {
        document.getElementById('container').innerHTML =
            quizResultTemplate(this.controller.score, this.controller.NUMBER_OF_PRACTICE_WORDS);
    }

}