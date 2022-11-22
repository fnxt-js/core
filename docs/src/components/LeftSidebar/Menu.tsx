import 'preact'
import type { FunctionComponent } from 'react';

import MENU from '../../config-menu';
import {MenuGroup} from './MenuGroup';
import './Menu.scss';

interface MenuProps {
  currentPage: string;
}


const Menu: FunctionComponent<MenuProps> = ({currentPage}: MenuProps) => {
  return (<nav className={'side-nav'} aria-labelledby="grid-left">
      <ul className="nav-groups">
        {
          Object.entries(MENU.en).map(([header, children], key) => (
            <li key={key}>
              <MenuGroup header={header} children={children} currentPage={currentPage}/>
            </li>
          ))
        }
      </ul>
    </nav>);
};


export default Menu;
