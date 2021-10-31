import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import AddService from './components/AddService/AddService';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ManageOrder from './components/ManageOrder/ManageOrder';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/services'>
            <Services></Services>
          </Route>
          <Route exact path='/aboutus'>
            <AboutUs></AboutUs>
          </Route>
          <Route exact path='/placeorder'>
            
          </Route>
          <Route exact path='/manageorder'>
            <ManageOrder></ManageOrder>
          </Route>
          <Route exact path='/login'>
            <Login></Login>
          </Route>
          <Route exact path='/addservice'>
            <AddService></AddService>
          </Route>
          <Route exact path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
