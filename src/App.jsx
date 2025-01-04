import Navbar from './components/Navbar/Navbar'
import React from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetail from './components/ItemDetail/ItemDetail';
import ItemCount from './components/ItemCount/ItemCount.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from "./context/CartContext.jsx"
import CartWidget from './components/Navbar/CartWidget.jsx';
// import './App.css'

function App() {
  return (
    <BrowserRouter>
    <CartProvider>
      <Navbar title="*Tiendita V + L*" />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={'Miau..Guau'} />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
      </Routes>

      <CartWidget />
      </CartProvider>
      
    </BrowserRouter>
  );
}

export default App;