import { Route, Routes } from "react-router-dom";
import { Page } from "./pages/LandingPage";
import { PageNotFoundApp } from "./pages/PageNotFound";

export function Router() {
    return(
        <Routes>
            <Route path="" element={<Page />} />
            <Route path="*" element={<PageNotFoundApp />} />
        </Routes>
    )
}