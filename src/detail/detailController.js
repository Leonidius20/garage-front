import BaseController from "../base/baseController";
import DetailView from "./detailView";
import {getWord} from "../dao/word";
import {getFromEndpoint, postToEndpoint} from "../dao/base";
import {API} from "../index";
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

    deleteDetail(definitionId, onSuccess) {
        postToEndpoint( `mywords/${definitionId}`)
            .then(onSuccess).catch(error => {
                showErrorScreen(error);
                console.log(error);
        });
    }

}