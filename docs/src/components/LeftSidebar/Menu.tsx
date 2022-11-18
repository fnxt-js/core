import type { FunctionalComponent } from 'preact';
import { useState, useEffect,useRef } from 'preact/hooks';
import MENU from '../../config-menu';
import './Menu.scss';

interface MenuProps {
  currentPage: string;
}

interface MenuGroupProps {
  header: string,
  children: { text: string, link: string }[]
  currentPage: string
}

function getMenuStateFromStorage() {
  if (typeof localStorage !== undefined && localStorage.getItem('menu-state')) {
    return JSON.parse(localStorage.getItem('menu-state') || '{}');
  }
  return {};
}

function setMenuStateInStorage(state: any) {
  return localStorage.setItem('menu-state', JSON.stringify(state));
}

const MenuGroup: FunctionalComponent<MenuGroupProps> = ({header, children, currentPage}: MenuGroupProps) => {
  const listRef = useRef<HTMLDivElement>(null);

  const currentPageMatch = currentPage.endsWith('/')
    ? currentPage.slice(1, -1)
    : currentPage.slice(1);

  const [menuToggles, setMenuToggles] = useState(() => {
    if (import.meta.env.SSR) {
      return true;
    }
    return getMenuStateFromStorage()[header] ?? true;
  });

  useEffect(() => {
    const elem = listRef.current;
    if (!elem) {
      return;
    }
    if (menuToggles) {
      elem.classList.remove('collapsed');
    } else {
      elem.classList.add('collapsed');
    }
  }, [menuToggles]);


  const classes = (...cls: string[]) => cls.filter(e => e).join(' ');

  const onClickTitle = () => {

    const toggle = !menuToggles;
    setMenuToggles(toggle);
    const state = getMenuStateFromStorage();
    setMenuStateInStorage({...state, [header]: toggle});
  };
  return (
    <div className={classes('nav-group','collapsed')} ref={listRef}>
      <h2 onClick={onClickTitle}>{header}</h2>
      <ul className={'feature-list collapsed'}>
        {children.map(({link, text}, i) => {
          const url = import.meta.env.BASE_URL + link;
          return (
            <li key={i} className="nav-link">
              <a href={url} aria-current={currentPageMatch === link ? 'page' : false}>
                {text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Menu: FunctionalComponent<MenuProps> = ({currentPage}: MenuProps) => {
  return (<nav aria-labelledby="grid-left">
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
