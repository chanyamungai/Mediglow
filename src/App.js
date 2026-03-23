import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproducts from './components/Addproducts';
import Getproducts from './components/Getproducts';
import Makepayment from './components/Makepayment';
import Notfound from './components/Notfound';

function App() {
  return (
   <Router>
     <div className="App">
     <header className="App-header">
        <h2 className="logo">CharmeBeauty</h2>
        <nav className="nav-links">
          <Link to="/" className="nav-btn home">Home</Link>
          <Link to="/addproducts" className="nav-btn add">Add Products</Link>
          <Link to="/signin" className="nav-btn signin">Signin</Link>
          <Link to="/signup" className="nav-btn signup">Signup</Link>
  </nav>
</header>
      <Routes>
        <Route path = "/signup" element ={<Signup/>}/>
        <Route path = "/signin" element ={<Signin/>}/>
        <Route path ="/addproducts" element={<Addproducts/>}/>
        <Route path ="/" element={<Getproducts/>}/>
        <Route path ="/makepayment" element ={<Makepayment/>}/>
        <Route path = "*" element ={<Notfound/>}/>
        
      </Routes>
    </div>

   </Router>
  );
}

export default App;
