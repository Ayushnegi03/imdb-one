import './App.css';
import Navbar from './Components/Navbar';
import Watchlist from './Components/Watchlist';
import Movies from './Components/Movies';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Banner from './Components/Banner';
function App() {
  return (
    <>
    <BrowserRouter>
    <h1 className="text-xl font-bold underline"> </h1>
    <Navbar/>
    <Routes>
      <Route path='/' element={<> <Banner/> <Movies/></>}/>
      <Route path='/watchlist' element={<Watchlist/>}/>
    </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;
