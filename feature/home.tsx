import Image from "next/image";
import { Button } from "@mui/material";
import { cv } from "@/data/portfolio";

export function Home() {
  return (
    <section id="home" className="shell intro">
      <div className="intro-copy">
        <p className="eyebrow">Software engineer · Nairobi</p>
        <h1>
          Hi, I’m Mercy<span className="intro-period">.</span>
        </h1>
        <p className="intro-description">
          I build web applications for banking, payments, and everyday work.
        </p>
        <div className="intro-actions">
          <Button variant="contained" href="#projects">
            Take a look around
          </Button>
          <a className="text-link" href={cv.url} download={cv.filename}>
            Download CV (PDF)
          </a>
        </div>
        <p className="intro-note">
          Usually writing TypeScript. Sometimes playing table tennis.
        </p>
      </div>
      <aside className="intro-photo">
        <Image
          className="profile-portrait"
          src="/images/mercy-maloba.jpg"
          alt="Mercy Maloba"
          width={110}
          height={110}
          sizes="(max-width: 650px) 80px, 110px"
          priority
        />
        <p className="eyebrow">A little about me</p>
        <p className="intro-photo-heading">
          Engineer by craft.
          <br />
          Problem solver at heart.
        </p>
        <div className="aside-note">
          From the first conversation to the final detail, I care about what
          we’re building and the people using it.
        </div>
      </aside>
    </section>
  );
}
