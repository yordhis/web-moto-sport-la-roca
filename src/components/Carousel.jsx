import React, {useEffect, useState, useRef} from 'react'
import './carousel.css'

export default function Carousel({items = [], interval = 3500}){
  const [index, setIndex] = useState(0)
  const timer = useRef(null)

  useEffect(()=>{
    if(items.length <= 1) return
    timer.current = setInterval(()=>{
      setIndex((i) => (i+1) % items.length)
    }, interval)
    return ()=> clearInterval(timer.current)
  }, [items, interval])

  if(items.length === 0) return null

  return (
    <div className="carousel" role="region" aria-roledescription="carousel">
      <div className="carousel-track" style={{transform:`translateX(${ -index * 100 }%)`}}>
        {items.map((src, i)=> (
          <div className="carousel-slide" key={i} aria-hidden={i!==index}>
            <img src={src} alt={`Slide ${i+1}`} />
          </div>
        ))}
      </div>
      <div className="carousel-dots" aria-hidden>
        {items.map((_, i)=> (
          <button key={i} className={`dot ${i===index? 'active':''}`} onClick={()=> setIndex(i)} aria-label={`Go to slide ${i+1}`}></button>
        ))}
      </div>
    </div>
  )
}
