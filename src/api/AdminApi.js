import Api from './Api';
import url from '../storage/url';


const getAdminWelcome = () => {
    return Api.get(`${url}/myshop/`)
}

const getAllUser = () => {
    return Api.get(`${url}/myshop/user`)
}

const getAllBrand = () => {
    return Api.get(`${url}/myshop/brand`)
}
const getBrandbyId = (id) => {
    return Api.get(`${url}/myshop/brand?id=` + id)
}
const createBrand = (brand, logo, cover) => {
    const body = { brand, logo, cover }
    return Api.post(`${url}/myshop`, body)
}
const updateBrand = (id, body) => {
    console.log(body)
    return Api.put(`${url}/myshop/` + id, body)
}
const deleteBrand = (id) => {
    return Api.delete(`${url}/myshop/` + id)
}

const updateBrandLogo = (file) => {
    const formdata = new FormData()
    formdata.append('file', file)
    return Api.put(`${url}/myshop/uploadLogo`, formdata)
}

const updateBrandCover = (file) => {
    const formdata = new FormData()
    formdata.append('file', file)
    return Api.put(`${url}/myshop/uploadCover`, formdata)
}
const sendMail = (email, html) => {
    const body = { email, html }
    return Api.post(`${url}/mail`, body)
}

const AdminApi = {
    getAdminWelcome,
    getAllUser,
    getAllBrand,
    createBrand,
    updateBrand,
    deleteBrand,
    updateBrandLogo,
    updateBrandCover,
    getBrandbyId,
    sendMail
}

export default AdminApi