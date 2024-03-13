import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './TypeNav.module.css';


const TypeNav = ({ type }) => {

    return (
        <li>
            <a className={css.type_link} href={`#${type.id}`}>{type.name}</a>
            {/* <button className={css.type_btn}>
                {type.name}
            </button> */}
        </li>
    )
}
export default TypeNav;