import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import logo from "./../assets/logo.png";
import './Header.css'
function Header() {
  return (
    <>
      <Navbar className="nav" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/"><img src={logo} style={{
            width:"45px",
            borderRadius:"100%",
          }}></img></Navbar.Brand>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/menue">Menue</Nav.Link>
            <Nav.Link href="/aboutus">About Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     </>
  );
}

export default Header;