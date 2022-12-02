import { useEffect, useRef, useState } from "react"
import AdminApi from "../../api/AdminApi"
import deleteicon from "../../img/deleteicon.png"
import configicon from "../../img/configIcon.png"
const BrandManager = () => {

    const [BooleanCreate, SetBooleanCreate] = useState(false)
    const [data, setdata] = useState()
    const [id, setId] = useState()
    const [brand, setBrand] = useState()
    const [fileLogo, setFileLogo] = useState()
    const [fileCover, setFileCover] = useState()
    const [nameLogo, setNameLogo] = useState()
    const [nameCover, setNameCover] = useState()
    const logoInputFile = useRef();
    const coverInputFile = useRef();


    const getAllBrand = async () => {
        const result = await AdminApi.getAllBrand()
        setdata(result.data)
    }

    const [arrayId, setArrayId] = useState([])

    useEffect(() => {
        getAllBrand()
    }, [data])

    const datareturn = data ? data.map((item, index) =>
        <div className="item" key={index}>
            <input className="inputcheck" type="checkbox" onClick={(e) => onchangeGetId(e, item.id)}></input>
            <p className="brandname">{item.brand}</p>
            <img src={configicon} onClick={() => onclickUpdateBrand(item.id)} ></img>
            <img src={deleteicon} onClick={() => onclickDeleteBrand(item.id)}></img>
        </div >) : null

    const onclickCreatNewBrand = () => {
        SetBooleanCreate(!BooleanCreate)
    }
    const onclickUpdateBrand = async (id) => {
        SetBooleanCreate(!BooleanCreate)
        BooleanCreate ? setId(null) : setId(id)
        if (id) {
            const result = await AdminApi.getBrandbyId(id)
            setBrand(result.data[0].brand)
            setNameLogo(result.data[0].logo)
            setNameCover(result.data[0].cover)
        }
    }

    const onclickupdatelogo = (e) => {
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function () {
            setFileLogo(file)
        }
    }

    const onclickupdatecover = (e) => {
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function () {
            setFileCover(file)
        }
    }

    const onclickCreateBrand = async () => {
        if (id) {
            const resultcover = fileCover ? await AdminApi.updateBrandCover(fileCover) : { data: nameCover }
            const resultlogo = fileLogo ? await AdminApi.updateBrandLogo(fileLogo) : { data: nameLogo }
            const body = {
                brand: brand, logo: resultlogo.data, cover: resultcover.data

            }
            AdminApi.updateBrand(id, body)
            setFileLogo()
            setFileCover()
            SetBooleanCreate(!BooleanCreate)

        } else {
            const resultcover = await AdminApi.updateBrandCover(fileCover)
            const resultlogo = await AdminApi.updateBrandLogo(fileLogo)
            AdminApi.createBrand(brand, resultlogo.data, resultcover.data)
            setFileLogo()
            setFileCover()
            SetBooleanCreate(!BooleanCreate)
        }


    }

    const onclickDeleteBrand = async (id) => {
        await AdminApi.deleteBrand(id)
        setId(id)
    }

    const onchangeGetId = (e, id) => {
        e.target.checked ?
            setArrayId([...arrayId, id]) :
            setArrayId(arrayId.filter(item => item !== id))
    }
    var inputcheck = document.querySelectorAll(".inputcheck")

    const onclickDeleteManyBrand = () => {
        arrayId.map(async item => {
            await AdminApi.deleteBrand(item)
        })
        inputcheck.forEach(item => item.checked = false)
    }

    return (
        <div className="manager brand">
            <h1>Brand</h1>
            <h4 className="newbrandbutton" onClick={() => onclickCreatNewBrand()}>new brand</h4>
            {arrayId.length ? <img className="deleteAll" src={deleteicon} onClick={() => onclickDeleteManyBrand()}></img> : null}
            {BooleanCreate ?
                <div className="item">
                    <p className="picturebutton" onClick={onclickCreateBrand}>ok</p>
                    <input className="inputtext" type="text" onChange={(e) => setBrand(e.target.value)}></input>
                    <input type="file" ref={logoInputFile} style={{ display: "none" }} onChange={onclickupdatelogo}></input>
                    <p onClick={() => logoInputFile.current.click()} className="picturebutton">logo</p>
                    <input type="file" ref={coverInputFile} style={{ display: "none" }} onChange={onclickupdatecover}></input>
                    <p onClick={() => coverInputFile.current.click()} className="picturebutton">cover</p>
                </div> : null}
            {datareturn}
        </div>
    )
}

export default BrandManager