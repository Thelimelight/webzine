import { Route, Router, Routes } from "react-router-dom";
import Home from "../pages/Home";
import CategoryPage from "../pages/CategoryPage";
import PostDetails from "../pages/PostDetails";
import AboutPage from "../pages/About";
import Authors from "../pages/Authors";
import AuthorDetails from "../pages/AuthorDetail";

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

            <Route
            path="/authors"
            element={<Authors />} 
            />

            <Route
            path="/author/:id"
            element={<AuthorDetails />} 
            />
        </Routes>
    )
}