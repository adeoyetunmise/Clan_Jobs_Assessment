import React, { createContext, useContext, useState, useEffect } from "react";

const UserSelectionContext = createContext();

export const useUserSelection = () => useContext(UserSelectionContext);

export const UserSelectionProvider = ({ children }) => {
  // Get the selections from localStorage or initialize them as empty
  const initialState = JSON.parse(localStorage.getItem("userSelection")) || {
    plan: null,
    addOns: [],
  };

  const [selection, setSelection] = useState(initialState);

  // Save selections to localStorage whenever they change
  useEffect(() => {
    console.log("Saving selection to localStorage:", selection); // Debugging log
    localStorage.setItem("userSelection", JSON.stringify(selection));
  }, [selection]);

  const updateSelection = (newSelection) => {
    console.log("Updating selection:", newSelection); // Debugging log
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
