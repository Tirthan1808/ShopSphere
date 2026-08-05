
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

// Layout components
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";

// Components


// Admin pages
import AddProduct from "./Pages/Admin/AddProduct";
import Categories from "./Pages/Admin/Categories";
import Dashboard from "./Pages/Admin/Dashboard";
import EditProduct from "./Pages/Admin/EditProduct";
import Orders from "./Pages/Admin/Orders";
import Products from "./Pages/Admin/Products";
import Reports from "./Pages/Admin/Reports";
import Reviews from "./Pages/Admin/Reviews";
import Settings from "./Pages/Admin/Settings";
import Users from "./Pages/Admin/Users";

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        {/* Navbar - shown on every page */}
        <Navbar />

        <main className="main-content">

          {/* Hero section */}
          <Hero />

          {/* Admin Routes */}
          <Routes>

            <Route
              path="/admin/add-product"
              element={<AddProduct />}
            />

            <Route
              path="/admin/categories"
              element={<Categories />}
            />

            <Route
              path="/admin/dashboard"
              element={<Dashboard />}
            />

            <Route
              path="/admin/edit-product/:id"
              element={<EditProduct />}
            />

            <Route
              path="/admin/orders"
              element={<Orders />}
            />

            <Route
              path="/admin/products"
              element={<Products />}
            />

            <Route
              path="/admin/reports"
              element={<Reports />}
            />

            <Route
              path="/admin/reviews"
              element={<Reviews />}
            />

            <Route
              path="/admin/settings"
              element={<Settings />}
            />

            <Route
              path="/admin/users"
              element={<Users />}
            />

          </Routes>

          




        </main>

        {/* Footer - shown on every page */}
        <Footer />

      </div>
    </BrowserRouter>
  );
}


// Mount React application
const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App