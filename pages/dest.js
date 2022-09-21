import React, {useState} from 'react';
import Navbar from "../components/Navbar";

import dataJSON from "../public/assets/shared/data.json" assert {type: 'json'}
import Image from "next/image";

function Dest(props) {
    const destinationJSON = dataJSON["destinations"];
    const [currentDestination, setDestinationJSON] = useState(destinationJSON[0]);



    return (
        <div className={`min-w-screen min-h-screen 
                    bg-center bg-no-repeat bg-cover
                    bg-[url('/assets/destination/background-destination-mobile.jpg')] 
                    tablet:bg-[url('/assets/destination/background-destination-tablet.jpg')] 
                    desktop:bg-[url('/assets/destination/background-destination-desktop.jpg')]`}>

            <Navbar/>
            <main className={`text-white flex flex-col py-3 gap-9 desktop:px-12`}>

                <div className={`flex flex-row gap-4 mobile:self-center 
                                tablet:px-5 tablet:items-start tablet:tracking-[3.38px] 
                                desktop:tracking-[4.72px] desktop:text-[28px] desktop:self-start desktop:px-[10%] desktop:pt-[4%]`}>
                    <div className={`font-navbar text-gray-400`}>01</div>
                    <div className={`font-navbar`}>PICK YOUR DESTINATION</div>
                </div>

                <div className={`flex flex-col desktop:flex-row justify-center items-end desktop:pt-[2%] desktop:gap-28 desktop:pb-12`}>
                    <div className={`relative self-center mobile:h-[170px] mobile:w-[170px] 
                                    tablet:h-[300px] tablet:w-[300px] desktop:h-[445px] desktop:w-[445px]`}>
                        <Image src={currentDestination["images"]["webp"]} alt={currentDestination["name"]}
                               width={`170px`} height={`170px`} layout={`fill`}/>
                    </div>

                    <div className={`desktop:max-w-[45%] flex flex-col items-center 
                                    py-6 px-6 tablet:px-20 gap-4 desktop:px-24 desktop:items-start  desktop:gap-10`}>

                        <div className={`flex flex-row items-center justify-center gap-7`}>
                            {destinationJSON.map(destination=>{
                                return(
                                    <button className={`font-navbar text-base tracking-[2.36px] uppercase`} key={destination["key"]}
                                            onClick={()=>setDestinationJSON(destinationJSON[destination["key"]])}>
                                        {destination["name"]}
                                    </button>
                                )
                            })}
                        </div>
                        <div className={`font-bellefair text-6xl desktop:text-8xl text-center desktop:text-start uppercase`}>{currentDestination["name"]}</div>
                        <div className={`font-barlow text-sm desktop:text-lg mobile:text-center desktop:text-start leading-[25px] text-labelPurple`}>{currentDestination["description"]}</div>

                        <div className={`bg-gray-600 h-[1px] w-full my-3`}></div>

                        <div className={`flex flex-col tablet:flex-row gap-4 tablet:gap-20`}>
                            <div className={`flex flex-col items-center desktop:items-start`}>
                                <div className={`font-navbar text-sm tracking-[2.36px] text-labelPurple`}>AVG. DISTANCE</div>
                                <div className={`font-bellefair text-3xl uppercase  text-white`}>{currentDestination["distance"]}</div>
                            </div>

                            <div className={`flex flex-col items-center desktop:items-start`}>
                                <div className={`font-navbar text-sm tracking-[2.36px] text-labelPurple`}>EST. TRAVEL TIME</div>
                                <div className={`font-bellefair text-3xl uppercase  text-white`}>{currentDestination["travel"]}</div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>

        </div>
    );
}

export default Dest;