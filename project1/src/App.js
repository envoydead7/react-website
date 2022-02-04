import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
function App() {
  return (
    <div className="App">
      <Navbar dark color="danger">
        <div className="container">
          <NavbarBrand href="/">Ristorante con fusion</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
