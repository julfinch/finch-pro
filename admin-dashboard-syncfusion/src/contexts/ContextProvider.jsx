import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [fontColor, setFontColor] = useState('#ffff');
  const [currentMode, setCurrentMode] = useState('Dark');
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  // const [log, setLogout] = useState(false);
  // const navigate = useNavigate();

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    setFontColor('#9CA3AF');
    localStorage.setItem('themeMode', e.target.value);
    setThemeSettings(false);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
    setThemeSettings(false);
  };

  // const setLog = (e) => {
  //   setLogout(true);
  //   localStorage.removeItem("token");
  //   localStorage.removeItem("user");
  //   navigate("/");
  // }
  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

  return (
    
    <StateContext.Provider value={{ fontColor, currentColor, currentMode, activeMenu, screenSize, setScreenSize, handleClick, isClicked, initialState, setIsClicked, setActiveMenu, setCurrentColor, setCurrentMode, setMode, setColor, themeSettings, setThemeSettings }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
