import type {FunctionalComponent} from 'preact';
import {useEffect, useRef, useState} from 'preact/hooks';

interface MenuGroupProps {
  header: string,
  children: { text: string, link: string }[]
  currentPage: string
}

const classes = (...cls: string[]) => cls.filter(e => e).join(' ');

function getMenuStateFromStorage() {
  if (typeof localStorage !== undefined && localStorage.getItem('menu-state')) {
    return JSON.parse(localStorage.getItem('menu-state') || '{}');
  }
  return {};
}

function setMenuStateInStorage(state: any) {
  return localStorage.setItem('menu-state', JSON.stringify(state));
}

function setUpdateClass(menuToggles:boolean, elem: HTMLDivElement) {
  if (menuToggles) {
    elem.classList.remove('collapsed');
  } else {
    elem.classList.add('collapsed');
  }
}

export const MenuGroup: FunctionalComponent<MenuGroupProps> = ({header, children, currentPage}: MenuGroupProps) => {

  const listRef = useRef<HTMLDivElement>(null);

  const base = import.meta.env.BASE_URL;
  const ssr = import.meta.env.SSR;

  const currentPageMatch = currentPage.endsWith('/')
    ? currentPage.slice(1, -1)
    : currentPage.slice(1);

  const baseMatch = base.startsWith('/')
    ? base.slice(1)
    : base;

  const isCurrent = (link: string) =>
    currentPageMatch == (baseMatch + link);

  const [menuToggles, setMenuToggles] = useState<boolean>(() =>
    ssr
      ? true
      : getMenuStateFromStorage()[header] ?? true
  );

  useEffect(() => {
    const elem = listRef.current;
    if (elem) {
      setUpdateClass(menuToggles, elem);
    }
  }, [menuToggles]);

  const onClickTitle = () => {

    const toggle = !menuToggles;
    const state = getMenuStateFromStorage();
    setMenuToggles(toggle);
    setMenuStateInStorage({...state, [header]: toggle});
  };
  return (
    <div className={classes('nav-group', 'collapsed')} ref={listRef}>
      <div className={'nav-group-title'} onClick={onClickTitle}>{menuToggles?'+':'-'} {header}</div>
      <ul className={'feature-list collapsed'}>
        {children.map(({link, text}, i) =>
          <li key={i} className="nav-link">
            <a href={base + link} aria-current={isCurrent(link) ? 'page' : false}>
              {text}
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};
