import { useState } from "react"

const Canculator = () => {
    const [number, setNumber] = useState(0)
    const [calcu, setSetcalcu] = useState("")
    const [result, setResult] = useState()

    const getNumber = (e) => {
        setNumber(Number(number + e.target.innerText))
    }
    const getCalcu = (e) => {
        if (number == 0) {
            setSetcalcu(e.target.innerText)
        } else {
            setSetcalcu(e.target.innerText)
            if (result != undefined) { getResult() } else { setResult(number) }
            setNumber(0)
        }
    }
    const getAC = () => {
        setNumber(0)
        setResult()
    }
    const getResult = () => {
        if (calcu == "+") { setResult(Number(result) + Number(number)) }
        if (calcu == "-") { setResult(Number(result) - Number(number)) }
        if (calcu == "x") { setResult(Number(result) * Number(number)) }
        if (calcu == "/") { setResult(Number(result) / Number(number)) }
    }
    return (
        <div className="calculator">
            <div className="screen">
                <h1>{result != undefined ? result : number}</h1>
            </div>
            <div className="buttons">
                <div className="buttonrow">
                    <p className="button" onClick={getNumber}>9</p>
                    <p className="button" onClick={getNumber}>8</p>
                    <p className="button" onClick={getNumber}>7</p>
                    <p className="button" onClick={getCalcu}>+</p>
                </div>
                <div className="buttonrow">
                    <p className="button" onClick={getNumber}>6</p>
                    <p className="button" onClick={getNumber}>5</p>
                    <p className="button" onClick={getNumber}>4</p>
                    <p className="button" onClick={getCalcu}>-</p>
                </div>
                <div className="buttonrow">
                    <p className="button" onClick={getNumber}>3</p>
                    <p className="button" onClick={getNumber}>2</p>
                    <p className="button" onClick={getNumber}>1</p>
                    <p className="button" onClick={getCalcu}>x</p>
                </div>
                <div className="buttonrow">
                    <p className="button" onClick={getAC}>AC</p>
                    <p className="button" onClick={getResult}>=</p>
                    <p className="button" onClick={getNumber}>0</p>
                    <p className="button" onClick={getCalcu}>/</p>
                </div>

                <p className="button"></p>
            </div>
        </div>
    )
}

export default Canculator