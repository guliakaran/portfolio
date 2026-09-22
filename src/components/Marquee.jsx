import { Fragment } from 'react'

const items = ['React Native', 'iOS', 'Android', 'React JS', 'Node.js', 'Express', 'TypeScript']

function Track() {
  return (
    <span>
      {items.map((item, index) => (
        <Fragment key={item}>
          {index > 0 && <span />}
          {item}
        </Fragment>
      ))}
    </span>
  )
}

export default function Marquee() {
  return (
    <div className="marquee-band">
      <div className="marquee-track">
        <Track />
        <Track />
      </div>
    </div>
  )
}
