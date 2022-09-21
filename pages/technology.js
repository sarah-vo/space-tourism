import React, {useState} from 'react';
import Navbar from "../components/Navbar";

import dataJSON from "../public/assets/shared/data.json" assert {type: 'json'}
import Image from "next/image";

function Technology(props) {
    const techJSON = dataJSON["technology"];
    const [currentTech, setTechJSON] = useState(techJSON[0]);



    return (
        <div className={`min-w-screen min-h-screen flex flex-col
                    bg-center bg-no-repeat bg-cover
                    bg-[url('/assets/technology/background-technology-mobile.jpg')] 
                    tablet:bg-[url('/assets/technology/background-technology-tablet.jpg')] 
                    desktop:bg-[url('/assets/technology/background-technology-desktop.jpg')]`}>

            <Navbar/>
            <main className={`text-white flex flex-1 flex-col py-3 tablet:pb-0 gap-9 px-6 desktop:pl-24 desktop:pr-0`}>

                <div className={`flex flex-row gap-4 mobile:self-center tablet:self-start
                                tablet:px-5 desktop:px-0 tablet:items-start 
                                tablet:tracking-[3.38px] desktop:tracking-[4.72px] 
                                tablet: text-[20px] desktop:text-[28px] desktop:self-start`}>
                    <div className={`font-navbar text-gray-400`}>03</div>
                    <div className={`font-navbar`}>SPACE LAUNCH 101</div>
                </div>

                <div className={` flex flex-col desktop:flex-row-reverse 
                                justify-center tablet:justify-between items-end desktop:items-center gap-8 desktop:gap-28`}>

                    <div className={`relative flex self-center mobile:w-[100vw] mobile:h-[20vh]
                                    tablet:h-[35vh] desktop:h-[65vh]`}>
                        <Image className={`desktop:hidden object-contain object-bottom`} src={currentTech["images"]["landscape"]}
                               alt={currentTech["name"]} layout={`fill`}/>
                        <Image className={`mobile:hidden desktop:block object-contain object-right`} src={currentTech["images"]["portrait"]}
                               alt={currentTech["name"]} layout={`fill`}/>
                    </div>

                    <div className={`desktop:max-w-[45%] flex flex-col desktop:flex-row items-center justify-center
                                      gap-4 desktop:items-start tablet:gap-10`}>

                        <div className={`flex flex-row desktop:flex-col items-center justify-center gap-7`}>
                            {techJSON.map(crew=>{
                                return(
                                    <button className={`h-[40px] w-[40px] desktop:h-[60px] desktop:w-[60px] border-[1px] border-gray-500 font-bellefair rounded-full`} key={crew["key"]}
                                            onClick={()=> {
                                                setTechJSON(techJSON[crew["key"]]);
                                            }}>
                                        {crew["key"]+1}
                                    </button>
                                )
                            })}
                        </div>
                    <div className={`flex flex-col items-center desktop:items-start tablet:gap-6 tablet:px-22`}>
                        <div className={`font-bellefair text-lg tablet:text-4xl text-gray-400 uppercase
                                        desktop:self-start`}>THE TERMINOLOGY...</div>
                        <div className={`font-bellefair text-2xl tablet:text-[40px] desktop:text-6xl text-center desktop:text-start uppercase`}>{currentTech["name"]}</div>
                        <div className={`font-barlow text-sm tablet:text-[16px] desktop:text-lg desktop:pr-[5vw]
                                        mobile:text-center desktop:text-start leading-[25px] text-labelPurple`}>{currentTech["description"]}</div>
                    </div>

                    </div>
                </div>

            </main>

        </div>
    );
}

export default Technology;