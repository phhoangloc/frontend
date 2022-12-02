import './style/style.css';
import LandingPage from './component/landingpage';
import Resetpassword from './component/resetpassword';
import Home from './component/home';
import AdminHome from './component/admin/home';
import { Route, Switch } from 'react-router-dom';
import Err from './component/err';
import AdminApi from './api/AdminApi';
import { useEffect, useState } from 'react';

function App() {

  const [adminboolean, setAdminboolean] = useState(false)
  const admin = async () => {
    const result = await AdminApi.getAdminWelcome()
    setAdminboolean(result.success)
  }

  useEffect(() => {
    admin()
  }, [])

  return (
    <>
      <Switch>
        <Route exact path={"/resetpassword"} component={Resetpassword} />
        <Route path={"/home"} component={localStorage.id ? Home : Err} />
        <Route path={"/admin"} component={adminboolean ? AdminHome : Err} />
        <Route path={"/"} component={LandingPage} />
        <Route component={Err} /> {/*error page*/}
      </Switch>
    </>

  )
}

export default App;
