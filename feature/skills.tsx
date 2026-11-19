import { skillAreas } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="shell section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">How I can help</p>
          <h2>The craft behind the work.</h2>
        </div>
        <p>Across the stack, with the bigger picture in mind.</p>
      </div>
      <div className="expertise-list">
        {skillAreas.map((area) => (
          <article key={area.title} className="expertise-row">
            <h3>{area.title}</h3>
            <p>{area.description}</p>
            <p className="tools">{area.tools}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
