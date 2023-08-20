
import './App.css';
import Jumbotron from './components/jumbotron/jumbotron';
import Card1 from './components/cards/card1';
import Card2 from './components/cards/card2';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import AcercaDe from './pages/acerca-de/acerca-de';
import QuienesSomos from './pages/quienes-somos/quienes-somos';
import { Navbar2 } from './components/navbar2/navbar2';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (

    <BrowserRouter>

    < Navbar2 />
    <Routes>
      <Route path='/' element={<Jumbotron />}></Route>
      <Route path='/acerca-de' element={<AcercaDe />}></Route>
      <Route path='/quienes-somos' element={<QuienesSomos />}></Route>
    </Routes>
    <Footer />
  
   
    
    
    </BrowserRouter>
  );
}

export default App;
