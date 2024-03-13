import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './TypeNav.module.css';


const TypeNav = ({ type }) => {

    return (
        <li>
            <button className={css.type_btn}>
                {type.name}
            </button>
        </li>
    )
}
export default TypeNav;