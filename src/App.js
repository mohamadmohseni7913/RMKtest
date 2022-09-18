import React, { useEffect,useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginApi } from "./api/login/login";
import Login from "./component/Login";
import Product from "./component/Product/Product";
import TableAg from "./component/table/TableAg";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        
          <Route path="login" element={<Login />} />
          <Route path="table" element={<TableAg />} />
          <Route path="product" element={<Product />} />

        
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
