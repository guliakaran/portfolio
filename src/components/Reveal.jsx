import { forwardRef, useEffect, useRef } from 'react'

const Reveal = forwardRef(function Reveal(
  { as: Tag = 'div', className = '', children, ...props },
  forwardedRef,
) {
  const localRef = useRef(null)

  useEffect(() => {
    const el = localRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.15 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={(node) => {
        localRef.current = node
        if (typeof forwardedRef === 'function') forwardedRef(node)
        else if (forwardedRef) forwardedRef.current = node
      }}
      className={`reveal ${className}`.trim()}
      {...props}
    >
      {children}
    </Tag>
  )
})

export default Reveal
