'use client'
import Heder from "./components/Heder";
import Form from './components/Form'
import Yslyg from "./components/Yslyg";
import Priumyt from './components/Priumyt'
import Zakaz from './components/Zakaz'
import Otzov from './components/Otzov'
import Vopros from './components/Vopros'
import Zvonok from './components/Zvonok'
import Cartaa from "./components/Carta";





export default function Home() {
  return (
    <div className="bg-[rgba(45,45,45,1)]  w-[100%] h-[100%]">
      <Heder/>
      <Form/>
      <Yslyg/>
      <Priumyt/>
      <Zakaz/>
      <Otzov/>
      <Vopros/>
      <Zvonok/>
      <Cartaa/>
      
     

    </div>
  );
}
