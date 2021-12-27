import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import AddService from "./components/AddService/AddService";
import ContactUs from "./components/ContactUs/ContactUs";
import DeleteService from "./components/DeleteService/DeleteService";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import ManageOrder from "./components/ManageOrder/ManageOrder";
import NotFound from "./components/NotFound/NotFound";
import Payment from "./components/Payment/Payment";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ServicePage from "./components/ServicePage/ServicePage";
import Services from "./components/Services/Services";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/services/:eventName">
              <Services></Services>
            </PrivateRoute>
            <Route exact path="/aboutus">
              <AboutUs></AboutUs>
            </Route>
            <Route exact path="/contactus">
              <ContactUs></ContactUs>
            </Route>
            <PrivateRoute exact path="/manageorder">
              <ManageOrder></ManageOrder>
            </PrivateRoute>
            <PrivateRoute exact path="/payment">
              <Payment></Payment>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/servicepage">
              <ServicePage></ServicePage>
            </Route>
            <PrivateRoute exact path="/addservice">
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute exact path="/deleteservice">
              <DeleteService></DeleteService>
            </PrivateRoute>
            <Route exact path="*">
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
