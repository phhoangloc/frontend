import { Route, Switch, Link } from 'react-router-dom';
import Todo from '../page/todo';
import Profile from '../page/profile';
import Dashboard from '../page/dashboard';
const Content = () => {
    return (
        <div className="content">
            <Switch>
                <Route exact path={'/home/todo'} component={Todo} />
                <Route path={'/home/profile'} component={Profile} />
                <Route path={'/'} component={Dashboard} />
            </Switch>
        </div>
    )
}

export default Content