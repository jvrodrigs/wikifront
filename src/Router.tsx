import { Route, Routes } from "react-router-dom";
import { Page } from "./pages/LandingPage";

export function Router() {
    return(
        <Routes>
            <Route path="" element={<Page />} />
        </Routes>
    )
}