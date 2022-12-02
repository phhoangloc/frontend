import { Link, Route, Switch } from "react-router-dom"
import UserManager from "./userManager"
import BrandManager from "./brandManager"
import DashBoard from "./adminDashboard"
import UserApi from "../../api/UserApi"
import { useEffect } from "react"
import usericon from '../../img/user-icon.png'
const AdminHome = () => {

    return (
        <div className="AdminPage">
            <div className="AdminPageRow">
                <div className="AdminPageCol">
                    <div className="adminProfile">
                        <img src={localStorage.avatar !== "null" && localStorage.avatar !== undefined ?
                            `http://localhost:4000/avatar/${localStorage.avatar}` : usericon} />
                        <Link to="/home/profile"><h4>{localStorage.username}</h4></Link>
                    </div>
                    <Link to="/admin">
                        <p>DashBoard</p>
                    </Link>
                    <Link to="/admin/user">
                        <p>User</p>
                    </Link>
                    <Link to="/admin/brand">
                        <p>Brand</p>
                    </Link>
                </div>
                <div className="AdminPageCol">
                    <Switch>
                        <Route path="/admin/user" exact component={UserManager} />
                        <Route path="/admin/brand" exact component={BrandManager} />
                        <Route path="/admin/" exact component={DashBoard} />
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default AdminHome