"use client";
import Image from 'next/image'
import Game from './components/poxedex'

export default function Home() {
  return (
    <>
    <Image
      src="/images/logo.png"
      width={150}
      height={30}
      className='logo'
      alt="Picture of the author"
    />
    
    <main className='bg-gradient-to-t from-colBg-1 to-colBg-2'>
    
      <Game/>
    </main>
    </>
  )
}
