import AdminApi from "../../api/AdminApi";
import { useState } from "react"

const Mail = () => {
    const [array, setArray] = useState([])
    const [html, setHtml] = useState()
    const sendMail = () => {
        array.map(async (item, index) => {

            const result = await AdminApi.sendMail(item, html)
            console.log(result)
        })
    }


    return (
        <>
            <h1>MailMagazine</h1>
            <h2>to Email</h2>
            <textarea row="10" col="10" style={{ "width": "300px", "height": "100px" }} onChange={(e) => setArray([e.target.value])}></textarea>
            <h2>HTML</h2>
            <textarea row="10" col="10" style={{ "width": "500px", "height": "300px" }} onChange={(e) => setHtml(e.target.value)}></textarea>
            <button onClick={() => sendMail()}>send</button>
        </>
    )
}

export default Mail;