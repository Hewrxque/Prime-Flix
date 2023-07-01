import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Filme from "./Pages/Filme";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Filme" element={<Filme />} />
      </Routes>
    </BrowserRouter>
  );
}
