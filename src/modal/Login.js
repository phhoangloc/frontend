import { useEffect, useState } from 'react';
import closeicon from '../img/Close-icon.png';
import userApi from '../api/UserApi';
import storage from '../storage/Storage';
import store from '../redux/store';
import { newStyle } from '../redux/reducers/LoginBoxReducer';
import { newRegisterStyle } from '../redux/reducers/RegisterBoxReducer';
import { newResendStyle } from '../redux/reducers/ResendBoxReducer';
import { newResetStyle } from '../redux/reducers/ResetBoxReducer';

const Login = (props) => {

    var usernameInput = document.querySelector('#usernameL')
    var passwordInput = document.querySelector('#passwordL')

    const closeModal = () => {
        store.dispatch(newStyle({ "width": "0px" }))
        store.dispatch(newRegisterStyle({ "width": "0px" }));
        store.dispatch(newResendStyle({ "width": "0px" }))
        store.dispatch(newResetStyle({ "width": "0px" }))

    }
    const openRegisterModal = () => {
        closeModal();
        store.dispatch(newRegisterStyle({ "width": "375px" }));

    }
    const openResendEmailModal = () => {
        closeModal();
        store.dispatch(newResendStyle({ "width": "375px" }));
    }

    const openResetModal = () => {
        closeModal();
        store.dispatch(newResetStyle({ "width": "375px" }));
    }

    const [alertTextUp, setAlertTextUp] = useState()
    const [alertTextDown, setAlertTextDown] = useState()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const onclickLogin = async () => {
        const result = await userApi.LoginUser(username, password)
        if (result.success === false) {
            setAlertTextUp("false!")
            setAlertTextDown(result.msg)
        } else {
            storage.setUserInfor(result.id, result.username, result.background)
            storage.setToken(result.token)
            setAlertTextUp("Login Success")
            setAlertTextDown("")
            usernameInput.value = ""
            passwordInput.value = ""
            setTimeout(
                () => closeModal(), 2000
            )
            setTimeout(
                () => window.location.href = "/", 2500
            )
        }
    }


    return (
        <div className="loginbox" style={props.LoginStyle}>
            <img src={closeicon} onClick={props.onclickCloseLogin} />
            <div className='box'>
                <h1>LOGIN</h1>
                <input id="usernameL" type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)}></input>
                <input id="passwordL" type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}></input>
                <p className="button" onClick={onclickLogin}>Login</p>

                <p className="link" onClick={openRegisterModal}>Create New Account</p>
                <div className="orderbox"><p className="link" onClick={openResetModal}>Forget Your Password</p>/<p className="link" onClick={openResendEmailModal}>Active your Account</p></div>

                <p className="alert big">{alertTextUp}</p>
                <p className="alert">{alertTextDown}</p>
            </div>
        </div>
    )
}

export default Login;