import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import Product from './pages/Product';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Signup from './pages/Signup';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

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
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
