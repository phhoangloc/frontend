import { useEffect, useState } from "react"
import SearchApi from "../api/SearchApi"

const Search = (props) => {
    const [searchtable, setsearchtable] = useState()
    const getSearchById = async () => {
        const result = await SearchApi.getSearchByUser()
        setsearchtable(result)
    }
    useEffect(() => {
        getSearchById()
    }, [])

    const datatable =
        searchtable ?
            searchtable.map(
                (item, index) =>
                    <p key={index} onClick={props.onClick}>{item.keysearch}</p>)
            : null
    return (
        <div className="searhresult">
            {datatable}
        </div>
    )
}

export default Search