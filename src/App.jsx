import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components
import Header from "./Components/Header/Header.jsx";
import Nav from "./Components/Nav/Nav.jsx";

//pages
import Home from "./Pages/Home/Home.jsx";
import FiltradoPersonaje from "./Pages/FiltradoPersonaje/FiltradoPersonaje.jsx";
import Characters from "./Pages/Characters/Characters.jsx";
import CharacterDetail from "./Pages/CharactersDetails/CharacterDetails.jsx";
import Error from "./Pages/Error/Error.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Aside from "./Components/Aside/Aside.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filtrado" element={<FiltradoPersonaje />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<CharacterDetail />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Aside />
      <Footer />
    </Router>
  );
}

export default App;
