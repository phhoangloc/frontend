import { useEffect, useState } from "react"
import AdminApi from "../../api/AdminApi"

const UserManager = () => {

    const [data, setdata] = useState()
    const getAllUser = async () => {
        const result = await AdminApi.getAllUser()
        setdata(result.data)
    }

    useEffect(() => {
        getAllUser()
    }, [])

    const datareturn = data ? data.map((item, index) => <p key={index}>{item.username}</p>) : null

    return (
        <div className="manager user">
            {datareturn}
        </div>
    )
}

export default UserManager