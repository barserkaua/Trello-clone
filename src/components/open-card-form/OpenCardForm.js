import { Button } from "react-bootstrap";
import Textarea from 'react-textarea-autosize';
import { useDispatch } from "react-redux";
import { cardFormClose, cardFormOpen, cardFormAddNewCard } from "../../actions/cardActions";
import './open-card-form.scss'
import {useState} from "react";

function OpenCardForm({list, cards}) {
    const {id, formCardOpen} = list;

    const cardId = +cards.length + 1

    const dispatch = useDispatch();

    const CardFormOpenBtn = () => {
        dispatch(cardFormOpen(id))
    }

    const CardFormCloseBtn = () => {
        dispatch(cardFormClose(id))
    }

    // values for our textarea
    const [text, setText] = useState('');

    const HandleAddNewCard = (e) => {
        if (text.length > 0 && text !== null && text !== undefined) {
            dispatch(cardFormAddNewCard({text, cardId:`card-${cardId}`}, id))
        }
    }

    return(
        <div>
            {!formCardOpen ? <Button className="btn-block" onClick={CardFormOpenBtn}><i className="fas fa-plus"></i> Add New Card</Button>
                :
                <div>
                    <Textarea
                        required
                        autoFocus
                        onBlur={HandleAddNewCard}
                        onChange={(e) => setText(e.target.value)}
                        className="list-textarea"
                        placeholder="Enter some text..." />
                    <div className="form-open">
                        <Button className="form-add-item" onMouseDown={HandleAddNewCard} variant="success">Add Card</Button>
                        <button className="form-close" onMouseDown={CardFormCloseBtn}><i className="fas fa-times"></i></button>
                    </div>
                </div>
            }
        </div>
    )
}

export default OpenCardForm;