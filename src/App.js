import React from 'react';
import './App.css';
import {useRoutes} from "react-router-dom";
import ThemeRoutes from './routes/Router';



function App() {

  const routing = useRoutes(ThemeRoutes);

  return <div className="dark">{routing}</div>;
}

export default App;
