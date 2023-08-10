import { Routes, Route } from "react-router-dom";

import { ROUTES } from "../../routes/routes";
// components
import Home from "../../pages/Home/Home";
import Contact from "../../pages/Contact/Contact";
import Feedback from "../../pages/Feedback/Feedback";
import Price from "../../pages/Price/Price";
import Portfolio from "../../pages/Portfolio/Portfolio";
import About from "../../pages/About/About";

const AppRoutes = () => {
    return (

        <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path={ROUTES.FEEDBACK} element={<Feedback />} />
            <Route path={ROUTES.PRICE} element={<Price />} />
            <Route path={ROUTES.PORTFOLIO} element={<Portfolio />} />
            <Route path={ROUTES.CONTACT} element={<Contact />} />
        </Routes>
    )
}

export default AppRoutes