import Link from "next/link";
import { Chip } from "@mui/material";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="shell section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2>From an idea to something useful.</h2>
        </div>
        <p>
          Sample project concepts to explore. These will be replaced with
          completed work.
        </p>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.slug}>
            <div
              className={`project-art project-art--${project.slug}`}
              aria-hidden="true"
            >
              <div className="concept-window">
                <span>{project.title}</span>
                <div className="concept-lines">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="concept-blocks">
                  <i />
                  <i />
                  <i />
                </div>
              </div>
            </div>
            <div className="project-card-copy">
              <p className="eyebrow">{project.category} · Sample</p>
              <h3>
                <Link href={`/projects/${project.slug}`}>{project.title}</Link>
              </h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.technologies.map((tag) => (
                  <Chip key={tag} label={tag} size="small" variant="outlined" />
                ))}
              </div>
              <div className="project-links">
                <Link className="text-link" href={`/projects/${project.slug}`}>
                  View project
                </Link>
                {project.liveUrl && (
                  <a
                    className="text-link"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live site (new tab)
                  </a>
                )}
                {project.repositoryUrl && (
                  <a
                    className="text-link"
                    href={project.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source code (new tab)
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
