import {useEffect, useState} from "react";
import echo from "../WebSocket/Echo.jsx";
const Select = () => {
    useEffect(() => {
        echo.channel('conectPanel')
            .listen('.url.panel', data => console.log('event', data));
    }, []);


    const valueSelect = [
        {
            id:'1',
            value:'Программисты',
        },
        {
            id:'2',
            value:'Юристы',
        },
        {
            id:'3',
            value:'Бухгалтера',
        },
        {
            id:'4',
            value:'Дошколка',
        },
    ]
    const [selectedValue, setSelectedValue] = useState('guitars');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);

    };

    return (
        <div className="custom-select">
            <select
                value={selectedValue}
                onChange={handleChange}
                className="select-element"
            >
                <option>Выберите игру</option>
                {valueSelect.map((item) => (
                    <option key={item.id} value={item.value}>{item.value}</option>
                ))}
            </select>
            {/*<div className="select-arrow">*/}
            {/*    <svg width="12" height="8" viewBox="0 0 12 8" fill="none">*/}
            {/*        <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>*/}
            {/*    </svg>*/}
            {/*</div>*/}
        </div>
    );
}

export default Select;
