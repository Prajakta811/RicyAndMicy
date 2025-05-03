import React from "react";
import {  Routes, Route } from "react-router";
import CharacterList from "./components/CharacterList";
import CharacterDetail from "./components/CharacterDetail";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<CharacterList />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
      </Routes>
    
  );
}

export default App;