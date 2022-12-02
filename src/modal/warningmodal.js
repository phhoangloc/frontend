import { useState } from "react"
import store from "../redux/store"

const WarningModal = (props) => {

    const [YNMStyle, setYNMStyle] = useState(store.getState().YNModal)

    const updateData = () => {
        store.subscribe(() => setYNMStyle(store.getState().YNModal))
    }

    updateData()

    return (
        <div className="YNModal" style={YNMStyle}>
            <p className="text">{props.msg}</p>
        </div>
    )
}

export default WarningModal 