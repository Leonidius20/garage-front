export default function wordTemplate(word) {
    return `
        <div class="container">
            <h1>${word['word']}</h1>
            ${word['definitions'].map(definition => {
                return `
                    <div class="definition">
                        <hr>
                        <div style="display: flex; justify-content: space-between">
                            <div>
                                <small>${definition['part_of_speech']}</small>
                                ${definition['labels'].map(label => {
                                    return `<span style="margin-left: 5px; margin-right: 5px" class="badge bg-secondary">${label}</span>`;
                                }).join('')}
                                <p style="margin-top: 16px;">${definition['definition_text']}</p>
                                ${definition['usage_examples'].map(example => `
                                    <p class="text-muted">&laquo;${example['example_sentence']}&raquo;</p>
                                `).join('<br/>')}
                                ${definition['synonyms'].length !== 0 ? '<p class="text-muted" style="display:inline;">Synonyms:</p>' : ''}
                                ${definition['synonyms'].map(synonym => {
                                    return `
                                                    <a href="#word/${synonym['word_id']}">
                                                        <span class="badge bg-light text-dark">${synonym['word']}</span></a>`;
                                }).join(',')}
                            </div>
                            <div style="min-width: 71px">
                                ${definition.is_being_learned ?
                                `<button type="button" class="btn btn-outline-secondary" disabled>Added</button>` : 
                                `<button class="btn btn-primary" onclick="globalThis.onAddDefinitionClicked(this, ${definition.definition_id})">+ Add</button>`
                                } 
                            </div>
                        </div>
                    </div>
                `;    
            }).join('')}
        </div>
    `;
}