import {Container, Nav, Navbar} from "react-bootstrap";

function Header() {
    return (
        <header>
            <Navbar variant="dark" bg="primary" expand="lg" collapseOnSelect>
                <Navbar.Brand href="/" className='mx-3'>Clicker</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/create">Create</Nav.Link>
                        <Nav.Link href="#action2">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
        )

}

export default Header;