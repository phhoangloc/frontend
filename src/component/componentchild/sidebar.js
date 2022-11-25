import { useState } from "react"
import { Link } from 'react-router-dom';
import store from '../../redux/store'
import { newSidebarStyle } from "../../redux/reducers/SidebarReducer";
const Sidebar = () => {

    const [sidebarStyle, setSidebarStyle] = useState(store.getState.Sidebar)

    const updateData = () => {
        store.subscribe(() => setSidebarStyle(store.getState().Sidebar))

    };

    const onclickCloseDashboard = () => {
        store.dispatch(newSidebarStyle({ "width": "0px" }))
    }

    updateData()
    return (
        <div className="sidebar" style={sidebarStyle} onMouseLeave={onclickCloseDashboard}>
            <Link to="/home">
                <div className="titlePage">
                    <p>DashBoard</p>
                </div>
            </Link>
            <Link to="/home/todo">
                <div className="titlePage">
                    <p>Todo</p>
                </div>
            </Link>
            <Link to="/home/canculator">
                <div className="titlePage">
                    <p>Canculator</p>
                </div>
            </Link>
        </div>
    )
}

export default Sidebar