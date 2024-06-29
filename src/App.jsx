import { Outlet } from "react-router-dom";
import "../src/index.css";

function App() {
  return (
    <div className="app">
      <Outlet />
    </div>
  );
}

export default App;

