import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route, Navigate,
} from "react-router-dom";
import {LoginPage} from "../pages/LoginPage/LoginPage";
import {MainPage} from "../pages/MainPage/MainPage";


function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage/>}/>
                    <Route path="/main" element={<MainPage/>}/>
                    <Route
                        path="*"
                        element={<Navigate to="/" replace/>}
                    />
                </Routes>
            </Router>
        </>
    );
}

export default App;
