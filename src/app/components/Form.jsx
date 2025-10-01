

"use client";

import Image from "next/image";


export default function Heder() {
  return (
    <div  className=" flex justify-center items-center  min-[1200px]:flex-initial max-[1200px]:flex-wrap  pb-[80px] pt-[24px] ">

  

<div className=" 2xl:min-[1920px]:pl-[100px] 2xl:max-[1900px]:pl-[10px]  xl:pl-[110px] pl-[0px]">
<div className=" hidden min-[500px]:flex">
           <div className="flex gap-[34px]  ">
         <div>
              <div className="flex gap-[9px]">
               <Image
                      src="/img/moon 1.png"
                      width={20}
                      height={20}
                      alt="User Avatar"
                      className=" w-[20px] h-[20px]"
                    />
                           <Image
                      src="/img/arrow 1.svg"
                      width={20}
                      height={20}
                      alt="User Avatar"
                      className=" w-[20px] h-[20px]"
                    />
                           <Image
                      src="/img/sun 1.svg"
                      width={20}
                      height={20}
                      alt="User Avatar"
                      className=" w-[20px] h-[20px]"
                    />
         </div> 
         <h2 className="text-[rgba(241,241,241,1)] pt-[8px] open-sa ">В любое время дня и ночи</h2>
        </div>
        

         <div>
         <div>
             <div className="flex gap-[9px]">
               <Image
                      src="/img/cloudy 1.png"
                      width={20}
                      height={20}
                      alt="User Avatar"
                      className=" w-[20px] h-[20px]"
                    />
                           <Image
                      src="/img/arrow 1.svg"
                      width={20}
                      height={20}
                      alt="User Avatar"
                      className=" w-[20px] h-[20px]"
                    />
                           <Image
                      src="/img/snowflake 1.svg"
                      width={20}
                      height={20}
                      alt="User Avatar"
                      className=" w-[20px] h-[20px]"
                    />
         </div> 
         <h2 className="text-[rgba(241,241,241,1)] pt-[8px] open-sa ">Вне зависимости от погодных условий</h2>
         </div> 
  </div> 
   </div>
</div>

<div className="min-[700px]:px-[0px] max-[700px]:px-[20px]">
       <h2 className="text-[clamp(46px,10vw,64px)] m-0 p-0 leading-tight russo-one-reg font-extrabold text-[rgba(33,148,255,1)]">Доставим газ<br/>
за 4 часа</h2>
<div className="flex ">
    <h2 className="text-[clamp(18px,5vw,24px)] m-0 p-0 leading-tight  russo-one-regular text-[rgba(241,241,241,1)]">в любую точку  Москвы<br/>
и Московской области</h2>
 <Image
                      src="/img/Frame.svg"
                      width={100}
                      height={90}
                      alt="User Avatar"
                      className=" w-[100px] h-[90px]"
                    />
</div>
<button className="2xl:w-[358px] cursor-pointer xl:w-[358px] open-sans lg:w-[358px] md:w-[358px] sm:w-[358px] w-[309px] h-[87px]  rounded-[11px]  shadow-[inset_0px_4px_12px_0px_rgba(0,0,0,0.45)] text-center text-[22px] text-[rgba(241,241,241,1)] bg-[url(/img/fe.png)] bg-no-repeat       ">
    Заказать доставку газа
в газгольдер
</button>
<h2 className="text-[clamp(14px,4vw,16px)]  open-sa text-[rgba(241,241,241,1)]  mb-[20px] mt-[13px] ml-[19px] ">Доставка газа всегда по актуальным ценам</h2>
  
</div>
</div>
          <div className=" hidden min-[700px]:flex">
             <Image
                      src="/img/1stscreen 1.png"
                      width={900}
                      height={477}
                      alt="User Avatar"
                      className="  2xl:min-[1900px]:w-[1000px] 2xl:max-[1900px]:w-[900px] xl:w-[802px]  2xl:h-[477px] xl:h-[477px] h-[345px]"
                    />
          </div>

                    <div className="flex min-[700px]:hidden">
                        <Image
                      src="/img/1stscreen 1.png"
                      width={900}
                      height={477}
                      alt="User Avatar"
                      className=" object-cover 2xl:min-[1920px]:w-[1300px] 2xl:max-[1900px]:w-[900px] xl:w-[802px]  2xl:h-[477px] xl:h-[477px] h-[345px]"
                    />
                    </div>
                    
         
  
      
    </div>
  );
}