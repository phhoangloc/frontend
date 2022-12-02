import ShopApi from "../../../api/ShopApi"
import { useEffect, useState } from "react"

const Brand = () => {
    const [brandInfor, setBrandInfor] = useState()
    const pathname = window.location.pathname.split("/")[3]
    const getInforByBrand = async () => {
        const result = await ShopApi.getInforByBrand(pathname)
        setBrandInfor(result[0])
    }

    useEffect(() => {
        getInforByBrand()
    }, [pathname])

    const dataBrand = brandInfor ?
        <div className="BrandInfor">
            <img src={"http://localhost:4000/brandcover/" + brandInfor.cover} />
        </div> : null
    return (
        <div className="BrandPage">
            {dataBrand}
        </div>
    )
}

export default Brand