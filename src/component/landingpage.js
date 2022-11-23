import configIcon from '../img/configIcon.png'
import { useState, useRef, useEffect } from 'react'
import defaultBackground from '../img/background.jpg'
import Login from '../modal/Login';
import Register from '../modal/Register';
import ResendEmail from '../modal/resendemail';
import store from '../redux/store';
import ResendEmailToReset from '../modal/resendemailtoreset';
import usericon from '../img/user-icon.png'
import { Link } from 'react-router-dom'
import userApi from '../api/UserApi';
import YesNoModal from '../modal/yesnomodal';
import { newYNModalStyle } from '../redux/reducers/YNModalReducer';
import Search from './search';
import SearchApi from '../api/SearchApi';
const LandingPage = () => {

    const onKeyDownEnter = async (e) => {
        if (e.keyCode === 13) {
            window.location.href = "https://www.google.com/search?q=" + e.target.value;
            await SearchApi.postSearchByUser(e.target.value)
        }
    }

    const [backgroundPreview, setbackgroundPreview] = useState()
    const [background, setbackground] = useState(localStorage.background)

    //get userInfor

    const getUserApi = async () => {
        const result = await userApi.getUserById(localStorage.id)
        localStorage.setItem("username", result[0].username)
        localStorage.setItem("background", result[0].background)
        localStorage.setItem("avatar", result[0].avatar)
        setbackground(result[0].background)
    }
    //get userInfor when user is changed!
    useEffect(() => {
        if (localStorage.id) { getUserApi() }
    }, [localStorage.id])


    const [file, setFile] = useState()

    const onclickconfigsearchstyle = (e) => {
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function () {
            setbackgroundPreview(reader.result)
            setFile(file)
            store.dispatch(newYNModalStyle({ "height": "40px", "top": "0px" }))
        }
    }

    const avatarInputFile = useRef(null);

    const [loginBoxStyle, setLoginBoxStyle] = useState(store.getState().LoginBox)
    const [registerBoxStyle, setRegisterBoxStyle] = useState(store.getState().RegisterBox)
    const [resendBoxStyle, setResendBoxStyle] = useState(store.getState().ResendBox)
    const [resetBoxStyle, setResetBoxStyle] = useState(store.getState().ResetBox)


    const updateData = () => {
        store.subscribe(() => setLoginBoxStyle(store.getState().LoginBox))
        store.subscribe(() => setRegisterBoxStyle(store.getState().RegisterBox))
        store.subscribe(() => setResendBoxStyle(store.getState().ResendBox))
        store.subscribe(() => setResetBoxStyle(store.getState().ResetBox))

    };

    updateData();

    const onclickOpenLogin = () => {
        setLoginBoxStyle({ "width": "375px" })
    }

    const onclickCloseLogin = () => {
        setLoginBoxStyle({ "width": "0vw" })
        setRegisterBoxStyle({ "width": "0vw" })
        setResendBoxStyle({ "width": "0vw" })
    }

    const onclickChangeBackground = async () => {
        const result = await userApi.updateFile(file)
        userApi.updatebackground(result);
        window.location.reload()
    }

    const onclickRefuse = () => {
        setbackgroundPreview()
        setFile()
        store.dispatch(newYNModalStyle({ "height": "0px", "top": "0px" }))
    }

    const onclickgetkeySearch = async (e) => {
        await SearchApi.postSearchByUser(e.target.innerText)
        window.location.href = "https://www.google.com/search?q=" + e.target.innerText;
    }

    const iconProfile = <div className='configIcon iconProfile'>
        <Link to='/home'>
            <img src={
                localStorage.avatar !== "null" && localStorage.avatar !== undefined ?
                    `http://localhost:4000/avatar/${localStorage.avatar}` : usericon
            } />
        </Link>
    </div>

    const iconMenu =
        <div className='configIcon menu' onClick={onclickOpenLogin}>
            <div className='menuicon one'></div>
            <div className='menuicon two'></div>
            <div className='menuicon three'></div>
        </div>

    return (
        <main>
            <div className='search'
                style={
                    backgroundPreview ?
                        { "backgroundImage": `url(${backgroundPreview})` } :
                        (background != "null" && background != undefined ?
                            { "backgroundImage": `url(http://localhost:4000/background/${background})` } :
                            { "backgroundImage": `url(${defaultBackground})` }
                        )
                }>
                <input onKeyDown={onKeyDownEnter} id="inputText" type="text" placeholder=" Google で検索または URL を入力 "></input>
                <Search onClick={onclickgetkeySearch} />
            </div>

            <div className="configIcon">
                <input type="file" ref={avatarInputFile} style={{ display: "none" }} onChange={onclickconfigsearchstyle}></input>
                <img onClick={() => avatarInputFile.current.click()} src={configIcon} />
            </div>
            {localStorage.id ? iconProfile : iconMenu}
            <YesNoModal onclickAgree={onclickChangeBackground} onclickRefuse={onclickRefuse} />
            <Login
                LoginStyle={loginBoxStyle ? loginBoxStyle : null}
                onclickCloseLogin={onclickCloseLogin} />
            <Register
                LoginStyle={registerBoxStyle ? registerBoxStyle : null}
                onclickCloseLogin={onclickCloseLogin} />
            <ResendEmail
                LoginStyle={resendBoxStyle ? resendBoxStyle : null}
                onclickCloseLogin={onclickCloseLogin} />
            <ResendEmailToReset
                LoginStyle={resetBoxStyle ? resetBoxStyle : null}
                onclickCloseLogin={onclickCloseLogin} />
        </main>
    )
}

export default LandingPage