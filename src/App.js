import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Portfolio from "./components/Portfolio/Portfolio";
import Academic from "./components/Academic/Academic";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./ScrollToTop";
import { meta } from "./db";

import "./App.css";
import Project from "./components/Project/Project";
import LandingImage from "./components/LandingImage/LandingImage";

function App() {
    const isMobile = useMediaQuery({
        query: "(max-width:768px)",
    });
    const [popup, setPopup] = useState(true);

    const fadeOut = () => {
        setPopup(false);
    };

    return (
        <div
            className={`${isMobile ? "mApp" : "App"}`}
            onContextMenu={(e) => e.preventDefault()}
        >
            <LandingImage setPopup={fadeOut} />
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <ScrollToTop />
                <div className={`${isMobile ? "mWrapper" : "wrapper"}`}>
                    <Header />
                    <div className={"main" + isMobile ? "pad" : ""}>
                        <Routes>
                            <Route path="/" element={<Main />}></Route>
                            <Route
                                path="/portfolio"
                                element={<Portfolio />}
                            ></Route>
                            <Route
                                path="/academic"
                                element={<Academic popup={popup} />}
                            ></Route>
                            {meta.map((project, index) => {
                                return (
                                    <Route
                                        key={index}
                                        path={`/${project.link}`}
                                        element={
                                            <Project title={project.title} />
                                        }
                                    ></Route>
                                );
                            })}
                            <Route
                                path="/profile"
                                element={<Profile popup={popup} />}
                            ></Route>
                            <Route
                                path="/index.html"
                                element={<Main />}
                            ></Route>
                            <Route
                                path="*"
                                element={<h1>404 Not Found 😭</h1>}
                            ></Route>
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
