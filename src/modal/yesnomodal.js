import { useState } from "react"
import store from "../redux/store"

const YesNoModal = (props) => {

    const [YNMStyle, setYNMStyle] = useState(store.getState().YNModal)

    const updateData = () => {
        store.subscribe(() => setYNMStyle(store.getState().YNModal))
    }

    updateData()

    return (
        <div className="YNModal" style={YNMStyle}>
            <p onClick={props.onclickAgree}>Yes</p>
            <p className="text">{props.msg}</p>
            <p onClick={props.onclickRefuse}>No</p>
        </div>
    )
}

export default YesNoModal 