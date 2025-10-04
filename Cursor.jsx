import React, {useEffect, useRef} from 'react'

export default function Cursor(){
  const ref = useRef(null)

  useEffect(()=>{
    const el = ref.current
    if(!el) return

    const onMove = (e) => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX
      const clientY = e.touches ? e.touches[0].clientY : e.clientY
      el.style.left = clientX + 'px'
      el.style.top = clientY + 'px'
      const isInteractive = e.target.closest && (e.target.closest('a,button,input,textarea') )
      if(isInteractive){
        el.style.width = '180px'; el.style.height = '180px'; el.style.opacity = '1'
      } else {
        el.style.width = '120px'; el.style.height = '120px'; el.style.opacity = '0.95'
      }
    }

    const onClick = (e) => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX
      const clientY = e.touches ? e.touches[0].clientY : e.clientY
      // create ripple
      const ripple = document.createElement('div')
      ripple.className = 'ripple'
      ripple.style.left = clientX + 'px'
      ripple.style.top = clientY + 'px'
      const inner = document.createElement('div')
      inner.className = 'ripple-inner'
      ripple.appendChild(inner)
      document.body.appendChild(ripple)
      setTimeout(()=>{ ripple.remove() }, 900)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('touchmove', onMove, {passive:true})
    window.addEventListener('click', onClick)
    window.addEventListener('touchstart', onClick, {passive:true})

    return ()=>{
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('touchmove', onMove)
      window.removeEventListener('click', onClick)
      window.removeEventListener('touchstart', onClick)
    }
  },[])

  return <div ref={ref} className="cursor-glow" aria-hidden="true"></div>
}
