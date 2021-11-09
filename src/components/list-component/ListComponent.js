import {Row, Col, Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import CardComponent from "../card-component/CardComponent";
import OpenCardForm from "../open-card-form/OpenCardForm";
import OpenListForm from "../open-list-form/OpenListForm";
import {Droppable, Draggable} from "react-beautiful-dnd";

import './list-component.scss';
import {useCallback, useState} from "react";

function ListComponent() {
    const dispatch = useDispatch();

    const lists = useSelector(state => state.lists);
    const {itemLists, cards, listFormOpen} = lists;


    return(
        <div>
            <Col className='lists-col'>
                {itemLists.map((list, index) => (
                    <Draggable key={list.id} draggableId={String(list.id)} index={index}>
                        {provided => (
                            <Col {...provided.draggableProps} ref={provided.innerRef} key={list.id} sm={12} md={6} lg={4} xl={2} className='list-component mx-1'>
                                <h3 {...provided.dragHandleProps}>{list.title}</h3>
                                    <Droppable droppableId={String(list.id)} type="card">
                                        {(provided, snapshot) => (
                                            <Col ref={provided.innerRef}
                                                 {...provided.droppableProps}>
                                                    {list.cards.map((card, index) => (
                                                        <CardComponent key={card.id} id={card.cardId} index={index} text={card.text} listID={list.id}/>
                                                    ))}
                                                    {provided.placeholder}
                                            </Col>
                                        )}
                                    </Droppable>
                                <OpenCardForm key={list.id} list={list} cards={cards}/>
                            </Col>
                        )}
                    </Draggable>
                ))}
                <Col sm={12} md={6} lg={4} xl={2} className='list-component-form mx-1'>
                    <OpenListForm listForm={listFormOpen}/>
                </Col>
            </Col>
        </div>
    )
}

export default ListComponent;