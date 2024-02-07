import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/homePage/HomePage';
import ProductsPage from './pages/productsPage/ProductsPage';
import Header from './components/shared/header/Header';

function App() {
  return (
    <Router>
      <div className='main-container'>
      <Header/>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path='Products' element={<ProductsPage />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App
