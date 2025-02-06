import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from './pages/HomePage.js';
import ServicesPage from './pages/ServicesPage.js';
import ProjectsPage from './pages/ProjectsPage.js';
import AboutPage from './pages/AboutPage.js';
import QuotePage from './pages/QuotePage.js';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Define the routes */}
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/quote" element={<QuotePage />}/>
            </Routes>
        </BrowserRouter>
    )

}

export default App;
