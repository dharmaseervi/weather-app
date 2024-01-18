import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import WeatherFooter from "./components/WeatherFooter";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <WeatherFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
