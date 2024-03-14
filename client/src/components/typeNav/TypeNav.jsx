import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './TypeNav.module.css';


const TypeNav = ({ type }) => {

    return (
        <li>
            <a className={css.type_link} href={`#${type.id}`}>{type.name}</a>
        </li>
    )
}
export default TypeNav;