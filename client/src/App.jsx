import Login from "./components/Login/Login";
import './App.css'
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home/Home";

function App() {
  const user=localStorage.getItem('user');
  return (
    <div className="app">
      <Router>
      <Routes>
      <Route path="/" element={user?<Home user={user}/>:<Login/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
