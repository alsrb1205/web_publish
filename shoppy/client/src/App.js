import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Carts from './pages/Carts.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import './styles/shoppy.css';
import DetailProduct from './pages/DetailProduct.jsx';
import NewProduct from './pages/NewProduct.jsx';
import { AuthProvider } from './auth/AuthContext.js';
import { CartProvider } from './context/CartContext.js';
import CheckoutInfo from './pages/CheckoutInfo.jsx';
import { OrderProvider } from './context/OrderContext.js';
import PaymentSuccess from './pages/PaymentSuccess.jsx';

export default function App() {

   return (
      <OrderProvider>
         <CartProvider>
            <AuthProvider>
               <BrowserRouter>
                  <Routes>
                     <Route path='/' element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path='/all' element={<Products />} />
                        <Route path='/cart' element={<Carts />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/signup' element={<Signup />} />
                        <Route path='/products/:pid' element={<DetailProduct />} /> {/* DetailProduct.jsx 에서 정보를 전달 */}
                        <Route path='/products/new' element={<NewProduct />} />
                        <Route path='/checkout' element={<CheckoutInfo />} />
                        <Route path='/payment/success' element={<PaymentSuccess />} />
                     </Route>
                  </Routes>
               </BrowserRouter>
            </AuthProvider>
         </CartProvider>
      </OrderProvider>
   );
}
