
import Api from './Api';
import url from '../storage/url';

const LoginUser = (username, password) => {
    const body = {
        username: username,
        password: password
    }
    return Api.post(`${url}/login`, body);
}

const Register = (username, password, email) => {
    const body = {
        username: username,
        password: password,
        email: email
    }
    return Api.post(`${url}/create`, body);
}
const ResendEmail = (email) => {

    const body = {
        email: email
    }
    return Api.post(`${url}/resendemailtoactiveaccount`, body);
}
const ResendEmailToResetPassword = (email) => {

    const body = {
        email: email
    }
    return Api.post(`${url}/resendemailtoresetpassword`, body);
}
const Resetpassword = (password, token) => {

    const body = {
        password: password
    }
    return Api.post(`${url}/reset?${token}`, body);
}

const getUserById = () => {
    return Api.get(`${url}/user`)
}

const updateFile = (file) => {
    const formdata = new FormData()
    formdata.append('file', file)
    return Api.post(`${url}/user/updatefile`, formdata)
}

const updateFileToSetAvatar = (file) => {
    const formdata = new FormData()
    formdata.append('file', file)
    return Api.post(`${url}/user/updatefiletosetavartar`, formdata)
}
const updatebackground = (background) => {
    const body = {
        background: background
    }
    return Api.put(`${url}/user/setbackground`, body)
}
const updateAvatar = (avatar) => {
    const body = {
        avatar: avatar
    }
    return Api.put(`${url}/user/setavartar`, body)
}
const userApi = {

    LoginUser,
    Register,
    ResendEmail,
    Resetpassword,
    ResendEmailToResetPassword,
    getUserById,
    updateFile,
    updatebackground,
    updateFileToSetAvatar,
    updateAvatar
}
export default userApi;

