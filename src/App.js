import './style/style.css';
import LandingPage from './component/landingpage';
import Resetpassword from './component/resetpassword';
import Home from './component/home';
import { Route, Switch } from 'react-router-dom';
import Err from './component/err';

function App() {

  return (
    <Switch>
      <Route exact path={"/resetpassword"} component={Resetpassword} />
      <Route path={"/home"} component={localStorage.id ? Home : Err} />
      <Route path={"/"} component={LandingPage} />
      <Route component={Err} /> {/*error page*/}
    </Switch>

  )
}

export default App;
