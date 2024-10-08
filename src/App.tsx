import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Menu />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
