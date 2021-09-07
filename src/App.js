import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Navbar, Nav, Container} from 'react-bootstrap'
import Home from './componants/Home'
import RestaurantCreate from './componants/RestaurantCreate';
import RestaurantList from './componants/RestaurantList';
import ReataurantDetails from './componants/ReataurantDetails';
import RestaurantUpdete from './componants/RestaurantUpdate'
import RestaurantSearch from './componants/RestaurantSearch'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Resto</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home"><Link to='/'>Home</Link></Nav.Link>
                <Nav.Link href="#link"><Link to='/List'>List</Link></Nav.Link>
                <Nav.Link href="#link"><Link to='/Create'>Create</Link></Nav.Link>
                <Nav.Link href="#link"><Link to='/Update'>Update</Link></Nav.Link>
                <Nav.Link href="#link"><Link to='/Search'>Search</Link></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Route path='/list'><RestaurantList/></Route>
        <Route path='/Create'><RestaurantCreate/></Route>
        <Route path='/Update'><RestaurantUpdete/></Route>
        <Route path='/Details'><ReataurantDetails/></Route>
        <Route path='/Search'><RestaurantSearch/></Route>
        <Route exact path='/'><Home/></Route>
      </Router>
    </div>
  );
}

export default App;
