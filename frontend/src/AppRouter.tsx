import { Route } from 'react-router-dom';
import AuthPage from './components/Auth/AuthPage';
import ProductListPage from './components/Product/ProductListPage';
import ProductModifyPage from './components/Product/ProductModifyPage';
import ProductInputPage from './components/Product/ProductInputPage';


export const routes = (
    <>
        <Route path="/" element={<AuthPage />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/products/modify" element={<ProductModifyPage />} />
        <Route path="/products/input" element={<ProductInputPage />} />
    </>
);
