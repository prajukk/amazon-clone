import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import HomeScreen from './Screen/HomeScreen/homescreen';
import { Routes,Route } from 'react-router-dom';
import Products from './Screen/Products/products';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path='/' element={<HomeScreen/>}/>
      <Route path='/products' element={<Products/>} />
     </Routes>
    
    </div>
  );
}

export default App;