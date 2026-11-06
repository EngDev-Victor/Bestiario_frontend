import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Criaturas from "./pages/Criaturas";
import MeuBestiario from "./pages/MeuBestiario";
import Detalhes from "./pages/Detalhes";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/criaturas" element={<Criaturas />} />
          <Route path="/meu-bestiario" element={<MeuBestiario />} />
          <Route path="/criatura/:id" element={<Detalhes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;