import {hideLoader, showLoader} from "../loader/loader";
import showErrorScreen from "../errorpage/errorController";

export default class BaseController {

    showPage() {
        showLoader();
        this.supplyData().catch(error => {
            showErrorScreen(error);
        }).finally(hideLoader);
    }

    supplyData() {
        return Promise.resolve();
    }

}