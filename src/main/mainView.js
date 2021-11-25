import mainTemplate from "./mainTemplate";

export default class MainView {

    constructor(controller) {
        this.controller = controller;
    }

    render() {
        document.getElementById('container').innerHTML = mainTemplate();
        new autoComplete({
            selector: 'input[name="q"]',
            minChars: 2,
            source: (term, response) => {
                this.controller.abortSearchSuggestionsRequest();
                this.controller.requestSearchSuggestions(term, data => response(data));
            },
            renderItem: (item, search) => {
                const word = item['word'];
                const wordId = item['word_id'];

                search = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
                const re = new RegExp("(" + search.split(' ').join('|') + ")", "gi");
                return '<div class="autocomplete-suggestion" data-val="' + word + '" data-id="'+ wordId +'">' + word.replace(re, "<b>$1</b>") + '</div>';
            },
            onSelect: (event, term, item) => {
                window.location.hash = `word/${item.dataset.id}`;
            }
        });
    }


}