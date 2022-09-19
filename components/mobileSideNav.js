import React from 'react';
import Image from "next/image";
import closeIcon from "../public/assets/shared/icon-close.svg";

function MobileSideNav(props) {
    const navBarValues = [
        {
            key: 0,
            num: '00',
            desc: 'HOME',
            href: '#home'
        },    {
            key: 1,
            num: '01',
            desc: 'DESTINATION',
            href: '#dest'
        },    {
            key: 2,
            num: '02',
            desc: 'CREW',
            href: '#crew'
        },    {
            key: 3,
            num: '03',
            desc: 'TECHNOLOGY',
            href: '#tech'
        },
    ]

    return (
        <aside id={`sidenav-open`} className={`target:visible fixed top-0 bottom-0 left-50 right-0 z-10
                                             px-5 py-2 min-h-screen w-1/2
                                             backdrop-blur-md bg-transparent
                                             translate-x-full target:translate-x-0 
                                             duration-200 motion-reduce:duration-[1ms] ease-in-out
                                             will-change-transform
                                             
                                              invisible`}>
            <nav className={`text-md text-white flex flex-col gap-6`}>
                <a href={`#`} className={`close-button flex flex-row-reverse py-4`}>
                    <Image src={closeIcon} alt={`close-icon`} />
                </a>
                <div className={`link flex flex-col gap-2`}>
                    {navBarValues.map((value)=>{return(
                        <a key={value.key} className={`min-w-fit block`} href={value.href}>
                            <div className={`flex justify-between`}>
                                <div>{value.num}</div>
                                <div>{value.desc}</div>
                            </div>
                        </a>
                    )
                    })}
                </div>


            </nav>
        </aside>
    );
}

export default MobileSideNav;