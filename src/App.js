import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Booking from './Pages/Booking/Booking';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import AddService from './Pages/AddService/AddService';
import ManageServices from './Pages/ManageServices/ManageServices';
import MyOrders from './Pages/MyOrders/MyOrders';

function App ()
{
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <PrivateRoute exact path="/">
              <Home />
            </PrivateRoute>
            <PrivateRoute path="/home">
              <Home />
            </PrivateRoute>
            <PrivateRoute path="/booking/:id">
              <Booking />
            </PrivateRoute>
            <PrivateRoute path="/add-service">
              <AddService />
            </PrivateRoute>
            <PrivateRoute path="/manage-services">
              <ManageServices />
            </PrivateRoute>
            <PrivateRoute path="/my-orders">
              <MyOrders />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
