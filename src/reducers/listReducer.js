import {
    CARD_FORM_OPEN,
    CARD_FORM_CLOSE,
    CARD_FORM_ADD_ITEM,
    CARD_FORM_FAIL,

    LIST_FORM_OPEN,
    LIST_FORM_CLOSE,
    LIST_FORM_ADD_NEW_LIST,
    LIST_FORM_FAIL,
} from "../constants/listConstants";

const initialState = [

    {
        id: `list-${0}`,
        cards: [`card-${0}`],
        title: "myList",
        board: "board-0"
    }
];

//const initialState = [
//    {
//        title:"Last Episode",
//        formCardOpen: false,
//        id: 0,
//        cards: [
//            {
//                id: 0,
//                text: "Last last last episode Last last last episode Last last last episode Last last last episode"
//            },
//            {
//                id: 1,
//                text: "Another last episode"
//            },
//        ]
//    },
//    {
//        title:"Firs Episode",
//        formOpen: false,
//        id: 1,
//        cards: [
//            {
//                id: 0,
//                text: "This is is first episode"
//            },
//            {
//                id: 1,
//                text: "Another firs episode Another firs episode Another firs episode Another firs episode"
//            },
//            {
//                id: 2,
//                text: "AS a much"
//            },
//        ]
//    }
//]

export const listReducer = (state={itemLists:initialState, cards:[], listFormOpen:false}, action) => {
    switch (action.type) {
        case CARD_FORM_OPEN:
            state.itemLists.map(item => {
                if (item.id === action.payload) {
                    item.formCardOpen = true
                }
            })
            return {
                ...state,
            }
        case CARD_FORM_CLOSE:
            state.itemLists.map(item => {
                if (item.id === action.payload) {
                    item.formCardOpen = false
                }
            })
            return {...state,}

        case CARD_FORM_ADD_ITEM:
            const [text, id] = action.payload;
            state.itemLists.map(item => {
                if (item.id === id) {
                    item.formCardOpen = false
                    item.cards = [...item.cards, text]
                }
            })
            return {...state, cards: [...state.cards, text], listFormOpen: false}

        case LIST_FORM_OPEN:
            return {
                ...state,
                listFormOpen: true
            }

        case LIST_FORM_CLOSE:
            return {
                ...state,
                listFormOpen: false
            }

        case LIST_FORM_ADD_NEW_LIST:
            const {title} = action.payload;
            const listId = +state.itemLists.length;
            const newList = {
                title: title,
                formCardOpen: false,
                cards: [],
                id: `list-${listId}`,
            }

            const newState = {
                ...state,
                listFormOpen: true,
                itemLists: [...state.itemLists, newList],

            };
            return newState;


        case LIST_FORM_FAIL:
            return {error: action.payload}

        default:
            return state;
    }
}
