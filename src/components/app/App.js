import { Container } from "react-bootstrap";
import Header from "../header/Header";
import ListComponent from "../list-component/ListComponent";

import {DragDropContext, Droppable} from "react-beautiful-dnd";


function App() {

    const onDragEnd = (result) => {
        // reorder our column
    }

    return (
            <div>
                <Header/>
                <DragDropContext onDragEnd={onDragEnd()}>
                    <Droppable
                        droppableId="lists-col"
                        direction="horizontal"
                        type="column"
                    >
                        {provided => (
                            <main className='py-3 mx-2'
                                  {...provided.droppableProps}
                                  ref={provided.innerRef}
                            >
                                <Container fluid>
                                    <ListComponent title="List Component"/>
                                </Container>
                            </main>
                        )}
                    </Droppable>
                </DragDropContext>
            </div>
    );
}

export default App;
