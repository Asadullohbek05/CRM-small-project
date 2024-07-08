import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
// import Layout from './components/Layout/Layout';
import LoginPage from "./pages/LoginPage";
import ProductsPage from "./pages/ProductsPage";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Navigate to={'/login'} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App