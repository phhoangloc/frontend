import { useState } from 'react';
import closeicon from '../img/Close-icon.png';
import userApi from '../api/UserApi';
import { newRegisterStyle } from '../redux/reducers/RegisterBoxReducer';
import store from '../redux/store';
import { newStyle } from '../redux/reducers/LoginBoxReducer';
import { newResendStyle } from '../redux/reducers/ResendBoxReducer';
import { newResetStyle } from '../redux/reducers/ResetBoxReducer';
const Register = (props) => {

    var usernameInput = document.querySelector('#usernameR')
    var emailInput = document.querySelector('#emailR')
    var passwordInput = document.querySelector('#passwordR')

    const closeModal = () => {
        store.dispatch(newStyle({ "width": "0px" }))
        store.dispatch(newRegisterStyle({ "width": "0px" }));
        store.dispatch(newResendStyle({ "width": "0px" }))
        store.dispatch(newResetStyle({ "width": "0px" }))

    }

    const openLoginModal = () => {
        closeModal();
        store.dispatch(newStyle({ "width": "375px" }))
    }
    const openResendEmailModal = () => {
        closeModal();
        store.dispatch(newResendStyle({ "width": "375px" }))
    }

    const openResetlModal = () => {
        closeModal();
        store.dispatch(newResetStyle({ "width": "375px" }))
    }

    const [alertTextUp, setAlertTextUp] = useState()
    const [alertTextDown, setAlertTextDown] = useState()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()

    const onclickRegister = async () => {
        const result = await userApi.Register(username, password, email)
        if (result.success === false) {
            setAlertTextUp("false!")
            setAlertTextDown(result.msg)
        } else {
            setAlertTextUp("Create User Success")
            setAlertTextDown(result)
            usernameInput.value = ""
            passwordInput.value = ""
            emailInput.value = ""
            closeModal()
        }
    }


    return (
        <div className="loginbox" style={props.LoginStyle}>
            <img src={closeicon} onClick={props.onclickCloseLogin} />
            <div className='box'>
                <h1>REGISTER</h1>
                <input id="usernameR" type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)}></input>
                <input id="passwordR" type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}></input>
                <input id="emailR" type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)}></input>
                <p className="button" onClick={onclickRegister}>Create User</p>

                <p className="link" onClick={openLoginModal}>Log In</p>
                <div className="orderbox"><p className="link" onClick={openResetlModal} >Forget Your Password</p>/<p className="link" onClick={openResendEmailModal}>Active your Account</p></div>

                <p className="alert big">{alertTextUp}</p>
                <p className="alert">{alertTextDown}</p>
            </div>
        </div>
    )
}

export default Register;