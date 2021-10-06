import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link ,useHistory} from 'react-router-dom'

const Header = () => {

  const history = useHistory();
    return (
<Navbar bg="primary" expand="lg" variant="dark">
  <Container>
    <Navbar.Brand>
      <Link to="/">Swagger Editor by HPS</Link>
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <NavDropdown title="User" id="basic-nav-dropdown">
          <NavDropdown.Item onClick={() =>{
            localStorage.removeItem("userInfo");
            history.push("/");
          }}>Logout</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Header
