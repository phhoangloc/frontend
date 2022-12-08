import { useEffect, useState } from "react"
import ProductApi from "../../api/ProductApi"
import deleteicon from "../../img/deleteicon.png"
import configicon from "../../img/configIcon.png"
import { Link } from "react-router-dom"

const ProductManager = () => {
    const [BooleanCreate, SetBooleanCreate] = useState(false)
    const [data, setdata] = useState()
    const [slug, setSlug] = useState()
    const [name, setName] = useState()
    const [id, setId] = useState()
    const [arrayId, setArrayId] = useState([])

    const getAllProduct = async () => {
        const result = await ProductApi.getAllProduct()
        setdata(result.data)
    }
    useEffect(() => {
        getAllProduct()
    }, [data])



    const onclickCreatNewProduct = () => {
        SetBooleanCreate(!BooleanCreate)
    }

    const onclickCreatProduct = async () => {
        const result = await ProductApi.createProduct(slug, name)
        console.log(result)
        SetBooleanCreate(!BooleanCreate)
    }

    const onchangeGetId = () => {

    }

    const onclickDeleteProduct = async (id) => {
        const result = await ProductApi.deleteProduct(id)
        console.log(result)
    }

    const onclickDeleteManyProduct = () => {

    }

    const resultdata = data ? data.map((item, index) =>
        <div className="item" key={index}>
            <input className="inputcheck" type="checkbox" onClick={(e) => onchangeGetId(e, item.id)}></input>
            <p className="brandname"><Link to={"/admin/product/" + item.slug}>{item.name}</Link></p>
            <img src={deleteicon} onClick={() => onclickDeleteProduct(item.id)}></img>
        </div >) : null
    return (
        <div className="manager brand">
            <h1>Product</h1>
            <h4 className="newbrandbutton" onClick={() => onclickCreatNewProduct()}>{BooleanCreate ? "cancel" : "new product"}</h4>
            {arrayId.length ? <img className="deleteAll" src={deleteicon} onClick={() => onclickDeleteManyProduct()}></img> : null}
            {BooleanCreate ?
                <div className="item">
                    <p className="picturebutton" onClick={onclickCreatProduct}>ok</p>
                    <input className="inputtext" placeholder="slug" onChange={(e) => setSlug(e.target.value)}></input>
                    <input className="inputtext" placeholder="name" onChange={(e) => setName(e.target.value)}></input>
                </div > : null}
            {resultdata}
        </div>
    )
}

export default ProductManager