import Api from './Api';
import url from '../storage/url';


const getAllBranch = () => {
    return Api.get(`${url}/user/getbrand`)
}
const getAllSortByPurchase = () => {
    return Api.get(`${url}/user/getbrand?orderby=purchase`)
}

const getInforByBrand = (brand) => {
    return Api.get(`${url}/user/getbrand?brand="${brand}"`)
}

const ShopApi = {
    getAllBranch,
    getAllSortByPurchase,
    getInforByBrand
}

export default ShopApi