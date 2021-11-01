// import { Placeholder } from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import AddService from './components/AddService/AddService';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ManageOrder from './components/ManageOrder/ManageOrder';
import NotFound from './components/NotFound/NotFound';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Services from './components/Services/Services';
import AuthProvider from './context/AuthProvider';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <PrivateRoute exact path='/services/:eventName'>
            <Services></Services>
          </PrivateRoute>
          <Route exact path='/aboutus'>
            <AboutUs></AboutUs>
          </Route>
          <Route exact path='/contactus'>
            <ContactUs></ContactUs>
          </Route>
          <PrivateRoute exact path='/placeorder'>
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <PrivateRoute exact path='/manageorder'>
            <ManageOrder></ManageOrder>
          </PrivateRoute>
          <Route exact path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute exact path='/addservice'>
            <AddService></AddService>
          </PrivateRoute>
          <Route exact path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
