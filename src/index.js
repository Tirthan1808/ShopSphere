import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // global styles
import reportWebVitals from './reportWebVitals'; // perf logging (standalone)
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // routing

// Layout components - shown on every page (outside <Routes>)
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Hero from './Components/Hero';

// Admin pages - each rendered only when URL matches its <Route path>
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

// Mount app into <div id="root"> from index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter> {/* enables routing for whole app */}
      <div className="app">

        <Navbar />
        


        <main className="main-content">
          <Hero /> {/* always visible */}

          {/* only the matching Route's element renders */}
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

          {/* <ProductCard></ProductCard> */}

        </main>
        <Footer /> {/* always visible */}
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();