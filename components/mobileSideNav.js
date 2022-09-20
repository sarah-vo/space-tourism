import React from 'react';
import Image from "next/image";
import closeIcon from "../public/assets/shared/icon-close.svg";
import navBarValues from "../public/assets/home/navBarValues.json" assert {type: 'json'};

function MobileSideNav(props) {

    return (
        <aside id={`sidenav-open`} className={`target:visible fixed top-0 bottom-0 left-50 right-0 z-10
                                             px-5 py-3 min-h-screen w-[67%]
                                             backdrop-blur-md bg-transparent
                                             translate-x-full target:translate-x-0 
                                             duration-200 motion-reduce:duration-[1ms] ease-in-out
                                             will-change-transform
                                              invisible`}>
            <nav className={`text-md text-white flex flex-col gap-3`}>
                <a href={`#`} className={`close-button flex flex-row-reverse py-4`}>
                    <Image src={closeIcon} alt={`close-icon`} />
                </a>
                <div className={`link flex flex-col gap-2
                                font-navbar tracking-[2.7px] font-[400] text-base`}>
                    {navBarValues.map((value)=>{return(
                        <a key={value.key} className={`min-w-fit block `} href={value.href}>
                            <div className={`flex justify-between gap-2`}>
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