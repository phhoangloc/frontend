import background from '../img/password.jpg';
import { useState } from 'react'
import userApi from '../api/UserApi';
const Resetpassword = () => {

    const [alertTextUp, setAlertTextUp] = useState()
    const [alertTextDown, setAlertTextDown] = useState()
    const [password, setNewPassword] = useState()
    const token = window.location.search.split("?")[1]
    const passwordChange = document.querySelector('#passwordChange')

    const onclickChangePassword = async () => {
        const result = await userApi.Resetpassword(password, token)
        if (result.success === false) {
            setAlertTextUp("false!")
            setAlertTextDown(result.msg)
        } else {
            setAlertTextUp("Success!")
            setAlertTextDown(result)
            setNewPassword("")
            passwordChange.value = ""
            setTimeout(() => window.location.href = '/', 3000)
        }
    }

    return (
        <main>
            <div className="resetPassword" style={{ "backgroundImage": `url(${background})` }}>
                <div className="box">
                    <h2>New Password</h2>
                    <input id="passwordChange" type="password" placeholder="new password" onChange={e => setNewPassword(e.target.value)} />
                    <p className="button" onClick={onclickChangePassword}>Change Password</p>
                    <p className='warning'>{alertTextUp}</p>
                    <p className='warning'>{alertTextDown}</p>
                </div>

            </div>
        </main>
    )
}

export default Resetpassword