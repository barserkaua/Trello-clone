import { Container } from "react-bootstrap";
import Header from "../header/Header";
import ListComponent from "../list-component/ListComponent";

import {DragDropContext} from "react-beautiful-dnd";


function App() {

    const onDragEnd = (result) => {
        // reorder our column
    }

    return (
            <div>
                <Header/>
                <main className='py-3 mx-2'>
                    <DragDropContext onDragEnd={onDragEnd()}>
                        <Container fluid>
                            <ListComponent title="List Component"/>
                        </Container>
                    </DragDropContext>
                </main>
            </div>
    );
}

export default App;
