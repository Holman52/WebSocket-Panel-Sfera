import React from 'react';
import '/src/styles/Table.scss'
import Select from "../components/Select.jsx";
function Table(props) {
    return (
        <div className="table-container">
            <table border="1">
                <thead>
                <tr className="head">
                    <th className="head-name">Устройство</th>
                    <th className="head-game">Игра</th>
                    <th className="head-group">Группа</th>
                    <th className="head-count">Количество очков</th>
                </tr>
                </thead>
                <tbody>
                <tr className="">
                    <td></td>
                    <td><Select></Select></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Table;