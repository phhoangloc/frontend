import { useEffect, useState } from "react"
import ProductApi from "../../api/ProductApi"
import editicon from '../../img/editicon.jpg'

const ProductEditPage = () => {
    const [data, setdata] = useState()
    const [booleanName, setBooleanName] = useState(false)
    const slug = window.location.pathname.split("/")[3]
    const getAllProductbySlug = async () => {
        const result = await ProductApi.getAllProductbtSlug(slug)
        setdata(result.data[0])
    }
    useEffect(() => {
        getAllProductbySlug()
    }, [data])

    return (
        <div className="edit Product">
            {data ?
                <><h1>{data.name}</h1>
                    <table>
                        <tbody>
                            <tr><td>name</td><td><input type="text" placeholder={data.name} /></td><td></td></tr>
                            <tr><td>image</td><td></td></tr>
                            <tr><td>brand</td><td></td></tr>
                            <tr><td>cover</td><td></td></tr>
                            <tr><td>content</td><td><textarea col="10" type="text" placeholder={data.content} /></td></tr>
                            <tr><td>purchase</td><td><input type="text" placeholder={data.purchase} /></td></tr>
                            <tr><td>slug</td><td><input type="text" placeholder={data.slug} /></td></tr>
                        </tbody>
                    </table>
                </> :
                <h1>this Page is not Exist</h1>
            }
        </div>
    )
}

export default ProductEditPage