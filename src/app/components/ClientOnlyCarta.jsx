'use client';
import dynamic from 'next/dynamic';


const Carta = dynamic(() => import('./Carta'), { ssr: false });

export default function ClientOnlyCarta() {
  return (
   <div >
    <div className='flex  mt-[40px] justify-center'>
        <div className='min-[1180px]:w-[1140px]  max-[1180px]:w-[80%] min-[1180px]:h-[488px] max-[1180px]:h-[670px]  rounded-[33px] bg-[rgba(255,253,253,1)]'>


  <div className='  min-[1180px]:flex     gap-[40px]'>
          <div className='py-[30px]  min-[1180px]:ml-[40px] max-[1180px]:mx-[20px]'>
            <h2 className='text-[34px]       m-0 p-0 font-bold leading-tight text-[rgba(33,148,255,1)]'>Посетите наш <br/> уютный офис</h2>
            <h2 className='text-[16px] m-0    p-0 leading-tight open-sans pt-[16px]  text-[rgba(27,38,57,1)]'>где мы сможем вас полностью<br/>
проконсультировать по всем  вопросам</h2>
<div className=' min-[1180px]:w-[490px] max-[1180px]:w-[100%] mt-[20px] h-[1px] bg-[rgba(27,38,57,0.2)]'></div>
   <h2 className='text-[18px] m-0 p-0  min-[500px]:pt-[30px]  max-[500px]:pt-[18px]  leading-tight font-semibold text-[rgba(33,148,255,1)]'>Офис</h2>
       <h3 className=' min-[400px]:text-[18px] max-[400px]:text-[16px] m-0 p-0 leading-tight font-medium text-[rgba(27,38,57,1)]'>Видное , Белокаменное шоссе, 20</h3>
        <h2 className='text-[18px] m-0 p-0 leading-tight font-semibold min-[1000px]:pt-[45px] max-[1000px]:pt-[35px]  text-[rgba(33,148,255,1)]'>Телефон:</h2>
          <h3 className='text-[18px] m-0 p-0 leading-tight font-medium text-[rgba(27,38,57,1)]'>+7 926 330-68-34</h3>
        </div>
        <Carta />
  </div>

    </div>

</div>    
<div className='flex text-amber-50 justify-around  2xl:pt-[41px]  xl:pt-[40px] lg:pt-[200px] md:pt-[200px] min-[500px]:pt-[200px] max-[500px]:pt-[50px]  gap-5 flex-wrap'>
        <h2 className='min-[1920px]:ml-[150px] max-[1900px]:ml-[0px]'>Политика конфиденциальности</h2>
        <h2 className='min-[1920px]:mr-[150px] max-[1900px]:mr-[0px]'>Согласие на обработку персональных данных</h2>

</div>

   </div>
  )
  
  
  
}
