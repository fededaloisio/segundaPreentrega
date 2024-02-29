import Cart from "./components/common/Cart.jsx"
import Navbar from "./components/layout/Navbar"
import ItemDetailContainer from "./components/pages/ItemDetailContainer/ItemDetailContainer.jsx"
import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer.jsx"
import { BrowserRouter, Route, Routes } from "react-router-dom"


const App = ()=>{

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={ <ItemListContainer /> } />
        <Route path="/category/:category" element={ <ItemListContainer /> } />
        <Route path="/cart" element={ <Cart /> } />
        <Route path="/item/:id" element={ <ItemDetailContainer /> } />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
