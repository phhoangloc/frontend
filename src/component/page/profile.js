import avatarUser from '../../img/user-icon.png'
import configicon from '../../img/configIcon.png'
import background from '../../img/password.jpg'
import { useState, useRef, useEffect } from 'react'
import store from '../../redux/store'
import { newYNModalStyle } from '../../redux/reducers/YNModalReducer'
import YesNoModal from '../../modal/yesnomodal'
import userApi from '../../api/UserApi'
const Profile = () => {

    const [booleanUpdateBoxStyle, setBooleanUpdateBoxStyle] = useState(false);

    const onclickOpenUpdateBox = () => {
        setBooleanUpdateBoxStyle(!booleanUpdateBoxStyle)
    }
    const [avatar, setAvatar] = useState(localStorage.avatar)
    const [avatarPre, setAvatarPre] = useState()
    const [file, setFile] = useState()
    const onclickChangeAvatar = (e) => {
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function () {
            setFile(file)
            setAvatarPre(reader.result)
            setBooleanUpdateBoxStyle(!booleanUpdateBoxStyle)
            setmsg("are you sure to do this change")
            store.dispatch(newYNModalStyle({ "height": "40px" }))
        }
        setBooleanUpdateBoxStyle(!booleanUpdateBoxStyle)
    }
    const avatarInputFile = useRef(null);
    const onclickAgree = async () => {
        store.dispatch(newYNModalStyle({ "height": "0px" }))
        const result = await userApi.updateFileToSetAvatar(file)
        userApi.updateAvatar(result)
        localStorage.setItem("avatar", result)
    }
    const onclickRefuse = () => {
        store.dispatch(newYNModalStyle({ "height": "0px" }))
        setAvatar()
    }

    const [msg, setmsg] = useState()
    return (
        <>
            <YesNoModal onclickAgree={onclickAgree} onclickRefuse={onclickRefuse} msg={msg ? msg : null} />
            <div className="Profile">
                <div className='cover' style={{ "backgroundImage": `url(${background})` }}>
                    <div className="Avatar">
                        <div className="Picture">
                            <img src={
                                avatarPre ? avatarPre :
                                    (avatar !== "null" && avatar != undefined ?
                                        "http://localhost:4000/avatar/" + avatar :
                                        avatarUser)} />
                            <img className='config' src={configicon} onClick={onclickOpenUpdateBox}></img>
                        </div>
                        <div className="Title">
                            <div className="name"><h1>Pham Hoang Loc</h1></div>
                            <div className="username">{localStorage.username}</div>

                        </div>
                        <div className='updateBox' style={booleanUpdateBoxStyle ? { "opacity": "1" } : null}>
                            <p onClick={() => avatarInputFile.current.click()}>Update avata</p>
                            <input type="file" ref={avatarInputFile} style={{ display: "none" }} onChange={onclickChangeAvatar}></input>
                            <p>Update cover picture</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Profile
