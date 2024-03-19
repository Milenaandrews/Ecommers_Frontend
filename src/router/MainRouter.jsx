import { Route, Routes } from 'react-router-dom';
import CheckOut from '../pages/Checkout/CheckOut';
import Perfil from '../pages/Perfil/Perfil';
import Catalogo from '../pages/Catalogo/Catologo';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import Home from '../pages/Home/Home'
import Auth from '../pages/auth/Auth';
import Layout from '../components/layout/Layout';
import Product from '../pages/product/Product';
import Profile from '../pages/Perfil/Profile';

export const MainRouter = () => {
    return (
        <Routes>
            <Route path = "/" element={<Layout/>}>
                <Route path="/" element={<Home />} />
                <Route path="/checkout" element={<CheckOut />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path='/products/:id' element={<Product/>} />
                <Route path="/catalogo" element={<Catalogo />} />
                <Route path="/*" element={<PageNotFound />} />
                <Route path='/auth' element={<Auth />} />
                
            </Route>

        </Routes>
    )
}