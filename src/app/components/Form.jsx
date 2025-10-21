

"use client";

import Image from "next/image";
import { useState ,useEffect} from "react";
import { ClockLoader } from 'react-spinners';


export default function Heder() {
     const [zauvs , setzauvs] = useState(false)
     const [name,setname] = useState('')
     const [telef,settelef] = useState('')
       const [isLoading, setIsLoading] = useState(false);



     const Databas = async (e) => {
    e.preventDefault(); 
    setIsLoading(true)

  try {

 
    const data = {
  name,
  telef,
};
    const response =   await fetch("https://rr3-1-dskg.onrender.com/zyuvs/zauv", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify(data)
    });
   
    if(response.ok){
    window.location.href='/Thankyou'
    }else{
       window.location.href='/Error'
    }


  } catch (err) {
    console.error("Fetch error:", err);
     setIsLoading(false);
   
  }
};

   useEffect(() => {
    if (zauvs) {
    
      document.body.style.overflow = "hidden";
    } else {
    
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [zauvs]);



     

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
<button onClick={() => setzauvs(true) } className="2xl:w-[358px] cursor-pointer xl:w-[358px] open-sans lg:w-[358px] md:w-[358px] sm:w-[358px] w-[309px] h-[87px]  rounded-[11px]  shadow-[inset_0px_4px_12px_0px_rgba(0,0,0,0.45)] text-center text-[22px] text-[rgba(241,241,241,1)] bg-[url(/img/fe.png)] bg-no-repeat       ">
    Заказать доставку газа
в газгольдер
</button>


{zauvs && (
  <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

  
     {isLoading ? (
     <ClockLoader color="#36d7b7" size={80} loading={true} />
     ):(

        <div>
     <div className="bg-white rounded-[33px]   min-[600]:w-[100%]  sm:max-[600px]:w-[350px] max-[500px]:w-[300px]  min-[600px]:mx-[0px]  max-[600px]:mx-[80px]   h-auto  min-[500px]:px-12  max-[500px]:px-7  py-6">
      <div className="flex justify-between mb-6">
        <h2 className="text-[24px] font-black leading-tight text-[rgba(33,148,255,1)]">
          Доставим газ<br />
          за 4 часа
        </h2>
        <button onClick={() => setzauvs(false)}>
          <Image
            src="/img/Vector 1.svg"
            width={22}
            height={22}
            alt="крест"
            className="w-[22px] cursor-pointer h-[22px]"
          />
        </button>
      </div>

      <form   onSubmit={Databas} className="flex flex-col gap-4">
        <input
          onChange={(e) => setname(e.target.value)}
          name="name"
          value={name}
          required
          type="text"
          placeholder="ИМЯ"
          className="border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[rgba(33,148,255,1)]"
        />

        <input
          onChange={(e) => settelef(e.target.value)}
          type="tel"
          name="tel"
          required
          value={telef}
          placeholder="ТЕЛЕФОН"
          pattern="[0-9]*"
          inputMode="numeric"
          className="border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[rgba(33,148,255,1)]"
        />

        <button onClick={Databas} type="submit" className="w-full cursor-pointer mt-4 h-[87px] font-black rounded-[11px]  bg-[url(/img/fe.png)] bg-no-repeat text-white text-[clamp(16px,3vw,22px)] shadow-[inset_0_4px_12px_0_rgba(0,0,0,0.45)]">
          Заказать доставку газа
        </button>
      </form>

     
    </div>
     <h5 className="text-center text-[clamp(8px,2vw,14px)] text-[#838587d6] mt-4">
        Нажимая на кнопку, вы даёте согласие на обработку персональных данных
        <br />и соглашаетесь с условиями политики конфиденциальности
      </h5>
    
   </div>
     )}
   
  </div>
)}


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