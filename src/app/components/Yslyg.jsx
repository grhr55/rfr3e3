
'use client'

import Image from "next/image";

export default function Yslyg() {
    return(

        <div className="bg-[#2194ff0d] w-[100%] 2xl:h-[600px] xl:h-[600px] lg:h-[1200px] md:h-[1200px] sm:h-[1200px]  h-[1080px]">
            <div className=" text-center">
                <h2 className="  text-[clamp(28px,8vw,40px)]  m-0 p-0 leading-tight font-bold russo-one-reg  text-[rgba(33,148,255,1)] pt-[46px] ">Стоимость газа в ваш газгольдер сегодня</h2>
            </div>
            <div className="flex justify-center flex-wrap mt-[49px] 2xl:gap-[182px] xl:gap-[90px] lg:gap-[60px]  md:gap-[36px]   sm:gap-[36px]       2xl:mx-0 xl:mx-0 lg:mx-[230px] md:mx-[110px] sm:mx-[50px]  mx-[20px]   gap-[10px]"> 
                <div>

                <div className="m-0 p-0 leading-tight  min-[1280px]:text-left max-[1280px]:text-center">
                    <h2 className="text-[36px] font-extrabold   text-[rgba(241,241,241,1)] ">Пропан</h2>
                    <h2 className="text-[24px] font-extrabold   text-[rgba(33,148,255,1)]">от 25 рублей за литр</h2>
                    <h6 className="text-[16px] mt-[21px] mb-[28px] text-[rgba(241,241,241,1)] m-0 p-0 leading-tight open-sa  min-[600px]:text-left max-[600px]:text-center">Физически испарение<br/> происходит до -40 градусов, что<br/> позволяет использовать его в<br/> наших с вами погодных <br/> условиях</h6>
                    <button className="w-[155px] bg-[rgba(33,148,255,1)] text-[rgba(241,241,241,1)] h-[43px] text-center open-sans mt-[8px] rounded-[50px] ">Заказать</button>
                </div>

             </div>

                <div className="flex justify-center" >
                  <div>
               <div className=" flex justify-center">
                   <div >
                        <h3 className="text-[20px] russo-one-regular    text-[#f1f1f1ba] ">Идеальное соотношение</h3>
                    <div className="  flex  justify-center gap-[25px]  mb-[20px]">
                     <div className="m-0 p-0 leading-tight"> 
                          <h2 className="text-[36px] russo-one-regular text-[#f1f1f1ba]">80%<br/><p className="text-[18px] russo-one-regular text-[#f1f1f1ba]">пропана</p></h2>
                      </div>
                      <div className="w-[1px] h-[51px] bg-[rgba(241,241,241,0.3)]"></div>
                      <div className="m-0 p-0 leading-tight"> 
                          <h2 className="text-[36px] russo-one-regular text-[#f1f1f1ba]">20%<br/><p className="text-[18px] russo-one-regular text-[#f1f1f1ba]">бутана</p></h2>
                      </div>
                        
                    </div>
                  </div>
               </div>


                        <Image
                              src="/img/proportions 1.png"
                              width={545}
                              height={246}
                              alt="User Avatar"
                              className=" w-[545px] 2xl:h-[246px] xl:h-[246px] lg:h-[246px] md:h-[246px] sm:h-[200px]  h-[200px]  "
                            />
                  </div>


                </div>

                  <div>

                <div className="m-0 p-0 leading-tight min-[1280px]:text-left max-[1280px]:text-center ">
                    <h2 className="text-[36px] font-extrabold   text-[rgba(241,241,241,1)] ">Бутан</h2>
                    <h2 className="text-[24px] font-extrabold   text-[rgba(33,148,255,1)]">от 16 рублей за литр</h2>
                    <h6 className="text-[16px] mt-[21px] mb-[30px] text-[#cdc8c8a6] m-0 p-0 leading-tight open-sa min-[600px]:text-left max-[600px]:text-center "> Испарение Бутана происходит <br/> только до 0 градусов и годится<br/> для использования в тёплое <br/> время года</h6>
                    <button className="w-[155px] bg-[rgba(33,148,255,1)] text-[rgba(241,241,241,1)] h-[43px] text-center open-sans mt-[8px] rounded-[50px] ">Заказать</button>
                </div>

             </div>

            </div>

        </div>

    )
}