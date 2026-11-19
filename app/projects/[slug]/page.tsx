import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/portfolio";
import type { Metadata } from "next";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return {
    title: project ? `${project.title} | Mercy Maloba` : "Project not found",
    description: project?.description,
  };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return (
    <main className="shell section project-page">
      <Link className="text-link" href="/#projects">
        Back to all projects
      </Link>
      <p className="eyebrow">{project.category} · Sample project</p>
      <h1>{project.title}</h1>
      <p className="lead">{project.description}</p>
      <p className="sample-notice">
        Illustrative project brief — sample content, not a completed client
        project or live application.
      </p>
      <div className="tags">
        {project.technologies.map((technology) => (
          <span className="technology-tag" key={technology}>
            {technology}
          </span>
        ))}
      </div>
      <section>
        <h2>The challenge</h2>
        <p>{project.challenge}</p>
      </section>
      <section>
        <h2>The proposed approach</h2>
        <p>{project.approach}</p>
      </section>
      <section>
        <h2>Planned features</h2>
        <ul>
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </section>
      <div className="project-links">
        {project.liveUrl && (
          <a
            className="download-link"
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit live site (new tab)
          </a>
        )}
        {project.repositoryUrl && (
          <a
            className="text-link"
            href={project.repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View source (new tab)
          </a>
        )}
        <Link className="text-link" href="/#contact">
          Discuss a similar project
        </Link>
      </div>
    </main>
  );
}
