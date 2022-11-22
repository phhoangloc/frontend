import Api from './Api';
import url from '../storage/url';


const getSearchByUser = () => {
    return Api.get(`${url}/user/search`)
}
const postSearchByUser = (keysearch) => {
    const body = {
        keysearch
    }
    return Api.post(`${url}/user/postsearch`, body)
}
const SearchApi = {
    getSearchByUser,
    postSearchByUser
}
export default SearchApi