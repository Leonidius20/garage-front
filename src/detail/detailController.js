import BaseController from "../base/baseController";
import DetailView from "./detailView";
import {deleteFromEndpoint, getFromEndpoint} from "../dao/base";
import showErrorScreen from "../errorpage/errorController";

export default class DetailController extends BaseController {

    constructor(detailId) {
        super();
        this.detailId = detailId;
        this.view = new DetailView(this);
        this.detail = {}

        globalThis.onDeleteDetailClicked = this.deleteDetail.bind(this)
    }

    supplyData() {
        return getFromEndpoint(`details/${this.detailId}`).then(data => {
            if (!data.error) {
                this.detail = data;
                this.view.render(data);
            } else {
                alert(data.error)
            }
        })
    }

    deleteDetail() {
        deleteFromEndpoint( `details/${this.detailId}`, false)
            .then(() => {
                alert("Deleted or not deleted the detail. Who knows.");
                window.location.hash = '';
            }).catch(error => {
                showErrorScreen(error);
                console.log(error);
        });
    }

}