
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <React.StrictMode>
<<<<<<< HEAD
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

        </main>
        <Footer /> {/* always visible */}
      </div>
    </BrowserRouter>
=======
    <App />
>>>>>>> 5baee4cec83ae8e448f78dcff1a6631190e7cc4f
  </React.StrictMode>
);

reportWebVitals();

