import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Footer from './component/Footer';
import About from './component/About';
// import Router from './component/Router';
import Router from '../src/component/Router';
import { BrowserRouter } from 'react-router-dom'
import NavbarComp from "./component/NavbarComp"
import Map from './component/Map';

function App() {
  return (
    <div>
      <BrowserRouter >
      <NavbarComp />
      <Router />
      {/* <Home />  */}
      <Footer /> 
      {/* <About /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
