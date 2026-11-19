import Image from "next/image";
import { Button } from "@mui/material";
import { cv } from "@/data/portfolio";

export function Home() {
  return (
    <section id="home" className="shell hero">
      <div className="hero-copy">
        <p className="eyebrow">Software engineer · Nairobi, Kenya</p>
        <h1>
          Thoughtful software.
          <br />
          Built for the <em>real world.</em>
        </h1>
        <p className="hero-description">
          I’m Mercy, a software engineer who brings clarity to complex problems.
          I build digital banking, payment, and enterprise web applications with
          Javascript and TypeScript.
        </p>
        <div className="hero-actions">
          <Button variant="contained" href="#contact">
            Let’s work together
          </Button>
          <a className="text-link" href="#projects">
            Explore my work
          </a>
          <a className="text-link" href={cv.url} download={cv.filename}>
            Download CV (PDF)
          </a>
        </div>
      </div>
      <aside className="hero-aside">
        <Image
          className="profile-portrait"
          src="/images/mercy-maloba.jpg"
          alt="Mercy Maloba"
          width={110}
          height={110}
          sizes="(max-width: 650px) 80px, 110px"
        />
        <p className="eyebrow">A little about me</p>
        <p>
          Engineer by craft.
          <br />
          Problem solver at heart.
        </p>
        <div className="aside-note">
          From the first conversation to the final detail, I care about what
          we’re building and the people using it.
        </div>
      </aside>
      <div className="hero-footnote">
        <span>Full-stack development & engineering leadership</span>
        <a href="#skills">React · TypeScript · Node.js · AWS</a>
      </div>
    </section>
  );
}
