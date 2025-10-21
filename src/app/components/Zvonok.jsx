import Image from "next/image";
import { useState , useEffect } from "react";
import { ClockLoader } from 'react-spinners';

export default function App(){

    const [name ,setname] = useState('');
    const [telef ,settelef] = useState('');
    const [zauvs , setzauvs] = useState(false)

    const[myname,setmyname] = useState('')
     const[mytelef,setmytelef] = useState('')
    const [cont ,setcont] = useState('');
     const [isLoading, setIsLoading] = useState(false);
   
    

    



const Contacts = async (e) => {
  e.preventDefault(); 
  setIsLoading(true)



try{
  const rot = {myname,mytelef,cont}
  const response =  await fetch("https://rr3-1-dskg.onrender.com/ros/voprosi", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify(rot)
    });
    if(response.ok){
    window.location.href='/Thankyou'
    }else{
       window.location.href='/Error'
    }
    setmyname('')
    setmytelef('')
    setcont('')

}catch(error){
   window.location.href='/Error'
   setIsLoading(false)

}


}
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
       setIsLoading(false)
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

   <section  id="contact">


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
                          value={telef}
                          required
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

  
     <div>
        <div className="flex  flex-wrap-reverse pt-[55px] justify-center gap-[50px]">
      <div> 
             <h2 className="m-0 p-0 leading-tight 2xl:text-[40px] xl:text-[40px] lg:text-[32px]  md:text-[26px]  text-[26px]   min-[750px]:text-left max-[750px]:text-center   pb-[40px]  font-black text-[rgba(241,241,241,1)]">Не нашли ответа на свой <br/> вопрос задайте их нашему<br/> специалисту </h2>

             {isLoading ? (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                <ClockLoader color="#36d7b7" size={80} loading={true} />
              </div>

             ):(
            null

             )}
             
        <form  onSubmit={Contacts} className="flex 2xl:mr-[100px] xl:mr-[100px] lg:mr-[60px] md:mr-[60px] sm:mr-[0px]  mr-[0px]  flex-col min-[450px]:mx-0 max-[450px]:mx-[10px]  min-[450px]:gap-[24px] max-[450px]:gap-[16px]">
        <input
          onChange={(e) => setmyname(e.target.value)}
          name="name"
          value={myname}
          required
          type="text"
          placeholder="ИМЯ"
          className="border rounded-xl text-[12px] bg-[rgba(222,222,222,1)] px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[rgba(33,148,255,1)]"
        />

        <input
          onChange={(e) => setmytelef(e.target.value)}
          type="tel"
          name="tel"
          required
          value={mytelef}
          placeholder="ТЕЛЕФОН"
          pattern="[0-9]*"
          inputMode="numeric"
          className="border rounded-xl text-[12px] bg-[rgba(222,222,222,1)] px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[rgba(33,148,255,1)]"
        />
          <textarea
        onChange={(e) => setcont(e.target.value)}
        name="cont"
        required
        value={cont}
        placeholder="ВАШ ВОПРОС"
        
        
        
        
        
        
        
        
        
        
        className="border bg-[rgba(222,222,222,1)] text-[12px] rounded-xl pb-[34px] pl-4 pt-[17px] focus:outline-none focus:ring-2 focus:ring-[rgba(33,148,255,1)]"
/>

<button type="submit" onClick={() =>setIsLoading(!true) }   className="w-[220px] h-[47px] cursor-pointer bg-[rgba(33,148,255,1)] min-[750px]:mx-0 max-[750px]:mx-auto text-[18px] font-bold  text-[rgba(241,241,241,1)]  rounded-[50px]">Задать вопрос </button>

   
      </form>
      </div>
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
        <div className="mt-[32px]">
          <h2 className="min-[600px]:text-[36px] max-[600px]:text-[28px] m-0 p-0 leading-tight font-extrabold text-center text-[rgba(33,148,255,1)]">Закажи прямо сейчас и получи<br/>
бесплатную установку телеметрии</h2>
  <div className="flex justify-center">
    <button onClick={() => setzauvs(true) } className="   w-[295px] cursor-pointer mt-4 h-[87px] font-black rounded-[11px]  bg-[url(/img/fe.png)] bg-no-repeat text-white text-[22px] shadow-[inset_0_4px_12px_0_rgba(0,0,0,0.45)]">
          Заказать газ
        </button>
  </div>

        </div>



       
    </div>
   </section>
   
)
}
  