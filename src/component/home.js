import usericon from '../img/user-icon.png'
import homeicon from '../img/home-icon.png'
import { useState, useEffect } from 'react';
import Sidebar from './componentchild/sidebar';
import Content from './componentchild/content';
import { Link } from 'react-router-dom';
import userApi from '../api/UserApi';
import { newSidebarStyle } from '../redux/reducers/SidebarReducer';
import store from '../redux/store';
import YesNoModal from '../modal/yesnomodal';


const Home = () => {

    //click to logout
    const onClickLogOut = () => {
        localStorage.clear()
        window.location.href = "/"
    }


    //set boolean to change icon menu and icon user
    const [listProfileBoolean, setListProfileBoolean] = useState()

    const onclickIconProfile = () => {
        setListProfileBoolean(!listProfileBoolean)
    }

    const onClickEnterProfilePage = () => {
        setListProfileBoolean(!listProfileBoolean)
    }

    const onclickOpenDashboard = () => {
        store.dispatch(newSidebarStyle({ "width": "275px" }))
    }

    return (
        <main>
            <div className="header">
                <div className='iconMenu' onClick={onclickOpenDashboard} >
                    <div className='menu one'></div>
                    <div className='menu two'></div>
                    <div className='menu three'></div>
                </div>
                <div className='iconProfile one'><Link to="/"><img src={homeicon} /></Link></div>
                <div className='iconProfile' onClick={onclickIconProfile}><img src={usericon} /></div>
                <div className='listProfile' style={listProfileBoolean ? { "height": "100px" } : null}>
                    <Link to="/home/profile"><p onClick={onClickEnterProfilePage}>My Profile</p></Link>
                    <p onClick={onClickLogOut}>Log Out</p>
                </div>
            </div>
            <div className="main">
                <Sidebar />
                <Content />
            </div>
        </main>
    )

}

export default Home