import React from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { FullProduct } from "./pages/FullProduct";
import { NotFound } from "./pages/NotFound";

import "./scss/app.scss";

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="product/:id" element={<FullProduct />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
