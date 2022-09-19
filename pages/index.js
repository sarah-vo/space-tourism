import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from "../components/Navbar";

import closeIcon from "../public/assets/shared/icon-close.svg";
import earthDesktop from "../public/assets/home/background-home-desktop.jpg"
import earthMobile from "../public/assets/home/background-home-mobile.jpg"
import earthTablet from "../public/assets/home/background-home-tablet.jpg"


import React from "react";
import Link from "next/link";
import MobileSideNav from "../components/mobileSideNav";

export default function Home() {

    return (
    <div className={`min-w-screen min-h-screen 
                    bg-center bg-no-repeat bg-cover
                    bg-backgroundMobile tablet:bg-backgroundTablet desktop:bg-backgroundDesktop`}>
        <MobileSideNav/>
        <Navbar className={`min-h-mobile-header min-w-full`}/>
        <div className={`w-screen `}>
            <div className="text"></div>
            <button></button>
        </div>


    </div>
  )
}
