import { useState } from 'react';
import closeicon from '../img/Close-icon.png';
import userApi from '../api/UserApi';
import { newRegisterStyle } from '../redux/reducers/RegisterBoxReducer';
import store from '../redux/store';
import { newStyle } from '../redux/reducers/LoginBoxReducer';
import { newResendStyle } from '../redux/reducers/ResendBoxReducer';
import { newResetStyle } from '../redux/reducers/ResetBoxReducer';
const ResendEmailToReset = (props) => {

    var emailInput = document.querySelector('#emailReset')

    const closeModal = () => {
        store.dispatch(newStyle({ "width": "0px" }))
        store.dispatch(newRegisterStyle({ "width": "0px" }));
        store.dispatch(newResendStyle({ "width": "0px" }));
        store.dispatch(newResetStyle({ "width": "0px" }));

    }

    const openLoginModal = () => {
        closeModal();
        store.dispatch(newStyle({ "width": "375px" }))
    }

    const [alertTextUp, setAlertTextUp] = useState()
    const [alertTextDown, setAlertTextDown] = useState()
    const [email, setEmail] = useState()

    const onclickResendEmail = async () => {
        const result = await userApi.ResendEmailToResetPassword(email)
        if (result.success === false) {
            setAlertTextUp("false!")
            setAlertTextDown(result.msg)
        } else {
            setAlertTextDown(result)
            setAlertTextUp("success!")
            emailInput.value = ""
            setEmail("")
        }

    }
    return (
        <div className="loginbox" style={props.LoginStyle}>
            <img src={closeicon} onClick={props.onclickCloseLogin} />
            <div className='box'>
                <h1>Email</h1>
                <p>input your email to reset Password</p>
                <input id="emailReset" type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)}></input>
                <p className="button" onClick={onclickResendEmail}>Resend Email</p>

                <p className="link" onClick={openLoginModal}>Log In</p>

                <p className="alert big">{alertTextUp}</p>
                <p className="alert">{alertTextDown}</p>
            </div>
        </div>
    )
}

export default ResendEmailToReset;