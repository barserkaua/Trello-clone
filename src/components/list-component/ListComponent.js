import {Row, Col, Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import CardComponent from "../card-component/CardComponent";
import OpenCardForm from "../open-card-form/OpenCardForm";
import OpenListForm from "../open-list-form/OpenListForm";
import {Droppable} from "react-beautiful-dnd";

import './list-component.scss';

function ListComponent() {
    const dispatch = useDispatch();

    const lists = useSelector(state => state.lists);
    const {itemLists, listFormOpen} = lists;

    return(
        <div>
            <Col className='lists-col'>
                {itemLists.map(list => (
                    <Col key={list.id} sm={12} md={6} lg={4} xl={2} className='list-component mx-1'>
                        <h3>{list.title}</h3>
                        <Droppable droppableId={String(list.id)}>
                            {provided => (
                            <Col
                                key={list.id}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                ref={provided.innerRef}
                            >
                                {list.cards.map((card, index) =>
                                    <CardComponent key={card.id} id={card.id} index={index} text={card.text}/>
                                )}
                                {provided.placeholder}
                            </Col>
                            )}
                        </Droppable>
                        <OpenCardForm key={list.id} list={list}/>
                    </Col>
                ))}
                <Col sm={12} md={6} lg={4} xl={2} className='list-component-form mx-1'>
                    <OpenListForm listForm={listFormOpen}/>
                </Col>
            </Col>
        </div>
    )
}

export default ListComponent;