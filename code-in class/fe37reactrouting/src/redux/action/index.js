import ListMovie from "../../page/home/ListMovie"
import * as ActionType from "./../constants/ActionType"

export const actGetListMovie = (ListMovie) => {
    return {
        type: "GET_LIST_MOVIE",
        data: ListMovie
    }
}