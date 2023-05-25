import { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { NotFound } from "./pages/NotFound";

import "./scss/app.scss";

export const SearchCotext = createContext();

export const App = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="wrapper">
      <SearchCotext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </SearchCotext.Provider>
    </div>
  );
};
