import React, {useState} from 'react';

import logo from '../public/assets/shared/logo.svg';
import hamburger from '../public/assets/shared/icon-hamburger.svg';
import closeIcon from '../public/assets/shared/icon-close.svg';
import Image from "next/image";

function Navbar(props) {
    const headerText=[
        {
            label: 'HOME',
            href: '/home'
        },        {
            label: 'DESTINATION',
            href: '/destination'
        },        {
            label: 'CREW',
            href: '/crew'
        },        {
            label: 'TECHNOLOGY',
            href: '/technology'
        },
    ];

    const [hamburgerClicked, setHamburger] = useState(false);
    return (
        <div>
            <div className={`flex flex-col`}>
                <div className={`logo`}><Image src={logo} alt={`logo`}/></div>
                <div className={`hamburger sm:hidden`}>
                    <Image src={hamburger} alt={`hamburger-icon`} onClick={()=>setHamburger(prevState => !prevState)}/>
                </div>
            </div>
            <div className={`sidenav ${hamburgerClicked? `fixed top-0 right-0 h-screen w-1/2 bg-blur-md`:`hidden`}`}></div>
        </div>
    );
}

export default Navbar;