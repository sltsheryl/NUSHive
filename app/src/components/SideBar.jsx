import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function SideBar() {
  return (
    <Navbar className="mx-5" bg="white" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
      
         
            <NavDropdown title="Sort" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Modules</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              Date
              </NavDropdown.Item>
              <NavDropdown.Divider />
              
            </NavDropdown>
            <Nav.Link href="#">
              Post Question
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SideBar;
