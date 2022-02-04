import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';

function App() {
  return (
    <div>
      <Navbar dark color="danger">
        <div className="container">
          <NavbarBrand href="/">Ristorante con fusion</NavbarBrand>

        </div>
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;
