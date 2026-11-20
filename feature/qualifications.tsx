import { credentials, cv, type Credential } from "@/data/portfolio";

const groups: { category: Credential["category"]; title: string }[] = [
  { category: "Education", title: "Academic qualifications" },
  { category: "Certification", title: "Relevant certifications" },
  { category: "Training", title: "Specialized training" },
  { category: "Achievement", title: "Professional achievements & community" },
];

export function Qualifications() {
  return (
    <section id="qualifications" className="shell section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Background</p>
          <h2>The longer version.</h2>
        </div>
        <p>Open a section for the details.</p>
      </div>
      {groups.map(({ category, title }) => (
        <details className="credential-group" key={category}>
          <summary className="credential-group-title">
            <span>{title}</span>
            <span className="credential-count">
              {credentials.filter((item) => item.category === category).length}{" "}
              entries
            </span>
          </summary>
          <div className="credentials-grid">
            {credentials
              .filter((item) => item.category === category)
              .map((item) => (
                <article className="credential-card" key={item.id}>
                  <h4>{item.title}</h4>
                  <p className="credential-meta">
                    {item.organization}
                    {item.period && ` · ${item.period}`}
                  </p>
                  <p>{item.description}</p>
                  {item.verificationUrl && (
                    <a
                      className="text-link"
                      href={item.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View credential (new tab)
                    </a>
                  )}
                </article>
              ))}
          </div>
        </details>
      ))}
      <div className="cv-banner">
        <div>
          <h3>Prefer a PDF?</h3>
          <p>It’s all in my CV.</p>
        </div>
        <a className="download-link" href={cv.url} download={cv.filename}>
          Download CV (PDF)
        </a>
      </div>
    </section>
  );
}
