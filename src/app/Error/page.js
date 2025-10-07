
'use client'


export default function Erro() {
    return (
        <div className="bg-[rgba(45,45,45,1)] flex justify-center w-[100%] h-[100vh]">
 <div >

       <div className="flex flex-col items-center justify-center min-h-screen  text-center px-4">
  <h1 className="text-[80px] md:text-[120px] pt-[100px] text-[rgba(33,148,255,1)] font-bold">
    404
  </h1>
  <p className="text-[22px] text-amber-50 mb-8">
    Страница не найдена
  </p>

  <a
    href="/pages"
    className="w-[295px] h-[87px] py-[20px] px-[30px] mt-[30px] cursor-pointer font-black rounded-[11px]
               bg-[url('/img/fe.png')] bg-no-repeat bg-cover bg-center
               text-white text-[22px] shadow-[inset_0_4px_12px_0_rgba(0,0,0,0.45)] transition duration-300 hover:opacity-90"
  >
    Вернуться на сайт
  </a>
</div>

 </div>



        </div>
    )
}
  