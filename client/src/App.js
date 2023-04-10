import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { usuario } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/" element={usuario ? <Home /> : <Register />} />
        <Route
          path="/login"
          element={usuario ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/register"
          element={usuario ? <Navigate to="/" /> : <Register />}
        />
        <Route path="/profile/:username" element={<Profile />} />
      </Switch>
    </Router>
  );
}

export default App;
