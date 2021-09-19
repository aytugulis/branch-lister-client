import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import BranchListScreen from "./screens/BranchListScreen";
import DashboardScreen from "./screens/DashboardScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import PrivateRoute from "./components/AuthRoute/PrivateRoute";
import RestrictedRoute from "./components/AuthRoute/RestrictedRoute";
import AdminRoute from "./components/AuthRoute/AdminRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <PrivateRoute component={BranchListScreen} path="/branches" />
        <AdminRoute component={DashboardScreen} path="/dashboard" />

        <RestrictedRoute component={RegisterScreen} path="/register" />
        <RestrictedRoute component={LoginScreen} path="/login" />

        <Route component={HomeScreen} exact path="/" />
      </Switch>
      <ToastContainer />
    </Router>
  );
}

export default App;
