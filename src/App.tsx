import React from 'react';

import './App.css';
import {NavLink, Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <NavLink to={"/"}>MAIN</NavLink>---
            <NavLink to={"/login"}>LOGIN</NavLink>---
            <NavLink to={"/profile"}>PROFILE</NavLink>---
            <NavLink to={"/profile/settings"}>PROFILE SETTINGS</NavLink>

            <Routes>
                <Route path={'/*'} element={<div>ERROR 404 SERVER NOT RESPOND </div>}/>
                <Route path={'/'} element={<div>main </div>}/>
                <Route path={'/login'} element={<div>login</div>}/>
                <Route path={'/profile/*'} element={
                    <div>
                        profile
                        <Routes>
                            <Route path={'/settings'} element={<div>settings</div>}/>
                        </Routes>

                    </div>
                }/>
            </Routes>
        </div>
    );
}

export default App;
