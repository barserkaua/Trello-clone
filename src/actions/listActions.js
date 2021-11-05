import {
    LIST_FORM_OPEN,
    LIST_FORM_CLOSE,
    LIST_FORM_ADD_NEW_LIST,
    LIST_FORM_FAIL,
} from "../constants/listConstants";

import uuid from "uuidv4";

export const listFormOpen = () => async (dispatch) => {
    try {
        dispatch({
                type:LIST_FORM_OPEN,
            }
        )

    } catch (error) {
        dispatch({
            type: LIST_FORM_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const listFormClose = () => async (dispatch) => {
    try {
        dispatch({
                type:LIST_FORM_CLOSE,
            }
        )

    } catch (error) {
        dispatch({
            type: LIST_FORM_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const listFormAddNewList = (title) => async (dispatch, getState) => {

    try {
        dispatch({
                type:LIST_FORM_ADD_NEW_LIST,
                payload: title
            }
        )

    } catch (error) {
        dispatch({
            type: LIST_FORM_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
    // we save our cart history in localStorage
    localStorage.setItem('itemLists', JSON.stringify(getState().lists.itemLists))
}
