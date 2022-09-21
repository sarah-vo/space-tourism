import React, {useState} from 'react';
import Navbar from "../components/Navbar";

import dataJSON from "../public/assets/shared/data.json" assert {type: 'json'}
import Image from "next/image";

function Crew(props) {
    const crewJSON = dataJSON["crew"];
    const [currentCrew, setCrewJSON] = useState(crewJSON[0]);



    return (
        <div className={`min-w-screen min-h-screen flex flex-col
                    bg-center bg-no-repeat bg-cover
                    bg-[url('/assets/crew/background-crew-mobile.jpg')] 
                    tablet:bg-[url('/assets/crew/background-crew-tablet.jpg')] 
                    desktop:bg-[url('/assets/crew/background-crew-desktop.jpg')]`}>

            <Navbar/>
            <main className={`text-white flex flex-1 flex-col py-3 tablet:pb-0 gap-9 px-6 desktop:px-12`}>

                <div className={`flex flex-row gap-4 mobile:self-center tablet:self-start
                                tablet:px-5 desktop:px-0 tablet:items-start 
                                tablet:tracking-[3.38px] desktop:tracking-[4.72px] 
                                tablet: text-[20px] desktop:text-[28px] desktop:self-start`}>
                    <div className={`font-navbar text-gray-400`}>02</div>
                    <div className={`font-navbar`}>MEET YOUR CREW</div>
                </div>

                <div className={` flex tablet:flex-1 flex-col tablet:flex-col-reverse desktop:flex-row-reverse justify-center tablet:justify-between items-end desktop:pt-[2%] desktop:gap-28`}>
                    <div className={`flex flex-col mobile:min-w-full desktop:min-w-[50%]`}>
                        <div className={`relative self-center mobile:h-[200px]  mobile:w-[50vw] 
                                    tablet:h-[50vh] tablet:w-[50vw] desktop:h-[70vh] desktop:w-[40vw]`}>
                            <Image className={`object-contain object-bottom`} src={currentCrew["images"]["webp"]} alt={currentCrew["name"]} layout={`fill`}/>
                        </div>
                            <div className={`tablet:hidden bg-gray-600 h-[1px] w-full mb-6`}></div>

                    </div>

                    <div className={`desktop:max-w-[45%] flex flex-col tablet:flex-col-reverse items-center 
                                      gap-4 desktop:items-start desktop:pb-[30vh] tablet:gap-10`}>

                        <div className={`flex flex-row items-center justify-center gap-7`}>
                            {crewJSON.map(crew=>{
                                return(
                                    <button className={`h-[10px] w-[10px] bg-gray-400 rounded-full`} key={crew["key"]}
                                            onClick={()=> {
                                                setCrewJSON(crewJSON[crew["key"]]);

                                            }}>
                                    </button>
                                )
                            })}
                        </div>
                    <div className={`flex flex-col items-center desktop:items-start tablet:gap-6`}>
                        <div className={`font-bellefair text-lg tablet:text-4xl text-gray-400 uppercase
                                        desktop:self-start`}>{currentCrew["role"]}</div>
                        <div className={`font-bellefair text-2xl tablet:text-[40px] desktop:text-6xl text-center desktop:text-start uppercase`}>{currentCrew["name"]}</div>
                        <div className={`font-barlow text-sm tablet:text-[16px] desktop:text-lg desktop:pr-[15vw]
                                        mobile:text-center desktop:text-start leading-[25px] text-labelPurple`}>{currentCrew["bio"]}</div>
                    </div>

                    </div>
                </div>

            </main>

        </div>
    );
}

export default Crew;