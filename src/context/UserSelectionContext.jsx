import React, { createContext, useContext, useState, useEffect } from "react";

const UserSelectionContext = createContext();

export const useUserSelection = () => useContext(UserSelectionContext);

export const UserSelectionProvider = ({ children }) => {
  
  const initialState = JSON.parse(localStorage.getItem("userSelection")) || {
    plan: null,
    addOns: [],
  };

  const [selection, setSelection] = useState(initialState);

  
  useEffect(() => {
    console.log("Saving selection to localStorage:", selection); 
    localStorage.setItem("userSelection", JSON.stringify(selection));
  }, [selection]);

  const updateSelection = (newSelection) => {
    console.log("Updating selection:", newSelection);
    setSelection((prevSelection) => ({
      ...prevSelection,
      ...newSelection,
    }));
  };

  return (
    <UserSelectionContext.Provider value={{ selection, updateSelection }}>
      {children}
    </UserSelectionContext.Provider>
  );
};
