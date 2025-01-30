import React, { createContext, useState, useContext } from "react";

// Create the context
const GlobalContext = createContext();

// Create a provider component
export const GlobalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  // Function to update the state
  // const updateModalState = (newValue) => {
  //   setShowModal(newValue);
  // };
  //
  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <GlobalContext.Provider
      value={{ showModal, handleShowModal, handleCloseModal }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook for using the Global Context
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
