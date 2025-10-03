"use client";

import { useState } from "react"
import Image from "next/image";



export default function Home() {

    const [faction ,setfaction] =useState(Array(5).fill(false))

    const clikfact = (index) => {
        setfaction(prev => prev.map((val ,i) => (i === index ? !val :val)))
    }

 return(

    <div className=" bg-[#2194ff0d] w-[100%]  pb-[40px] h-[100%]" > 
    <h2 className=" min-[500px]:text-[36px] max-[500px]:text-[31px] text-[rgba(33,148,255,1)] open-sans m-0 p-0 leading-tight  text-center py-[30px]">Ответы на часто задаваемые вопросы</h2>
   <div className="flex justify-center">

       <div className=" 2xl:mx-[23%] xl:mx-[18%] mx-autolg:mx-[14%] md:mx-[7%] sm: px-[20px]">
        
             
               <div className="px-25px">
                  <button 
               onClick={() =>clikfact(0)}>

                      <div className=" 2xl:w-[1100px]  xl:w-[1000px] lg:w-[800px] md:w-[700px] sm:w-[500px] min-[640px]:w-[100%] max-[200px]:w-[100%]  h-[2px] bg-[rgba(255,255,255,0.1)]"></div>
                    <div className="2xl:w-[630px]   xl:w-[530px] lg:w-[530px] md:w-[530px] sm:w-[530px] w-[100%]   h-[100%]">
                          
                     {faction[0] ?
                      <div className="flex   justify-start pt-[25px]   px-[30px]">

                            <Image
                                    src="/img/arrow 1 (1).png"
                                    width={16}
                                    height={16}
                                    alt="User Avatar"
                                    className="w-[16px] min-[400px]:mt-[0px] max-[400px]:mt-[10px]  h-[16px]"
                                   />
                                <h2 className="text-[clamp(12px,4vw,16px)]   russo-one-regular ml-[22px]  text-left m-0 p-0 leading-tight text-[rgba(33,148,255,1)]  dm-sans-bold pr-[17px] ">Есть ли у вас инженеры в компании?</h2>
                            
                                

                            </div>: 
                     <div>

                    <div className=" flex  justify-start py-[25px]   px-[30px]">
                          <Image
                                    src="/img/arrow 1.png"
                                    width={16}
                                    height={16}
                                    alt="User Avatar"
                                    className="w-[16px] min-[400px]:mt-[0px] max-[400px]:mt-[10px]  h-[16px]"
                                   />
                                <h2 className="text-[clamp(12px,4vw,16px)] russo-one-regular   ml-[22px] text-[rgba(241,241,241,1)] text-left m-0 p-0 leading-tight  dm-sans-bold pr-[17px] ">Есть ли у вас инженеры в компании?</h2>

                            </div>
                        
                        </div>}
                         {faction[0] && (<div className=" pl-[68px]  ">
                        <h4 className="text-left text-[clamp(11px,3vw,16px)] mb-[30px] text-[#ddd4d4b3] mt-[16px] m-0 p-0 leading-tight  dm-sans-regular"> Да команда спецыолистов которые помогает облегчить нашу работу </h4>
                    </div>)}
                    
                        </div>
                        
                        

                   
                </button>
               </div> 
             <div className=" 2xl:w-[1100px]  xl:w-[1000px] lg:w-[800px] md:w-[700px] sm:w-[500px] min-[640px]:w-[100%] max-[200px]:w-[100%]  h-[2px] bg-[rgba(255,255,255,0.1)]"></div>
                
            

                     <button  onClick={() =>clikfact(1)}>



                        

                      
                   
                          
                     {faction[1] ?
                      <div className="flex   justify-start pt-[25px]   px-[30px]">

                            <Image
                                    src="/img/arrow 1 (1).png"
                                    width={16}
                                    height={16}
                                    alt="User Avatar"
                                    className="w-[16px] min-[400px]:mt-[0px] max-[400px]:mt-[10px]  h-[16px]"
                                   />
                                <h2 className="text-[clamp(12px,4vw,16px)] russo-one-regular ml-[22px]  text-left m-0 p-0 leading-tight text-[rgba(33,148,255,1)]  dm-sans-bold pr-[17px] ">Делаете ли вы отчистку газгольдера?</h2>
                            
                                

                            </div>: 
                     <div>

                    <div className=" flex  justify-start py-[26px]   px-[30px]">
                          <Image
                                    src="/img/arrow 1.png"
                                    width={16}
                                    height={16}
                                    alt="User Avatar"
                                    className="w-[16px] min-[400px]:mt-[0px] max-[400px]:mt-[10px] h-[16px]"
                                   />
                                <h2 className="text-[clamp(12px,4vw,16px)] russo-one-regular  ml-[22px] text-[rgba(241,241,241,1)] text-left m-0 p-0 leading-tight  dm-sans-bold pr-[17px] ">Делаете ли вы отчистку газгольдера?</h2>
                              
                                

                            </div>
                        
                        </div>}
                         {faction[1] && (<div className=" pl-[68px]  ">
                        <h4 className="text-left text-[clamp(11px,3vw,16px)] mb-[30px] text-[#ddd4d4b3] mt-[16px] m-0 p-0 leading-tight  dm-sans-regular"> Да от начала работы до окончания  </h4>
                    </div>)}
                    <div className=" 2xl:w-[1100px]  xl:w-[1000px] lg:w-[800px] md:w-[700px] sm:w-[500px] min-[640px]:w-[100%] max-[200px]:w-[100%]  h-[2px] bg-[rgba(255,255,255,0.1)]"></div>
                      
                        

                    
                 </button>





                   <button  onClick={() =>clikfact(2)}>
    
                     {faction[2] ?
                      <div className="flex   justify-start pt-[25px]   px-[30px]">

                            <Image
                                    src="/img/arrow 1 (1).png"
                                    width={16}
                                    height={16}
                                    alt="User Avatar"
                                    className="w-[16px] min-[400px]:mt-[0px] max-[400px]:mt-[10px]  h-[16px]"
                                   />
                                <h2 className="text-[clamp(12px,4vw,16px)] russo-one-regular ml-[22px]  text-left m-0 p-0 leading-tight text-[rgba(33,148,255,1)]  dm-sans-bold pr-[11px] ">А вы не испортите газон у меня и соседей?</h2>
                            
                                

                            </div>: 
                     <div>

                    <div className=" flex  justify-start py-[26px]   px-[30px]">
                          <Image
                                    src="/img/arrow 1.png"
                                    width={16}
                                    height={16}
                                    alt="User Avatar"
                                    className="w-[16px]  min-[400px]:mt-[0px] max-[400px]:mt-[10px]  h-[16px]"
                                   />
                                <h2 className="text-[clamp(12px,4vw,16px)] russo-one-regular  ml-[22px] text-[rgba(241,241,241,1)] text-left m-0 p-0 leading-tight  dm-sans-bold pr-[11px] ">А вы не испортите газон у меня и соседей?</h2>
                              
                                

                            </div>
                        
                        </div>}
                         {faction[2] && (<div className=" pl-[68px]  ">
                        <h4 className="text-left text-[clamp(11px,3vw,16px)] mb-[30px] text-[#ddd4d4b3] mt-[16px] m-0 p-0 leading-tight  dm-sans-regular"> За счёт длинны в 50 м. делаем заправку не заезжая и не портим газон, а так же не мешаем соседям </h4>
                    </div>)}
                        <div className=" 2xl:w-[1100px]  xl:w-[1000px] lg:w-[800px] md:w-[700px] sm:w-[500px] min-[640px]:w-[100%] max-[200px]:w-[100%]  h-[2px] bg-[rgba(255,255,255,0.1)]"></div>
                      
                        

                    
                </button>

                   <button  onClick={() =>clikfact(3)}>
    
                     {faction[3] ?
                      <div className="flex   justify-start pt-[25px]   px-[30px]">

                            <Image
                                    src="/img/arrow 1 (1).png"
                                    width={16}
                                    height={16}
                                    alt="User Avatar"
                                    className="w-[16px] min-[400px]:mt-[0px] max-[400px]:mt-[10px]  h-[16px]"
                                   />
                                <h2 className="text-[clamp(12px,4vw,16px)] russo-one-regular ml-[22px]  text-left m-0 p-0 leading-tight text-[rgba(33,148,255,1)]  dm-sans-bold pr-[11px] ">Вы предоставляете документы для субсидий?</h2>
                            
                                

                            </div>: 
                     <div>

                    <div className=" flex  justify-start py-[26px]   px-[30px]">
                          <Image
                                    src="/img/arrow 1.png"
                                    width={16}
                                    height={16}
                                    alt="User Avatar"
                                    className="w-[16px] min-[400px]:mt-[0px] max-[400px]:mt-[10px]  h-[16px]"
                                   />
                                <h2 className="text-[clamp(12px,4vw,16px)] russo-one-regular  ml-[22px] text-[rgba(241,241,241,1)] text-left m-0 p-0 leading-tight  dm-sans-bold pr-[11px] ">Вы предоставляете документы для субсидий?</h2>
                              
                                

                            </div>
                        
                        </div>}
                         {faction[3] && (<div className=" pl-[68px]  ">
                        <h4 className="text-left text-[clamp(11px,3vw,16px)] mb-[30px] text-[#ddd4d4b3] mt-[16px] m-0 p-0 leading-tight  dm-sans-regular"> Да</h4>
                    </div>)}
                         <div className=" 2xl:w-[1100px]  xl:w-[1000px] lg:w-[800px] md:w-[700px] sm:w-[500px] min-[640px]:w-[100%] max-[200px]:w-[100%]  h-[2px] bg-[rgba(255,255,255,0.1)]"></div>
                        

                    
                </button>
                    <button  onClick={() =>clikfact(4)}>
    
                     {faction[4] ?
                      <div className="flex   justify-start pt-[25px]   px-[30px]">

                            <Image
                                    src="/img/arrow 1 (1).png"
                                    width={16}
                                    height={16}
                                    alt="User Avatar"
                                    className="w-[16px] min-[400px]:mt-[0px] max-[400px]:mt-[10px]  h-[16px]"
                                   />
                                <h2 className="text-[clamp(12px,4vw,16px)] russo-one-regular ml-[22px]  text-left m-0 p-0 leading-tight text-[rgba(33,148,255,1)]  dm-sans-bold pr-[11px] ">Смогу ли я заказать во время праздников?</h2>
                            
                                

                            </div>: 
                     <div>

                    <div className=" flex  justify-start py-[26px]   px-[30px]">
                          <Image
                                    src="/img/arrow 1.png"
                                    width={16}
                                    height={16}
                                    alt="User Avatar"
                                    className="w-[16px] min-[400px]:mt-[0px] max-[400px]:mt-[10px]  h-[16px]"
                                   />
                                <h2 className="text-[clamp(12px,4vw,16px)] russo-one-regular  ml-[22px] text-[rgba(241,241,241,1)] text-left m-0 p-0 leading-tight  dm-sans-bold pr-[11px] ">Смогу ли я заказать во время праздников?</h2>
                              
                                

                            </div>
                        
                        </div>}
                         {faction[4] && (<div className=" pl-[68px]  ">
                        <h4 className="text-left text-[clamp(11px,3vw,16px)] mb-[30px] text-[#ddd4d4b3] mt-[16px] m-0 p-0 leading-tight  dm-sans-regular"> Да мы принимает заказы в любое время </h4>
                    </div>)}
                          <div className=" 2xl:w-[1100px]  xl:w-[1000px] lg:w-[800px] md:w-[700px] sm:w-[500px] min-[640px]:w-[100%] max-[200px]:w-[100%]  h-[2px] bg-[rgba(255,255,255,0.1)]"></div>
                      
                        

                    
                </button>

        
                
                </div>

   </div>
       

    </div>

 )
}
 