'use client'

import { useEffect } from 'react'

export default function HomeEffects() {
  useEffect(() => {
    const cursor = document.getElementById('sms-cursor')
    const ring = document.getElementById('sms-cursor-ring')

    if (!cursor || !ring || window.matchMedia('(pointer: coarse)').matches) {
      return
    }

    let mx = 0
    let my = 0
    let rx = 0
    let ry = 0
    let frameId = 0

    const onMouseMove = (event: MouseEvent) => {
      mx = event.clientX
      my = event.clientY
      cursor.style.transform = `translate(${mx - 6}px, ${my - 6}px)`
    }

    const animateRing = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      ring.style.transform = `translate(${rx - 20}px, ${ry - 20}px)`
      frameId = window.requestAnimationFrame(animateRing)
    }

    document.addEventListener('mousemove', onMouseMove)
    animateRing()

    const interactiveElements = Array.from(
      document.querySelectorAll('.sms-home a, .sms-home button')
    )

    const onEnter = () => {
      cursor.classList.add('sms-cursor-active')
      ring.classList.add('sms-ring-hidden')
    }
    const onLeave = () => {
      cursor.classList.remove('sms-cursor-active')
      ring.classList.remove('sms-ring-hidden')
    }

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    const revealTargets = document.querySelectorAll('.sms-reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('sms-reveal-visible')
          }
        })
      },
      { threshold: 0.12 }
    )

    revealTargets.forEach((target, index) => {
      ;(target as HTMLElement).style.transitionDelay = `${index * 60}ms`
      observer.observe(target)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      document.removeEventListener('mousemove', onMouseMove)
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div id="sms-cursor" aria-hidden="true" />
      <div id="sms-cursor-ring" aria-hidden="true" />
    </>
  )
}
