import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Hero from './Components/Hero';

import AddProduct from './Pages/Admin/AddProduct';
import Categories from './Pages/Admin/Categories';
import Dashboard from './Pages/Admin/Dashboard';
import EditProduct from './Pages/Admin/EditProduct';
import Orders from './Pages/Admin/Orders';
import Products from './Pages/Admin/Products';
import Reports from './Pages/Admin/Reports';
import Reviews from './Pages/Admin/Reviews';
import Settings from './Pages/Admin/Settings';
import Users from './Pages/Admin/Users';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>

      <div className="app">

        <Navbar />



        <main className="main-content">
          <Hero />
          <Routes>
            <Route path="/admin/add-product" element={<AddProduct />} />
            <Route path="/admin/categories" element={<Categories />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/edit-product/:id" element={<EditProduct />} />
            <Route path="/admin/orders" element={<Orders />} />
            <Route path="/admin/products" element={<Products />} />
            <Route path="/admin/reports" element={<Reports />} />
            <Route path="/admin/reviews" element={<Reviews />} />
            <Route path="/admin/settings" element={<Settings />} />
            <Route path="/admin/users" element={<Users />} />
          </Routes>


        </main>

        <Footer />

      </div>

    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();