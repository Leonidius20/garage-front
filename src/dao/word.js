import {getFromEndpoint} from "./base";

export function getWord(id) {
    return getFromEndpoint(`word/${id}`);
}