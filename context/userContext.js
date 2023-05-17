import React, { createContext, useEffect, useState } from "react";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  let userIsLoggedIn = !!userData;

  const loginHandler = (user) => {
    localStorage.setItem("userData", JSON.stringify(user));
    setUserData(user);
  };

  const logoutHandler = () => {
    setUserData(null);
    localStorage.removeItem("userData");
  };

  const isAuthenticated = async () => {
    const userLocal = JSON.parse(localStorage.getItem("userData"));
    // const userLocal = localStorage.getItem("userData");

    if (userLocal) {
      setUserData(userLocal)
    }
  };

  useEffect(() => {
    isAuthenticated();
  }, [])

  const contextValue = {
    userData: userData,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
