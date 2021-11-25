export default function registrationTemplate() {
    return `
        <div class="container" style="display: flex; justify-content: center">
            <div class="card" style="flex-grow: 1; max-width: 400px">
              <div class="card-header">
                Signing up
              </div>
              <div class="card-body">
                <form>
                  <div class="form-group">
                    <label for="username">Username</label>
                    <input id="username" type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter username">
                  </div>
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input id="email" type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email">
                  </div>
                  <div class="form-group">
                    <label for="password">Password</label>
                    <input id="password" type="password" class="form-control" placeholder="Password">
                  </div>
                  <div style="margin-top: 5px" class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">I agree to terms and conditions</label>
                  </div>
                  <button style="margin-top: 5px" id="signup-button" type="submit" class="btn btn-primary">Sign up</button>
                </form>
              </div>
            </div>
        </div>
    `;
}