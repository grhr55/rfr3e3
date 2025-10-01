"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Image from "next/image";

const products = [
  { name: "Ольга.И", gorod: "Красногорск",img:'/img/Group 9.png', opis:'Я  всегда боюсь газа , а особенно боюсь что он может взорваться, как же мне помог Андрей водитель-экспедитор показал что бояться тут нечего и самое главное моего присутствие даже не понадобится.  Спасибо  компании за то что они все закрыли  этот вопрос под ключ.', },
   { name: "Марина.П", gorod: "Тульская",img:'/img/1000-c80f80ecbdb7f400e66819d4b330b853.jpg', opis:'Я  всегда боюсь газа , а особенно боюсь что он может взорваться, как же мне помог Андрей водитель-экспедитор показал что бояться тут нечего и самое главное моего присутствие даже не понадобится.  Спасибо  компании за то что они все закрыли  этот вопрос под ключ.', },
    { name: "Денис.K", gorod: "Рязанская",img:'/img/photo-461-300x300.jpg', opis:'Я  всегда боюсь газа , а особенно боюсь что он может взорваться, как же мне помог Андрей водитель-экспедитор показал что бояться тут нечего и самое главное моего присутствие даже не понадобится.  Спасибо  компании за то что они все закрыли  этот вопрос под ключ.', },
     { name: "Анастасия.В", gorod: "Ивановская ",img:'/img/1000-4724cc7efb2eb5e33fc079434ab3898c.jpeg', opis:'Я  всегда боюсь газа , а особенно боюсь что он может взорваться, как же мне помог Андрей водитель-экспедитор показал что бояться тут нечего и самое главное моего присутствие даже не понадобится.  Спасибо  компании за то что они все закрыли  этот вопрос под ключ.', },
      { name: "Игорь.Б", gorod: "Костромская ",img:'/img/unnamed.jpg', opis:'Я  всегда боюсь газа , а особенно боюсь что он может взорваться, как же мне помог Андрей водитель-экспедитор показал что бояться тут нечего и самое главное моего присутствие даже не понадобится.  Спасибо  компании за то что они все закрыли  этот вопрос под ключ.', },
  
];

export default function App() {
  return (
<div>
  <h2 className="text-[36px] open-sans text-[rgba(241,241,241,1)] text-center mt-[40px] mb-[50px]">Отзывы наших клиентов</h2>
      <div className="relative">


 <div className=" hidden min-[1250px]:flex">
           <div className="swiper-button-prev  top-[40px]  absolute   text-[40px] "> <Image
                src="/img/Group 3.svg"
                width={47}
                height={72}
                alt='нав'
                className="w-[47px] mb-[50px]  h-[72px] 2xl:min-[1920px]:ml-[900px] 2xl:max-[1900px]:ml-[600px] xl:min-[1500px]:ml-[500px] xl:max-[1440px]:ml-[400px] lg:ml-[300px] object-cover rounded-xl"
             
              /></div>
      <div className="swiper-button-next absolute text-[40px] top-[20px] "> <Image
                src='/img/Group 2.svg'
                width={47}
                height={72}
                alt='нав'
                className="w-[47px] mb-[50px]  2xl:min-[1920px]:mr-[1000px]   2xl:max-[1900px]:mr-[700px]  xl:min-[1440px]:mr-[550px] xl:max-[1440px]:mr-[450px] lg:mr-[380px]   h-[72px] object-cover rounded-xl"
             
              /></div>
 </div>
    
     

      <Swiper
        cssMode={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
         pagination={{
    el: '.my-pagination',   
    clickable: true,
  }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        spaceBetween={20}
        slidesPerView={1}
        style={{ maxWidth: "800px" }}
      >
        {products.map((product, index) => (
        
          <SwiperSlide key={index}>
            <div  className="2xl:w-[759px] xl:w-[759px] lg:w-[759px] min-[700px]:mx-[0px]  max-[700px]:mx-[20px]  md:w-[759px] sm:w-[600px] min-[900px]:w-[500px] max-[200px]:w-[350px]  mb-[40px] gap-[10px]  rounded-[40px] h-[320px] bg-[rgba(241,241,241,1)] flex justify-between  min-[638px]:items-center max-[638px]:justify-items-start  min-[638px]:px-11 max-[638px]:px-[20px] py-4">
              
             
              <Image
                src={product.img}
                width={201}
                height={240}
                alt={`Фото пользователя ${product.name}`}
                className="2x:w-[201px] xl:w-[201px] lg:xl:w-[201px] md:xl:w-[156px] sm:xl:w-[156px]  min-[400px]:w-[156px] max-[400px]:w-[127px] xl:h-[240px]  rounded-[20px] 2xl:h-[240px] object-cover "
             
              />
    
             
              <div className="">
          
                <h2 className="text-[24px] text-[rgba(33,148,255,1)] font-semibold">{product.name}</h2>
                <h3 className="text-[18px] text-[rgba(45,45,45,1)] font-semibold mt-[5px]">{product.gorod}</h3>
                <p className="text-[clamp(12px,3vw,16px)] min-[500px]:mt-2 max-[500px]:mt-0 max-w-[442px]">{product.opis}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="my-pagination mb-[15px]  flex justify-center  gap-[3px]   "></div>
      </Swiper>
      
   
    </div>
</div>

  );
}

