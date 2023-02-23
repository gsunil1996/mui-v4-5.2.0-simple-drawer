import './App.css';
import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import ExternalDrawer from './drawer/ExternalDrawer';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import Login from './components/Login';
import ExternalProducts from './components/externalUser/ExternalProducts';
import ExternalUsers from './components/externalUser/ExternalUsers';
import ExternalAccount from './components/externalUser/ExternalAccount';
import ExternalProfile from './components/externalUser/ExternalProfile';
import Sales from './components/externalUser/Sales';
import Marketing from './components/externalUser/Marketing';

function App() {
  const location = useLocation();

  return (
    <div className="App" style={{ display: "flex", marginTop: 80, paddingRight: "10px" }} >

      {location.pathname === "/login" ? (
        ""
      ) : (
        <ExternalDrawer />
      )}

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/external-products" component={ExternalProducts} />
        <Route exact path="/external-users" component={ExternalUsers} />
        <Route exact path="/external-account" component={ExternalAccount} />
        <Route exact path="/external-profile" component={ExternalProfile} />
        <Route exact path="/sales" component={Sales} />
        <Route exact path="/marketing" component={Marketing} />

        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
