import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthProvider from '../src/AuthProvider/AuthProvider';
import './App.css';
import DashBord from './Pages/DashBord/DashBord';
import Explore from './Pages/Explore/Explore';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import PrivetRoute from './Pages/PrivetRoute/PrivetRoute';
import Purchase from './Pages/Purchase/Purchase';
import Register from './Pages/Register/Register';
import Reviews from './Pages/Reviews/Reviews';
function App() {
  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
        <Switch>

          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/home">
            <Home/>
          </Route>

          <Route path="/explore">
            <Explore/>
          </Route>
        
          <PrivetRoute path="/dash">
            <DashBord/>
          </PrivetRoute>
          <Route path="/review">
            <Reviews/>
          </Route>
          <PrivetRoute path="/purchase/:id">
            <Purchase/>
          </PrivetRoute>

          <Route path="/login">
            <Login/>
          </Route>

          <Route path="/regi">
            <Register/>
          </Route>

        </Switch>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
