export default function quizResultTemplate(score, outOf) {
    return `
        <div class="container"  style="display: flex; justify-content: center">
            <div class="card" style="flex-grow: 1; max-width: 400px; text-align: center">
                <div class="card-body">
                    <h1>Score: ${score}/${outOf}</h1>
                </div>
                <div class="card-footer">
                    <a href="#mywords" class="btn btn-primary">Go to my words</a>
                </div>
            </div>
        </div>
    `;
}