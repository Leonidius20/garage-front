export default function detailTemplate(detail) {
    return `
        <div class="container">
            <h1>${detail.name}</h1>
            
                <div class="definition">
                    <hr>
                    <div style="display: flex; justify-content: space-between">
                        <div>
                            <small>Manufacturer: ${detail.manufacturer}</small>
                           
                            <p style="margin-top: 16px;">${detail.description ? detail.description : ''}</p>
                            
                            <h4>${Math.round(detail.price * 100) / 100}$</h4>
                            
                        </div>
                        <div style="min-width: 71px">
                            
                           <!-- <button class="btn btn-danger" onclick="globalThis.onDeleteDetailClicked()">Delete</button> -->
                            
                        </div>
                    </div>
                </div>
                    
        </div>
    `;
}