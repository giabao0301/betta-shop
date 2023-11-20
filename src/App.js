import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import Product from './pages/Product';
import LoginSignup from './pages/LoginSignup';
import Cart from './pages/Cart';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/nemo" element={<Category category="nemo" />} />
                    <Route path="/galaxy" element={<Category category="galaxy" />} />
                    <Route path="/halfmoon" element={<Category category="halfmoon" />} />
                    <Route path="/product" element={<Product />}>
                        <Route path=":productId" element={<Product />} />
                    </Route>
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/login" element={<LoginSignup />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
