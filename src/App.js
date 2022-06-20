import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
