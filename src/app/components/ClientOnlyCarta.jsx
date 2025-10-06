'use client';
import dynamic from 'next/dynamic';


const Carta = dynamic(() => import('./Carta'), { ssr: false });

export default function ClientOnlyCarta() {
  return <Carta />;
}
