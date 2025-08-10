import { Route, Router, Routes } from "react-router-dom";
import Home from "../pages/Home";
import CategoryPage from "../pages/CategoryPage";
import PostDetails from "../pages/PostDetails";
import AboutPage from "../pages/About";

export default function AppRoutes() {
    return (
        <Routes>
            <Route 
            path="/" 
            element={<Home />} 
            />
            
            <Route 
            path="/category/:id" 
            element={<CategoryPage />} 
            />

            <Route
            path="/post/:id"
            element={<PostDetails />}
            />

            <Route
            path="/about"
            element={<AboutPage />}
            />
        </Routes>
    )
}