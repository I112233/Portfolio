import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <main>
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          {/* <Route path="/blog" element={<Blog />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
