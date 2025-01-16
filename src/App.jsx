// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import BigCardForm from "./components/BigCardForm";
import SelectCardForm from "./components/SelectCardForm";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<BigCardForm />} />
      <Route path="/select-card" element={<SelectCardForm />} />
    </Routes>
  );
};

export default App;
