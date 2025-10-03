import Image from "next/image";
import { useState } from "react";
export default function App(){

    const [name ,setname] = useState('');
    const [telef ,settelef] = useState('');
    const [cont ,setcont] = useState('');
return (
    <div>
        <div className="flex  flex-wrap-reverse pt-[55px] justify-center gap-[50px]">
      <div>      <h2 className="m-0 p-0 leading-tight 2xl:text-[40px] xl:text-[40px] lg:text-[32px]  md:text-[26px]  text-[26px]   min-[750px]:text-left max-[750px]:text-center   pb-[40px]  font-black text-[rgba(241,241,241,1)]">Не нашли ответа на свой <br/> вопрос задайте их нашему<br/> специалисту </h2>
        <form className="flex 2xl:mr-[100px] xl:mr-[100px] lg:mr-[60px] md:mr-[60px] sm:mr-[0px]  mr-[0px]  flex-col gap-[24px]">
        <input
          onChange={(e) => setname(e.target.value)}
          name="name"
          value={name}
          type="text"
          placeholder="ИМЯ"
          className="border rounded-xl text-[12px] bg-[rgba(222,222,222,1)] px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[rgba(33,148,255,1)]"
        />

        <input
          onChange={(e) => settelef(e.target.value)}
          type="tel"
          name="tel"
          value={telef}
          placeholder="ТЕЛЕФОН"
          pattern="[0-9]*"
          inputMode="numeric"
          className="border rounded-xl text-[12px] bg-[rgba(222,222,222,1)] px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[rgba(33,148,255,1)]"
        />
          <textarea
  onChange={(e) => setcont(e.target.value)}
  name="cont"
  value={cont}
  placeholder="ВАШ ВОПРОС"
  className="border bg-[rgba(222,222,222,1)] text-[12px] rounded-xl pb-[34px] pl-4 pt-[17px] focus:outline-none focus:ring-2 focus:ring-[rgba(33,148,255,1)]"
/>

<button className="w-[220px] h-[47px] bg-[rgba(33,148,255,1)] min-[750px]:mx-0 max-[750px]:mx-auto text-[18px] font-bold  text-[rgba(241,241,241,1)]  rounded-[50px]">Задать вопрос </button>

   
      </form></div>
            <div className="  relative">
                    <Image
                         src="/img/image 1.png"
                         width={366}
                         height={454}
                         alt="User Avatar"
                         className=" w-[366px]  h-[455px]  "
                    />
                    <div className="w-[209px] absolute    rounded-[20px]  2xl:right-[200px] xl:right-[200px] lg:right-[200px] md:right-[200px] sm:right-[15px] right-[15px]   2xl:top-[300px] xl:top-[300px] lg:top-[300px] md:top-[300px] sm:top-[347px]   top-[347px]    h-[93px] bg-[#2194ffd1] ">
                        <div className="px-[26px] py-[13px]">
                            <h2 className="text-[24px] font-extrabold text-[rgba(241,241,241,1)]">Роман Ш.</h2>
                        <h4 className="text-[rgba(241,241,241,1)] open-san text-[16px]">Старший менеджер</h4>
                        </div>
                    </div>
            </div>
          
        </div>

        <div className=" flex mt-[60px]  justify-center gap-[16px] flex-wrap">
          <div className=" min-[500px]:w-[166px] max-[500px]:w-[150px] rounded-[20px] h-[66px] bg-[#959595]">
             <Image
              src="/img/роснефть 1.png"
              width={78}
              height={52}
              alt="User Avatar"
              className=" w-[78px] mx-auto my-auto mt-[5px] h-[52px]  "
                    />

          </div>
           <div className="min-[500px]:w-[166px] max-[500px]:w-[150px]  rounded-[20px] h-[66px] bg-[#959595]">
             <Image
              src="/img/image 3.png"
              width={110}
              height={24}
              alt="User Avatar"
              className=" w-[110px] mx-auto my-auto mt-[22px] h-[24px]  "
                    />

          </div>
           <div className="min-[500px]:w-[166px] max-[500px]:w-[150px]  rounded-[20px] h-[66px] bg-[#959595]">
             <Image
              src="/img/транснефть 1.png"
              width={112}
              height={32}
              alt="User Avatar"
              className=" w-[112px] mx-auto my-auto mt-[10px] h-[32px]  "
                    />

          </div>
           <div className="min-[500px]:w-[166px] max-[500px]:w-[150px]  rounded-[20px] h-[66px] bg-[#959595]">
             <Image
              src="/img/fefe.png"
              width={91}
              height={43}
              alt="User Avatar"
              className=" w-[91px] mx-auto my-auto mt-[3px] h-[43px]  "
                    />

          </div>
           <div className="min-[500px]:w-[166px] max-[500px]:w-[150px]  rounded-[20px] h-[66px] bg-[#959595]">
             <Image
              src="/img/feefef.png"
              width={115}
              height={22}
              alt="User Avatar"
              className=" w-[115px] mx-auto my-auto mt-[21px] h-[22px]  "
                    />

          </div>
           <div className="min-[500px]:w-[166px] max-[500px]:w-[150px]  rounded-[20px] h-[66px] bg-[#959595]">
             <Image
              src="/img/image 4.png"
              width={123}
              height={33}
              alt="User Avatar"
              className=" w-[123px] mx-auto my-auto mt-[7px] h-[33px]  "
                    />

          </div>
    

        </div>
       
    </div>
)
}
  