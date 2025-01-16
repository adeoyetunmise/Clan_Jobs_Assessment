// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import BigCardForm from "./components/BigCardForm";
import SelectCardForm from "./components/SelectCardForm";
import PickAddOn from "./components/PickAddOn";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<BigCardForm />} />
      <Route path="/select-card" element={<SelectCardForm />} />
      <Route path="/pick-addons" element={<PickAddOn />} />
    </Routes>
  );
};

export default App;
