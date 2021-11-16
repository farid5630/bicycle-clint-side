import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Register from './Pages/Login/Register/Register';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Services/Services/Services';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import CycleDetails from './Pages/Services/CycleDetails/CycleDetails';



function App() {
  return (
    <div className="App">
      <AuthProvider>
     <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          
          <Route path="/services">
            <Services></Services>
            </Route>
          <Route path="/login">
            <Login></Login>
            </Route>
          <PrivateRoute path="/booknow/:cycleId">
            <CycleDetails></CycleDetails>
            </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
            </PrivateRoute>
          <Route path="/register">
            <Register></Register>
          </Route>
          
          
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
