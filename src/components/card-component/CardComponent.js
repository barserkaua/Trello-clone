
import { Card } from "react-bootstrap";
import {Draggable, Droppable} from "react-beautiful-dnd";

function CardComponent({text, id, index}) {

    return(
        <Draggable draggebleId={String(id)} index={index}>
            {provided => (
                <Card
                    key={id}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    border="danger" style={{ width: '18rem' }} className='my-2'>
                    <Droppable droppableId={String(id)}>
                        {provided => (
                            <Card.Body {...provided.droppableProps} ref={provided.innerRef}>
                                <Card.Text>
                                    {text}
                                </Card.Text>
                            </Card.Body>
                        )}
                    </Droppable>
                </Card>
            )}
        </Draggable>

    )
}

export default CardComponent