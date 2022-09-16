import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Api from "./Api.js";
import Episodes from "./Episodes.js";

export default function Rotas() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="episodes">Episodios</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Api />} />
          <Route path="episodes" element={<Episodes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
