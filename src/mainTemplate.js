export default function mainTemplate(loggedIn) {
    return `
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">CloudDict</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        ${loggedIn ? `
                            <li class="nav-item">
                                <a class="nav-link" href="#mywords">My words</a>
                            </li>
                        ` : ``}
                    </ul>
                    <ul class="navbar-nav ml-auto">
                        ${!loggedIn ? `
                            <li class="nav-item">
                                  <a class="nav-link" aria-current="page" href="#registration">Sign up</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#login">Log in</a>
                            </li>
                        ` : `
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#account">My account</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#logout">Log out</a>
                            </li>
                        `}
                    </ul>
                </div>
            </div>
        </nav>
    
        <!-- TODO: https://handlebarsjs.com/installation/integrations.html#webpack-handlebars-loader -->
    
        <!-- main container -->
        <div id="container"></div>
    `;
}