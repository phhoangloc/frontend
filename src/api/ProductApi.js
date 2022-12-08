import Api from './Api';
import url from '../storage/url';

const getAllProduct = () => {
    return Api.get(`${url}/myshop/product`)
}
const getAllProductbtSlug = (slug) => {
    return Api.get(`${url}/myshop/product?slug=${slug}`)
}
const createProduct = (slug, name) => {
    const body = { slug, name }
    return Api.post(`${url}/myshop/product`, body)
}
const updateProduct = (id, body) => {
    return Api.put(`${url}/myshop/product/` + id, body)
}
const deleteProduct = (id) => {
    return Api.delete(`${url}/myshop/product/` + id)
}
const ProductApi = {
    getAllProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    getAllProductbtSlug
}
export default ProductApi