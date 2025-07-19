import { Route, BrowserRouter as Router, Routes } from "react-router";
import TechnicalServices from "./pages/TechnicalServices";
import Expertise from "./pages/Expertise";
import Header from "./components/Header";

function App() {
  return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<TechnicalServices />} />
          <Route path="/expertise" element={<Expertise />} />
        </Routes>
      </Router>
  );
}

export default App;
