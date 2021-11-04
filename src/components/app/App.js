import { Container } from "react-bootstrap";

import Header from "./Header";
import Footer from "./Footer";
import ListComponent from "./list-component/ListComponent";

import HomeScreen from "../screens/HomeScreen";


function App() {
  return (
    <div>
        <Header/>
        <main className='py-3 mx-2'>
            <Container fluid>
                <HomeScreen/>
                <ListComponent title="List Component"/>
            </Container>
        </main>
        <Footer/>
    </div>
  );
}

export default App;
