import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/LoginSection/Login/Login';
import Register from './Pages/LoginSection/Register/Register';
import RequireAuth from './Pages/LoginSection/Login/RequireAuth/RequireAuth';
import Checkout from './Pages/Checkout/Checkout';
import DetailService from './Pages/DeatilsOfService/DetailService';
import Blogs from './Pages/Blogs/Blogs';
// new
import { createContext, useState } from 'react';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';


// new
export const ProductContext = createContext();

function App() {
  // new
  const [services, setServices] = useState([]);

  return (
    // new
    <ProductContext.Provider value={[services, setServices]}>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/detail/:detailId" element={<DetailService></DetailService>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/checkout" element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>

    </ProductContext.Provider>

  );
}

export default App;
