import {
    CARD_FORM_OPEN,
    CARD_FORM_CLOSE,
    CARD_FORM_ADD_ITEM,
    CARD_FORM_FAIL,

} from "../constants/listConstants";

import uuid from "uuidv4";

export const cardFormOpen = (id) => async (dispatch) => {
    try {
        dispatch({
                type:CARD_FORM_OPEN,
                payload: id
            }
        )

    } catch (error) {
        dispatch({
            type: CARD_FORM_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const cardFormClose = (id) => async (dispatch) => {
    try {
        dispatch({
                type:CARD_FORM_CLOSE,
                payload: id
            }
        )

    } catch (error) {
        dispatch({
            type: CARD_FORM_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const cardFormAddNewCard = (text, id) => async (dispatch, getState) => {

    try {
        dispatch({
                type: CARD_FORM_ADD_ITEM,
                payload: [text, id]
            }
        )

        dispatch({
                type: CARD_FORM_CLOSE,
            }
        )

    } catch (error) {
        dispatch({
            type: CARD_FORM_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
    // we save our cart history in localStorage
    localStorage.setItem('itemLists', JSON.stringify(getState().lists.itemLists))
    localStorage.setItem('cards', JSON.stringify(getState().lists.cards))
}

