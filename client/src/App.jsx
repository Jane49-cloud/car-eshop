import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AllRoutes from "./Routes";
import Sidebar from "./constants/sidebar";

function App() {
  return (
    <Router>
      <Sidebar />
      <div className="App">
        <AllRoutes />
      </div>
    </Router>
  );
}

export default App;
