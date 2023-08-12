import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import correct components
import Products from "./components/Products/Procuts.jsx";
import Details from "./components/Details/Details.jsx";
import ShopCart from "./components/ShopCart/ShopCart.jsx";

const queryClient = new QueryClient({});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="details/:id" element={<Details />} />
            <Route index element={<Products />} />
            <Route path="/shpoCart" element={<ShopCart />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  </React.StrictMode>
);
