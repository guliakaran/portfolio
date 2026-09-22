import { Fragment, useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const words = [
  { text: 'Products' },
  { text: 'that' },
  { text: 'feel' },
  { text: 'native', grad: true },
  { text: '—' },
  { text: 'on' },
  { text: 'every' },
  { text: 'screen.' },
]

export default function Hero() {
  const headingRef = useRef(null)
  const wordRefs = useRef([])
  const reduceMotion = usePrefersReducedMotion()

  useEffect(() => {
    const heading = headingRef.current
    if (!heading || reduceMotion) return

    let ticking = false

    const updateWeights = (mx, my) => {
      wordRefs.current.forEach((word) => {
        if (!word) return
        const rect = word.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        const dist = Math.hypot(mx - cx, my - cy)
        const influence = Math.max(0, 1 - dist / 260)
        const weight = Math.round(400 + influence * 400)
        word.style.fontVariationSettings = `'wght' ${weight}`
      })
    }

    const onMove = (event) => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        updateWeights(event.clientX, event.clientY)
        ticking = false
      })
    }

    const onLeave = () => {
      wordRefs.current.forEach((word) => {
        if (word) word.style.fontVariationSettings = "'wght' 500"
      })
    }

    document.addEventListener('pointermove', onMove, { passive: true })
    heading.addEventListener('pointerleave', onLeave)

    return () => {
      document.removeEventListener('pointermove', onMove)
      heading.removeEventListener('pointerleave', onLeave)
    }
  }, [reduceMotion])

  return (
    <section className="hero">
      <div className="orb o1" />
      <div className="orb o2" />
      <div className="wrap hero-inner">
        <div className="status">
          <span className="dot" />
          Open for freelance projects
        </div>
        <h1 ref={headingRef} id="hero-h1">
          {words.map((word, index) => (
            <Fragment key={`${word.text}-${index}`}>
              <span
                ref={(el) => {
                  wordRefs.current[index] = el
                }}
                className={word.grad ? 'iw grad' : 'iw'}
              >
                {word.text}
              </span>
              {index < words.length - 1 ? ' ' : ''}
            </Fragment>
          ))}
        </h1>
        <p className="lede">
          Freelance developer building mobile and web products end to end: React Native
          for iOS and Android, React for the web, Node and Express underneath.
        </p>
        <div className="ctas">
          <a className="btn primary" href="#work">
            See the work
          </a>
          <a className="btn ghost" href="mailto:karanguliadev@gmail.com">
            Start a project
          </a>
        </div>
      </div>
    </section>
  )
}
