import { useEffect, useState } from 'react'

export default function ProgressBar() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const update = () => {
      const root = document.documentElement
      const scrolled = root.scrollTop / (root.scrollHeight - root.clientHeight || 1)
      setWidth(scrolled * 100)
    }

    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  return <div className="progress-bar" style={{ width: `${width}%` }} />
}
