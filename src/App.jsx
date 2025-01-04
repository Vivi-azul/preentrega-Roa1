import Navbar from './components/Navbar/Navbar'
import React from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetail from './components/ItemDetail/ItemDetail';
import ItemCount from './components/ItemCount/ItemCount.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar title="*Tiendita V + L*" />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={'Miau..Guau'} />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}
    {/* <ItemCount stock={20} /> */}

export default App;