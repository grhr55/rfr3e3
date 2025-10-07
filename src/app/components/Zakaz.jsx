
"use client";


import { useState ,useEffect} from "react";
import Image from "next/image";

export default function App() {
  const products = 
    [{obum:'Малый ' ,liter:'2000 л.',img:'/img/01 2.png'},
     {obum:'Средний ', liter:'6000 л.' , img:'/img/02 1.png'},
     {obum:'Стандартный',liter:'10 000 л.' ,img:'/img/03 1.png'},
     {obum:'Оптовый ',liter:'40 000 л.',img:'/img/04 1.png'}] 
     const [selectedIndex, setSelectedIndex] = useState(0);
     const [orders,setorders] =useState([])

     const [name,setname] = useState('')
     const [telef,settelef] = useState('')

     const [zauvs , setzauvs] = useState(false)



  const handleSelect = (index) => {
  setSelectedIndex(index );
  };

  const oncis = () => {
    setzauvs(true)

  }


const Databas = async (e) => {
  e.preventDefault(); 

 

  try {

    const selectedProduct = products[selectedIndex];
    const data = {
  name,
  telef,
  obum: selectedProduct.obum,
  liter: selectedProduct.liter,
  img:selectedProduct.img
};
    const response =   await fetch("https://rr3-2.onrender.com/zyuvs/zauv", {
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
   
  }
};

  const handleSubmit = () => {
    
    
    if (selectedIndex !== null) {
      const newOrder = {
        product: products[selectedIndex],
        index: selectedIndex,
        timestamp: new Date().toLocaleTimeString(),
      };
      setorders([...orders, newOrder]);
      
    } else {
      alert("❌ Вы не выбрали товар!");
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

    <section  id="yslug">
      <div className="flex  bg-[#2194ff0d] w-[100%] 2xl:h-[600px] xl:h-[600px] lg:h-[600px] md:h-[600px] sm:h-[650px]  min-[400px]:h-[700px] max-[400px]:h-[600px] flex-col relative items-center gap-4 p-6">
  <h1 className="text-[clamp(28px,8vw,36px)]  text-center m-0 p-0 leading-tight text-[rgba(33,148,255,1)] font-bold">Выберите свой объём Газовоза</h1>

  
  <div className="flex  justify-center flex-wrap  min-[500px]:gap-[24px] max-[500px]:gap-[20px] ">
    {products.map((product, index) => (
      <button
        key={index}
        onClick={() => handleSelect(index)}
        className={` min-[600px]:w-[160px] cursor-pointer max-[600px]:w-[140px]  h-[64px]  rounded-[20px]
          ${selectedIndex === index ? "bg-[rgba(33,148,255,1)] text-white" : "bg-[rgba(241,241,241,0.2)] text-[#f1f1f1b7]"}
        `}
      >
       <h2 className="text-center open-sans  text-[18px] m-0 p-0 leading-tight ">{product.obum}<br/>{product.liter}</h2>
      </button>
    ))}
  </div>

{zauvs && (
  <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
    {/* Мини-окно */}
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

        <button onClick={handleSubmit} type="submit" className="w-full cursor-pointer mt-4 h-[87px] font-black rounded-[11px]  bg-[url(/img/fe.png)] bg-no-repeat text-white text-[clamp(16px,3vw,22px)] shadow-[inset_0_4px_12px_0_rgba(0,0,0,0.45)]">
          Заказать доставку газа
        </button>
      </form>

     
    </div>
     <h5 className="text-center text-[clamp(8px,2vw,14px)] text-[#838587d6] mt-4">
        Нажимая на кнопку, вы даёте согласие на обработку персональных данных
        <br />и соглашаетесь с условиями политики конфиденциальности
      </h5>
    
   </div>
   
  </div>
)}





  
  { selectedIndex === 0 !== null && (
    <Image
      src={products[selectedIndex].img}
      width={545}
      height={246}
      alt={products[selectedIndex].obum}
      className="w-[545px] 2xl:h-[246px] xl:h-[246px] lg:h-[246px] md:h-[246px] sm:h-[224px] min-[400px]:h-[224px] max-[400px]:h-[170px] mx-auto"
    />
  )}
    <button className="bg-[url(/img/btn.png)] cursor-pointer open-sans text-[20px] text-white w-[274px] h-[82px]" onClick={oncis}> 
Заказать газ</button>

  
</div>

    </section>
   
  );
}

