import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from "../components/Navbar";
import React from "react";
import Link from "next/link";

import MobileSideNav from "../components/mobileSideNav";
import homeText from "../public/assets/home/homeText.json" assert {type: 'json'};

export default function Home() {

    return (
    <div className={`min-w-screen min-h-screen 
                    bg-center bg-no-repeat bg-cover
                    bg-backgroundMobile tablet:bg-backgroundTablet desktop:bg-backgroundDesktop`}>
        <Navbar className={`min-h-mobile-header min-w-full`}/>
        <div className={`w-screen flex flex-col desktop:flex-row items-center gap-20 px-12 pt-16 
                        desktop:fixed desktop:top-[30%] desktop:px-40 desktop:justify-between`}>
            <div className="text text-white flex flex-col desktop:flex-col
                            mobile:items-center desktop:items-start desktop:gap-6
                            tablet:max-w-[60%] desktop:max-w-[40%]">
                <div className={`font-navbar text-[#D0D6F9] 
                                text-base desktop:text-3xl desktop:tracking-[4.72px] desktop:text-left
                                tracking-barlowCondensed`}>{homeText.subheader}</div>
                <div className={`font-bellefair text-7xl tablet:text-[150px]`}>{homeText.header}</div>
                <div className={`font-barlow text-[#D0D6F9] text-center desktop:text-left desktop:leading-8`}>{homeText.mainText}</div>
            </div>

            <button className={`font-bellefair text-3xl 
                                w-[150px] h-[150px] desktop:w-[260px] desktop:h-[260px] 
                                rounded-full bg-white desktop:self-end`}>{homeText.explore}</button>
        </div>


    </div>
  )
}
