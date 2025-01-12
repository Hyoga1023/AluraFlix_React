import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Componentes/Header/Index.jsx';
import Home from './Componentes/Home/Index.jsx';
import NuevoVideo from './Componentes/NuevoVideo/Index.jsx';
import Footer from './Componentes/Footer/Index.jsx';
import PruebaImagen from './Componentes/PruebaImagen/Index.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

function App() {
    return (
        <BrowserRouter basename="/challenge_final_a">
            <Header />
            <PruebaImagen/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/nuevo-video" element={<NuevoVideo />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
