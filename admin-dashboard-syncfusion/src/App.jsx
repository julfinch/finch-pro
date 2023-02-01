import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Sidebar, ThemeSettings } from './components';
import { Ecommerce,Analytics, Orders,Messages,LoginPage, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages';
import './App.css';
import { useLocation, Redirect } from "react-router-dom";
import { useStateContext } from './contexts/ContextProvider';

const App = () => {
  const [login, setLogin] = useState(false);
  const { pathname } = useLocation();
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

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
  const user = JSON.parse(localStorage.getItem('user'))
  
  
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
              <div className={login ? "w-0 invisible" : "w-52 fixed sidebar dark:bg-secondary-dark-bg bg-white "}>
                <Sidebar />
              </div>
            ) : (
              <div className="w-0 dark:bg-secondary-dark-bg">
                <Sidebar />
              </div>
            )}

            <div
              className={
                login ? 'min-h-0 ' : (activeMenu
                  ? 'dark:bg-main-dark-bg bg-main-bg min-h-screen md:ml-52 w-full  '
                  : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 ')
              }
            >
              <div className={login ? "invisible" : "fixed md:static bg-white shadow-sm dark:bg-secondary-dark-bg navbar w-full "}>
                <Navbar />
              </div>
            
              <div>
                {themeSettings && (<ThemeSettings />)}

                <Routes>
                  <Route path="/" element={(<LoginPage />)} />

                  {/* dashboard  */}
                  <Route path="/dashboard" element={(user ? <Ecommerce /> : <Redirect to="/" />)} />
                  <Route path="/dashboard" element={(<Ecommerce />)} />
                  <Route path="/analytics" element={(<Analytics />)} />
                  <Route path="/messages" element={(<Messages />)} />

                  {/* pages  */}
                  <Route path="/orders" element={<Orders />} />
                  <Route path="/employees" element={<Employees />} />
                  <Route path="/customers" element={<Customers />} />

                  {/* apps  */}
                  <Route path="/tasks" element={<Kanban />} />
                  <Route path="/notes" element={<Editor />} />
                  <Route path="/calendar" element={<Calendar />} />
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
