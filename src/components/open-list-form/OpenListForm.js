import {Button, Col, Form} from "react-bootstrap";
import { useDispatch} from "react-redux";
import { useState } from "react";
import { listFormOpen, listFormClose, listFormAddNewList } from "../../actions/listActions";

import './open-list-form.scss'
import {cardFormAddNewCard} from "../../actions/cardActions";

function OpenListForm({listForm}) {

    const dispatch = useDispatch();

    const ListFormOpenBtn = () => {
        dispatch(listFormOpen())
    }

    const ListFormCloseBtn = () => {
        dispatch(listFormClose())
    }

    // values for our input
    const [title, setTitle] = useState('');

    const HandleAddNewList = (e) => {
        if (title.length > 0 && title !== null && title !== undefined) {
            dispatch(listFormAddNewList({title}))
        }
    }

    return(
        <div>
            {!listForm ? <button onClick={ListFormOpenBtn} className="btn-block add-new-list" ><i className="fas fa-plus"></i> Add New List</button>
                :
                <Col className='list-component mx-1'>
                    <input
                        required
                        autoFocus
                        onBlur={ListFormCloseBtn}
                        value={title ? title : ''}
                        className="list-textarea"
                        placeholder="Enter new list name..."
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <div className="form-open">
                        <Button className="form-add-item" onMouseDown={HandleAddNewList} variant="success">Add Card</Button>
                        <button className="form-close" onMouseDown={ListFormCloseBtn}><i className="fas fa-times"></i></button>
                    </div>
                </Col>
            }
        </div>
    )
}

export default OpenListForm;