import { Route, Routes, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}