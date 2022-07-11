import { useState } from "react"


function Calc(){

    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const [results, setResults] = useState('0')

const add = (e) => {
    e.preventDefault();
    setResults(value1 + value2)
    console.log(results)
}
const sub = (e) => {
    e.preventDefault();
    setResults(value1 - value2)
    console.log(results)
}
const mul = (e) => {
    e.preventDefault();
    setResults(value1 * value2)
    console.log(results)
}
const div = (e) => {
    e.preventDefault();
    setResults(value1 / value2)
    console.log(results)
}
const clear = () => {
    setValue1('')
    setValue2('')
    setResults('0')
}


return (
    <div className="container">
        <h1>Add with React!</h1>
        <form className="calc">
            <input type="text" name="value1" placeholder="Enter a number" value={value1} onChange={e =>setValue1(+e.target.value)}/>
            <div className="btn">
                <button onClick={add}>+</button>
                <button onClick={sub}>-</button>
                <button onClick={mul}>*</button>
                <button onClick={div}>÷</button>
                {/* <div className="equal">
                    <span>={results}</span>
                    <button onClick={clear}>clear</button>
                </div> */}
            </div>
            <input type="text" name="value1" placeholder="Enter a number" value={value2} onChange={e =>setValue2(+e.target.value)}/>
            {/* <div className="equal"> */}
            {/* <span className="result">{results}</span> */}
            <button onClick={clear}>clear</button>
            {/* </div> */}
        </form>
        <span className="result">{results}</span>
    </div>
)

}
export default Calc