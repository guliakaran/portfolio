import Reveal from './Reveal'

export default function ProjectPage({ project }) {
  return (
    <main className="project-page" id="top">
      <div className="wrap">
        <Reveal>
          <a className="project-back" href="#work">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M15 6 9 12l6 6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            All work
          </a>
          <div className="eyebrow-num">02 — Selected work</div>
          <div className="project-title-row">
            <h1>{project.title}</h1>
            <span>{project.year}</span>
          </div>
          <p className="project-category">{project.category}</p>
          <p className="project-summary">{project.summary}</p>
        </Reveal>

        <Reveal className="project-block">
          <h2>What it does</h2>
          <div className="project-points">
            {project.points.map((point) => (
              <article key={point.title}>
                <h3>{point.title}</h3>
                <p>{point.body}</p>
              </article>
            ))}
          </div>
        </Reveal>

        {project.notes.map((note) => (
          <Reveal className="project-block" key={note.title}>
            <h2>{note.title}</h2>
            {note.paragraphs?.map((paragraph) => (
              <p className="project-note" key={paragraph}>
                {paragraph}
              </p>
            ))}
            {note.items && (
              <ul className="project-list">
                {note.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </Reveal>
        ))}

        <Reveal className="project-block">
          <h2>How it's built</h2>
          <p className="project-note">{project.build}</p>
          <div className="tags project-tags">
            {project.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </main>
  )
}
