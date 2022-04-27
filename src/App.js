import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Header from './header/Header';
import Home from './Home/Home';
import About from './about/About';
import Contact from './contact/Contact';
import './App.css';
import Products from './products/products';
function App() {
  return (
    <>
      <Router>
     <Header />
       <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/Products" element={<Products />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
