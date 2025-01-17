import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserSelectionProvider } from "./context/UserSelectionContext"; 
import SelectCardForm from "./components/SelectCardForm";
import BigCardForm from "./components/BigCardForm";
import FinishingUp from "./components/FinishingUp";
import PickAddOn from "./components/PickAddOn";
import ThankYou from "./components/ThankYou";

const App = () => {
  return (
    <UserSelectionProvider>
      <Router>
        <Routes>
        <Route path="/" element={<BigCardForm/>} />
          <Route path="/select-card" element={<SelectCardForm />} />
          <Route path="/pick-addons" element={<PickAddOn />} />
          <Route path="/finish-up" element={<FinishingUp />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
        </Router>
      
    </UserSelectionProvider>
  );
};

export default App;
