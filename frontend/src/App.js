import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "main/pages/HomePage";
import AvilaBeachPage from "main/pages/AvilaBeachPage";
import LosAlamosPage from "main/pages/LosAlamosPage";
import ArroyoGrandePage from "main/pages/ArroyoGrandePage";
import SantaBarbaraPage from "main/pages/SantaBarbaraPage";
import AlhambraPage from "main/pages/AlhambraPage";
import CupertinoPage from "main/pages/CupertinoPage";
import SanDiegoPage from "main/pages/SanDiegoPage";

import "bootstrap/dist/css/bootstrap.css";


function App() {

  return (
    <BrowserRouter basename="/team00-s23-6pm-4">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/towns/AvilaBeach" element={<AvilaBeachPage />} />
        <Route exact path="/towns/LosAlamos" element={<LosAlamosPage />} />
        <Route exact path="/towns/ArroyoGrande" element={<ArroyoGrandePage />} />
        <Route exact path="/towns/SantaBarbara" element={<SantaBarbaraPage />} />
        <Route exact path="/towns/Alhambra" element={<AlhambraPage />} />
        <Route exact path="/towns/Cupertino" element={<CupertinoPage />} />
	<Route exact path="/towns/SanDiego" element={<SanDiegoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
