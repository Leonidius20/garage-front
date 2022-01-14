import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.min';
import './assets/global-styles.css';
import MainController from "./main/mainController";
import DetailController from "./detail/detailController";
import {authKeyExists, clearAuthKey, getAuthKey} from "./dao/authKey";
import LoginController from "./login/loginController";
import mainTemplate from "./mainTemplate";
import RegistrationController from "./registration/registrationController";
import MyWordsController from "./mywords/myWordsController";
import QuizController from "./quiz/quizController";
import AccountController from "./account/AccountController";
import AddDetailController from "./add_detail/addDetailController";
import SearchResultsController from "./searchResults/searchResultsController";

export const API = 'http://localhost:8081/';

window.onhashchange = navigate;

window.onload = () => {
    refreshNavbar();
    navigate();
}

function navigate() {
    const hash = window.location.hash.slice(1);

    // deselectAllNavbarItems();

    const [path, id] = hash.split('/');

    switch (path) {
        case '':
            new MainController().showPage();
            // selectNavbarItem('nav-item-home');
            break;
        case 'detail':
            new DetailController(id).showPage();
            break;
        case 'add-detail':
            new AddDetailController().showPage();
            break;
        case 'login':
            if (!authKeyExists()) new LoginController().showPage();
            else window.location.hash = '';
            break;
        case 'logout':
            clearAuthKey();
            refreshNavbar();
            window.location.hash = '';
            break;
        case 'registration':
            if (authKeyExists()) window.location.hash = '';
            else new RegistrationController().showPage();
            break;
        case 'mywords':
            if (!authKeyExists()) window.location.hash = 'login';
            else new MyWordsController(id ? parseInt(id) : 1).showPage();
            break;
        case 'quiz':
            if (!authKeyExists()) window.location.hash = 'login';
            else new QuizController().showPage();
            break;
        case 'account':
            if (!authKeyExists()) window.location.hash = 'login';
            else new AccountController().showPage();
            break;
        case 'search':
            new SearchResultsController(id).showPage();
            break;
        default:
            window.location.hash = '';
            break;
    }

    scroll(0, 0);
    document.getElementById('navbarSupportedContent').classList.remove('show');
}

export function refreshNavbar() {
    document.body.innerHTML = mainTemplate(authKeyExists());
}
