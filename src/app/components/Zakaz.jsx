'use client'

import { useState } from "react";
import Image from "next/image";

export default function App() {
  const products = [{name:'rfrfr',img:'/img/timer 1.png'},{name:'rfr' ,img:'/img/timer 1.png'},{name:'rr' ,img:'/img/sun 1.svg'},{name:'rf',img:'/img/timer 1.png'}] 
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [orders, setOrders] = useState([]);

  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  const handleSubmit = () => {
    if (selectedIndex !== null) {
      const newOrder = {
        product: products[selectedIndex],
        index: selectedIndex,
        timestamp: new Date().toLocaleTimeString(),
      };
      setOrders([...orders, newOrder]);
      setSelectedIndex(null); // сброс выбора после заявки
    } else {
      alert("❌ Вы не выбрали товар!");
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <h1 className="text-xl font-bold">Заказ товаров</h1>

<div className="flex gap-2">
  {products.map((product, index) => (
    <div key={index} className="flex flex-col items-center gap-2">
      <button
        onClick={() => handleSelect(index)}
        className={`px-4 py-2 rounded-lg border shadow 
          ${selectedIndex === index ? "bg-green-500 text-white" : "bg-gray-100"}
        `}
      >
        {product.name}
      </button>

      {/* Показываем картинку только если это выбранный товар */}
      {selectedIndex === index && (
        <Image
          src={product.img}
          width={545}
          height={246}
          alt={product.name}
          className="w-[545px] 2xl:h-[246px] xl:h-[246px] lg:h-[246px] md:h-[246px] sm:h-[200px] h-[200px]"
        />
      )}
    </div>
  ))}
</div>



      <button
        onClick={handleSubmit}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
      >
        Подать заявку
      </button>

      {orders.length > 0 && (
        <div className="p-4 mt-4 border rounded-lg shadow bg-gray-50 w-full max-w-md">
          <h2 className="font-semibold mb-2">Список заявок</h2>
          <ul className="list-disc list-inside">
            {orders.map((order, idx) => (
              <li key={idx}>
                {order.timestamp}: <b>{order.product.name}</b> (index {order.index})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
