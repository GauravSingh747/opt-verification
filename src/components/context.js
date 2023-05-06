import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isModalOpen, setisModalOpen] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const openModal = () => setisModalOpen(true);
  const closeModal = () => setisModalOpen(false);
  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        setisModalOpen,
        otp,
        setOtp,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
