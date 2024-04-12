import './App.css';
import Header from "./components/Header";
import Home from "./pages/Home";
import AddItem from './pages/AddItem';
import Checkout from './pages/Checkout';
import ViewInventory from './pages/ViewInventory';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ViewInventory from './pages/ViewInventory';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path='/additem' exact element={<AddItem />}/>
          <Route path='/checkout' exact element={<Checkout />}/>
          <Route path= '/viewinventory' exact element={<ViewInventory />}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
