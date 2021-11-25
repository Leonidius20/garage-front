export default function mainTemplate(searchResults) {
    return `
        <div class="container">
            <input style="margin-bottom: 15px" class="form-control" type="text" name="q" id="q" placeholder="Search for a car detail..." autocomplete="off">
            
            ${searchResults.length === 0 ? `<p>Type your search query and hit Enter.</p>` : ``}
            
            ${searchResults.map(detail => `
                <div class="definition">
                    
                    <div style="display: flex; justify-content: space-between">
                        <div>
                            <h3>${detail.name}</h3>
                            <small>Manufacturer: ${detail.manufacturer}</small>
                            <p style="margin-top: 16px;">${detail.description}</p>
                        </div>
                        
                        <div class="text-nowrap" style="min-width: 100px; text-align: end; display: flex; flex-direction: column; justify-content: end">
                            Price: ${detail.price}$
                            <button class="btn btn-primary" onclick="globalThis.onRemoveWordClicked(${detail.def_id})" style="width: fit-content; margin-top: 10px">View Details</button>
                        </div>
                        
                        
                    </div>
                </div>
               
                        `
            ).join('<hr>')}
            
        </div>
    `;
}