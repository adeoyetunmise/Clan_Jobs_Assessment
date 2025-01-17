// src/context/UserSelectionContext.jsx
import React, { createContext, useContext, useState } from "react";

const UserSelectionContext = createContext();

export const useUserSelection = () => useContext(UserSelectionContext);

export const UserSelectionProvider = ({ children }) => {
  const [selection, setSelection] = useState({
    plan: null, // { name: "Arcade", price: 9, type: "Monthly" }
    addOns: [], // [{ id: "addon1", name: "Online Service", price: 1 }]
  });

  const updateSelection = (newSelection) => {
    setSelection((prev) => ({ ...prev, ...newSelection }));
  };

  return (
    <UserSelectionContext.Provider value={{ selection, updateSelection }}>
      {children}
    </UserSelectionContext.Provider>
  );
};
