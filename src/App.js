import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound/NotFound";
import "./style.scss"
import Catalog from "./pages/Catalog/Catalog";

const App = () => {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route element={<Home/>} path={''}/>
                <Route element={<Catalog/>} path={''}/>
            </Route>
            <Route path={'*'} element={<NotFound/>}/>
        </Routes>
    );
};

export default App;