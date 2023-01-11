import { createRoutesFromElements, createBrowserRouter, Route } from "react-router-dom";
import App from "./App"
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App/>}>
        <Route path="" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
    </Route>
))

export default router