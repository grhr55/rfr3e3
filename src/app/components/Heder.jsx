

"use client";


import Image from "next/image";
import { useState } from "react";


export default function Heder() {
  const [meni ,setmeni] = useState(false)
  const sectionsIds = ['glav', 'yslug', 'tal', 'contact', ];


  return (
    <div  className=" flex justify-center items-center flex-wrap 2xl:gap-[800px] xl:gap-[600px] lg:gap-[323px] md:gap-[120px]  sm:gap-[70px]   disabled:grid gap-[80px] pt-[24px] ">
<div  className=" flex  items-center gap-[20px] ">
                  <Image
          src="/img/Logo.png"
          width={269}
          height={98}
          alt="User Avatar"
          className=" min-[500px]:w-[269px] max-[500px]:w-[200px]   min-[500px]:h-[98px] max-[500px]:h-[80px] "
        />
        <div className="hidden min-[700px]:flex">
          <div className="h-[33px] mt-[26px] w-[1px] bg-[rgba(255,255,255,1)]"></div>
        </div>
  <div className="hidden min-[700px]:flex">
          <h1 className=" text-[16px] open-san mt-[26px] m-0 p-0 text-[rgba(33,148,255,1)] leading-tight ">Расправь плечи<br/>
в теплом доме</h1>
  </div>

</div>
<div className=" hidden min-[700px]:flex">
  <div className="m-0 p-0 leading-tight"> 
  <h2 className="text-[24px] font-bold russo-one-regular text-[rgba(241,241,241,1)] ">+7 926 330-68-34</h2>
  <h3 className="text-[16px] open-sans text-[rgba(33,148,255,1)]">Срочный вопрос</h3>
</div>
</div>

<div className="flex min-[700px]:hidden">
      <div className="relative">
    
      <button
        className="cursor-pointer"
        onClick={() => setmeni(!meni)}
      >
        {meni ? (
           <div className="mt-[20px]">
  <div className="w-[49px] h-[4px] mb-[4px] bg-blue-700"></div>
  <div className="w-[49px] h-[4px] mb-[4px] bg-blue-700"></div>
  <div className="w-[49px] h-[4px] bg-blue-700"></div>
</div>
         
        ) : (
           <div className="mt-[20px]">
  <div className="w-[49px] h-[4px] mb-[4px] bg-blue-700"></div>
  <div className="w-[49px] h-[4px] mb-[4px] bg-blue-700"></div>
  <div className="w-[49px] h-[4px] bg-blue-700"></div>
</div>
        
        )}
      </button>

      
{meni && (
  <div className="fixed inset-0 z-50 bg-blue-800 flex flex-col">
    
    {/* Кнопка закрытия */}
    <button
      onClick={() => setmeni(false)}
      className="absolute top-5 right-5 text-white text-4xl cursor-pointer hover:rotate-90 transition-transform duration-300"
      aria-label="Закрыть меню"
    >
      ✕
    </button>

    {/* Навигационное меню */}
    <nav className="flex flex-col items-center justify-center flex-1 gap-15 text-white font-bold">
      
      {/* Логотип */}
      <div className="flex justify-center">
        <Image
          src="/img/Logo.png"
          width={269}
          height={98}
          alt="Логотип"
          className="w-[200px] h-[80px] sm:w-[269px] sm:h-[98px] object-contain"
        />
      </div>

      {/* Ссылки на секции */}
      {['Преймущества', 'Выбор газа', 'Отзывы', 'Консультация'].map((item, index) => (
        <a
          key={index}
          href="#"
          className="text-2xl sm:text-3xl cursor-pointer hover:text-gray-200 transition-colors duration-200"
          onClick={(e) => {
            e.preventDefault();
            const section = document.getElementById(sectionsIds[index]);
            if (section) section.scrollIntoView({ behavior: "smooth" });
            setmeni(false);
          }}
        >
          {item}
        </a>
      ))}
    </nav>

    {/* Подвал */}
    <footer className="pb-6 text-white text-sm text-center opacity-80">
      © 2025 АтланТгаз.
    </footer>
  </div>
)}




    </div>
 
</div>

        
      
    </div>
  );
}