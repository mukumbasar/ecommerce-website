import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/homePage/HomePage';
import ProductsPage from './pages/productsPage/ProductsPage';
import Header from './components/shared/header/Header';
import { ProductProvider } from '../src/context/ProductContext.jsx';

function App() {
  return (
      <div className='main-container'>
        <Router>
          <Header/>
          <ProductProvider>
            <Routes>
              <Route index element={<HomePage />} />
              <Route path='/products' element={<ProductsPage />} />
            </Routes>
          </ProductProvider>
        </Router>
      </div>
  );
}

export default App
