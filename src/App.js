import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import './App.css';
import Products from "./components/Products/Products";
import Login from "./components/Login/Login/Login";
import Register from "./components/Login/Register/Register";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/products">
              <Products></Products>
            </Route>
            <PrivateRoute path="/product/:productId">
              <ProductDetail></ProductDetail>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
