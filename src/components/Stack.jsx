import Reveal from './Reveal'

export default function Stack() {
  return (
    <section className="section" id="stack">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow-num">01 — Capabilities</div>
          <h2>One person, the full stack</h2>
          <p>From the interface in someone's hand to the API it talks to.</p>
        </Reveal>
        <div className="bento">
          <Reveal className="cell big glow">
            <div>
              <h3>Mobile apps, one codebase</h3>
              <p>
                React Native apps for iOS and Android that feel built for each platform, not
                ported to it.
              </p>
            </div>
            <div className="tags">
              <span>React Native</span>
              <span>iOS</span>
              <span>Android</span>
            </div>
          </Reveal>
          <Reveal className="cell tall">
            <h3>Web front ends</h3>
            <p>Fast, accessible interfaces in React and TypeScript.</p>
            <div className="tags">
              <span>React JS</span>
              <span>TypeScript</span>
            </div>
          </Reveal>
          <Reveal className="cell">
            <div className="stat">3+</div>
            <p>Platforms shipped to from a single codebase</p>
          </Reveal>
          <Reveal className="cell">
            <div className="stat">5+</div>
            <p>Years building mobile and web products</p>
          </Reveal>
          <Reveal className="cell tall">
            <h3>APIs & backend</h3>
            <p>Node and Express services that stay stable under real traffic.</p>
            <div className="tags">
              <span>Node.js</span>
              <span>Express</span>
            </div>
          </Reveal>
          <Reveal className="cell">
            <h3>App store ready</h3>
            <p>Submission, review, and release handled end to end.</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
