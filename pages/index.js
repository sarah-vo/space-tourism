import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className={`max-w-screen flex`}>
        <Navbar className={`min-h-mobile-header min-w-full`}/>
        <div className="content">
            <div className="text"></div>
            <button></button>
        </div>

    </div>
  )
}
