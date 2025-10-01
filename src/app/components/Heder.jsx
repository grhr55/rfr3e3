

"use client";


import Image from "next/image";


export default function Heder() {
  return (
    <div  className=" flex justify-center items-center flex-wrap 2xl:gap-[800px] xl:gap-[600px] lg:gap-[323px] md:gap-[120px]  sm:gap-[70px] gap-[10px] pt-[24px] ">
<div  className=" flex  items-center gap-[20px] ">
                  <Image
          src="/img/Logo.png"
          width={269}
          height={98}
          alt="User Avatar"
          className=" w-[269px] h-[98px]"
        />
        <div className="hidden min-[500px]:flex">
          <div className="h-[33px] mt-[26px] w-[1px] bg-[rgba(255,255,255,1)]"></div>
        </div>
  <div className="hidden min-[500px]:flex">
          <h1 className=" text-[16px] open-san mt-[26px] m-0 p-0 text-[rgba(33,148,255,1)] leading-tight ">Расправь плечи<br/>
в теплом доме</h1>
  </div>

</div>
<div className="m-0 p-0 leading-tight"> 
  <h2 className="text-[24px] font-bold russo-one-regular text-[rgba(241,241,241,1)] ">+7 926 330-68-34</h2>
  <h3 className="text-[16px] open-sans text-[rgba(33,148,255,1)]">Срочный вопрос</h3>
</div>

        
      
    </div>
  );
}