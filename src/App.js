import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Model from "./pages/Model";
import Predict from "./pages/Predict";
import Results from "./pages/Results";
import ErrorPage from "./pages/ErrorPage";
import ResponsiveAppBar from "./components/Navbar";
import DateAdapter from "@mui/lab/AdapterDateFns";
import { ScrollToTop } from "./helpers/methods";
import { LocalizationProvider } from "@mui/lab";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <Router>
        <ResponsiveAppBar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/model" element={<Model />} />
          <Route path="/predict" element={<Predict />} />
          <Route path="/results" element={<Results />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </LocalizationProvider>
  );
};

export default App;
