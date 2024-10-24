import React from 'react';
import './header.scss';

function Header() {
    return (
        <header className={'header'}>
            <nav className={'header__nav-bar'}>
                <ul className={'header__list'}>
                    <li className={'header__nav-item'}>
                        <a
                            href={"/contacts"}
                            className={'header__link'}
                        >
                            Contacts
                        </a>
                    </li>

                    <li className={'header__nav-item'}>
                        <a
                            className={'header__link'}
                            href={"/"}
                        >
                            Home
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;