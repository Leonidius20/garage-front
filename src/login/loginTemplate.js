export default function loginTemplate() {
    return `
        <div class="container" style="display: flex; justify-content: center">
            <div class="card" style="flex-grow: 1; max-width: 400px">
              <div class="card-header">
                Login
              </div>
              <div class="card-body">
                <form>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email or username</label>
                    <input id="username" type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter email or username">
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input id="password" type="password" class="form-control" placeholder="Password">
                  </div>
                  <div style="margin-top: 5px" class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Remember me</label>
                  </div>
                  <button style="margin-top: 5px" id="login-button" type="submit" class="btn btn-primary">Log in</button>
                </form>
              </div>
              <div class="card-footer text-muted">
                Don't have an account? <a href="#registration">Sign up</a>
              </div>
            </div>
        </div>
    `;
}