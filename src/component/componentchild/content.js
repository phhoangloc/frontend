import { Route, Switch, Link } from 'react-router-dom';
import About from '../page/about';
import Profile from '../page/profile';
import Dashboard from '../page/dashboard';
const Content = () => {
    return (
        <div className="content">
            <Switch>
                <Route exact path={'/home/about'} component={About} />
                <Route path={'/home/profile'} component={Profile} />
                <Route path={'/'} component={Dashboard} />
            </Switch>
        </div>
    )
}

export default Content