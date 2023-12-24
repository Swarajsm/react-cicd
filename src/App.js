import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page from "./components/indexpage.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/' exact element={<Page/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
