export default function accountTemplate(user) {
    return `
        <div class="container"  style="display: flex; justify-content: center">
            <div class="card" style="flex-grow: 1; max-width: 400px;">
                <div class="card-header">
                    Your account
                </div>
                <div class="card-body">
                    <p>Username: ${user.username}</p>
                    <div style="display: flex; justify-content: space-between">
                        <p>Email: ${user.email}</p>
                        <button id="change-email" class="btn btn-primary">Change</button>
                    </div>
                    <p>Premium expiry date: ${user.premium_expiry_date 
                        ? user.premium_expiry_date
                        : `no premium`}</p>
                    <button id="delete-account" class="btn btn-danger">Delete account</button>
                </div>
            </div>
        </div>
    `;
}