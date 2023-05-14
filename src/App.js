import "./App.css"; 
import HomPage from "./HomPage"; 
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GalleryPage from './components/Map/GalleryPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/gallery" element={<GalleryPage />}   />
      <Route path="/" element={<HomPage />}  />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
 