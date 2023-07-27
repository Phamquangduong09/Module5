import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./tour/Home";
import Create from "./tour/Create";
import View from "./tour/View";
import Update from "./tour/Update";
import Delete from "./tour/Delete";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<Home/>}></Route>
            <Route path={'/Create'} element={<Create/>}></Route>
            <Route path={'/View/:id'} element={<View/>}></Route>
            <Route path={'/Update/:id'} element={<Update/>}></Route>
            <Route path={'/Delete/:id'} element={<Delete/>}></Route>
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
