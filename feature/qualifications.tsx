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
          <p className="eyebrow">Learning & recognition</p>
          <h2>The foundation behind the work.</h2>
        </div>
        <p>
          Education, professional development, and impact throughout my career.
        </p>
      </div>
      {groups.map(({ category, title }) => (
        <section className="credential-group" key={category} aria-label={title}>
          <h3 className="credential-group-title">{title}</h3>
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
        </section>
      ))}
      <div className="cv-banner">
        <div>
          <h3>My experience, in one place.</h3>
          <p>
            Download my CV for professional experience, qualifications, and
            technical skills.
          </p>
        </div>
        <a className="download-link" href={cv.url} download={cv.filename}>
          Download CV (PDF)
        </a>
      </div>
    </section>
  );
}
