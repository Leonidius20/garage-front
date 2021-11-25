export default function myWordsTemplate(myWords, pagesCount, currentPage) {
    console.log(pagesCount, currentPage);
    return `
        <div class="container">
        
            <div class="card" style="margin-bottom: 15px">
                <div class="card-body" style="display: flex; justify-content: space-between">
                    <p>Take a quiz to test your knowledge</p>
                    <a href="#quiz" class="btn btn-primary">Take quiz now</a>
                </div>
            </div>
            
            ${myWords.length === 0 ? `<p>You have no words in your dictionary.</p>` : ``}
            
            ${myWords.map(word => `
                <div class="definition">
                    
                    <div style="display: flex; justify-content: space-between">
                        <div>
                            <h3>${word.word}</h3>
                            <small>${word['part_of_speech']}</small>
                            ${word['labels'].map(label => {
                                return `<span style="margin-left: 5px; margin-right: 5px" class="badge bg-secondary">${label}</span>`;
                            }).join('')}
                                    <p style="margin-top: 16px;">${word['def_text']}</p>
                                    ${word['usage_examples'].map(example => `
                                    <p class="text-muted">&laquo;${example['example_sentence']}&raquo;</p>
                                    `).join('<br/>')}
                                    ${word['synonyms'].length !== 0 ? '<p class="text-muted" style="display:inline;">Synonyms:</p>' : ''}
                                    ${word['synonyms'].map(synonym => {
                return `
                                                        <a href="#word/${synonym['word_id']}">
                                                            <span class="badge bg-light text-dark">${synonym['detail']}</span></a>`;
                }).join(',')}
                        </div>
                        <div class="text-nowrap" style="min-width: 100px; display: flex; flex-direction: column; justify-content: space-between">
                            Progress: ${word.learningprogress}%
                            <button class="btn btn-primary" onclick="globalThis.onRemoveWordClicked(${word.def_id})" style="width: fit-content">Remove</button>
                        </div>
                                </div>
                            </div>
                        `
            ).join('<hr>')}
            
            <nav aria-label="pagination" style="margin-top: 2em; margin-bottom: 2em">
              <ul class="pagination justify-content-center">
                <li class="page-item ${currentPage === 1 ? `disabled` : ``}">
                  <a class="page-link" href="#mywords/${currentPage - 1}" tabindex="-1">Previous</a>
                </li>
                ${Array.from({length: pagesCount}, (_, i) => i + 1).map(number => `
                    <li class="page-item ${number === currentPage ? `active` : ``}"><a class="page-link" href="#mywords/${number}">${number}</a></li>
                `).join('')}
                <li class="page-item ${currentPage === pagesCount ? `disabled` : ``}">
                  <a class="page-link" href="#mywords/${currentPage + 1}">Next</a>
                </li>
              </ul>
            </nav>
    `;
}