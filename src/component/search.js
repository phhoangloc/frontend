import { useEffect, useState } from "react"
import SearchApi from "../api/SearchApi"

const Search = (props) => {

    const [searchtable, setsearchtable] = useState()
    const [text, setText] = useState()

    const getSearchById = async () => {
        const result = await SearchApi.getSearchByUser()
        result.msg ? setText(result.msg) : setsearchtable(result)
    }
    useEffect(() => {
        getSearchById()
    }, [])

    const datatable =
        searchtable ?
            searchtable.map(
                (item, index) =>
                    <p key={index} onClick={props.onClick}>{item.keysearch}</p>)
            : <p>{text}</p>
    return (
        <div className="searhresult">
            {datatable}
        </div>
    )
}

export default Search