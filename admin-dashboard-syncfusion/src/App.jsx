import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Sidebar, ThemeSettings } from './components';
import { Ecommerce,Analytics, Orders,Messages,LoginPage, Calendar,Products, Employees, Stacked, Pyramid, Customers, Users, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages';
import './App.css';
import { useLocation, useNavigate } from "react-router-dom";
import { useStateContext } from './contexts/ContextProvider';
import { UserProvider } from './contexts/UserContext';
import { isAuthenticated } from './contexts/AuthService';


const App = () => {
  const [login, setLogin] = useState(false);
  const { pathname } = useLocation();
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();
  const navigate = useNavigate();
  // const [user, setUser] = useState({})
  const user = JSON.parse(localStorage.getItem('user'))
  // const user = localStorage.getItem('user')
  useEffect(() => {
    if (!user || user === 'undefined' || user === 'null') {
      navigate("/");
    }
  }, [])

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  useEffect(() => {
    if ( pathname === '/') {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [pathname])
  
  
  // const user = () => {
  //   if (localStorage.getItem('user')) {
  //     
  //   } else {
  //     ""
  //   }
  // };
  // const user = JSON.parse(localStorage.getItem('user'))
  
  
  return (
    <div className={currentMode === 'Dark' ? 'dark' : '' } >
      
        <div className="flex bg-page-pattern bg-cover relative dark:bg-main-dark-bg">
          <div className={login ? "invisible" : "fixed right-4 bottom-4"} style={{ zIndex: '1000' }}>
              <TooltipComponent content="Settings" position="Top" >
                <button type="button" onClick={() => setThemeSettings(true)} style={{ background: currentColor, borderRadius: '50%' }} className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray" >
                  <FiSettings />
                </button>
              </TooltipComponent>
            </div>

            {activeMenu ? (
              <div className={pathname === '/' ? "w-0 invisible absolute" : "w-52 fixed sidebar dark:bg-secondary-dark-bg bg-white "}>
                <Sidebar />
              </div>
            ) : (
              <div className="w-0 dark:bg-secondary-dark-bg">
                <Sidebar />
              </div>
            )}

            <div
              className={
                pathname === '/' ? 'min-h-0 w-screen ' : (activeMenu
                  ? 'dark:bg-main-dark-bg bg-main-bg min-h-screen md:ml-52 w-full  '
                  : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 ')
              }
            >
              {!user || user === 'undefined' || user === 'null' ? <></> : <div className={pathname === '/' ? "invisible absolute" : "fixed md:static bg-white shadow-sm dark:bg-secondary-dark-bg navbar w-full "}>
                <Navbar />
              </div>}
            
              <div>
                {themeSettings && (<ThemeSettings />)}
                
                <Routes>
                  <Route path="/" element={(<LoginPage />)} />

                  {/* dashboard  */}
                  <Route path="/dashboard" element={(isAuthenticated ? <Ecommerce /> : <LoginPage />)} />
                  <Route path="/analytics" element={(isAuthenticated ? <Analytics /> : <LoginPage />)} />
                  <Route path="/messages" element={(isAuthenticated ? <Messages /> : <LoginPage />)} />

                  {/* pages  */}
                  <Route path="/orders" element={(isAuthenticated ? <Orders /> : <LoginPage />)} />
                  <Route path="/products" element={(isAuthenticated ? <Products /> : <LoginPage />)} />
                  <Route path="/users" element={(isAuthenticated ? <Users /> : <LoginPage />)} />
                  <Route path="/employees" element={(isAuthenticated ? <Employees /> : <LoginPage />)} />
                  <Route path="/customers" element={(isAuthenticated ? <Customers /> : <LoginPage />)} />

                  {/* apps  */}
                  <Route path="/tasks" element={(isAuthenticated ? <Kanban /> : <LoginPage />)} />
                  <Route path="/notes" element={(isAuthenticated ? <Editor /> : <LoginPage />)} />
                  <Route path="/calendar" element={(isAuthenticated ? <Calendar /> : <LoginPage />)} />
                  <Route path="/color-picker" element={<ColorPicker />} />

                  {/* charts  */}
                  <Route path="/line" element={<Line />} />
                  <Route path="/area" element={<Area />} />
                  <Route path="/bar" element={<Bar />} />
                  <Route path="/pie" element={<Pie />} />
                  <Route path="/financial" element={<Financial />} />
                  <Route path="/color-mapping" element={<ColorMapping />} />
                  <Route path="/pyramid" element={<Pyramid />} />
                  <Route path="/stacked" element={<Stacked />} />

                </Routes>
              </div>
              {/*<Footer /> */}
              
            </div>
            
        </div>
    </div>
  );
};

export default App;
