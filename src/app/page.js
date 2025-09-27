'use client'
import Heder from "./components/Heder";
import Form from './components/Form'
import Yslyg from "./components/Yslyg";
import Priumyt from './components/Priumyt'

import Image from "next/image";


export default function Home() {
  return (
    <div className="bg-[rgba(45,45,45,1)]  w-[100%] h-[8000px]">
      <Heder/>
      <div className=" relative  ">
        <Form/>
     <div className=" absolute translate-x-[900px]  top-[540px]">
    <div className=" absolute">
                            <Image
                              src="/img/Vector 1 (1).svg"
                              width={47}
                              height={24}
                              alt="User Avatar"
                              className=" w-[47px] top-[300px]  ml-[22px] h-[24px]"
                            />

                             <Image
                              src="/img/Vector 2.svg"
                              width={72}
                              height={36}
                              alt="User Avatar"
                              className=" w-[72px] ml-[10px]  h-[36px]"
                            />
                            
                                 <Image
                              src="/img/Vector 3.svg"
                              width={99}
                              height={50}
                              alt="User Avatar"
                              className=" w-[99px] ml-[15px] h-[50px]"
                            />
</div>
</div>
     <Yslyg/>
      </div>
      
 
     
      <Priumyt/>
     

    </div>
  );
}
