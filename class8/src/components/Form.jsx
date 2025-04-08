import React, { useState } from 'react'
import "./Form.css"
import { Data } from './Data'
export const Form = () => {
    const [D1, setD1] = useState();
    const [inputData, setInputData] = useState({
        userName: "Jayesh Kumar",
        pass: "1234"
    })
    function formHandler(event) {
        setInputData({
            ...inputData, [event.target.name]: event.target.value
        })
    }

    function displayInputData(event) {
        event.preventDefault();
        console.log("input data", inputData)
        const { userName, pass } = inputData;
        console.log(userName, pass)
        setD1(inputData);
    }
    return (
        <div>

            <form>
                <div className='container'>
                    <div>
                        <label htmlFor='userName'>userName</label>
                        <input type="text" id='userName' name='userName' value={inputData.userName} onChange={formHandler} />
                    </div>
                    <div>
                        <label htmlFor='pass'>Password</label>
                        <input type="password" id='pass' name='pass' value={inputData.pass} onChange={formHandler} />
                    </div>

                    <br />
                    <button type='sumbit' onClick={displayInputData}>Sumbit</button>
                </div>
            </form>
            <Data data={D1} />
        </div>
    )
}
