import { Route, Routes } from "react-router-dom";
import { Page } from "./pages/LandingPage";
import { Map } from "./pages/Map";
import { PageNotFoundApp } from "./pages/PageNotFound";
import { Recents } from "./pages/Recents";

export function Router() {
    return(
        <Routes>
            <Route path="" element={<Page />} />
            <Route path="recents" element={<Recents />} />
            <Route path="map" element={<Map />} />
            <Route path="*" element={<PageNotFoundApp />} />
        </Routes>
    )
}