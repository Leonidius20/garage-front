export default function quizTemplate(word, definitions) {
    return `
        <div class="container" style="display: flex; justify-content: center">
            <div class="card" style="max-width: 18rem; flex-grow: 1">
              <div class="card-body">
                <h5 class="card-title">${word['word']}</h5>
                <p class="card-text text-muted">${word['part_of_speech']}</p>
              </div>
              <ul class="list-group list-group-flush">
                ${definitions.map(definition => `
                    <li class="list-group-item" data-id="${definition['definition_id']}" onclick="globalThis.onDefinitionClicked(this, ${definition['definition_id']})">
                        ${definition['definition_text']}<br/>
                    </li>
                `).join('')}
              </ul>
            </div>
        </div>
    `;
}