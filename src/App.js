import logo from './logo.svg';
import './App.css';
import {ThemeProvider} from "@mui/material";
import {darktheme} from "./theme/darktheme";
import Navbar from "./Page/Navbar/Navbar";
import Home from "./Page/Home/Home";
import Auth from "./Page/Auth/Auth";
import {useState} from "react";

function App(){
//const {user}=useState(true);
  const user=true
  return (
    <ThemeProvider theme={darktheme}>
         {user?
             <div><Navbar/>
             <Home/></div>
             : <Auth/>}


    </ThemeProvider>
  );
}

export default App;
