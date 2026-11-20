import { skillAreas } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="shell section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">The toolkit</p>
          <h2>What I work with.</h2>
        </div>
      </div>
      <div className="toolkit-grid">
        {skillAreas.map((area) => (
          <article key={area.title} className="toolkit-item">
            <h3>{area.title}</h3>
            <p>{area.tools}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
