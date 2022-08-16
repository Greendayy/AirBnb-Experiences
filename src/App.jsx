import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Cards'
import data from './data'

export default function App() {
  const cards=data.map(item=>{
    return(
      <Card
        key={item.id}
        {...item}
        />
    ) 
  })

  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <section className='card-list'>
      {cards}
      </section>
      
    </div>
  )
}


