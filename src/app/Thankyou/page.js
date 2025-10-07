
'use client'
import Link from 'next/link';

export default function Tencu() {
    return (
        <div className="bg-[rgba(45,45,45,1)] flex justify-center w-[100%] h-[100vh]">
 <div >

            <div>
                     

                       <h1 className="text-[48px] text-center pt-[250px] text-[rgba(33,148,255,1)] font-bold " >Спасибо за обращение</h1>
                       <h2 className="text-[24px] text-center m-0 p-0  pb-[50px]   leading-tight text-[rgba(241,241,241,1)] font-bold "> наш специалист свяжется <br/>с вами в ближайшее время</h2>
 <Link  href="/" className=" w-[295px] py-[20px]  ml-32 mt-[30px] px-[30px] cursor-pointer  h-[87px] font-black rounded-[11px]  bg-[url(/img/fe.png)] bg-no-repeat text-white text-[22px] shadow-[inset_0_4px_12px_0_rgba(0,0,0,0.45)]">
           Вернуться на сайт
        </Link>
                
            </div>
 </div>



        </div>
    )
}
  