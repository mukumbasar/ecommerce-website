import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/homePage/HomePage';
import ProductsPage from './pages/productsPage/ProductsPage';
import Header from './components/shared/header/Header';


function App() {
  return (
      <div className='main-container'>
        <Router>
          <Header/>
              <Routes>
                <Route index element={<HomePage />} />
                <Route path='/products' element={<ProductsPage />} />
              </Routes>
        </Router>
      </div>
  );
}

export default App;
