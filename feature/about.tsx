export function About() {
  return (
    <section id="about" className="about-section">
      <div className="shell section about-grid">
        <div>
          <p className="eyebrow">A little about me</p>
          <h2>
            Code, people,
            <br />a bit of ping-pong.
          </h2>
        </div>
        <div className="about-copy">
          <p className="lead">
            At Diamond Trust Bank, I work on the applications behind consent,
            lending, and payments.
          </p>
          <p>
            Before that: network security and intellectual property research.
            Outside work: mentoring graduates through Daring Distant Dreams, and
            a soft spot for table tennis.
          </p>
          <a className="text-link" href="#qualifications">
            More on my background
          </a>
        </div>
      </div>
    </section>
  );
}
