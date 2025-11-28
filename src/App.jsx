import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Table from "./Pages/Table.jsx";

function App() {
    useEffect(() => {
        if(localStorage.getItem('name') === null) {
        }
    }, [localStorage]);
    const [value, setValue] = useState({
        device_id: '',
        url: '',
    })
    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setValue(prevValue => (
            { ...prevValue,
            [name]: value }
            )
        );
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://127.0.0.1:8000/api/WebSocketLogin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(value),
            });

            console.log('raw response object:', res);

            if (!res.ok) {
                const text = await res.text();
                console.error('Server returned error. status:', res.status, 'text:', text);
                const errJson = JSON.parse(text);
                console.error('parsed error json:', errJson);
            }
            const data = res.json();
            console.log('parsed data:', data);
        } catch (err) {
            console.error('fetch failed:', err);
        }
    };

    return (
    <>
        <Table></Table>
        <form>
            <input name='device_id' type="number" onChange={handleChangeInput} value={value.device_id} />
            <input name='url' type="text" onChange={handleChangeInput} value={value.url} />
            <button type='submit' onClick={handleSubmit}></button>
        </form>
    </>
  )
}

export default App
