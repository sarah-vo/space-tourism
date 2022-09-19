import React, {useState} from 'react';

import logo from '../public/assets/shared/logo.svg';
import hamburger from '../public/assets/shared/icon-hamburger.svg';
import closeIcon from '../public/assets/shared/icon-close.svg';
import Image from "next/image";
import Link from "next/link";

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

    return (
        <div className={`w-screen`}>
            <div className={`flex flex-row justify-between py-3 px-5`}>
                <div className={`logo`}><Image src={logo} alt={`logo`} width={`40px`} height={`40px`} /></div>
                <a href={`#sidenav-open`} className={`hamburger flex items-center sm:invisible max-w-fit max-h-fit`}>
                    <Image src={hamburger} alt={`hamburger-icon`} width={`21px`} height={`21px`}/>
                </a>
            </div>
        </div>
    );
}

export default Navbar;