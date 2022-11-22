
const setToken = (token) => {
    localStorage.setItem('token', token)
};

const getToken = (token) => {
    return localStorage.getItem(token)
};

const setUserInfor = (id) => {
    localStorage.setItem("id", id)
}

const getUserInfor = (id) => {
    return {
        'id': localStorage.getItem(id),
    }
}

const storage = { setToken, getToken, setUserInfor, getUserInfor }
export default storage