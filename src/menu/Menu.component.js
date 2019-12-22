import React from 'react';
import classNames from 'classnames';

import {menuItems} from './items';

import './Menu.component.css';

const Menu = ({open, onClickMenuItem, selectedMenuItem}) => (
    <ul className={classNames("App__menu", {"App__menu--open": open}, {"App__menu--close": !open})}>
        {
        menuItems.map(item => <li onClick={() => onClickMenuItem(item)} key={item.value} className={classNames("App__menu__item", 
            {"App__menu__item--selected": item.value === selectedMenuItem}
        )}>
            {item.text}
        </li>)
        }
    </ul>
);

export default Menu;