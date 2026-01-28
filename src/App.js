import "./styles.css";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <h1>Framework Mode</h1>
      <Link to="/products">View Products</Link>
    </div>
  );
}
