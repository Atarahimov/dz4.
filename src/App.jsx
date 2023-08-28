import { useState } from 'react'
import './App.css'
import {getKeyValue} from "eslint-plugin-react/lib/util/ast.js";

function App () {
    const [data, setData] = useState({
        key1: 'Omadbek',
        key2: 'Hepworth',
        key3: 'bhepworth@react.com',
        key4: 'love cats'
    })
    function inputChange (key, value) {
        setData(prevData => ({
            ...prevData,
            [key]:value
        }))
    }
    const inputStyle = {
        width: '30%',
        padding: '8px',
        marginBottom: '10px'
    };

    const infoStyle = {
        backgroundColor: '#f5f5f5',
        padding: '10px',
        border: '1px solid #ddd'
    };
    return (
        <div style={{fontWeight:"bold"}}>

            <div>
                <h2>Name</h2>
                <input style={inputStyle}
                       value={data.key1}
                       onChange={e => inputChange("key1", e.target.value)}
                       type="text"/></div>
            <div>
                <h2>Last Name</h2>
                <input
                    style={inputStyle}
                    value={data.key2}
                    onChange={e => inputChange("key2", e.target.value)}
                    type="text"/></div>
            <div>
                <h2>E-mail</h2>
                <input style={inputStyle}
                       value={data.key3}
                       onChange={e => inputChange("key3", e.target.value)}
                       type="text"/></div>
            <div>
                <h2>Hobbies</h2>
                <input style={inputStyle}
                       value={data.key4}
                       onChange={e =>inputChange("key4", e.target.value)}
                       type="text"/>
            </div>
            <div style={infoStyle}>
                <p>Name: {data.key1}</p>
                <p>Last Name: {data.key2}</p>
                <p>E-mail: {data.key3}</p>
                <p>Hobbies: {data.key4}</p>
            </div>
        </div>
    );
}

export default App
