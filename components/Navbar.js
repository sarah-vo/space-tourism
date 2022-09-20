import React, {useState} from 'react';

import logo from '../public/assets/shared/logo.svg';
import hamburger from '../public/assets/shared/icon-hamburger.svg';
import closeIcon from '../public/assets/shared/icon-close.svg';
import Image from "next/image";
import Link from "next/link";
import navBarValues from "../public/assets/home/navBarValues.json" assert {type: 'json'};
import MobileSideNav from "./mobileSideNav";

function Navbar(props) {


    return (
        <div className={`w-screen`}>
            <div className={`flex flex-row justify-between items-center
                            py-3 tablet:py-5 tablet:!pr-0 desktop:!py-7 desktop:!pr-0 
                            px-5 tablet:!pt-0 tablet:px-7 desktop:px-9`}>
                <a className={`logo`} href={`/`}><Image src={logo} alt={`logo`} width={`40px`} height={`40px`}  /></a>
                {/*tablet/desktop navbar toggle*/}
                <nav className={` hidden tablet:flex flex-row gap-8 
                                text-white justify-center items-center
                                min-h-[96px] min-w-[58%] desktop:pr-32
                                backdrop-blur-md tablet:bg-gray-400/10
                                font-navbar tracking-[2.36px] font-[400] text-sm`}>
                    {navBarValues.map((value)=>{return(
                        <a key={value.key} className={`min-w-fit block`} href={value.href}>
                            <div className={`flex gap-2 justify-between`}>
                                <div className={`desktop:inline-block tablet:hidden font-[600]`}>{value.num}</div>
                                <div>{value.desc}</div>
                            </div>
                        </a>
                    )
                    })}
                </nav>
                {/*mobile navbar toggle*/}
                <a href={`#sidenav-open`} className={`hamburger flex items-center tablet:hidden max-w-fit max-h-fit`}>
                    <Image src={hamburger} alt={`hamburger-icon`} width={`21px`} height={`21px`}/>
                </a>
                <MobileSideNav/>
            </div>
        </div>
    );
}

export default Navbar;