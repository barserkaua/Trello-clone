import React, { useRef } from 'react'
import { Card } from "react-bootstrap";
import { useDrag, useDrop } from 'react-dnd'
import {Draggable} from "react-beautiful-dnd";

function CardComponent({text, id, index}) {

    return(
        <Draggable draggableId={String(id)} index={index}>
            {(provided, snapshot) => (
                <div {...provided.draggableProps}
                     {...provided.dragHandleProps}
                     ref={provided.innerRef}>
                    <Card  border="danger" style={{ width: '18rem'}} className='my-2'>
                        <Card.Body>
                            <Card.Text>
                                {text}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

            )}
        </Draggable>
    )
}

export default CardComponent

//const Container = styled.div`
//  color: black;
//  border: 1px solid lightgrey;
//  border-radius: 2px;
//  padding: 8px;
//  margin-bottom: 8px;
//  background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')};
//`;
//
//export default class CardComponent extends React.Component {
//
//    render() {
//        const {id, index, text} = this.props;
//
//        return (
//            <Draggable draggableId={String(id)} index={index}>
//                {(provided, snapshot) => (
//                    <div {...provided.draggableProps}
//                         {...provided.dragHandleProps}
//                         ref={provided.innerRef}
//                         isDragging={snapshot.isDragging}>
//                        <Container
//
//                            aria-roledescription="Press space bar to lift the task"
//                        >
//                            {text}
//                        </Container>
//                    </div>
//                )}
//            </Draggable>
//        );
//    }
//}